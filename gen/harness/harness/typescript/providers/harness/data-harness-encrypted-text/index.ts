// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/encrypted_text
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHarnessEncryptedTextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier of the encrypted secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/encrypted_text#id DataHarnessEncryptedText#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the encrypted secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/encrypted_text#name DataHarnessEncryptedText#name}
  */
  readonly name?: string;
  /**
  * usage_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/encrypted_text#usage_scope DataHarnessEncryptedText#usage_scope}
  */
  readonly usageScope?: DataHarnessEncryptedTextUsageScope[] | cdktf.IResolvable;
}
export interface DataHarnessEncryptedTextUsageScope {
  /**
  * Id of the application to scope to. If empty then this scope applies to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/encrypted_text#application_id DataHarnessEncryptedText#application_id}
  */
  readonly applicationId?: string;
  /**
  * Type of environment filter applied. Cannot be used with `environment_id`. Valid options are NON_PRODUCTION_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/encrypted_text#environment_filter_type DataHarnessEncryptedText#environment_filter_type}
  */
  readonly environmentFilterType?: string;
  /**
  * Id of the id of the specific environment to scope to. Cannot be used with `environment_filter_type`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/encrypted_text#environment_id DataHarnessEncryptedText#environment_id}
  */
  readonly environmentId?: string;
}

export function dataHarnessEncryptedTextUsageScopeToTerraform(struct?: DataHarnessEncryptedTextUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    environment_filter_type: cdktf.stringToTerraform(struct!.environmentFilterType),
    environment_id: cdktf.stringToTerraform(struct!.environmentId),
  }
}


export function dataHarnessEncryptedTextUsageScopeToHclTerraform(struct?: DataHarnessEncryptedTextUsageScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_filter_type: {
      value: cdktf.stringToHclTerraform(struct!.environmentFilterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_id: {
      value: cdktf.stringToHclTerraform(struct!.environmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHarnessEncryptedTextUsageScopeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataHarnessEncryptedTextUsageScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._environmentFilterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentFilterType = this._environmentFilterType;
    }
    if (this._environmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentId = this._environmentId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHarnessEncryptedTextUsageScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._environmentFilterType = undefined;
      this._environmentId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._environmentFilterType = value.environmentFilterType;
      this._environmentId = value.environmentId;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // environment_filter_type - computed: false, optional: true, required: false
  private _environmentFilterType?: string; 
  public get environmentFilterType() {
    return this.getStringAttribute('environment_filter_type');
  }
  public set environmentFilterType(value: string) {
    this._environmentFilterType = value;
  }
  public resetEnvironmentFilterType() {
    this._environmentFilterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentFilterTypeInput() {
    return this._environmentFilterType;
  }

  // environment_id - computed: false, optional: true, required: false
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  public resetEnvironmentId() {
    this._environmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }
}

export class DataHarnessEncryptedTextUsageScopeList extends cdktf.ComplexList {
  public internalValue? : DataHarnessEncryptedTextUsageScope[] | cdktf.IResolvable

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
  public get(index: number): DataHarnessEncryptedTextUsageScopeOutputReference {
    return new DataHarnessEncryptedTextUsageScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/encrypted_text harness_encrypted_text}
*/
export class DataHarnessEncryptedText extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_encrypted_text";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHarnessEncryptedText resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHarnessEncryptedText to import
  * @param importFromId The id of the existing DataHarnessEncryptedText that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/encrypted_text#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHarnessEncryptedText to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_encrypted_text", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/data-sources/encrypted_text harness_encrypted_text} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHarnessEncryptedTextConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataHarnessEncryptedTextConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'harness_encrypted_text',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
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
    this._name = config.name;
    this._usageScope.internalValue = config.usageScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
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

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // secret_manager_id - computed: true, optional: false, required: false
  public get secretManagerId() {
    return this.getStringAttribute('secret_manager_id');
  }

  // usage_scope - computed: false, optional: true, required: false
  private _usageScope = new DataHarnessEncryptedTextUsageScopeList(this, "usage_scope", true);
  public get usageScope() {
    return this._usageScope;
  }
  public putUsageScope(value: DataHarnessEncryptedTextUsageScope[] | cdktf.IResolvable) {
    this._usageScope.internalValue = value;
  }
  public resetUsageScope() {
    this._usageScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageScopeInput() {
    return this._usageScope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      usage_scope: cdktf.listMapper(dataHarnessEncryptedTextUsageScopeToTerraform, true)(this._usageScope.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage_scope: {
        value: cdktf.listMapperHcl(dataHarnessEncryptedTextUsageScopeToHclTerraform, true)(this._usageScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHarnessEncryptedTextUsageScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
