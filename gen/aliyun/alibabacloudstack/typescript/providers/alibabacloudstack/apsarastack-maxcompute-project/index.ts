// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackMaxcomputeProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#account ApsarastackMaxcomputeProject#account}
  */
  readonly account: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#account_pk ApsarastackMaxcomputeProject#account_pk}
  */
  readonly accountPk: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#core_arch ApsarastackMaxcomputeProject#core_arch}
  */
  readonly coreArch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#cpu_type ApsarastackMaxcomputeProject#cpu_type}
  */
  readonly cpuType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#disk ApsarastackMaxcomputeProject#disk}
  */
  readonly disk: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#external_table ApsarastackMaxcomputeProject#external_table}
  */
  readonly externalTable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#id ApsarastackMaxcomputeProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#name ApsarastackMaxcomputeProject#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#quota_id ApsarastackMaxcomputeProject#quota_id}
  */
  readonly quotaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#vpc_ids ApsarastackMaxcomputeProject#vpc_ids}
  */
  readonly vpcIds?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#timeouts ApsarastackMaxcomputeProject#timeouts}
  */
  readonly timeouts?: ApsarastackMaxcomputeProjectTimeouts;
}
export interface ApsarastackMaxcomputeProjectTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#delete ApsarastackMaxcomputeProject#delete}
  */
  readonly delete?: string;
}

export function apsarastackMaxcomputeProjectTimeoutsToTerraform(struct?: ApsarastackMaxcomputeProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function apsarastackMaxcomputeProjectTimeoutsToHclTerraform(struct?: ApsarastackMaxcomputeProjectTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackMaxcomputeProjectTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackMaxcomputeProjectTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackMaxcomputeProjectTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project apsarastack_maxcompute_project}
*/
export class ApsarastackMaxcomputeProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_maxcompute_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackMaxcomputeProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackMaxcomputeProject to import
  * @param importFromId The id of the existing ApsarastackMaxcomputeProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackMaxcomputeProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_maxcompute_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_maxcompute_project apsarastack_maxcompute_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackMaxcomputeProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackMaxcomputeProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_maxcompute_project',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._accountPk = config.accountPk;
    this._coreArch = config.coreArch;
    this._cpuType = config.cpuType;
    this._disk = config.disk;
    this._externalTable = config.externalTable;
    this._id = config.id;
    this._name = config.name;
    this._quotaId = config.quotaId;
    this._vpcIds = config.vpcIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // account_pk - computed: false, optional: false, required: true
  private _accountPk?: string; 
  public get accountPk() {
    return this.getStringAttribute('account_pk');
  }
  public set accountPk(value: string) {
    this._accountPk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPkInput() {
    return this._accountPk;
  }

  // core_arch - computed: false, optional: true, required: false
  private _coreArch?: string; 
  public get coreArch() {
    return this.getStringAttribute('core_arch');
  }
  public set coreArch(value: string) {
    this._coreArch = value;
  }
  public resetCoreArch() {
    this._coreArch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreArchInput() {
    return this._coreArch;
  }

  // cpu_type - computed: false, optional: true, required: false
  private _cpuType?: string; 
  public get cpuType() {
    return this.getStringAttribute('cpu_type');
  }
  public set cpuType(value: string) {
    this._cpuType = value;
  }
  public resetCpuType() {
    this._cpuType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuTypeInput() {
    return this._cpuType;
  }

  // disk - computed: false, optional: false, required: true
  private _disk?: number; 
  public get disk() {
    return this.getNumberAttribute('disk');
  }
  public set disk(value: number) {
    this._disk = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInput() {
    return this._disk;
  }

  // external_table - computed: false, optional: true, required: false
  private _externalTable?: boolean | cdktf.IResolvable; 
  public get externalTable() {
    return this.getBooleanAttribute('external_table');
  }
  public set externalTable(value: boolean | cdktf.IResolvable) {
    this._externalTable = value;
  }
  public resetExternalTable() {
    this._externalTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalTableInput() {
    return this._externalTable;
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

  // quota_id - computed: false, optional: false, required: true
  private _quotaId?: string; 
  public get quotaId() {
    return this.getStringAttribute('quota_id');
  }
  public set quotaId(value: string) {
    this._quotaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaIdInput() {
    return this._quotaId;
  }

  // vpc_ids - computed: false, optional: true, required: false
  private _vpcIds?: string[]; 
  public get vpcIds() {
    return this.getListAttribute('vpc_ids');
  }
  public set vpcIds(value: string[]) {
    this._vpcIds = value;
  }
  public resetVpcIds() {
    this._vpcIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdsInput() {
    return this._vpcIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackMaxcomputeProjectTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackMaxcomputeProjectTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      account_pk: cdktf.stringToTerraform(this._accountPk),
      core_arch: cdktf.stringToTerraform(this._coreArch),
      cpu_type: cdktf.stringToTerraform(this._cpuType),
      disk: cdktf.numberToTerraform(this._disk),
      external_table: cdktf.booleanToTerraform(this._externalTable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      quota_id: cdktf.stringToTerraform(this._quotaId),
      vpc_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpcIds),
      timeouts: apsarastackMaxcomputeProjectTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_pk: {
        value: cdktf.stringToHclTerraform(this._accountPk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      core_arch: {
        value: cdktf.stringToHclTerraform(this._coreArch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpu_type: {
        value: cdktf.stringToHclTerraform(this._cpuType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk: {
        value: cdktf.numberToHclTerraform(this._disk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      external_table: {
        value: cdktf.booleanToHclTerraform(this._externalTable),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_id: {
        value: cdktf.stringToHclTerraform(this._quotaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpcIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: apsarastackMaxcomputeProjectTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackMaxcomputeProjectTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
