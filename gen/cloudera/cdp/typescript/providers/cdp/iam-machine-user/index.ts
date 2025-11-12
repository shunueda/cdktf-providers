// https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IamMachineUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user#name IamMachineUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user#workload_password IamMachineUser#workload_password}
  */
  readonly workloadPassword?: string;
}
export interface IamMachineUserAzureCloudIdentities {
}

export function iamMachineUserAzureCloudIdentitiesToTerraform(struct?: IamMachineUserAzureCloudIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function iamMachineUserAzureCloudIdentitiesToHclTerraform(struct?: IamMachineUserAzureCloudIdentities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IamMachineUserAzureCloudIdentitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IamMachineUserAzureCloudIdentities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamMachineUserAzureCloudIdentities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // environment_crn - computed: true, optional: false, required: false
  public get environmentCrn() {
    return this.getStringAttribute('environment_crn');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
}

export class IamMachineUserAzureCloudIdentitiesList extends cdktf.ComplexList {

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
  public get(index: number): IamMachineUserAzureCloudIdentitiesOutputReference {
    return new IamMachineUserAzureCloudIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IamMachineUserWorkloadPasswordDetails {
}

export function iamMachineUserWorkloadPasswordDetailsToTerraform(struct?: IamMachineUserWorkloadPasswordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function iamMachineUserWorkloadPasswordDetailsToHclTerraform(struct?: IamMachineUserWorkloadPasswordDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IamMachineUserWorkloadPasswordDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IamMachineUserWorkloadPasswordDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IamMachineUserWorkloadPasswordDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // is_password_set - computed: true, optional: false, required: false
  public get isPasswordSet() {
    return this.getBooleanAttribute('is_password_set');
  }

  // min_lifetime_date - computed: true, optional: false, required: false
  public get minLifetimeDate() {
    return this.getStringAttribute('min_lifetime_date');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user cdp_iam_machine_user}
*/
export class IamMachineUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdp_iam_machine_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IamMachineUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IamMachineUser to import
  * @param importFromId The id of the existing IamMachineUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IamMachineUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdp_iam_machine_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudera/cdp/0.10.8/docs/resources/iam_machine_user cdp_iam_machine_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IamMachineUserConfig
  */
  public constructor(scope: Construct, id: string, config: IamMachineUserConfig) {
    super(scope, id, {
      terraformResourceType: 'cdp_iam_machine_user',
      terraformGeneratorMetadata: {
        providerName: 'cdp',
        providerVersion: '0.10.8',
        providerVersionConstraint: '0.10.8'
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
    this._workloadPassword = config.workloadPassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_cloud_identities - computed: true, optional: false, required: false
  private _azureCloudIdentities = new IamMachineUserAzureCloudIdentitiesList(this, "azure_cloud_identities", true);
  public get azureCloudIdentities() {
    return this._azureCloudIdentities;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // workload_password - computed: false, optional: true, required: false
  private _workloadPassword?: string; 
  public get workloadPassword() {
    return this.getStringAttribute('workload_password');
  }
  public set workloadPassword(value: string) {
    this._workloadPassword = value;
  }
  public resetWorkloadPassword() {
    this._workloadPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadPasswordInput() {
    return this._workloadPassword;
  }

  // workload_password_details - computed: true, optional: false, required: false
  private _workloadPasswordDetails = new IamMachineUserWorkloadPasswordDetailsOutputReference(this, "workload_password_details");
  public get workloadPasswordDetails() {
    return this._workloadPasswordDetails;
  }

  // workload_username - computed: true, optional: false, required: false
  public get workloadUsername() {
    return this.getStringAttribute('workload_username');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      workload_password: cdktf.stringToTerraform(this._workloadPassword),
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
      workload_password: {
        value: cdktf.stringToHclTerraform(this._workloadPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
