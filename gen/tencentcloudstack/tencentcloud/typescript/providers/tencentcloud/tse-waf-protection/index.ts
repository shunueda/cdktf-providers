// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tse_waf_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TseWafProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Gateway ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tse_waf_protection#gateway_id TseWafProtection#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tse_waf_protection#id TseWafProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Means the list of services or routes when the resource type `Type` is `Service` or `Route`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tse_waf_protection#list TseWafProtection#list}
  */
  readonly list?: string[];
  /**
  * `open`: open the protection, `close`: close the protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tse_waf_protection#operate TseWafProtection#operate}
  */
  readonly operate: string;
  /**
  * The type of protection resource. Reference value: `Global`: instance, `Service`: service, `Route`: route, `Object`: obejct (This interface does not currently support this type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tse_waf_protection#type TseWafProtection#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tse_waf_protection tencentcloud_tse_waf_protection}
*/
export class TseWafProtection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tse_waf_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TseWafProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TseWafProtection to import
  * @param importFromId The id of the existing TseWafProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tse_waf_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TseWafProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tse_waf_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tse_waf_protection tencentcloud_tse_waf_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TseWafProtectionConfig
  */
  public constructor(scope: Construct, id: string, config: TseWafProtectionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tse_waf_protection',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gatewayId = config.gatewayId;
    this._id = config.id;
    this._list = config.list;
    this._operate = config.operate;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
  }

  // global_status - computed: true, optional: false, required: false
  public get globalStatus() {
    return this.getStringAttribute('global_status');
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

  // list - computed: false, optional: true, required: false
  private _list?: string[]; 
  public get list() {
    return cdktf.Fn.tolist(this.getListAttribute('list'));
  }
  public set list(value: string[]) {
    this._list = value;
  }
  public resetList() {
    this._list = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list;
  }

  // operate - computed: false, optional: false, required: true
  private _operate?: string; 
  public get operate() {
    return this.getStringAttribute('operate');
  }
  public set operate(value: string) {
    this._operate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operateInput() {
    return this._operate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      id: cdktf.stringToTerraform(this._id),
      list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._list),
      operate: cdktf.stringToTerraform(this._operate),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._list),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      operate: {
        value: cdktf.stringToHclTerraform(this._operate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
