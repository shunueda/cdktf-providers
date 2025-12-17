// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#custom_attributes Endpoint#custom_attributes}
  */
  readonly customAttributes?: { [key: string]: string };
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#description Endpoint#description}
  */
  readonly description?: string;
  /**
  * Identity Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#group_id Endpoint#group_id}
  */
  readonly groupId?: string;
  /**
  * Identity Store
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#identity_store Endpoint#identity_store}
  */
  readonly identityStore?: string;
  /**
  * Identity Store Id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#identity_store_id Endpoint#identity_store_id}
  */
  readonly identityStoreId?: string;
  /**
  * MAC address of the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mac Endpoint#mac}
  */
  readonly mac: string;
  /**
  * Mdm Compliance Status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_compliance_status Endpoint#mdm_compliance_status}
  */
  readonly mdmComplianceStatus?: boolean | cdktf.IResolvable;
  /**
  * Mdm Encrypted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_encrypted Endpoint#mdm_encrypted}
  */
  readonly mdmEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Mdm Enrolled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_enrolled Endpoint#mdm_enrolled}
  */
  readonly mdmEnrolled?: boolean | cdktf.IResolvable;
  /**
  * Mdm IMEI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_imei Endpoint#mdm_imei}
  */
  readonly mdmImei?: string;
  /**
  * Mdm JailBroken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_jail_broken Endpoint#mdm_jail_broken}
  */
  readonly mdmJailBroken?: boolean | cdktf.IResolvable;
  /**
  * Mdm Manufacturer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_manufacturer Endpoint#mdm_manufacturer}
  */
  readonly mdmManufacturer?: string;
  /**
  * Mdm Model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_model Endpoint#mdm_model}
  */
  readonly mdmModel?: string;
  /**
  * Mdm OS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_os Endpoint#mdm_os}
  */
  readonly mdmOs?: string;
  /**
  * Mdm PhoneNumber
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_phone_number Endpoint#mdm_phone_number}
  */
  readonly mdmPhoneNumber?: string;
  /**
  * Mdm Pinlock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_pinlock Endpoint#mdm_pinlock}
  */
  readonly mdmPinlock?: boolean | cdktf.IResolvable;
  /**
  * Mdm Reachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_reachable Endpoint#mdm_reachable}
  */
  readonly mdmReachable?: boolean | cdktf.IResolvable;
  /**
  * Mdm Serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_serial Endpoint#mdm_serial}
  */
  readonly mdmSerial?: string;
  /**
  * Mdm Server Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#mdm_server_name Endpoint#mdm_server_name}
  */
  readonly mdmServerName?: string;
  /**
  * The name of the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#name Endpoint#name}
  */
  readonly name: string;
  /**
  * Portal User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#portal_user Endpoint#portal_user}
  */
  readonly portalUser?: string;
  /**
  * Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#profile_id Endpoint#profile_id}
  */
  readonly profileId?: string;
  /**
  * Static Group Assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#static_group_assignment Endpoint#static_group_assignment}
  */
  readonly staticGroupAssignment: boolean | cdktf.IResolvable;
  /**
  * staticGroupAssignmentDefined
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#static_group_assignment_defined Endpoint#static_group_assignment_defined}
  */
  readonly staticGroupAssignmentDefined?: boolean | cdktf.IResolvable;
  /**
  * Static Profile Assignment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#static_profile_assignment Endpoint#static_profile_assignment}
  */
  readonly staticProfileAssignment: boolean | cdktf.IResolvable;
  /**
  * Static Profile Assignment Defined
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#static_profile_assignment_defined Endpoint#static_profile_assignment_defined}
  */
  readonly staticProfileAssignmentDefined?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint ise_endpoint}
