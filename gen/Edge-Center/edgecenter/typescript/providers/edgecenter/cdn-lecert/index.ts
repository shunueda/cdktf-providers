// https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_lecert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CdnLecertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Флаг отмены активного процесса выдачи SSL-сертификата Let's Encrypt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_lecert#active CdnLecert#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_lecert#id CdnLecert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID ресурса CDN, к которому привязывается Let's Encrypt сертификат
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_lecert#resource_id CdnLecert#resource_id}
  */
  readonly resourceId: number;
  /**
  * Флаг обновления Let's Encrypt сертификата
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_lecert#update CdnLecert#update}
  */
  readonly update?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_lecert edgecenter_cdn_lecert}
*/
export class CdnLecert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "edgecenter_cdn_lecert";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CdnLecert resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CdnLecert to import
  * @param importFromId The id of the existing CdnLecert that should be imported. Refer to the {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_lecert#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CdnLecert to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "edgecenter_cdn_lecert", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/edge-center/edgecenter/0.10.7/docs/resources/cdn_lecert edgecenter_cdn_lecert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CdnLecertConfig
  */
  public constructor(scope: Construct, id: string, config: CdnLecertConfig) {
    super(scope, id, {
      terraformResourceType: 'edgecenter_cdn_lecert',
      terraformGeneratorMetadata: {
        providerName: 'edgecenter',
        providerVersion: '0.10.7',
        providerVersionConstraint: '0.10.7'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._update = config.update;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

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

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: number; 
  public get resourceId() {
    return this.getNumberAttribute('resource_id');
  }
  public set resourceId(value: number) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // update - computed: false, optional: true, required: false
  private _update?: boolean | cdktf.IResolvable; 
  public get update() {
    return this.getBooleanAttribute('update');
  }
  public set update(value: boolean | cdktf.IResolvable) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.numberToTerraform(this._resourceId),
      update: cdktf.booleanToTerraform(this._update),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.numberToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      update: {
        value: cdktf.booleanToHclTerraform(this._update),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
