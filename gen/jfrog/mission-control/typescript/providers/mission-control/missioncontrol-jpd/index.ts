// https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MissioncontrolJpdConfig extends cdktf.TerraformMetaArguments {
  /**
  * The geographical location of the Platform Deployment to be displayed on a global Platform Deployment view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#location MissioncontrolJpd#location}
  */
  readonly location: MissioncontrolJpdLocation;
  /**
  * A unique logical name for this Platform Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#name MissioncontrolJpd#name}
  */
  readonly name: string;
  /**
  * Admin password for legacy JPD (Artifactory 6.x).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#password MissioncontrolJpd#password}
  */
  readonly password?: string;
  /**
  * Add labels to be applied for filtering Platform Deployments according to categories for example, location, dedicated centers - dev, testing, production
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#tags MissioncontrolJpd#tags}
  */
  readonly tags?: string[];
  /**
  * JPD join key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#token MissioncontrolJpd#token}
  */
  readonly token?: string;
  /**
  * The Platform deployment URL: `http://<hostname>:<port>/`; for example: `http://myplatformserver:8082/`. Note: For legacy instances, version 6.x and lower, the URL should contain the instance root context: `http://<hostname>:<port>/<context>/`; for example `http://myv6server:8081/artifactory/`. URL must ends with trailing slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#url MissioncontrolJpd#url}
  */
  readonly url: string;
  /**
  * Admin username for legacy JPD (Artifactory 6.x).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#username MissioncontrolJpd#username}
  */
  readonly username?: string;
}
export interface MissioncontrolJpdLicenses {
}

