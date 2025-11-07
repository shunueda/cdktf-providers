// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthorizationPolicyJwtClaimMapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Spcify attribute ID for claim mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#attr_num AamAuthorizationPolicyJwtClaimMap#attr_num}
  */
  readonly attrNum: number;
  /**
  * 'true': True; 'false': False;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#bool_val AamAuthorizationPolicyJwtClaimMap#bool_val}
  */
  readonly boolVal?: string;
  /**
  * Claim type is boolean
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#boolean_type AamAuthorizationPolicyJwtClaimMap#boolean_type}
  */
  readonly booleanType?: number;
  /**
  * Specify JWT claim name to map to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#claim AamAuthorizationPolicyJwtClaimMap#claim}
  */
  readonly claim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#id AamAuthorizationPolicyJwtClaimMap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#name AamAuthorizationPolicyJwtClaimMap#name}
  */
  readonly name: string;
  /**
  * Specify JWT claim value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#num_val AamAuthorizationPolicyJwtClaimMap#num_val}
  */
  readonly numVal?: number;
  /**
  * Claim type is number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#number_type AamAuthorizationPolicyJwtClaimMap#number_type}
  */
  readonly numberType?: number;
  /**
  * Specify JWT claim value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#str_val AamAuthorizationPolicyJwtClaimMap#str_val}
  */
  readonly strVal?: string;
  /**
  * Claim type is string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#string_type AamAuthorizationPolicyJwtClaimMap#string_type}
  */
  readonly stringType?: number;
  /**
  * Specify claim type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#type AamAuthorizationPolicyJwtClaimMap#type}
  */
  readonly type?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#uuid AamAuthorizationPolicyJwtClaimMap#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map thunder_aam_authorization_policy_jwt_claim_map}
*/
export class AamAuthorizationPolicyJwtClaimMap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authorization_policy_jwt_claim_map";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthorizationPolicyJwtClaimMap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthorizationPolicyJwtClaimMap to import
  * @param importFromId The id of the existing AamAuthorizationPolicyJwtClaimMap that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthorizationPolicyJwtClaimMap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authorization_policy_jwt_claim_map", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authorization_policy_jwt_claim_map thunder_aam_authorization_policy_jwt_claim_map} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthorizationPolicyJwtClaimMapConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthorizationPolicyJwtClaimMapConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authorization_policy_jwt_claim_map',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attrNum = config.attrNum;
    this._boolVal = config.boolVal;
    this._booleanType = config.booleanType;
    this._claim = config.claim;
    this._id = config.id;
    this._name = config.name;
    this._numVal = config.numVal;
    this._numberType = config.numberType;
    this._strVal = config.strVal;
    this._stringType = config.stringType;
    this._type = config.type;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attr_num - computed: false, optional: false, required: true
  private _attrNum?: number; 
  public get attrNum() {
    return this.getNumberAttribute('attr_num');
  }
  public set attrNum(value: number) {
    this._attrNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attrNumInput() {
    return this._attrNum;
  }

  // bool_val - computed: false, optional: true, required: false
  private _boolVal?: string; 
  public get boolVal() {
    return this.getStringAttribute('bool_val');
  }
  public set boolVal(value: string) {
    this._boolVal = value;
  }
  public resetBoolVal() {
    this._boolVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boolValInput() {
    return this._boolVal;
  }

  // boolean_type - computed: false, optional: true, required: false
  private _booleanType?: number; 
  public get booleanType() {
    return this.getNumberAttribute('boolean_type');
  }
  public set booleanType(value: number) {
    this._booleanType = value;
  }
  public resetBooleanType() {
    this._booleanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanTypeInput() {
    return this._booleanType;
  }

  // claim - computed: false, optional: true, required: false
  private _claim?: string; 
  public get claim() {
    return this.getStringAttribute('claim');
  }
  public set claim(value: string) {
    this._claim = value;
  }
  public resetClaim() {
    this._claim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimInput() {
    return this._claim;
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

  // num_val - computed: false, optional: true, required: false
  private _numVal?: number; 
  public get numVal() {
    return this.getNumberAttribute('num_val');
  }
  public set numVal(value: number) {
    this._numVal = value;
  }
  public resetNumVal() {
    this._numVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numValInput() {
    return this._numVal;
  }

  // number_type - computed: false, optional: true, required: false
  private _numberType?: number; 
  public get numberType() {
    return this.getNumberAttribute('number_type');
  }
  public set numberType(value: number) {
    this._numberType = value;
  }
  public resetNumberType() {
    this._numberType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberTypeInput() {
    return this._numberType;
  }

  // str_val - computed: false, optional: true, required: false
  private _strVal?: string; 
  public get strVal() {
    return this.getStringAttribute('str_val');
  }
  public set strVal(value: string) {
    this._strVal = value;
  }
  public resetStrVal() {
    this._strVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strValInput() {
    return this._strVal;
  }

  // string_type - computed: false, optional: true, required: false
  private _stringType?: number; 
  public get stringType() {
    return this.getNumberAttribute('string_type');
  }
  public set stringType(value: number) {
    this._stringType = value;
  }
  public resetStringType() {
    this._stringType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringTypeInput() {
    return this._stringType;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
      attr_num: cdktf.numberToTerraform(this._attrNum),
      bool_val: cdktf.stringToTerraform(this._boolVal),
      boolean_type: cdktf.numberToTerraform(this._booleanType),
      claim: cdktf.stringToTerraform(this._claim),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      num_val: cdktf.numberToTerraform(this._numVal),
      number_type: cdktf.numberToTerraform(this._numberType),
      str_val: cdktf.stringToTerraform(this._strVal),
      string_type: cdktf.numberToTerraform(this._stringType),
      type: cdktf.numberToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attr_num: {
        value: cdktf.numberToHclTerraform(this._attrNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bool_val: {
        value: cdktf.stringToHclTerraform(this._boolVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      boolean_type: {
        value: cdktf.numberToHclTerraform(this._booleanType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      claim: {
        value: cdktf.stringToHclTerraform(this._claim),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      num_val: {
        value: cdktf.numberToHclTerraform(this._numVal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      number_type: {
        value: cdktf.numberToHclTerraform(this._numberType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      str_val: {
        value: cdktf.stringToHclTerraform(this._strVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      string_type: {
        value: cdktf.numberToHclTerraform(this._stringType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.numberToHclTerraform(this._type),
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
