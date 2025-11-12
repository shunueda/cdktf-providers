// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CynosdbClusterPasswordComplexityConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity#cluster_id CynosdbClusterPasswordComplexity#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity#id CynosdbClusterPasswordComplexity#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Data dictionary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity#validate_password_dictionary CynosdbClusterPasswordComplexity#validate_password_dictionary}
  */
  readonly validatePasswordDictionary?: string[];
  /**
  * Password length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity#validate_password_length CynosdbClusterPasswordComplexity#validate_password_length}
  */
  readonly validatePasswordLength: number;
  /**
  * Number of uppercase and lowercase characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity#validate_password_mixed_case_count CynosdbClusterPasswordComplexity#validate_password_mixed_case_count}
  */
  readonly validatePasswordMixedCaseCount: number;
  /**
  * Number of digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity#validate_password_number_count CynosdbClusterPasswordComplexity#validate_password_number_count}
  */
  readonly validatePasswordNumberCount: number;
  /**
  * Password strength (MEDIUM, STRONG).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity#validate_password_policy CynosdbClusterPasswordComplexity#validate_password_policy}
  */
  readonly validatePasswordPolicy: string;
  /**
  * Number of special characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity#validate_password_special_char_count CynosdbClusterPasswordComplexity#validate_password_special_char_count}
  */
  readonly validatePasswordSpecialCharCount: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity tencentcloud_cynosdb_cluster_password_complexity}
*/
export class CynosdbClusterPasswordComplexity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_cynosdb_cluster_password_complexity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CynosdbClusterPasswordComplexity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CynosdbClusterPasswordComplexity to import
  * @param importFromId The id of the existing CynosdbClusterPasswordComplexity that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CynosdbClusterPasswordComplexity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_cynosdb_cluster_password_complexity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.35/docs/resources/cynosdb_cluster_password_complexity tencentcloud_cynosdb_cluster_password_complexity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CynosdbClusterPasswordComplexityConfig
  */
  public constructor(scope: Construct, id: string, config: CynosdbClusterPasswordComplexityConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_cynosdb_cluster_password_complexity',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.35',
        providerVersionConstraint: '1.82.35'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._validatePasswordDictionary = config.validatePasswordDictionary;
    this._validatePasswordLength = config.validatePasswordLength;
    this._validatePasswordMixedCaseCount = config.validatePasswordMixedCaseCount;
    this._validatePasswordNumberCount = config.validatePasswordNumberCount;
    this._validatePasswordPolicy = config.validatePasswordPolicy;
    this._validatePasswordSpecialCharCount = config.validatePasswordSpecialCharCount;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
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

  // validate_password_dictionary - computed: false, optional: true, required: false
  private _validatePasswordDictionary?: string[]; 
  public get validatePasswordDictionary() {
    return cdktf.Fn.tolist(this.getListAttribute('validate_password_dictionary'));
  }
  public set validatePasswordDictionary(value: string[]) {
    this._validatePasswordDictionary = value;
  }
  public resetValidatePasswordDictionary() {
    this._validatePasswordDictionary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePasswordDictionaryInput() {
    return this._validatePasswordDictionary;
  }

  // validate_password_length - computed: false, optional: false, required: true
  private _validatePasswordLength?: number; 
  public get validatePasswordLength() {
    return this.getNumberAttribute('validate_password_length');
  }
  public set validatePasswordLength(value: number) {
    this._validatePasswordLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePasswordLengthInput() {
    return this._validatePasswordLength;
  }

  // validate_password_mixed_case_count - computed: false, optional: false, required: true
  private _validatePasswordMixedCaseCount?: number; 
  public get validatePasswordMixedCaseCount() {
    return this.getNumberAttribute('validate_password_mixed_case_count');
  }
  public set validatePasswordMixedCaseCount(value: number) {
    this._validatePasswordMixedCaseCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePasswordMixedCaseCountInput() {
    return this._validatePasswordMixedCaseCount;
  }

  // validate_password_number_count - computed: false, optional: false, required: true
  private _validatePasswordNumberCount?: number; 
  public get validatePasswordNumberCount() {
    return this.getNumberAttribute('validate_password_number_count');
  }
  public set validatePasswordNumberCount(value: number) {
    this._validatePasswordNumberCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePasswordNumberCountInput() {
    return this._validatePasswordNumberCount;
  }

  // validate_password_policy - computed: false, optional: false, required: true
  private _validatePasswordPolicy?: string; 
  public get validatePasswordPolicy() {
    return this.getStringAttribute('validate_password_policy');
  }
  public set validatePasswordPolicy(value: string) {
    this._validatePasswordPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePasswordPolicyInput() {
    return this._validatePasswordPolicy;
  }

  // validate_password_special_char_count - computed: false, optional: false, required: true
  private _validatePasswordSpecialCharCount?: number; 
  public get validatePasswordSpecialCharCount() {
    return this.getNumberAttribute('validate_password_special_char_count');
  }
  public set validatePasswordSpecialCharCount(value: number) {
    this._validatePasswordSpecialCharCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePasswordSpecialCharCountInput() {
    return this._validatePasswordSpecialCharCount;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      validate_password_dictionary: cdktf.listMapper(cdktf.stringToTerraform, false)(this._validatePasswordDictionary),
      validate_password_length: cdktf.numberToTerraform(this._validatePasswordLength),
      validate_password_mixed_case_count: cdktf.numberToTerraform(this._validatePasswordMixedCaseCount),
      validate_password_number_count: cdktf.numberToTerraform(this._validatePasswordNumberCount),
      validate_password_policy: cdktf.stringToTerraform(this._validatePasswordPolicy),
      validate_password_special_char_count: cdktf.numberToTerraform(this._validatePasswordSpecialCharCount),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
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
      validate_password_dictionary: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._validatePasswordDictionary),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      validate_password_length: {
        value: cdktf.numberToHclTerraform(this._validatePasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      validate_password_mixed_case_count: {
        value: cdktf.numberToHclTerraform(this._validatePasswordMixedCaseCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      validate_password_number_count: {
        value: cdktf.numberToHclTerraform(this._validatePasswordNumberCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      validate_password_policy: {
        value: cdktf.stringToHclTerraform(this._validatePasswordPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_password_special_char_count: {
        value: cdktf.numberToHclTerraform(this._validatePasswordSpecialCharCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