*/
export class Endpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Endpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Endpoint to import
  * @param importFromId The id of the existing Endpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Endpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.14/docs/resources/endpoint ise_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.14',
        providerVersionConstraint: '0.2.14'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customAttributes = config.customAttributes;
    this._description = config.description;
    this._groupId = config.groupId;
    this._identityStore = config.identityStore;
    this._identityStoreId = config.identityStoreId;
    this._mac = config.mac;
    this._mdmComplianceStatus = config.mdmComplianceStatus;
    this._mdmEncrypted = config.mdmEncrypted;
    this._mdmEnrolled = config.mdmEnrolled;
    this._mdmImei = config.mdmImei;
    this._mdmJailBroken = config.mdmJailBroken;
    this._mdmManufacturer = config.mdmManufacturer;
    this._mdmModel = config.mdmModel;
    this._mdmOs = config.mdmOs;
    this._mdmPhoneNumber = config.mdmPhoneNumber;
    this._mdmPinlock = config.mdmPinlock;
    this._mdmReachable = config.mdmReachable;
    this._mdmSerial = config.mdmSerial;
    this._mdmServerName = config.mdmServerName;
    this._name = config.name;
    this._portalUser = config.portalUser;
    this._profileId = config.profileId;
    this._staticGroupAssignment = config.staticGroupAssignment;
    this._staticGroupAssignmentDefined = config.staticGroupAssignmentDefined;
    this._staticProfileAssignment = config.staticProfileAssignment;
    this._staticProfileAssignmentDefined = config.staticProfileAssignmentDefined;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: { [key: string]: string }; 
  public get customAttributes() {
    return this.getStringMapAttribute('custom_attributes');
  }
  public set customAttributes(value: { [key: string]: string }) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
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

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_store - computed: false, optional: true, required: false
  private _identityStore?: string; 
  public get identityStore() {
    return this.getStringAttribute('identity_store');
  }
  public set identityStore(value: string) {
    this._identityStore = value;
  }
  public resetIdentityStore() {
    this._identityStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreInput() {
    return this._identityStore;
  }

  // identity_store_id - computed: false, optional: true, required: false
  private _identityStoreId?: string; 
  public get identityStoreId() {
    return this.getStringAttribute('identity_store_id');
  }
  public set identityStoreId(value: string) {
    this._identityStoreId = value;
  }
  public resetIdentityStoreId() {
    this._identityStoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreIdInput() {
    return this._identityStoreId;
  }

  // mac - computed: false, optional: false, required: true
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // mdm_compliance_status - computed: false, optional: true, required: false
  private _mdmComplianceStatus?: boolean | cdktf.IResolvable; 
  public get mdmComplianceStatus() {
    return this.getBooleanAttribute('mdm_compliance_status');
  }
  public set mdmComplianceStatus(value: boolean | cdktf.IResolvable) {
    this._mdmComplianceStatus = value;
  }
  public resetMdmComplianceStatus() {
    this._mdmComplianceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmComplianceStatusInput() {
    return this._mdmComplianceStatus;
  }

  // mdm_encrypted - computed: false, optional: true, required: false
  private _mdmEncrypted?: boolean | cdktf.IResolvable; 
  public get mdmEncrypted() {
    return this.getBooleanAttribute('mdm_encrypted');
  }
  public set mdmEncrypted(value: boolean | cdktf.IResolvable) {
    this._mdmEncrypted = value;
  }
  public resetMdmEncrypted() {
    this._mdmEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmEncryptedInput() {
    return this._mdmEncrypted;
  }

  // mdm_enrolled - computed: false, optional: true, required: false
  private _mdmEnrolled?: boolean | cdktf.IResolvable; 
  public get mdmEnrolled() {
    return this.getBooleanAttribute('mdm_enrolled');
  }
  public set mdmEnrolled(value: boolean | cdktf.IResolvable) {
    this._mdmEnrolled = value;
  }
  public resetMdmEnrolled() {
    this._mdmEnrolled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmEnrolledInput() {
    return this._mdmEnrolled;
  }

  // mdm_imei - computed: false, optional: true, required: false
  private _mdmImei?: string; 
  public get mdmImei() {
    return this.getStringAttribute('mdm_imei');
  }
  public set mdmImei(value: string) {
    this._mdmImei = value;
  }
  public resetMdmImei() {
    this._mdmImei = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmImeiInput() {
    return this._mdmImei;
  }

  // mdm_jail_broken - computed: false, optional: true, required: false
  private _mdmJailBroken?: boolean | cdktf.IResolvable; 
  public get mdmJailBroken() {
    return this.getBooleanAttribute('mdm_jail_broken');
  }
  public set mdmJailBroken(value: boolean | cdktf.IResolvable) {
    this._mdmJailBroken = value;
  }
  public resetMdmJailBroken() {
    this._mdmJailBroken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmJailBrokenInput() {
    return this._mdmJailBroken;
  }

  // mdm_manufacturer - computed: false, optional: true, required: false
  private _mdmManufacturer?: string; 
  public get mdmManufacturer() {
    return this.getStringAttribute('mdm_manufacturer');
  }
  public set mdmManufacturer(value: string) {
    this._mdmManufacturer = value;
  }
  public resetMdmManufacturer() {
    this._mdmManufacturer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmManufacturerInput() {
    return this._mdmManufacturer;
  }

  // mdm_model - computed: false, optional: true, required: false
  private _mdmModel?: string; 
  public get mdmModel() {
    return this.getStringAttribute('mdm_model');
  }
  public set mdmModel(value: string) {
    this._mdmModel = value;
  }
  public resetMdmModel() {
    this._mdmModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmModelInput() {
    return this._mdmModel;
  }

  // mdm_os - computed: false, optional: true, required: false
  private _mdmOs?: string; 
  public get mdmOs() {
    return this.getStringAttribute('mdm_os');
  }
  public set mdmOs(value: string) {
    this._mdmOs = value;
  }
  public resetMdmOs() {
    this._mdmOs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmOsInput() {
    return this._mdmOs;
  }

  // mdm_phone_number - computed: false, optional: true, required: false
  private _mdmPhoneNumber?: string; 
  public get mdmPhoneNumber() {
    return this.getStringAttribute('mdm_phone_number');
  }
  public set mdmPhoneNumber(value: string) {
    this._mdmPhoneNumber = value;
  }
  public resetMdmPhoneNumber() {
    this._mdmPhoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmPhoneNumberInput() {
    return this._mdmPhoneNumber;
  }

  // mdm_pinlock - computed: false, optional: true, required: false
  private _mdmPinlock?: boolean | cdktf.IResolvable; 
  public get mdmPinlock() {
    return this.getBooleanAttribute('mdm_pinlock');
  }
  public set mdmPinlock(value: boolean | cdktf.IResolvable) {
    this._mdmPinlock = value;
  }
  public resetMdmPinlock() {
    this._mdmPinlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmPinlockInput() {
    return this._mdmPinlock;
  }

  // mdm_reachable - computed: false, optional: true, required: false
  private _mdmReachable?: boolean | cdktf.IResolvable; 
  public get mdmReachable() {
    return this.getBooleanAttribute('mdm_reachable');
  }
  public set mdmReachable(value: boolean | cdktf.IResolvable) {
    this._mdmReachable = value;
  }
  public resetMdmReachable() {
    this._mdmReachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmReachableInput() {
    return this._mdmReachable;
  }

  // mdm_serial - computed: false, optional: true, required: false
  private _mdmSerial?: string; 
  public get mdmSerial() {
    return this.getStringAttribute('mdm_serial');
  }
  public set mdmSerial(value: string) {
    this._mdmSerial = value;
  }
  public resetMdmSerial() {
    this._mdmSerial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmSerialInput() {
    return this._mdmSerial;
  }

  // mdm_server_name - computed: false, optional: true, required: false
  private _mdmServerName?: string; 
  public get mdmServerName() {
    return this.getStringAttribute('mdm_server_name');
  }
  public set mdmServerName(value: string) {
    this._mdmServerName = value;
  }
  public resetMdmServerName() {
    this._mdmServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdmServerNameInput() {
    return this._mdmServerName;
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

  // portal_user - computed: false, optional: true, required: false
  private _portalUser?: string; 
  public get portalUser() {
    return this.getStringAttribute('portal_user');
  }
  public set portalUser(value: string) {
    this._portalUser = value;
  }
  public resetPortalUser() {
    this._portalUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalUserInput() {
    return this._portalUser;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // static_group_assignment - computed: false, optional: false, required: true
  private _staticGroupAssignment?: boolean | cdktf.IResolvable; 
  public get staticGroupAssignment() {
    return this.getBooleanAttribute('static_group_assignment');
  }
  public set staticGroupAssignment(value: boolean | cdktf.IResolvable) {
    this._staticGroupAssignment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticGroupAssignmentInput() {
    return this._staticGroupAssignment;
  }

  // static_group_assignment_defined - computed: true, optional: true, required: false
  private _staticGroupAssignmentDefined?: boolean | cdktf.IResolvable; 
  public get staticGroupAssignmentDefined() {
    return this.getBooleanAttribute('static_group_assignment_defined');
  }
  public set staticGroupAssignmentDefined(value: boolean | cdktf.IResolvable) {
    this._staticGroupAssignmentDefined = value;
  }
  public resetStaticGroupAssignmentDefined() {
    this._staticGroupAssignmentDefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticGroupAssignmentDefinedInput() {
    return this._staticGroupAssignmentDefined;
  }

  // static_profile_assignment - computed: false, optional: false, required: true
  private _staticProfileAssignment?: boolean | cdktf.IResolvable; 
  public get staticProfileAssignment() {
    return this.getBooleanAttribute('static_profile_assignment');
  }
  public set staticProfileAssignment(value: boolean | cdktf.IResolvable) {
    this._staticProfileAssignment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticProfileAssignmentInput() {
    return this._staticProfileAssignment;
  }

  // static_profile_assignment_defined - computed: true, optional: true, required: false
  private _staticProfileAssignmentDefined?: boolean | cdktf.IResolvable; 
  public get staticProfileAssignmentDefined() {
    return this.getBooleanAttribute('static_profile_assignment_defined');
  }
  public set staticProfileAssignmentDefined(value: boolean | cdktf.IResolvable) {
    this._staticProfileAssignmentDefined = value;
  }
  public resetStaticProfileAssignmentDefined() {
    this._staticProfileAssignmentDefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticProfileAssignmentDefinedInput() {
    return this._staticProfileAssignmentDefined;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._customAttributes),
      description: cdktf.stringToTerraform(this._description),
      group_id: cdktf.stringToTerraform(this._groupId),
      identity_store: cdktf.stringToTerraform(this._identityStore),
      identity_store_id: cdktf.stringToTerraform(this._identityStoreId),
      mac: cdktf.stringToTerraform(this._mac),
      mdm_compliance_status: cdktf.booleanToTerraform(this._mdmComplianceStatus),
      mdm_encrypted: cdktf.booleanToTerraform(this._mdmEncrypted),
      mdm_enrolled: cdktf.booleanToTerraform(this._mdmEnrolled),
      mdm_imei: cdktf.stringToTerraform(this._mdmImei),
      mdm_jail_broken: cdktf.booleanToTerraform(this._mdmJailBroken),
      mdm_manufacturer: cdktf.stringToTerraform(this._mdmManufacturer),
      mdm_model: cdktf.stringToTerraform(this._mdmModel),
      mdm_os: cdktf.stringToTerraform(this._mdmOs),
      mdm_phone_number: cdktf.stringToTerraform(this._mdmPhoneNumber),
      mdm_pinlock: cdktf.booleanToTerraform(this._mdmPinlock),
      mdm_reachable: cdktf.booleanToTerraform(this._mdmReachable),
      mdm_serial: cdktf.stringToTerraform(this._mdmSerial),
      mdm_server_name: cdktf.stringToTerraform(this._mdmServerName),
      name: cdktf.stringToTerraform(this._name),
      portal_user: cdktf.stringToTerraform(this._portalUser),
      profile_id: cdktf.stringToTerraform(this._profileId),
      static_group_assignment: cdktf.booleanToTerraform(this._staticGroupAssignment),
      static_group_assignment_defined: cdktf.booleanToTerraform(this._staticGroupAssignmentDefined),
      static_profile_assignment: cdktf.booleanToTerraform(this._staticProfileAssignment),
      static_profile_assignment_defined: cdktf.booleanToTerraform(this._staticProfileAssignmentDefined),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customAttributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_store: {
        value: cdktf.stringToHclTerraform(this._identityStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_store_id: {
        value: cdktf.stringToHclTerraform(this._identityStoreId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdm_compliance_status: {
        value: cdktf.booleanToHclTerraform(this._mdmComplianceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mdm_encrypted: {
        value: cdktf.booleanToHclTerraform(this._mdmEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mdm_enrolled: {
        value: cdktf.booleanToHclTerraform(this._mdmEnrolled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mdm_imei: {
        value: cdktf.stringToHclTerraform(this._mdmImei),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdm_jail_broken: {
        value: cdktf.booleanToHclTerraform(this._mdmJailBroken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mdm_manufacturer: {
        value: cdktf.stringToHclTerraform(this._mdmManufacturer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdm_model: {
        value: cdktf.stringToHclTerraform(this._mdmModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdm_os: {
        value: cdktf.stringToHclTerraform(this._mdmOs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdm_phone_number: {
        value: cdktf.stringToHclTerraform(this._mdmPhoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdm_pinlock: {
        value: cdktf.booleanToHclTerraform(this._mdmPinlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mdm_reachable: {
        value: cdktf.booleanToHclTerraform(this._mdmReachable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mdm_serial: {
        value: cdktf.stringToHclTerraform(this._mdmSerial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mdm_server_name: {
        value: cdktf.stringToHclTerraform(this._mdmServerName),
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
      portal_user: {
        value: cdktf.stringToHclTerraform(this._portalUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_id: {
        value: cdktf.stringToHclTerraform(this._profileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_group_assignment: {
        value: cdktf.booleanToHclTerraform(this._staticGroupAssignment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      static_group_assignment_defined: {
        value: cdktf.booleanToHclTerraform(this._staticGroupAssignmentDefined),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      static_profile_assignment: {
        value: cdktf.booleanToHclTerraform(this._staticProfileAssignment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      static_profile_assignment_defined: {
        value: cdktf.booleanToHclTerraform(this._staticProfileAssignmentDefined),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
