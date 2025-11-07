// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * full address of the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#address Site#address}
  */
  readonly address: string;
  /**
  * Alarm Template ID, this takes precedence over the Org-level alarmtemplate_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#alarmtemplate_id Site#alarmtemplate_id}
  */
  readonly alarmtemplateId?: string;
  /**
  * AP Template ID, used by APs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#aptemplate_id Site#aptemplate_id}
  */
  readonly aptemplateId?: string;
  /**
  * Country code for the site (for AP config generation), in two-character
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#country_code Site#country_code}
  */
  readonly countryCode?: string;
  /**
  * Gateway Template ID, used by gateways
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#gatewaytemplate_id Site#gatewaytemplate_id}
  */
  readonly gatewaytemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#latlng Site#latlng}
  */
  readonly latlng?: SiteLatlng;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#name Site#name}
  */
  readonly name: string;
  /**
  * Network Template ID, this takes precedence over Site Settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#networktemplate_id Site#networktemplate_id}
  */
  readonly networktemplateId?: string;
  /**
  * Optional, any notes about the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#notes Site#notes}
  */
  readonly notes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#org_id Site#org_id}
  */
  readonly orgId: string;
  /**
  * RF Template ID, this takes precedence over Site Settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#rftemplate_id Site#rftemplate_id}
  */
  readonly rftemplateId?: string;
  /**
  * SecPolicy ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#secpolicy_id Site#secpolicy_id}
  */
  readonly secpolicyId?: string;
  /**
  * Sitegroups this site belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#sitegroup_ids Site#sitegroup_ids}
  */
  readonly sitegroupIds?: string[];
  /**
  * Site Template ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#sitetemplate_id Site#sitetemplate_id}
  */
  readonly sitetemplateId?: string;
  /**
  * Timezone the site is at
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#timezone Site#timezone}
  */
  readonly timezone?: string;
}
export interface SiteLatlng {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#lat Site#lat}
  */
  readonly lat: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#lng Site#lng}
  */
  readonly lng: number;
}

export function siteLatlngToTerraform(struct?: SiteLatlng | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    lat: cdktf.numberToTerraform(struct!.lat),
    lng: cdktf.numberToTerraform(struct!.lng),
  }
}


