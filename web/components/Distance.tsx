/** Two journeys to the same shelf, drawn to scale: about 1,600 km by road against 70 km. */
export function Distance() {
  const routes = [
    { cls: 'far', place: 'Johannesburg, by road', km: 'about 1,600 km', from: '0%', t: '3.2s' },
    { cls: 'near', place: 'Oribi, Okahandja', km: '70 km', from: '95.6%', t: '0.45s' },
  ];
  return (
    <div className="distance reveal">
      <span className="k">To a Windhoek shelf</span>
      <div className="dist-ratio">
        <div className="num">
          <span data-count="23">23</span>
          <small>×</small>
        </div>
        <p>closer to the shelf than produce trucked in from Johannesburg</p>
      </div>
      {routes.map((r) => (
        <div className={`dist-route ${r.cls}`} key={r.cls}>
          <div className="dist-head">
            <span>{r.place}</span>
            <b>{r.km}</b>
          </div>
          <div className="dist-line" style={{ '--from': r.from, '--t': r.t }}>
            <i className="track" />
            <i className="start" />
            <i className="truck" />
            <i className="end" />
          </div>
        </div>
      ))}
      <div className="dist-legend">Windhoek shelf</div>
      <p className="note">Lines drawn to scale. Distances as given by Oribi in trade press, November 2025.</p>
    </div>
  );
}
