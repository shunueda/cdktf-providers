// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_ip_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBetteruptimeIpListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The optional list of clusters used to filter the IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_ip_list#filter_clusters DataBetteruptimeIpList#filter_clusters}
  */
  readonly filterClusters?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_ip_list betteruptime_ip_list}
*/
export class DataBetteruptimeIpList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "betteruptime_ip_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBetteruptimeIpList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBetteruptimeIpList to import
  * @param importFromId The id of the existing DataBetteruptimeIpList that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_ip_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBetteruptimeIpList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "betteruptime_ip_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs/data-sources/betteruptime_ip_list betteruptime_ip_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBetteruptimeIpListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBetteruptimeIpListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'betteruptime_ip_list',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4',
        providerVersionConstraint: '0.20.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filterClusters = config.filterClusters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_clusters - computed: true, optional: false, required: false
  public get allClusters() {
    return this.getListAttribute('all_clusters');
  }

  // filter_clusters - computed: false, optional: true, required: false
  private _filterClusters?: string[]; 
  public get filterClusters() {
    return this.getListAttribute('filter_clusters');
  }
  public set filterClusters(value: string[]) {
    this._filterClusters = value;
  }
  public resetFilterClusters() {
    this._filterClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterClustersInput() {
    return this._filterClusters;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getListAttribute('ips');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter_clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._filterClusters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter_clusters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._filterClusters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
