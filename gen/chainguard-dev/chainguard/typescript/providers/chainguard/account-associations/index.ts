// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccountAssociationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the account association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#description AccountAssociations#description}
  */
  readonly description?: string;
  /**
  * The UIDP of the IAM group to associate to cloud accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#group AccountAssociations#group}
  */
  readonly group: string;
  /**
  * Name of the account association.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#name AccountAssociations#name}
  */
  readonly name: string;
  /**
  * amazon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#amazon AccountAssociations#amazon}
  */
  readonly amazon?: AccountAssociationsAmazon;
  /**
  * azure block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#azure AccountAssociations#azure}
  */
  readonly azure?: AccountAssociationsAzure;
  /**
  * chainguard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#chainguard AccountAssociations#chainguard}
  */
  readonly chainguard?: AccountAssociationsChainguard;
  /**
  * google block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#google AccountAssociations#google}
  */
  readonly google?: AccountAssociationsGoogle;
}
export interface AccountAssociationsAmazon {
  /**
  * AWS account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#account AccountAssociations#account}
  */
  readonly account?: string;
}

export function accountAssociationsAmazonToTerraform(struct?: AccountAssociationsAmazon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
  }
}


export function accountAssociationsAmazonToHclTerraform(struct?: AccountAssociationsAmazon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountAssociationsAmazonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountAssociationsAmazon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountAssociationsAmazon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
    }
  }

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }
}
export interface AccountAssociationsAzure {
  /**
  * Azure compoment name to client id mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#client_ids AccountAssociations#client_ids}
  */
  readonly clientIds?: { [key: string]: string };
  /**
  * Azure tenant id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#tenant_id AccountAssociations#tenant_id}
  */
  readonly tenantId?: string;
}

export function accountAssociationsAzureToTerraform(struct?: AccountAssociationsAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ids: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.clientIds),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function accountAssociationsAzureToHclTerraform(struct?: AccountAssociationsAzure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ids: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.clientIds),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountAssociationsAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountAssociationsAzure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIds = this._clientIds;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountAssociationsAzure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIds = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIds = value.clientIds;
      this._tenantId = value.tenantId;
    }
  }

  // client_ids - computed: false, optional: true, required: false
  private _clientIds?: { [key: string]: string }; 
  public get clientIds() {
    return this.getStringMapAttribute('client_ids');
  }
  public set clientIds(value: { [key: string]: string }) {
    this._clientIds = value;
  }
  public resetClientIds() {
    this._clientIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdsInput() {
    return this._clientIds;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}
export interface AccountAssociationsChainguard {
  /**
  * A map of service bindings where the key is the service name and the value is the Id of the service principal identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#service_bindings AccountAssociations#service_bindings}
  */
  readonly serviceBindings?: { [key: string]: string };
}

export function accountAssociationsChainguardToTerraform(struct?: AccountAssociationsChainguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_bindings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceBindings),
  }
}


export function accountAssociationsChainguardToHclTerraform(struct?: AccountAssociationsChainguard | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_bindings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceBindings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountAssociationsChainguardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountAssociationsChainguard | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceBindings !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceBindings = this._serviceBindings;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountAssociationsChainguard | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceBindings = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceBindings = value.serviceBindings;
    }
  }

  // service_bindings - computed: false, optional: true, required: false
  private _serviceBindings?: { [key: string]: string }; 
  public get serviceBindings() {
    return this.getStringMapAttribute('service_bindings');
  }
  public set serviceBindings(value: { [key: string]: string }) {
    this._serviceBindings = value;
  }
  public resetServiceBindings() {
    this._serviceBindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBindingsInput() {
    return this._serviceBindings;
  }
}
export interface AccountAssociationsGoogle {
  /**
  * GCP project id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#project_id AccountAssociations#project_id}
  */
  readonly projectId?: string;
  /**
  * GCP project number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#project_number AccountAssociations#project_number}
  */
  readonly projectNumber?: string;
}