export function siteLatlngToHclTerraform(struct?: SiteLatlng | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    lat: {
      value: cdktf.numberToHclTerraform(struct!.lat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lng: {
      value: cdktf.numberToHclTerraform(struct!.lng),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteLatlngOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SiteLatlng | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._lat !== undefined) {
      hasAnyValues = true;
      internalValueResult.lat = this._lat;
    }
    if (this._lng !== undefined) {
      hasAnyValues = true;
      internalValueResult.lng = this._lng;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteLatlng | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._lat = undefined;
      this._lng = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._lat = value.lat;
      this._lng = value.lng;
    }
  }

  // lat - computed: false, optional: false, required: true
  private _lat?: number; 
  public get lat() {
    return this.getNumberAttribute('lat');
  }
  public set lat(value: number) {
    this._lat = value;
  }
  // Temporarily expose input value. Use with caution.
  public get latInput() {
    return this._lat;
  }

  // lng - computed: false, optional: false, required: true
  private _lng?: number; 
  public get lng() {
    return this.getNumberAttribute('lng');
  }
  public set lng(value: number) {
    this._lng = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lngInput() {
    return this._lng;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site mist_site}
*/
export class Site extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Site resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Site to import
  * @param importFromId The id of the existing Site that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Site to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/site mist_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteConfig
  */
  public constructor(scope: Construct, id: string, config: SiteConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_site',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._address = config.address;
    this._alarmtemplateId = config.alarmtemplateId;
    this._aptemplateId = config.aptemplateId;
    this._countryCode = config.countryCode;
    this._gatewaytemplateId = config.gatewaytemplateId;
    this._latlng.internalValue = config.latlng;
    this._name = config.name;
    this._networktemplateId = config.networktemplateId;
    this._notes = config.notes;
    this._orgId = config.orgId;
    this._rftemplateId = config.rftemplateId;
    this._secpolicyId = config.secpolicyId;
    this._sitegroupIds = config.sitegroupIds;
    this._sitetemplateId = config.sitetemplateId;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // alarmtemplate_id - computed: false, optional: true, required: false
  private _alarmtemplateId?: string; 
  public get alarmtemplateId() {
    return this.getStringAttribute('alarmtemplate_id');
  }
  public set alarmtemplateId(value: string) {
    this._alarmtemplateId = value;
  }
  public resetAlarmtemplateId() {
    this._alarmtemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmtemplateIdInput() {
    return this._alarmtemplateId;
  }

  // aptemplate_id - computed: false, optional: true, required: false
  private _aptemplateId?: string; 
  public get aptemplateId() {
    return this.getStringAttribute('aptemplate_id');
  }
  public set aptemplateId(value: string) {
    this._aptemplateId = value;
  }
  public resetAptemplateId() {
    this._aptemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptemplateIdInput() {
    return this._aptemplateId;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // gatewaytemplate_id - computed: false, optional: true, required: false
  private _gatewaytemplateId?: string; 
  public get gatewaytemplateId() {
    return this.getStringAttribute('gatewaytemplate_id');
  }
  public set gatewaytemplateId(value: string) {
    this._gatewaytemplateId = value;
  }
  public resetGatewaytemplateId() {
    this._gatewaytemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaytemplateIdInput() {
    return this._gatewaytemplateId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latlng - computed: false, optional: true, required: false
  private _latlng = new SiteLatlngOutputReference(this, "latlng");
  public get latlng() {
    return this._latlng;
  }
  public putLatlng(value: SiteLatlng) {
    this._latlng.internalValue = value;
  }
  public resetLatlng() {
    this._latlng.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get latlngInput() {
    return this._latlng.internalValue;
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

  // networktemplate_id - computed: false, optional: true, required: false
  private _networktemplateId?: string; 
  public get networktemplateId() {
    return this.getStringAttribute('networktemplate_id');
  }
  public set networktemplateId(value: string) {
    this._networktemplateId = value;
  }
  public resetNetworktemplateId() {
    this._networktemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networktemplateIdInput() {
    return this._networktemplateId;
  }

  // notes - computed: true, optional: true, required: false
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  public resetNotes() {
    this._notes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // rftemplate_id - computed: false, optional: true, required: false
  private _rftemplateId?: string; 
  public get rftemplateId() {
    return this.getStringAttribute('rftemplate_id');
  }
  public set rftemplateId(value: string) {
    this._rftemplateId = value;
  }
  public resetRftemplateId() {
    this._rftemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rftemplateIdInput() {
    return this._rftemplateId;
  }

  // secpolicy_id - computed: false, optional: true, required: false
  private _secpolicyId?: string; 
  public get secpolicyId() {
    return this.getStringAttribute('secpolicy_id');
  }
  public set secpolicyId(value: string) {
    this._secpolicyId = value;
  }
  public resetSecpolicyId() {
    this._secpolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secpolicyIdInput() {
    return this._secpolicyId;
  }

  // sitegroup_ids - computed: true, optional: true, required: false
  private _sitegroupIds?: string[]; 
  public get sitegroupIds() {
    return this.getListAttribute('sitegroup_ids');
  }
  public set sitegroupIds(value: string[]) {
    this._sitegroupIds = value;
  }
  public resetSitegroupIds() {
    this._sitegroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitegroupIdsInput() {
    return this._sitegroupIds;
  }

  // sitetemplate_id - computed: false, optional: true, required: false
  private _sitetemplateId?: string; 
  public get sitetemplateId() {
    return this.getStringAttribute('sitetemplate_id');
  }
  public set sitetemplateId(value: string) {
    this._sitetemplateId = value;
  }
  public resetSitetemplateId() {
    this._sitetemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitetemplateIdInput() {
    return this._sitetemplateId;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // tzoffset - computed: true, optional: false, required: false
  public get tzoffset() {
    return this.getNumberAttribute('tzoffset');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      alarmtemplate_id: cdktf.stringToTerraform(this._alarmtemplateId),
      aptemplate_id: cdktf.stringToTerraform(this._aptemplateId),
      country_code: cdktf.stringToTerraform(this._countryCode),
      gatewaytemplate_id: cdktf.stringToTerraform(this._gatewaytemplateId),
      latlng: siteLatlngToTerraform(this._latlng.internalValue),
      name: cdktf.stringToTerraform(this._name),
      networktemplate_id: cdktf.stringToTerraform(this._networktemplateId),
      notes: cdktf.stringToTerraform(this._notes),
      org_id: cdktf.stringToTerraform(this._orgId),
      rftemplate_id: cdktf.stringToTerraform(this._rftemplateId),
      secpolicy_id: cdktf.stringToTerraform(this._secpolicyId),
      sitegroup_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sitegroupIds),
      sitetemplate_id: cdktf.stringToTerraform(this._sitetemplateId),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alarmtemplate_id: {
        value: cdktf.stringToHclTerraform(this._alarmtemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aptemplate_id: {
        value: cdktf.stringToHclTerraform(this._aptemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country_code: {
        value: cdktf.stringToHclTerraform(this._countryCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gatewaytemplate_id: {
        value: cdktf.stringToHclTerraform(this._gatewaytemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      latlng: {
        value: siteLatlngToHclTerraform(this._latlng.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SiteLatlng",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networktemplate_id: {
        value: cdktf.stringToHclTerraform(this._networktemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rftemplate_id: {
        value: cdktf.stringToHclTerraform(this._rftemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secpolicy_id: {
        value: cdktf.stringToHclTerraform(this._secpolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sitegroup_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sitegroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sitetemplate_id: {
        value: cdktf.stringToHclTerraform(this._sitetemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
