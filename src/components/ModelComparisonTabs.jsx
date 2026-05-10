import { useMemo, useState } from 'react'

function ModelComparisonTabs({ comparison }) {
  const [activeModelId, setActiveModelId] = useState(comparison.models[0].id)
  const [activeView, setActiveView] = useState('featured')

  const activeModel = useMemo(
    () =>
      comparison.models.find((model) => model.id === activeModelId) ??
      comparison.models[0],
    [activeModelId, comparison.models],
  )

  const visibleResults = useMemo(() => {
    const resultSets = {
      featured: [
        'confusion_matrix.png',
        'F1_curve.png',
        'PR_curve.png',
        'results.png',
      ],
      curves: ['F1_curve.png', 'P_curve.png', 'PR_curve.png', 'R_curve.png'],
      dataset: ['labels.jpg', 'labels_correlogram.jpg'],
      all: comparison.results,
    }

    const selected = resultSets[activeView] ?? resultSets.featured
    return selected.filter((resultName) => comparison.results.includes(resultName))
  }, [activeView, comparison.results])

  return (
    <div className="model-comparison">
      <div className="model-tabs" role="tablist" aria-label="YOLO model tabs">
        {comparison.models.map((model) => (
          <button
            className="model-tab"
            key={model.id}
            type="button"
            role="tab"
            aria-selected={model.id === activeModel.id}
            style={{ '--model-tone': model.tone }}
            onClick={() => setActiveModelId(model.id)}
          >
            {model.label}
          </button>
        ))}
      </div>

      <div className="model-view-switcher" aria-label="Model comparison views">
        {[
          { id: 'featured', label: 'Ringkas' },
          { id: 'curves', label: 'Curve' },
          { id: 'dataset', label: 'Dataset' },
          { id: 'all', label: 'Semua' },
        ].map((view) => (
          <button
            className="model-view-chip"
            key={view.id}
            type="button"
            data-active={view.id === activeView}
            onClick={() => setActiveView(view.id)}
          >
            {view.label}
          </button>
        ))}
      </div>

      <article className="model-panel" style={{ '--model-tone': activeModel.tone }}>
        <div className="model-panel-heading">
          <div>
            <span>Active Model</span>
            <h3>{activeModel.label}</h3>
          </div>
          <a className="neo-button" href={activeModel.csv} download>
            Download results.csv
          </a>
        </div>
        <p>{activeModel.summary}</p>
        <p className="model-panel-note">
          Menampilkan {visibleResults.length} dari {comparison.results.length} visual.
        </p>

        <div className="result-grid">
          {visibleResults.map((resultName) => (
            <ResultPreview
              basePath={activeModel.assetBase}
              key={`${activeModel.id}-${resultName}`}
              name={resultName}
            />
          ))}
        </div>
      </article>
    </div>
  )
}

function ResultPreview({ basePath, name }) {
  const [hasError, setHasError] = useState(false)
  const resultTitle = name.replace(/\.(png|jpg|jpeg)$/i, '').replaceAll('_', ' ')

  return (
    <figure className="result-card">
      <figcaption>{resultTitle}</figcaption>
      {hasError ? (
        <div className="result-placeholder">
          <span>{name}</span>
        </div>
      ) : (
        <img
          src={`${basePath}/${name}`}
          alt={`${resultTitle} result`}
          onError={() => setHasError(true)}
        />
      )}
    </figure>
  )
}

export default ModelComparisonTabs
