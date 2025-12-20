// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * The address in which the site exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#address_line_1 Site#address_line_1}
  */
  readonly addressLine1?: string;
  /**
  * The address in which the site exists (continued)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#address_line_2 Site#address_line_2}
  */
  readonly addressLine2?: string;
  /**
  * The city in which the site exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#city Site#city}
  */
  readonly city?: string;
  /**
  * The country in which the site exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#country Site#country}
  */
  readonly country?: string;
  /**
  * The latitude coordinate for the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#latitude Site#latitude}
  */
  readonly latitude?: string;
  /**
  * The license type of the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#license_type Site#license_type}
  */
  readonly licenseType?: string;
  /**
  * The longitude coordinate for the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#longitude Site#longitude}
  */
  readonly longitude?: string;
  /**
  * Members
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#members Site#members}
  */
  readonly members?: SiteMembers[] | cdktf.IResolvable;
  /**
  * The name of the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#name Site#name}
  */
  readonly name: string;
  /**
  * Qos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#qos Site#qos}
  */
  readonly qos?: SiteQos;
  /**
  * The state in which the site exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#state Site#state}
  */
  readonly state?: string;
  /**
  * The site type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#type Site#type}
  */
  readonly type?: string;
  /**
  * The postal code in which the site exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#zip_code Site#zip_code}
  */
  readonly zipCode?: string;
}
export interface SiteMembers {
  /**
  * The mode of the remote network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#mode Site#mode}
  */
  readonly mode: string;
  /**
  * The member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#name Site#name}
  */
  readonly name: string;
  /**
  * The remote network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#remote_network Site#remote_network}
  */
  readonly remoteNetwork?: string;
}

export function siteMembersToTerraform(struct?: SiteMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    remote_network: cdktf.stringToTerraform(struct!.remoteNetwork),
  }
}


