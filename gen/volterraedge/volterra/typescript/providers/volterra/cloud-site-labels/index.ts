// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_site_labels
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudSiteLabelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_site_labels#id CloudSiteLabels#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_site_labels#ignore_on_delete CloudSiteLabels#ignore_on_delete}
  */
  readonly ignoreOnDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_site_labels#labels CloudSiteLabels#labels}
  */
  readonly labels: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_site_labels#name CloudSiteLabels#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_site_labels#site_type CloudSiteLabels#site_type}
  */
  readonly siteType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_site_labels volterra_cloud_site_labels}
*/
export class CloudSiteLabels extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_cloud_site_labels";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudSiteLabels resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudSiteLabels to import
  * @param importFromId The id of the existing CloudSiteLabels that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_site_labels#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudSiteLabels to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_cloud_site_labels", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cloud_site_labels volterra_cloud_site_labels} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudSiteLabelsConfig
  */
  public constructor(scope: Construct, id: string, config: CloudSiteLabelsConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_cloud_site_labels',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ignoreOnDelete = config.ignoreOnDelete;
    this._labels = config.labels;
    this._name = config.name;
    this._siteType = config.siteType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ignore_on_delete - computed: false, optional: true, required: false
  private _ignoreOnDelete?: boolean | cdktf.IResolvable; 
  public get ignoreOnDelete() {
    return this.getBooleanAttribute('ignore_on_delete');
  }
  public set ignoreOnDelete(value: boolean | cdktf.IResolvable) {
    this._ignoreOnDelete = value;
  }
  public resetIgnoreOnDelete() {
    this._ignoreOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreOnDeleteInput() {
    return this._ignoreOnDelete;
  }

  // labels - computed: false, optional: false, required: true
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // site_type - computed: false, optional: false, required: true
  private _siteType?: string; 
  public get siteType() {
    return this.getStringAttribute('site_type');
  }
  public set siteType(value: string) {
    this._siteType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTypeInput() {
    return this._siteType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ignore_on_delete: cdktf.booleanToTerraform(this._ignoreOnDelete),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      site_type: cdktf.stringToTerraform(this._siteType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_on_delete: {
        value: cdktf.booleanToHclTerraform(this._ignoreOnDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_type: {
        value: cdktf.stringToHclTerraform(this._siteType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
