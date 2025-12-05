// https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGitLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Pretend as if all the refs in `refs/`, along with `HEAD`, are listed. It is equivalent to running `git log --all`. If set to `true`, the `from` attribute will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log#all DataGitLog#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * The path to the local Git repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log#directory DataGitLog#directory}
  */
  readonly directory: string;
  /**
  * Show only commits that are enough to explain how the files that match the specified paths came to be. Note that these are not Git `pathspec` but rather Go [path matchers](https://pkg.go.dev/path#Match) thus you have to add `/*` for directories yourself.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log#filter_paths DataGitLog#filter_paths}
  */
  readonly filterPaths?: string[];
  /**
  * When set the log will only contain commits reachable from it. If this option is not set, `HEAD` will be used as the default. Can be any [revision](https://www.git-scm.com/docs/gitrevisions) that `go-git` [supports](https://pkg.go.dev/github.com/go-git/go-git/v5#Repository.ResolveRevision).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log#from DataGitLog#from}
  */
  readonly from?: string;
  /**
  * Limit the number of commits to output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log#max_count DataGitLog#max_count}
  */
  readonly maxCount?: number;
  /**
  * The traversal algorithm to use while listing commits. Defaults to `time` which is similar to `git log`. Other values are `depth` and `breadth` for depth- or breadth-first traversal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log#order DataGitLog#order}
  */
  readonly order?: string;
  /**
  * Show commits more recent than a specific date. Date must be in RFC 3339 format, e.g. by using the built-in [timestamp](https://www.terraform.io/language/functions/timestamp)/[timeadd](https://www.terraform.io/language/functions/timeadd) functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log#since DataGitLog#since}
  */
  readonly since?: string;
  /**
  * Skip first number of commits in output.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log#skip DataGitLog#skip}
  */
  readonly skip?: number;
  /**
  * Show commits older than a specific date. Date must be in RFC 3339 format, e.g. by using the built-in [timestamp](https://www.terraform.io/language/functions/timestamp)/[timeadd](https://www.terraform.io/language/functions/timeadd) functions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log#until DataGitLog#until}
  */
  readonly until?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log git_log}
*/
export class DataGitLog extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "git_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGitLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGitLog to import
  * @param importFromId The id of the existing DataGitLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGitLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "git_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/git/2025.12.5/docs/data-sources/log git_log} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGitLogConfig
  */
  public constructor(scope: Construct, id: string, config: DataGitLogConfig) {
    super(scope, id, {
      terraformResourceType: 'git_log',
      terraformGeneratorMetadata: {
        providerName: 'git',
        providerVersion: '2025.12.5',
        providerVersionConstraint: '2025.12.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._all = config.all;
    this._directory = config.directory;
    this._filterPaths = config.filterPaths;
    this._from = config.from;
    this._maxCount = config.maxCount;
    this._order = config.order;
    this._since = config.since;
    this._skip = config.skip;
    this._until = config.until;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all - computed: true, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // commits - computed: true, optional: false, required: false
  public get commits() {
    return this.getListAttribute('commits');
  }

  // directory - computed: false, optional: false, required: true
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // filter_paths - computed: true, optional: true, required: false
  private _filterPaths?: string[]; 
  public get filterPaths() {
    return this.getListAttribute('filter_paths');
  }
  public set filterPaths(value: string[]) {
    this._filterPaths = value;
  }
  public resetFilterPaths() {
    this._filterPaths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterPathsInput() {
    return this._filterPaths;
  }

  // from - computed: true, optional: true, required: false
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  public resetFrom() {
    this._from = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_count - computed: true, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // order - computed: true, optional: true, required: false
  private _order?: string; 
  public get order() {
    return this.getStringAttribute('order');
  }
  public set order(value: string) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // since - computed: true, optional: true, required: false
  private _since?: string; 
  public get since() {
    return this.getStringAttribute('since');
  }
  public set since(value: string) {
    this._since = value;
  }
  public resetSince() {
    this._since = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinceInput() {
    return this._since;
  }

  // skip - computed: true, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // until - computed: true, optional: true, required: false
  private _until?: string; 
  public get until() {
    return this.getStringAttribute('until');
  }
  public set until(value: string) {
    this._until = value;
  }
  public resetUntil() {
    this._until = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get untilInput() {
    return this._until;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      all: cdktf.booleanToTerraform(this._all),
      directory: cdktf.stringToTerraform(this._directory),
      filter_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterPaths),
      from: cdktf.stringToTerraform(this._from),
      max_count: cdktf.numberToTerraform(this._maxCount),
      order: cdktf.stringToTerraform(this._order),
      since: cdktf.stringToTerraform(this._since),
      skip: cdktf.numberToTerraform(this._skip),
      until: cdktf.stringToTerraform(this._until),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      all: {
        value: cdktf.booleanToHclTerraform(this._all),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      directory: {
        value: cdktf.stringToHclTerraform(this._directory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_paths: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterPaths),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      from: {
        value: cdktf.stringToHclTerraform(this._from),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_count: {
        value: cdktf.numberToHclTerraform(this._maxCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      order: {
        value: cdktf.stringToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      since: {
        value: cdktf.stringToHclTerraform(this._since),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      until: {
        value: cdktf.stringToHclTerraform(this._until),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