export function siteMembersToHclTerraform(struct?: SiteMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_network: {
      value: cdktf.stringToHclTerraform(struct!.remoteNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SiteMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remoteNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteNetwork = this._remoteNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._remoteNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._name = value.name;
      this._remoteNetwork = value.remoteNetwork;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // remote_network - computed: false, optional: true, required: false
  private _remoteNetwork?: string; 
  public get remoteNetwork() {
    return this.getStringAttribute('remote_network');
  }
  public set remoteNetwork(value: string) {
    this._remoteNetwork = value;
  }
  public resetRemoteNetwork() {
    this._remoteNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteNetworkInput() {
    return this._remoteNetwork;
  }
}

export class SiteMembersList extends cdktf.ComplexList {
  public internalValue? : SiteMembers[] | cdktf.IResolvable

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
  public get(index: number): SiteMembersOutputReference {
    return new SiteMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SiteQos {
  /**
  * The backup CIR in Mbps. This is distributed equally for all tunnels in the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#backup_cir Site#backup_cir}
  */
  readonly backupCir?: number;
  /**
  * The CIR in Mbps. This is distributed equally for all tunnels in the site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#cir Site#cir}
  */
  readonly cir?: number;
  /**
  * The name of the site QoS profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#profile Site#profile}
  */
  readonly profile?: string;
}

export function siteQosToTerraform(struct?: SiteQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_cir: cdktf.numberToTerraform(struct!.backupCir),
    cir: cdktf.numberToTerraform(struct!.cir),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function siteQosToHclTerraform(struct?: SiteQos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_cir: {
      value: cdktf.numberToHclTerraform(struct!.backupCir),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cir: {
      value: cdktf.numberToHclTerraform(struct!.cir),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteQosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteQos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupCir !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupCir = this._backupCir;
    }
    if (this._cir !== undefined) {
      hasAnyValues = true;
      internalValueResult.cir = this._cir;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteQos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupCir = undefined;
      this._cir = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupCir = value.backupCir;
      this._cir = value.cir;
      this._profile = value.profile;
    }
  }

  // backup_cir - computed: false, optional: true, required: false
  private _backupCir?: number; 
  public get backupCir() {
    return this.getNumberAttribute('backup_cir');
  }
  public set backupCir(value: number) {
    this._backupCir = value;
  }
  public resetBackupCir() {
    this._backupCir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupCirInput() {
    return this._backupCir;
  }

  // cir - computed: false, optional: true, required: false
  private _cir?: number; 
  public get cir() {
    return this.getNumberAttribute('cir');
  }
  public set cir(value: number) {
    this._cir = value;
  }
  public resetCir() {
    this._cir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cirInput() {
    return this._cir;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site scm_site}
*/
export class Site extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Site resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Site to import
  * @param importFromId The id of the existing Site that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Site to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/site scm_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteConfig
  */
  public constructor(scope: Construct, id: string, config: SiteConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_site',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressLine1 = config.addressLine1;
    this._addressLine2 = config.addressLine2;
    this._city = config.city;
    this._country = config.country;
    this._latitude = config.latitude;
    this._licenseType = config.licenseType;
    this._longitude = config.longitude;
    this._members.internalValue = config.members;
    this._name = config.name;
    this._qos.internalValue = config.qos;
    this._state = config.state;
    this._type = config.type;
    this._zipCode = config.zipCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_line_1 - computed: false, optional: true, required: false
  private _addressLine1?: string; 
  public get addressLine1() {
    return this.getStringAttribute('address_line_1');
  }
  public set addressLine1(value: string) {
    this._addressLine1 = value;
  }
  public resetAddressLine1() {
    this._addressLine1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine1Input() {
    return this._addressLine1;
  }

  // address_line_2 - computed: false, optional: true, required: false
  private _addressLine2?: string; 
  public get addressLine2() {
    return this.getStringAttribute('address_line_2');
  }
  public set addressLine2(value: string) {
    this._addressLine2 = value;
  }
  public resetAddressLine2() {
    this._addressLine2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressLine2Input() {
    return this._addressLine2;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latitude - computed: false, optional: true, required: false
  private _latitude?: string; 
  public get latitude() {
    return this.getStringAttribute('latitude');
  }
  public set latitude(value: string) {
    this._latitude = value;
  }
  public resetLatitude() {
    this._latitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // longitude - computed: false, optional: true, required: false
  private _longitude?: string; 
  public get longitude() {
    return this.getStringAttribute('longitude');
  }
  public set longitude(value: string) {
    this._longitude = value;
  }
  public resetLongitude() {
    this._longitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }

  // members - computed: false, optional: true, required: false
  private _members = new SiteMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: SiteMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
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

  // qos - computed: false, optional: true, required: false
  private _qos = new SiteQosOutputReference(this, "qos");
  public get qos() {
    return this._qos;
  }
  public putQos(value: SiteQos) {
    this._qos.internalValue = value;
  }
  public resetQos() {
    this._qos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qosInput() {
    return this._qos.internalValue;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // zip_code - computed: false, optional: true, required: false
  private _zipCode?: string; 
  public get zipCode() {
    return this.getStringAttribute('zip_code');
  }
  public set zipCode(value: string) {
    this._zipCode = value;
  }
  public resetZipCode() {
    this._zipCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zipCodeInput() {
    return this._zipCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_line_1: cdktf.stringToTerraform(this._addressLine1),
      address_line_2: cdktf.stringToTerraform(this._addressLine2),
      city: cdktf.stringToTerraform(this._city),
      country: cdktf.stringToTerraform(this._country),
      latitude: cdktf.stringToTerraform(this._latitude),
      license_type: cdktf.stringToTerraform(this._licenseType),
      longitude: cdktf.stringToTerraform(this._longitude),
      members: cdktf.listMapper(siteMembersToTerraform, false)(this._members.internalValue),
      name: cdktf.stringToTerraform(this._name),
      qos: siteQosToTerraform(this._qos.internalValue),
      state: cdktf.stringToTerraform(this._state),
      type: cdktf.stringToTerraform(this._type),
      zip_code: cdktf.stringToTerraform(this._zipCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_line_1: {
        value: cdktf.stringToHclTerraform(this._addressLine1),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_line_2: {
        value: cdktf.stringToHclTerraform(this._addressLine2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latitude: {
        value: cdktf.stringToHclTerraform(this._latitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      longitude: {
        value: cdktf.stringToHclTerraform(this._longitude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      members: {
        value: cdktf.listMapperHcl(siteMembersToHclTerraform, false)(this._members.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SiteMembersList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      qos: {
        value: siteQosToHclTerraform(this._qos.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteQos",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zip_code: {
        value: cdktf.stringToHclTerraform(this._zipCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
