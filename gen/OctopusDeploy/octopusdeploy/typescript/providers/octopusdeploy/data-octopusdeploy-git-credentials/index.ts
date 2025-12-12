// https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/git_credentials
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOctopusdeployGitCredentialsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Git Credential to filter by.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/git_credentials#name DataOctopusdeployGitCredentials#name}
  */
  readonly name?: string;
  /**
  * The number of records to skip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/git_credentials#skip DataOctopusdeployGitCredentials#skip}
  */
  readonly skip?: number;
  /**
  * The space ID associated with this Git Credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/git_credentials#space_id DataOctopusdeployGitCredentials#space_id}
  */
  readonly spaceId?: string;
  /**
  * The number of records to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/git_credentials#take DataOctopusdeployGitCredentials#take}
  */
  readonly take?: number;
}
export interface DataOctopusdeployGitCredentialsGitCredentialsRepositoryRestrictions {
}

export function dataOctopusdeployGitCredentialsGitCredentialsRepositoryRestrictionsToTerraform(struct?: DataOctopusdeployGitCredentialsGitCredentialsRepositoryRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployGitCredentialsGitCredentialsRepositoryRestrictionsToHclTerraform(struct?: DataOctopusdeployGitCredentialsGitCredentialsRepositoryRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployGitCredentialsGitCredentialsRepositoryRestrictionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOctopusdeployGitCredentialsGitCredentialsRepositoryRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployGitCredentialsGitCredentialsRepositoryRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_repositories - computed: true, optional: false, required: false
  public get allowedRepositories() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_repositories'));
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
}
export interface DataOctopusdeployGitCredentialsGitCredentials {
}

export function dataOctopusdeployGitCredentialsGitCredentialsToTerraform(struct?: DataOctopusdeployGitCredentialsGitCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOctopusdeployGitCredentialsGitCredentialsToHclTerraform(struct?: DataOctopusdeployGitCredentialsGitCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOctopusdeployGitCredentialsGitCredentialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOctopusdeployGitCredentialsGitCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOctopusdeployGitCredentialsGitCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // repository_restrictions - computed: true, optional: false, required: false
  private _repositoryRestrictions = new DataOctopusdeployGitCredentialsGitCredentialsRepositoryRestrictionsOutputReference(this, "repository_restrictions");
  public get repositoryRestrictions() {
    return this._repositoryRestrictions;
  }

  // space_id - computed: true, optional: false, required: false
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOctopusdeployGitCredentialsGitCredentialsList extends cdktf.ComplexList {

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
  public get(index: number): DataOctopusdeployGitCredentialsGitCredentialsOutputReference {
    return new DataOctopusdeployGitCredentialsGitCredentialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/git_credentials octopusdeploy_git_credentials}
*/
export class DataOctopusdeployGitCredentials extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "octopusdeploy_git_credentials";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOctopusdeployGitCredentials resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOctopusdeployGitCredentials to import
  * @param importFromId The id of the existing DataOctopusdeployGitCredentials that should be imported. Refer to the {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/git_credentials#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOctopusdeployGitCredentials to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "octopusdeploy_git_credentials", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/octopusdeploy/octopusdeploy/1.7.0/docs/data-sources/git_credentials octopusdeploy_git_credentials} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOctopusdeployGitCredentialsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOctopusdeployGitCredentialsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'octopusdeploy_git_credentials',
      terraformGeneratorMetadata: {
        providerName: 'octopusdeploy',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._skip = config.skip;
    this._spaceId = config.spaceId;
    this._take = config.take;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // git_credentials - computed: true, optional: false, required: false
  private _gitCredentials = new DataOctopusdeployGitCredentialsGitCredentialsList(this, "git_credentials", false);
  public get gitCredentials() {
    return this._gitCredentials;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // skip - computed: false, optional: true, required: false
  private _skip?: number; 
  public get skip() {
    return this.getNumberAttribute('skip');
  }
  public set skip(value: number) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // space_id - computed: false, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // take - computed: false, optional: true, required: false
  private _take?: number; 
  public get take() {
    return this.getNumberAttribute('take');
  }
  public set take(value: number) {
    this._take = value;
  }
  public resetTake() {
    this._take = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeInput() {
    return this._take;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      skip: cdktf.numberToTerraform(this._skip),
      space_id: cdktf.stringToTerraform(this._spaceId),
      take: cdktf.numberToTerraform(this._take),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip: {
        value: cdktf.numberToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      take: {
        value: cdktf.numberToHclTerraform(this._take),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
