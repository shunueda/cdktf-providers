// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Quota of vApps that this user can deploy. A value of 0 specifies an unlimited quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#deployed_vm_quota OrgUser#deployed_vm_quota}
  */
  readonly deployedVmQuota?: number;
  /**
  * The user's description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#description OrgUser#description}
  */
  readonly description?: string;
  /**
  * The user's email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#email_address OrgUser#email_address}
  */
  readonly emailAddress?: string;
  /**
  * True if the user is enabled and can log in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#enabled OrgUser#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The user's full name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#full_name OrgUser#full_name}
  */
  readonly fullName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#id OrgUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The user's telephone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#instant_messaging OrgUser#instant_messaging}
  */
  readonly instantMessaging?: string;
  /**
  * True if this user is imported from an external resource, like an LDAP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#is_external OrgUser#is_external}
  */
  readonly isExternal?: boolean | cdktf.IResolvable;
  /**
  * True if this user has a group role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#is_group_role OrgUser#is_group_role}
  */
  readonly isGroupRole?: boolean | cdktf.IResolvable;
  /**
  * If the user account has been locked due to too many invalid login attempts, the value will change to true (only the system can lock the user). To unlock the user re-set this flag to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#is_locked OrgUser#is_locked}
  */
  readonly isLocked?: boolean | cdktf.IResolvable;
  /**
  * User's name. Only lowercase letters allowed. Cannot be changed after creation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#name OrgUser#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#org OrgUser#org}
  */
  readonly org?: string;
  /**
  * The user's password. This value is never returned on read. Either "password" or "password_file" must be included on creation unless is_external is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#password OrgUser#password}
  */
  readonly password?: string;
  /**
  * Name of a file containing the user's password. Either "password_file" or "password" must be included on creation unless is_external is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#password_file OrgUser#password_file}
  */
  readonly passwordFile?: string;
  /**
  * Identity provider type for this this user. One of: 'INTEGRATED', 'SAML', 'OAUTH'. When empty, the default value 'INTEGRATED' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#provider_type OrgUser#provider_type}
  */
  readonly providerType?: string;
  /**
  * Role within the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#role OrgUser#role}
  */
  readonly role: string;
  /**
  * Quota of vApps that this user can store. A value of 0 specifies an unlimited quota.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#stored_vm_quota OrgUser#stored_vm_quota}
  */
  readonly storedVmQuota?: number;
  /**
  * Take ownership of user's objects on deletion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#take_ownership OrgUser#take_ownership}
  */
  readonly takeOwnership?: boolean | cdktf.IResolvable;
  /**
  * The user's telephone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#telephone OrgUser#telephone}
  */
  readonly telephone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user vcd_org_user}
