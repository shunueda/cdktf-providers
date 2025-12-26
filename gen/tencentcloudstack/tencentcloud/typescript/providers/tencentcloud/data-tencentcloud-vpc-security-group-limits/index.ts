// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/vpc_security_group_limits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudVpcSecurityGroupLimitsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/vpc_security_group_limits#id DataTencentcloudVpcSecurityGroupLimits#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/vpc_security_group_limits#result_output_file DataTencentcloudVpcSecurityGroupLimits#result_output_file}
  */
  readonly resultOutputFile?: string;
}
export interface DataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSet {
}

export function dataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSetToTerraform(struct?: DataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSetToHclTerraform(struct?: DataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_security_group_limit - computed: true, optional: false, required: false
  public get instanceSecurityGroupLimit() {
    return this.getNumberAttribute('instance_security_group_limit');
  }

  // referred_security_group_limit - computed: true, optional: false, required: false
  public get referredSecurityGroupLimit() {
    return this.getNumberAttribute('referred_security_group_limit');
  }

  // security_group_extended_policy_limit - computed: true, optional: false, required: false
  public get securityGroupExtendedPolicyLimit() {
    return this.getNumberAttribute('security_group_extended_policy_limit');
  }

  // security_group_instance_limit - computed: true, optional: false, required: false
  public get securityGroupInstanceLimit() {
    return this.getNumberAttribute('security_group_instance_limit');
  }

  // security_group_limit - computed: true, optional: false, required: false
  public get securityGroupLimit() {
    return this.getNumberAttribute('security_group_limit');
  }

  // security_group_policy_limit - computed: true, optional: false, required: false
  public get securityGroupPolicyLimit() {
    return this.getNumberAttribute('security_group_policy_limit');
  }

  // security_group_referred_cvm_and_eni_limit - computed: true, optional: false, required: false
  public get securityGroupReferredCvmAndEniLimit() {
    return this.getNumberAttribute('security_group_referred_cvm_and_eni_limit');
  }

  // security_group_referred_svc_limit - computed: true, optional: false, required: false
  public get securityGroupReferredSvcLimit() {
    return this.getNumberAttribute('security_group_referred_svc_limit');
  }
}

export class DataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSetOutputReference {
    return new DataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/vpc_security_group_limits tencentcloud_vpc_security_group_limits}
*/
export class DataTencentcloudVpcSecurityGroupLimits extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_vpc_security_group_limits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudVpcSecurityGroupLimits resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudVpcSecurityGroupLimits to import
  * @param importFromId The id of the existing DataTencentcloudVpcSecurityGroupLimits that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/vpc_security_group_limits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudVpcSecurityGroupLimits to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_vpc_security_group_limits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/data-sources/vpc_security_group_limits tencentcloud_vpc_security_group_limits} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudVpcSecurityGroupLimitsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudVpcSecurityGroupLimitsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_vpc_security_group_limits',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
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
    this._resultOutputFile = config.resultOutputFile;
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

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // security_group_limit_set - computed: true, optional: false, required: false
  private _securityGroupLimitSet = new DataTencentcloudVpcSecurityGroupLimitsSecurityGroupLimitSetList(this, "security_group_limit_set", false);
  public get securityGroupLimitSet() {
    return this._securityGroupLimitSet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
