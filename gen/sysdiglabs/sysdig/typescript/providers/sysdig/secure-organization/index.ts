// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecureOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#automatic_onboarding SecureOrganization#automatic_onboarding}
  */
  readonly automaticOnboarding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#excluded_cloud_accounts SecureOrganization#excluded_cloud_accounts}
  */
  readonly excludedCloudAccounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#excluded_organizational_groups SecureOrganization#excluded_organizational_groups}
  */
  readonly excludedOrganizationalGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#id SecureOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#included_cloud_accounts SecureOrganization#included_cloud_accounts}
  */
  readonly includedCloudAccounts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#included_organizational_groups SecureOrganization#included_organizational_groups}
  */
  readonly includedOrganizationalGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#management_account_id SecureOrganization#management_account_id}
  */
  readonly managementAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#organization_root_id SecureOrganization#organization_root_id}
  */
  readonly organizationRootId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#organizational_unit_ids SecureOrganization#organizational_unit_ids}
  */
  readonly organizationalUnitIds?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#timeouts SecureOrganization#timeouts}
  */
  readonly timeouts?: SecureOrganizationTimeouts;
}
export interface SecureOrganizationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#create SecureOrganization#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#delete SecureOrganization#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#read SecureOrganization#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#update SecureOrganization#update}
  */
  readonly update?: string;
}

export function secureOrganizationTimeoutsToTerraform(struct?: SecureOrganizationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function secureOrganizationTimeoutsToHclTerraform(struct?: SecureOrganizationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecureOrganizationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecureOrganizationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecureOrganizationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization sysdig_secure_organization}
*/
export class SecureOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecureOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecureOrganization to import
  * @param importFromId The id of the existing SecureOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecureOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.1.0/docs/resources/secure_organization sysdig_secure_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecureOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: SecureOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_organization',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.1.0',
        providerVersionConstraint: '3.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automaticOnboarding = config.automaticOnboarding;
    this._excludedCloudAccounts = config.excludedCloudAccounts;
    this._excludedOrganizationalGroups = config.excludedOrganizationalGroups;
    this._id = config.id;
    this._includedCloudAccounts = config.includedCloudAccounts;
    this._includedOrganizationalGroups = config.includedOrganizationalGroups;
    this._managementAccountId = config.managementAccountId;
    this._organizationRootId = config.organizationRootId;
    this._organizationalUnitIds = config.organizationalUnitIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automatic_onboarding - computed: false, optional: true, required: false
  private _automaticOnboarding?: boolean | cdktf.IResolvable; 
  public get automaticOnboarding() {
    return this.getBooleanAttribute('automatic_onboarding');
  }
  public set automaticOnboarding(value: boolean | cdktf.IResolvable) {
    this._automaticOnboarding = value;
  }
  public resetAutomaticOnboarding() {
    this._automaticOnboarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticOnboardingInput() {
    return this._automaticOnboarding;
  }

  // excluded_cloud_accounts - computed: false, optional: true, required: false
  private _excludedCloudAccounts?: string[]; 
  public get excludedCloudAccounts() {
    return this.getListAttribute('excluded_cloud_accounts');
  }
  public set excludedCloudAccounts(value: string[]) {
    this._excludedCloudAccounts = value;
  }
  public resetExcludedCloudAccounts() {
    this._excludedCloudAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCloudAccountsInput() {
    return this._excludedCloudAccounts;
  }

  // excluded_organizational_groups - computed: false, optional: true, required: false
  private _excludedOrganizationalGroups?: string[]; 
  public get excludedOrganizationalGroups() {
    return this.getListAttribute('excluded_organizational_groups');
  }
  public set excludedOrganizationalGroups(value: string[]) {
    this._excludedOrganizationalGroups = value;
  }
  public resetExcludedOrganizationalGroups() {
    this._excludedOrganizationalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedOrganizationalGroupsInput() {
    return this._excludedOrganizationalGroups;
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

  // included_cloud_accounts - computed: false, optional: true, required: false
  private _includedCloudAccounts?: string[]; 
  public get includedCloudAccounts() {
    return this.getListAttribute('included_cloud_accounts');
  }
  public set includedCloudAccounts(value: string[]) {
    this._includedCloudAccounts = value;
  }
  public resetIncludedCloudAccounts() {
    this._includedCloudAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedCloudAccountsInput() {
    return this._includedCloudAccounts;
  }

  // included_organizational_groups - computed: false, optional: true, required: false
  private _includedOrganizationalGroups?: string[]; 
  public get includedOrganizationalGroups() {
    return this.getListAttribute('included_organizational_groups');
  }
  public set includedOrganizationalGroups(value: string[]) {
    this._includedOrganizationalGroups = value;
  }
  public resetIncludedOrganizationalGroups() {
    this._includedOrganizationalGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedOrganizationalGroupsInput() {
    return this._includedOrganizationalGroups;
  }

  // management_account_id - computed: false, optional: false, required: true
  private _managementAccountId?: string; 
  public get managementAccountId() {
    return this.getStringAttribute('management_account_id');
  }
  public set managementAccountId(value: string) {
    this._managementAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementAccountIdInput() {
    return this._managementAccountId;
  }

  // organization_root_id - computed: false, optional: true, required: false
  private _organizationRootId?: string; 
  public get organizationRootId() {
    return this.getStringAttribute('organization_root_id');
  }
  public set organizationRootId(value: string) {
    this._organizationRootId = value;
  }
  public resetOrganizationRootId() {
    this._organizationRootId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationRootIdInput() {
    return this._organizationRootId;
  }

  // organizational_unit_ids - computed: false, optional: true, required: false
  private _organizationalUnitIds?: string[]; 
  public get organizationalUnitIds() {
    return this.getListAttribute('organizational_unit_ids');
  }
  public set organizationalUnitIds(value: string[]) {
    this._organizationalUnitIds = value;
  }
  public resetOrganizationalUnitIds() {
    this._organizationalUnitIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitIdsInput() {
    return this._organizationalUnitIds;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecureOrganizationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecureOrganizationTimeouts) {
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
      automatic_onboarding: cdktf.booleanToTerraform(this._automaticOnboarding),
      excluded_cloud_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedCloudAccounts),
      excluded_organizational_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedOrganizationalGroups),
      id: cdktf.stringToTerraform(this._id),
      included_cloud_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedCloudAccounts),
      included_organizational_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._includedOrganizationalGroups),
      management_account_id: cdktf.stringToTerraform(this._managementAccountId),
      organization_root_id: cdktf.stringToTerraform(this._organizationRootId),
      organizational_unit_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._organizationalUnitIds),
      timeouts: secureOrganizationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automatic_onboarding: {
        value: cdktf.booleanToHclTerraform(this._automaticOnboarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      excluded_cloud_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedCloudAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      excluded_organizational_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedOrganizationalGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      included_cloud_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedCloudAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      included_organizational_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._includedOrganizationalGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      management_account_id: {
        value: cdktf.stringToHclTerraform(this._managementAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization_root_id: {
        value: cdktf.stringToHclTerraform(this._organizationRootId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._organizationalUnitIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: secureOrganizationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecureOrganizationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
