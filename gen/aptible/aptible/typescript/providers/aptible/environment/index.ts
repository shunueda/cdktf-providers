// https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#handle Environment#handle}
  */
  readonly handle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#id Environment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#org_id Environment#org_id}
  */
  readonly orgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#stack_id Environment#stack_id}
  */
  readonly stackId: number;
  /**
  * backup_retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#backup_retention_policy Environment#backup_retention_policy}
  */
  readonly backupRetentionPolicy?: EnvironmentBackupRetentionPolicy[] | cdktf.IResolvable;
}
export interface EnvironmentBackupRetentionPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#daily Environment#daily}
  */
  readonly daily: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#keep_final Environment#keep_final}
  */
  readonly keepFinal: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#make_copy Environment#make_copy}
  */
  readonly makeCopy: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#monthly Environment#monthly}
  */
  readonly monthly: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#yearly Environment#yearly}
  */
  readonly yearly: number;
}

export function environmentBackupRetentionPolicyToTerraform(struct?: EnvironmentBackupRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    daily: cdktf.numberToTerraform(struct!.daily),
    keep_final: cdktf.booleanToTerraform(struct!.keepFinal),
    make_copy: cdktf.booleanToTerraform(struct!.makeCopy),
    monthly: cdktf.numberToTerraform(struct!.monthly),
    yearly: cdktf.numberToTerraform(struct!.yearly),
  }
}


export function environmentBackupRetentionPolicyToHclTerraform(struct?: EnvironmentBackupRetentionPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    daily: {
      value: cdktf.numberToHclTerraform(struct!.daily),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_final: {
      value: cdktf.booleanToHclTerraform(struct!.keepFinal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    make_copy: {
      value: cdktf.booleanToHclTerraform(struct!.makeCopy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monthly: {
      value: cdktf.numberToHclTerraform(struct!.monthly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    yearly: {
      value: cdktf.numberToHclTerraform(struct!.yearly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EnvironmentBackupRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): EnvironmentBackupRetentionPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._daily !== undefined) {
      hasAnyValues = true;
      internalValueResult.daily = this._daily;
    }
    if (this._keepFinal !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepFinal = this._keepFinal;
    }
    if (this._makeCopy !== undefined) {
      hasAnyValues = true;
      internalValueResult.makeCopy = this._makeCopy;
    }
    if (this._monthly !== undefined) {
      hasAnyValues = true;
      internalValueResult.monthly = this._monthly;
    }
    if (this._yearly !== undefined) {
      hasAnyValues = true;
      internalValueResult.yearly = this._yearly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EnvironmentBackupRetentionPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._daily = undefined;
      this._keepFinal = undefined;
      this._makeCopy = undefined;
      this._monthly = undefined;
      this._yearly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._daily = value.daily;
      this._keepFinal = value.keepFinal;
      this._makeCopy = value.makeCopy;
      this._monthly = value.monthly;
      this._yearly = value.yearly;
    }
  }

  // daily - computed: false, optional: false, required: true
  private _daily?: number; 
  public get daily() {
    return this.getNumberAttribute('daily');
  }
  public set daily(value: number) {
    this._daily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dailyInput() {
    return this._daily;
  }

  // keep_final - computed: false, optional: false, required: true
  private _keepFinal?: boolean | cdktf.IResolvable; 
  public get keepFinal() {
    return this.getBooleanAttribute('keep_final');
  }
  public set keepFinal(value: boolean | cdktf.IResolvable) {
    this._keepFinal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepFinalInput() {
    return this._keepFinal;
  }

  // make_copy - computed: false, optional: false, required: true
  private _makeCopy?: boolean | cdktf.IResolvable; 
  public get makeCopy() {
    return this.getBooleanAttribute('make_copy');
  }
  public set makeCopy(value: boolean | cdktf.IResolvable) {
    this._makeCopy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get makeCopyInput() {
    return this._makeCopy;
  }

  // monthly - computed: false, optional: false, required: true
  private _monthly?: number; 
  public get monthly() {
    return this.getNumberAttribute('monthly');
  }
  public set monthly(value: number) {
    this._monthly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyInput() {
    return this._monthly;
  }

  // yearly - computed: false, optional: false, required: true
  private _yearly?: number; 
  public get yearly() {
    return this.getNumberAttribute('yearly');
  }
  public set yearly(value: number) {
    this._yearly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get yearlyInput() {
    return this._yearly;
  }
}

export class EnvironmentBackupRetentionPolicyList extends cdktf.ComplexList {
  public internalValue? : EnvironmentBackupRetentionPolicy[] | cdktf.IResolvable

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
  public get(index: number): EnvironmentBackupRetentionPolicyOutputReference {
    return new EnvironmentBackupRetentionPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment aptible_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aptible_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aptible_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aptible/aptible/0.9.18/docs/resources/environment aptible_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'aptible_environment',
      terraformGeneratorMetadata: {
        providerName: 'aptible',
        providerVersion: '0.9.18',
        providerVersionConstraint: '0.9.18'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._handle = config.handle;
    this._id = config.id;
    this._orgId = config.orgId;
    this._stackId = config.stackId;
    this._backupRetentionPolicy.internalValue = config.backupRetentionPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // env_id - computed: true, optional: false, required: false
  public get envId() {
    return this.getNumberAttribute('env_id');
  }

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
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

  // org_id - computed: true, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // stack_id - computed: false, optional: false, required: true
  private _stackId?: number; 
  public get stackId() {
    return this.getNumberAttribute('stack_id');
  }
  public set stackId(value: number) {
    this._stackId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // backup_retention_policy - computed: false, optional: true, required: false
  private _backupRetentionPolicy = new EnvironmentBackupRetentionPolicyList(this, "backup_retention_policy", true);
  public get backupRetentionPolicy() {
    return this._backupRetentionPolicy;
  }
  public putBackupRetentionPolicy(value: EnvironmentBackupRetentionPolicy[] | cdktf.IResolvable) {
    this._backupRetentionPolicy.internalValue = value;
  }
  public resetBackupRetentionPolicy() {
    this._backupRetentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRetentionPolicyInput() {
    return this._backupRetentionPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      handle: cdktf.stringToTerraform(this._handle),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      stack_id: cdktf.numberToTerraform(this._stackId),
      backup_retention_policy: cdktf.listMapper(environmentBackupRetentionPolicyToTerraform, true)(this._backupRetentionPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.numberToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_retention_policy: {
        value: cdktf.listMapperHcl(environmentBackupRetentionPolicyToHclTerraform, true)(this._backupRetentionPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EnvironmentBackupRetentionPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
