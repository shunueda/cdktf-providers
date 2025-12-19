// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ssl_sni_automap_attributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SlbSslSniAutomapAttributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ssl_sni_automap_attributes#id SlbSslSniAutomapAttributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Contexts are deleted in groups of this value. Default is 50
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ssl_sni_automap_attributes#sni_delete_factor SlbSslSniAutomapAttributes#sni_delete_factor}
  */
  readonly sniDeleteFactor?: number;
  /**
  * Lower limit for free SNI contexts count. Default is 500
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ssl_sni_automap_attributes#sni_lower_limit SlbSslSniAutomapAttributes#sni_lower_limit}
  */
  readonly sniLowerLimit?: number;
  /**
  * Upper limit for free SNI contexts count. Default is 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ssl_sni_automap_attributes#sni_upper_limit SlbSslSniAutomapAttributes#sni_upper_limit}
  */
  readonly sniUpperLimit?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ssl_sni_automap_attributes#uuid SlbSslSniAutomapAttributes#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ssl_sni_automap_attributes thunder_slb_ssl_sni_automap_attributes}
*/
export class SlbSslSniAutomapAttributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ssl_sni_automap_attributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SlbSslSniAutomapAttributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SlbSslSniAutomapAttributes to import
  * @param importFromId The id of the existing SlbSslSniAutomapAttributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ssl_sni_automap_attributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SlbSslSniAutomapAttributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ssl_sni_automap_attributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/slb_ssl_sni_automap_attributes thunder_slb_ssl_sni_automap_attributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SlbSslSniAutomapAttributesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SlbSslSniAutomapAttributesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ssl_sni_automap_attributes',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._sniDeleteFactor = config.sniDeleteFactor;
    this._sniLowerLimit = config.sniLowerLimit;
    this._sniUpperLimit = config.sniUpperLimit;
    this._uuid = config.uuid;
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

  // sni_delete_factor - computed: false, optional: true, required: false
  private _sniDeleteFactor?: number; 
  public get sniDeleteFactor() {
    return this.getNumberAttribute('sni_delete_factor');
  }
  public set sniDeleteFactor(value: number) {
    this._sniDeleteFactor = value;
  }
  public resetSniDeleteFactor() {
    this._sniDeleteFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniDeleteFactorInput() {
    return this._sniDeleteFactor;
  }

  // sni_lower_limit - computed: false, optional: true, required: false
  private _sniLowerLimit?: number; 
  public get sniLowerLimit() {
    return this.getNumberAttribute('sni_lower_limit');
  }
  public set sniLowerLimit(value: number) {
    this._sniLowerLimit = value;
  }
  public resetSniLowerLimit() {
    this._sniLowerLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniLowerLimitInput() {
    return this._sniLowerLimit;
  }

  // sni_upper_limit - computed: false, optional: true, required: false
  private _sniUpperLimit?: number; 
  public get sniUpperLimit() {
    return this.getNumberAttribute('sni_upper_limit');
  }
  public set sniUpperLimit(value: number) {
    this._sniUpperLimit = value;
  }
  public resetSniUpperLimit() {
    this._sniUpperLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniUpperLimitInput() {
    return this._sniUpperLimit;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sni_delete_factor: cdktf.numberToTerraform(this._sniDeleteFactor),
      sni_lower_limit: cdktf.numberToTerraform(this._sniLowerLimit),
      sni_upper_limit: cdktf.numberToTerraform(this._sniUpperLimit),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      sni_delete_factor: {
        value: cdktf.numberToHclTerraform(this._sniDeleteFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sni_lower_limit: {
        value: cdktf.numberToHclTerraform(this._sniLowerLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sni_upper_limit: {
        value: cdktf.numberToHclTerraform(this._sniUpperLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
