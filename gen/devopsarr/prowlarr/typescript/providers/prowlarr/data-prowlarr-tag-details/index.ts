// https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/data-sources/tag_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataProwlarrTagDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Tag label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/data-sources/tag_details#label DataProwlarrTagDetails#label}
  */
  readonly label: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/data-sources/tag_details prowlarr_tag_details}
*/
export class DataProwlarrTagDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prowlarr_tag_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataProwlarrTagDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataProwlarrTagDetails to import
  * @param importFromId The id of the existing DataProwlarrTagDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/data-sources/tag_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataProwlarrTagDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prowlarr_tag_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/devopsarr/prowlarr/3.1.0/docs/data-sources/tag_details prowlarr_tag_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataProwlarrTagDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataProwlarrTagDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'prowlarr_tag_details',
      terraformGeneratorMetadata: {
        providerName: 'prowlarr',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._label = config.label;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_ids - computed: true, optional: false, required: false
  public get applicationIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('application_ids')));
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // indexer_ids - computed: true, optional: false, required: false
  public get indexerIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('indexer_ids')));
  }

  // indexer_proxy_ids - computed: true, optional: false, required: false
  public get indexerProxyIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('indexer_proxy_ids')));
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // notification_ids - computed: true, optional: false, required: false
  public get notificationIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('notification_ids')));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      label: cdktf.stringToTerraform(this._label),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      label: {
        value: cdktf.stringToHclTerraform(this._label),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