*/
export class OrgUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_org_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgUser to import
  * @param importFromId The id of the existing OrgUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_org_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/org_user vcd_org_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgUserConfig
  */
  public constructor(scope: Construct, id: string, config: OrgUserConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_org_user',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deployedVmQuota = config.deployedVmQuota;
    this._description = config.description;
    this._emailAddress = config.emailAddress;
    this._enabled = config.enabled;
    this._fullName = config.fullName;
    this._id = config.id;
    this._instantMessaging = config.instantMessaging;
    this._isExternal = config.isExternal;
    this._isGroupRole = config.isGroupRole;
    this._isLocked = config.isLocked;
    this._name = config.name;
    this._org = config.org;
    this._password = config.password;
    this._passwordFile = config.passwordFile;
    this._providerType = config.providerType;
    this._role = config.role;
    this._storedVmQuota = config.storedVmQuota;
    this._takeOwnership = config.takeOwnership;
    this._telephone = config.telephone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deployed_vm_quota - computed: true, optional: true, required: false
  private _deployedVmQuota?: number; 
  public get deployedVmQuota() {
    return this.getNumberAttribute('deployed_vm_quota');
  }
  public set deployedVmQuota(value: number) {
    this._deployedVmQuota = value;
  }
  public resetDeployedVmQuota() {
    this._deployedVmQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployedVmQuotaInput() {
    return this._deployedVmQuota;
  }

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

  // email_address - computed: true, optional: true, required: false
  private _emailAddress?: string; 
  public get emailAddress() {
    return this.getStringAttribute('email_address');
  }
  public set emailAddress(value: string) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // full_name - computed: true, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // group_names - computed: true, optional: false, required: false
  public get groupNames() {
    return cdktf.Fn.tolist(this.getListAttribute('group_names'));
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

  // instant_messaging - computed: true, optional: true, required: false
  private _instantMessaging?: string; 
  public get instantMessaging() {
    return this.getStringAttribute('instant_messaging');
  }
  public set instantMessaging(value: string) {
    this._instantMessaging = value;
  }
  public resetInstantMessaging() {
    this._instantMessaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instantMessagingInput() {
    return this._instantMessaging;
  }

  // is_external - computed: false, optional: true, required: false
  private _isExternal?: boolean | cdktf.IResolvable; 
  public get isExternal() {
    return this.getBooleanAttribute('is_external');
  }
  public set isExternal(value: boolean | cdktf.IResolvable) {
    this._isExternal = value;
  }
  public resetIsExternal() {
    this._isExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExternalInput() {
    return this._isExternal;
  }

  // is_group_role - computed: false, optional: true, required: false
  private _isGroupRole?: boolean | cdktf.IResolvable; 
  public get isGroupRole() {
    return this.getBooleanAttribute('is_group_role');
  }
  public set isGroupRole(value: boolean | cdktf.IResolvable) {
    this._isGroupRole = value;
  }
  public resetIsGroupRole() {
    this._isGroupRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGroupRoleInput() {
    return this._isGroupRole;
  }

  // is_locked - computed: false, optional: true, required: false
  private _isLocked?: boolean | cdktf.IResolvable; 
  public get isLocked() {
    return this.getBooleanAttribute('is_locked');
  }
  public set isLocked(value: boolean | cdktf.IResolvable) {
    this._isLocked = value;
  }
  public resetIsLocked() {
    this._isLocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLockedInput() {
    return this._isLocked;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_file - computed: false, optional: true, required: false
  private _passwordFile?: string; 
  public get passwordFile() {
    return this.getStringAttribute('password_file');
  }
  public set passwordFile(value: string) {
    this._passwordFile = value;
  }
  public resetPasswordFile() {
    this._passwordFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordFileInput() {
    return this._passwordFile;
  }

  // provider_type - computed: false, optional: true, required: false
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  public resetProviderType() {
    this._providerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // stored_vm_quota - computed: true, optional: true, required: false
  private _storedVmQuota?: number; 
  public get storedVmQuota() {
    return this.getNumberAttribute('stored_vm_quota');
  }
  public set storedVmQuota(value: number) {
    this._storedVmQuota = value;
  }
  public resetStoredVmQuota() {
    this._storedVmQuota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedVmQuotaInput() {
    return this._storedVmQuota;
  }

  // take_ownership - computed: false, optional: true, required: false
  private _takeOwnership?: boolean | cdktf.IResolvable; 
  public get takeOwnership() {
    return this.getBooleanAttribute('take_ownership');
  }
  public set takeOwnership(value: boolean | cdktf.IResolvable) {
    this._takeOwnership = value;
  }
  public resetTakeOwnership() {
    this._takeOwnership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get takeOwnershipInput() {
    return this._takeOwnership;
  }

  // telephone - computed: true, optional: true, required: false
  private _telephone?: string; 
  public get telephone() {
    return this.getStringAttribute('telephone');
  }
  public set telephone(value: string) {
    this._telephone = value;
  }
  public resetTelephone() {
    this._telephone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephoneInput() {
    return this._telephone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deployed_vm_quota: cdktf.numberToTerraform(this._deployedVmQuota),
      description: cdktf.stringToTerraform(this._description),
      email_address: cdktf.stringToTerraform(this._emailAddress),
      enabled: cdktf.booleanToTerraform(this._enabled),
      full_name: cdktf.stringToTerraform(this._fullName),
      id: cdktf.stringToTerraform(this._id),
      instant_messaging: cdktf.stringToTerraform(this._instantMessaging),
      is_external: cdktf.booleanToTerraform(this._isExternal),
      is_group_role: cdktf.booleanToTerraform(this._isGroupRole),
      is_locked: cdktf.booleanToTerraform(this._isLocked),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      password: cdktf.stringToTerraform(this._password),
      password_file: cdktf.stringToTerraform(this._passwordFile),
      provider_type: cdktf.stringToTerraform(this._providerType),
      role: cdktf.stringToTerraform(this._role),
      stored_vm_quota: cdktf.numberToTerraform(this._storedVmQuota),
      take_ownership: cdktf.booleanToTerraform(this._takeOwnership),
      telephone: cdktf.stringToTerraform(this._telephone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deployed_vm_quota: {
        value: cdktf.numberToHclTerraform(this._deployedVmQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address: {
        value: cdktf.stringToHclTerraform(this._emailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
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
      instant_messaging: {
        value: cdktf.stringToHclTerraform(this._instantMessaging),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_external: {
        value: cdktf.booleanToHclTerraform(this._isExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_group_role: {
        value: cdktf.booleanToHclTerraform(this._isGroupRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_locked: {
        value: cdktf.booleanToHclTerraform(this._isLocked),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_file: {
        value: cdktf.stringToHclTerraform(this._passwordFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stored_vm_quota: {
        value: cdktf.numberToHclTerraform(this._storedVmQuota),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      take_ownership: {
        value: cdktf.booleanToHclTerraform(this._takeOwnership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      telephone: {
        value: cdktf.stringToHclTerraform(this._telephone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