export function accountAssociationsGoogleToTerraform(struct?: AccountAssociationsGoogle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project_id: cdktf.stringToTerraform(struct!.projectId),
    project_number: cdktf.stringToTerraform(struct!.projectNumber),
  }
}


export function accountAssociationsGoogleToHclTerraform(struct?: AccountAssociationsGoogle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_number: {
      value: cdktf.stringToHclTerraform(struct!.projectNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccountAssociationsGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccountAssociationsGoogle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._projectNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectNumber = this._projectNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccountAssociationsGoogle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._projectId = undefined;
      this._projectNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._projectId = value.projectId;
      this._projectNumber = value.projectNumber;
    }
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_number - computed: false, optional: true, required: false
  private _projectNumber?: string; 
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }
  public set projectNumber(value: string) {
    this._projectNumber = value;
  }
  public resetProjectNumber() {
    this._projectNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNumberInput() {
    return this._projectNumber;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations chainguard_account_associations}
*/
export class AccountAssociations extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_account_associations";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccountAssociations resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccountAssociations to import
  * @param importFromId The id of the existing AccountAssociations that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccountAssociations to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_account_associations", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.41/docs/resources/account_associations chainguard_account_associations} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccountAssociationsConfig
  */
  public constructor(scope: Construct, id: string, config: AccountAssociationsConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_account_associations',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.41',
        providerVersionConstraint: '0.1.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._group = config.group;
    this._name = config.name;
    this._amazon.internalValue = config.amazon;
    this._azure.internalValue = config.azure;
    this._chainguard.internalValue = config.chainguard;
    this._google.internalValue = config.google;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // amazon - computed: false, optional: true, required: false
  private _amazon = new AccountAssociationsAmazonOutputReference(this, "amazon");
  public get amazon() {
    return this._amazon;
  }
  public putAmazon(value: AccountAssociationsAmazon) {
    this._amazon.internalValue = value;
  }
  public resetAmazon() {
    this._amazon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonInput() {
    return this._amazon.internalValue;
  }

  // azure - computed: false, optional: true, required: false
  private _azure = new AccountAssociationsAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }
  public putAzure(value: AccountAssociationsAzure) {
    this._azure.internalValue = value;
  }
  public resetAzure() {
    this._azure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure.internalValue;
  }

  // chainguard - computed: false, optional: true, required: false
  private _chainguard = new AccountAssociationsChainguardOutputReference(this, "chainguard");
  public get chainguard() {
    return this._chainguard;
  }
  public putChainguard(value: AccountAssociationsChainguard) {
    this._chainguard.internalValue = value;
  }
  public resetChainguard() {
    this._chainguard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainguardInput() {
    return this._chainguard.internalValue;
  }

  // google - computed: false, optional: true, required: false
  private _google = new AccountAssociationsGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: AccountAssociationsGoogle) {
    this._google.internalValue = value;
  }
  public resetGoogle() {
    this._google.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      group: cdktf.stringToTerraform(this._group),
      name: cdktf.stringToTerraform(this._name),
      amazon: accountAssociationsAmazonToTerraform(this._amazon.internalValue),
      azure: accountAssociationsAzureToTerraform(this._azure.internalValue),
      chainguard: accountAssociationsChainguardToTerraform(this._chainguard.internalValue),
      google: accountAssociationsGoogleToTerraform(this._google.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      amazon: {
        value: accountAssociationsAmazonToHclTerraform(this._amazon.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountAssociationsAmazon",
      },
      azure: {
        value: accountAssociationsAzureToHclTerraform(this._azure.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountAssociationsAzure",
      },
      chainguard: {
        value: accountAssociationsChainguardToHclTerraform(this._chainguard.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountAssociationsChainguard",
      },
      google: {
        value: accountAssociationsGoogleToHclTerraform(this._google.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccountAssociationsGoogle",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
