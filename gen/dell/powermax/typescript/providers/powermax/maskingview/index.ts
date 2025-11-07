// https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/maskingview
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MaskingviewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The host group id of the masking view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/maskingview#host_group_id Maskingview#host_group_id}
  */
  readonly hostGroupId: string;
  /**
  * The host id of the masking view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/maskingview#host_id Maskingview#host_id}
  */
  readonly hostId: string;
  /**
  * Unique identifier of the masking view. (Update Supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/maskingview#name Maskingview#name}
  */
  readonly name: string;
  /**
  * The port group id of the masking view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/maskingview#port_group_id Maskingview#port_group_id}
  */
  readonly portGroupId: string;
  /**
  * The storage group id of the masking view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/maskingview#storage_group_id Maskingview#storage_group_id}
  */
  readonly storageGroupId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/maskingview powermax_maskingview}
*/
export class Maskingview extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powermax_maskingview";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Maskingview resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Maskingview to import
  * @param importFromId The id of the existing Maskingview that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/maskingview#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Maskingview to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powermax_maskingview", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powermax/1.0.3/docs/resources/maskingview powermax_maskingview} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MaskingviewConfig
  */
  public constructor(scope: Construct, id: string, config: MaskingviewConfig) {
    super(scope, id, {
      terraformResourceType: 'powermax_maskingview',
      terraformGeneratorMetadata: {
        providerName: 'powermax',
        providerVersion: '1.0.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._hostGroupId = config.hostGroupId;
    this._hostId = config.hostId;
    this._name = config.name;
    this._portGroupId = config.portGroupId;
    this._storageGroupId = config.storageGroupId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // host_group_id - computed: false, optional: false, required: true
  private _hostGroupId?: string; 
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }
  public set hostGroupId(value: string) {
    this._hostGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdInput() {
    return this._hostGroupId;
  }

  // host_id - computed: false, optional: false, required: true
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // port_group_id - computed: false, optional: false, required: true
  private _portGroupId?: string; 
  public get portGroupId() {
    return this.getStringAttribute('port_group_id');
  }
  public set portGroupId(value: string) {
    this._portGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portGroupIdInput() {
    return this._portGroupId;
  }

  // storage_group_id - computed: false, optional: false, required: true
  private _storageGroupId?: string; 
  public get storageGroupId() {
    return this.getStringAttribute('storage_group_id');
  }
  public set storageGroupId(value: string) {
    this._storageGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageGroupIdInput() {
    return this._storageGroupId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      host_group_id: cdktf.stringToTerraform(this._hostGroupId),
      host_id: cdktf.stringToTerraform(this._hostId),
      name: cdktf.stringToTerraform(this._name),
      port_group_id: cdktf.stringToTerraform(this._portGroupId),
      storage_group_id: cdktf.stringToTerraform(this._storageGroupId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      host_group_id: {
        value: cdktf.stringToHclTerraform(this._hostGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_group_id: {
        value: cdktf.stringToHclTerraform(this._portGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_group_id: {
        value: cdktf.stringToHclTerraform(this._storageGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