export function missioncontrolJpdLicensesToTerraform(struct?: MissioncontrolJpdLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function missioncontrolJpdLicensesToHclTerraform(struct?: MissioncontrolJpdLicenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MissioncontrolJpdLicensesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MissioncontrolJpdLicenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MissioncontrolJpdLicenses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expired - computed: true, optional: false, required: false
  public get expired() {
    return this.getBooleanAttribute('expired');
  }

  // license_hash - computed: true, optional: false, required: false
  public get licenseHash() {
    return this.getStringAttribute('license_hash');
  }

  // licensed_to - computed: true, optional: false, required: false
  public get licensedTo() {
    return this.getStringAttribute('licensed_to');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // valid_through - computed: true, optional: false, required: false
  public get validThrough() {
    return this.getStringAttribute('valid_through');
  }
}

export class MissioncontrolJpdLicensesList extends cdktf.ComplexList {

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
  public get(index: number): MissioncontrolJpdLicensesOutputReference {
    return new MissioncontrolJpdLicensesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MissioncontrolJpdLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#city_name MissioncontrolJpd#city_name}
  */
  readonly cityName: string;
  /**
  * 2 letters ISO-3166-2 country code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#country_code MissioncontrolJpd#country_code}
  */
  readonly countryCode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#latitude MissioncontrolJpd#latitude}
  */
  readonly latitude: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#longitude MissioncontrolJpd#longitude}
  */
  readonly longitude: number;
}

export function missioncontrolJpdLocationToTerraform(struct?: MissioncontrolJpdLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    city_name: cdktf.stringToTerraform(struct!.cityName),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    latitude: cdktf.numberToTerraform(struct!.latitude),
    longitude: cdktf.numberToTerraform(struct!.longitude),
  }
}


export function missioncontrolJpdLocationToHclTerraform(struct?: MissioncontrolJpdLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    city_name: {
      value: cdktf.stringToHclTerraform(struct!.cityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code: {
      value: cdktf.stringToHclTerraform(struct!.countryCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    latitude: {
      value: cdktf.numberToHclTerraform(struct!.latitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    longitude: {
      value: cdktf.numberToHclTerraform(struct!.longitude),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MissioncontrolJpdLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MissioncontrolJpdLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cityName = this._cityName;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._latitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.latitude = this._latitude;
    }
    if (this._longitude !== undefined) {
      hasAnyValues = true;
      internalValueResult.longitude = this._longitude;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MissioncontrolJpdLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cityName = undefined;
      this._countryCode = undefined;
      this._latitude = undefined;
      this._longitude = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cityName = value.cityName;
      this._countryCode = value.countryCode;
      this._latitude = value.latitude;
      this._longitude = value.longitude;
    }
  }

  // city_name - computed: false, optional: false, required: true
  private _cityName?: string; 
  public get cityName() {
    return this.getStringAttribute('city_name');
  }
  public set cityName(value: string) {
    this._cityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cityNameInput() {
    return this._cityName;
  }

  // country_code - computed: false, optional: false, required: true
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // latitude - computed: false, optional: false, required: true
  private _latitude?: number; 
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }
  public set latitude(value: number) {
    this._latitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latitudeInput() {
    return this._latitude;
  }

  // longitude - computed: false, optional: false, required: true
  private _longitude?: number; 
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }
  public set longitude(value: number) {
    this._longitude = value;
  }
  // Temporarily expose input value. Use with caution.
  public get longitudeInput() {
    return this._longitude;
  }
}
export interface MissioncontrolJpdServicesStatus {
}

export function missioncontrolJpdServicesStatusToTerraform(struct?: MissioncontrolJpdServicesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function missioncontrolJpdServicesStatusToHclTerraform(struct?: MissioncontrolJpdServicesStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MissioncontrolJpdServicesStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MissioncontrolJpdServicesStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MissioncontrolJpdServicesStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }
}
export interface MissioncontrolJpdServices {
}

export function missioncontrolJpdServicesToTerraform(struct?: MissioncontrolJpdServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function missioncontrolJpdServicesToHclTerraform(struct?: MissioncontrolJpdServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MissioncontrolJpdServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MissioncontrolJpdServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MissioncontrolJpdServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  private _status = new MissioncontrolJpdServicesStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class MissioncontrolJpdServicesList extends cdktf.ComplexList {

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
  public get(index: number): MissioncontrolJpdServicesOutputReference {
    return new MissioncontrolJpdServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MissioncontrolJpdStatus {
}

export function missioncontrolJpdStatusToTerraform(struct?: MissioncontrolJpdStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function missioncontrolJpdStatusToHclTerraform(struct?: MissioncontrolJpdStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MissioncontrolJpdStatusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MissioncontrolJpdStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MissioncontrolJpdStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getStringAttribute('code');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // warnings - computed: true, optional: false, required: false
  public get warnings() {
    return cdktf.Fn.tolist(this.getListAttribute('warnings'));
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd missioncontrol_jpd}
*/
export class MissioncontrolJpd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "missioncontrol_jpd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MissioncontrolJpd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MissioncontrolJpd to import
  * @param importFromId The id of the existing MissioncontrolJpd that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MissioncontrolJpd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "missioncontrol_jpd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/mission-control/1.1.0/docs/resources/missioncontrol_jpd missioncontrol_jpd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MissioncontrolJpdConfig
  */
  public constructor(scope: Construct, id: string, config: MissioncontrolJpdConfig) {
    super(scope, id, {
      terraformResourceType: 'missioncontrol_jpd',
      terraformGeneratorMetadata: {
        providerName: 'mission-control',
        providerVersion: '1.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._location.internalValue = config.location;
    this._name = config.name;
    this._password = config.password;
    this._tags = config.tags;
    this._token = config.token;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // cold_storage_jpd - computed: true, optional: false, required: false
  public get coldStorageJpd() {
    return this.getStringAttribute('cold_storage_jpd');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_cold_storage - computed: true, optional: false, required: false
  public get isColdStorage() {
    return this.getBooleanAttribute('is_cold_storage');
  }

  // licenses - computed: true, optional: false, required: false
  private _licenses = new MissioncontrolJpdLicensesList(this, "licenses", true);
  public get licenses() {
    return this._licenses;
  }

  // local - computed: true, optional: false, required: false
  public get local() {
    return this.getBooleanAttribute('local');
  }

  // location - computed: false, optional: false, required: true
  private _location = new MissioncontrolJpdLocationOutputReference(this, "location");
  public get location() {
    return this._location;
  }
  public putLocation(value: MissioncontrolJpdLocation) {
    this._location.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
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

  // services - computed: true, optional: false, required: false
  private _services = new MissioncontrolJpdServicesList(this, "services", true);
  public get services() {
    return this._services;
  }

  // status - computed: true, optional: false, required: false
  private _status = new MissioncontrolJpdStatusOutputReference(this, "status");
  public get status() {
    return this._status;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      location: missioncontrolJpdLocationToTerraform(this._location.internalValue),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      token: cdktf.stringToTerraform(this._token),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      location: {
        value: missioncontrolJpdLocationToHclTerraform(this._location.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MissioncontrolJpdLocation",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
