// https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzuredevopsUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users#id DataAzuredevopsUsers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users#origin DataAzuredevopsUsers#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users#origin_id DataAzuredevopsUsers#origin_id}
  */
  readonly originId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users#principal_name DataAzuredevopsUsers#principal_name}
  */
  readonly principalName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users#subject_types DataAzuredevopsUsers#subject_types}
  */
  readonly subjectTypes?: string[];
  /**
  * features block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users#features DataAzuredevopsUsers#features}
  */
  readonly features?: DataAzuredevopsUsersFeatures;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users#timeouts DataAzuredevopsUsers#timeouts}
  */
  readonly timeouts?: DataAzuredevopsUsersTimeouts;
}
export interface DataAzuredevopsUsersUsers {
}

export function dataAzuredevopsUsersUsersToTerraform(struct?: DataAzuredevopsUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAzuredevopsUsersUsersToHclTerraform(struct?: DataAzuredevopsUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAzuredevopsUsersUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAzuredevopsUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // descriptor - computed: true, optional: false, required: false
  public get descriptor() {
    return this.getStringAttribute('descriptor');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mail_address - computed: true, optional: false, required: false
  public get mailAddress() {
    return this.getStringAttribute('mail_address');
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // origin_id - computed: true, optional: false, required: false
  public get originId() {
    return this.getStringAttribute('origin_id');
  }

  // principal_name - computed: true, optional: false, required: false
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }
}

export class DataAzuredevopsUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataAzuredevopsUsersUsersOutputReference {
    return new DataAzuredevopsUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAzuredevopsUsersFeatures {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users#concurrent_workers DataAzuredevopsUsers#concurrent_workers}
  */
  readonly concurrentWorkers?: number;
}

export function dataAzuredevopsUsersFeaturesToTerraform(struct?: DataAzuredevopsUsersFeaturesOutputReference | DataAzuredevopsUsersFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrent_workers: cdktf.numberToTerraform(struct!.concurrentWorkers),
  }
}


export function dataAzuredevopsUsersFeaturesToHclTerraform(struct?: DataAzuredevopsUsersFeaturesOutputReference | DataAzuredevopsUsersFeatures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrent_workers: {
      value: cdktf.numberToHclTerraform(struct!.concurrentWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzuredevopsUsersFeaturesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzuredevopsUsersFeatures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrentWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentWorkers = this._concurrentWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsUsersFeatures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._concurrentWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._concurrentWorkers = value.concurrentWorkers;
    }
  }

  // concurrent_workers - computed: false, optional: true, required: false
  private _concurrentWorkers?: number; 
  public get concurrentWorkers() {
    return this.getNumberAttribute('concurrent_workers');
  }
  public set concurrentWorkers(value: number) {
    this._concurrentWorkers = value;
  }
  public resetConcurrentWorkers() {
    this._concurrentWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentWorkersInput() {
    return this._concurrentWorkers;
  }
}
export interface DataAzuredevopsUsersTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users#read DataAzuredevopsUsers#read}
  */
  readonly read?: string;
}

export function dataAzuredevopsUsersTimeoutsToTerraform(struct?: DataAzuredevopsUsersTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataAzuredevopsUsersTimeoutsToHclTerraform(struct?: DataAzuredevopsUsersTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataAzuredevopsUsersTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataAzuredevopsUsersTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAzuredevopsUsersTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users azuredevops_users}
*/
export class DataAzuredevopsUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuredevops_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAzuredevopsUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAzuredevopsUsers to import
  * @param importFromId The id of the existing DataAzuredevopsUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAzuredevopsUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "azuredevops_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/azuredevops/1.11.2/docs/data-sources/users azuredevops_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzuredevopsUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzuredevopsUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuredevops_users',
      terraformGeneratorMetadata: {
        providerName: 'azuredevops',
        providerVersion: '1.11.2'
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
    this._origin = config.origin;
    this._originId = config.originId;
    this._principalName = config.principalName;
    this._subjectTypes = config.subjectTypes;
    this._features.internalValue = config.features;
    this._timeouts.internalValue = config.timeouts;
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

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
  }

  // origin_id - computed: false, optional: true, required: false
  private _originId?: string; 
  public get originId() {
    return this.getStringAttribute('origin_id');
  }
  public set originId(value: string) {
    this._originId = value;
  }
  public resetOriginId() {
    this._originId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originIdInput() {
    return this._originId;
  }

  // principal_name - computed: false, optional: true, required: false
  private _principalName?: string; 
  public get principalName() {
    return this.getStringAttribute('principal_name');
  }
  public set principalName(value: string) {
    this._principalName = value;
  }
  public resetPrincipalName() {
    this._principalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalNameInput() {
    return this._principalName;
  }

  // subject_types - computed: false, optional: true, required: false
  private _subjectTypes?: string[]; 
  public get subjectTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('subject_types'));
  }
  public set subjectTypes(value: string[]) {
    this._subjectTypes = value;
  }
  public resetSubjectTypes() {
    this._subjectTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectTypesInput() {
    return this._subjectTypes;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataAzuredevopsUsersUsersList(this, "users", true);
  public get users() {
    return this._users;
  }

  // features - computed: false, optional: true, required: false
  private _features = new DataAzuredevopsUsersFeaturesOutputReference(this, "features");
  public get features() {
    return this._features;
  }
  public putFeatures(value: DataAzuredevopsUsersFeatures) {
    this._features.internalValue = value;
  }
  public resetFeatures() {
    this._features.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzuredevopsUsersTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzuredevopsUsersTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      origin: cdktf.stringToTerraform(this._origin),
      origin_id: cdktf.stringToTerraform(this._originId),
      principal_name: cdktf.stringToTerraform(this._principalName),
      subject_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._subjectTypes),
      features: dataAzuredevopsUsersFeaturesToTerraform(this._features.internalValue),
      timeouts: dataAzuredevopsUsersTimeoutsToTerraform(this._timeouts.internalValue),
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
      origin: {
        value: cdktf.stringToHclTerraform(this._origin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      origin_id: {
        value: cdktf.stringToHclTerraform(this._originId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_name: {
        value: cdktf.stringToHclTerraform(this._principalName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subject_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._subjectTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      features: {
        value: dataAzuredevopsUsersFeaturesToHclTerraform(this._features.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataAzuredevopsUsersFeaturesList",
      },
      timeouts: {
        value: dataAzuredevopsUsersTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataAzuredevopsUsersTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
