// https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCentersConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * How many Imperva PoPs should assess Data Center as down before failover is performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#fail_over_required_monitors DataCentersConfiguration#fail_over_required_monitors}
  */
  readonly failOverRequiredMonitors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#id DataCentersConfiguration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When true our proxy servers will maintain session stickiness to origin servers by a cookie.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#is_persistent DataCentersConfiguration#is_persistent}
  */
  readonly isPersistent?: boolean | cdktf.IResolvable;
  /**
  * Password, if required by the kickstart URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#kickstart_password DataCentersConfiguration#kickstart_password}
  */
  readonly kickstartPassword?: string;
  /**
  * The URL that will be sent to the standby server when Imperva performs failover based on our monitoring. E.g. https://www.example.com/kickStart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#kickstart_url DataCentersConfiguration#kickstart_url}
  */
  readonly kickstartUrl?: string;
  /**
  * User name, if required by the kickstart URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#kickstart_user DataCentersConfiguration#kickstart_user}
  */
  readonly kickstartUser?: string;
  /**
  * The minimal number of available data center's servers to consider that data center as UP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#min_available_servers_for_dc_up DataCentersConfiguration#min_available_servers_for_dc_up}
  */
  readonly minAvailableServersForDcUp?: number;
  /**
  * Numeric identifier of the site to operate on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#site_id DataCentersConfiguration#site_id}
  */
  readonly siteId: string;
  /**
  * How to load balance between multiple Data Centers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#site_lb_algorithm DataCentersConfiguration#site_lb_algorithm}
  */
  readonly siteLbAlgorithm?: string;
  /**
  * One of: 'SINGLE_SERVER' - No LB supported, 'SINGLE_DC' - Multiple servers on single Data Center, or 'MULTIPLE_DC' - Multiple Data Centers having multiple origin servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#site_topology DataCentersConfiguration#site_topology}
  */
  readonly siteTopology?: string;
  /**
  * data_center block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#data_center DataCentersConfiguration#data_center}
  */
  readonly dataCenter: DataCentersConfigurationDataCenter[] | cdktf.IResolvable;
}
export interface DataCentersConfigurationDataCenterOriginServer {
  /**
  * Origin server address. can be specified as IPv4, IPv6, or DNS host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#address DataCentersConfiguration#address}
  */
  readonly address: string;
  /**
  * Specifies if the origin server is an active or a standby origin server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#is_active DataCentersConfiguration#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Specifies if the origin server is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#is_enabled DataCentersConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * When dc_lb_algorithm = WEIGHTED, the weight in pecentage of this origin server. Then, total weight of all origin server on each Data Center must be 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#weight DataCentersConfiguration#weight}
  */
  readonly weight?: number;
}

export function dataCentersConfigurationDataCenterOriginServerToTerraform(struct?: DataCentersConfigurationDataCenterOriginServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    is_active: cdktf.booleanToTerraform(struct!.isActive),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataCentersConfigurationDataCenterOriginServerToHclTerraform(struct?: DataCentersConfigurationDataCenterOriginServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_active: {
      value: cdktf.booleanToHclTerraform(struct!.isActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCentersConfigurationDataCenterOriginServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCentersConfigurationDataCenterOriginServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._isActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActive = this._isActive;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCentersConfigurationDataCenterOriginServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._isActive = undefined;
      this._isEnabled = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._isActive = value.isActive;
      this._isEnabled = value.isEnabled;
      this._weight = value.weight;
    }
  }

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

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataCentersConfigurationDataCenterOriginServerList extends cdktf.ComplexList {
  public internalValue? : DataCentersConfigurationDataCenterOriginServer[] | cdktf.IResolvable

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
  public get(index: number): DataCentersConfigurationDataCenterOriginServerOutputReference {
    return new DataCentersConfigurationDataCenterOriginServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCentersConfigurationDataCenter {
  /**
  * How to load balance between the servers of this data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#dc_lb_algorithm DataCentersConfiguration#dc_lb_algorithm}
  */
  readonly dcLbAlgorithm?: string;
  /**
  * List of geo regions that this data center will serve. Mandatory if site_lb_algorithm = GEO_PREFERRED or GEO_REQUIRED. E.g. "ASIA,AFRICA"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#geo_locations DataCentersConfiguration#geo_locations}
  */
  readonly geoLocations?: string;
  /**
  * SINGLE_IP supports multiple processes on same origin server each listening to a different port, MULTIPLE_IP support multiple origin servers all listening to same port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#ip_mode DataCentersConfiguration#ip_mode}
  */
  readonly ipMode?: string;
  /**
  * Specifies if the Data Center is an active or a standby Data Center. No more than one standby Data Center can be defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#is_active DataCentersConfiguration#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * When true, this data center will only handle requests that were routed to it using application delivery forward rules. If true, must be an enabled data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#is_content DataCentersConfiguration#is_content}
  */
  readonly isContent?: boolean | cdktf.IResolvable;
  /**
  * Specifies if the Data Center is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#is_enabled DataCentersConfiguration#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * When true and site_lb_algorithm = GEO_PREFERRED or GEO_REQUIRED, exactly one data center must have is_rest_of_the_world = true. This data center will handle traffic from any region that is not assigned to a specific data center.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#is_rest_of_the_world DataCentersConfiguration#is_rest_of_the_world}
  */
  readonly isRestOfTheWorld?: boolean | cdktf.IResolvable;
  /**
  * Data Center name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#name DataCentersConfiguration#name}
  */
  readonly name: string;
  /**
  * The ID of the PoP that serves as an access point between Imperva and the customer’s origin server. E.g. "lax", for Los Angeles. When not specified, all Imperva PoPs can send traffic to this data center. The list of available PoPs is documented at: https://docs.imperva.com/bundle/cloud-application-security/page/more/pops.htm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#origin_pop DataCentersConfiguration#origin_pop}
  */
  readonly originPop?: string;
  /**
  * When IP mode = SINGLE_IP, number of web servers (processes) per server. Each web server listens to different port. E.g. when web_servers_per_server = 5, HTTP traffic will use ports 80-84 while HTTPS traffic will use ports 443-447
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#web_servers_per_server DataCentersConfiguration#web_servers_per_server}
  */
  readonly webServersPerServer?: number;
  /**
  * When site_lb_algorithm = WEIGHTED_LB, the weight in pecentage of this Data Center. Then, total weight of all Data Centers must be 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#weight DataCentersConfiguration#weight}
  */
  readonly weight?: number;
  /**
  * origin_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#origin_server DataCentersConfiguration#origin_server}
  */
  readonly originServer: DataCentersConfigurationDataCenterOriginServer[] | cdktf.IResolvable;
}

export function dataCentersConfigurationDataCenterToTerraform(struct?: DataCentersConfigurationDataCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dc_lb_algorithm: cdktf.stringToTerraform(struct!.dcLbAlgorithm),
    geo_locations: cdktf.stringToTerraform(struct!.geoLocations),
    ip_mode: cdktf.stringToTerraform(struct!.ipMode),
    is_active: cdktf.booleanToTerraform(struct!.isActive),
    is_content: cdktf.booleanToTerraform(struct!.isContent),
    is_enabled: cdktf.booleanToTerraform(struct!.isEnabled),
    is_rest_of_the_world: cdktf.booleanToTerraform(struct!.isRestOfTheWorld),
    name: cdktf.stringToTerraform(struct!.name),
    origin_pop: cdktf.stringToTerraform(struct!.originPop),
    web_servers_per_server: cdktf.numberToTerraform(struct!.webServersPerServer),
    weight: cdktf.numberToTerraform(struct!.weight),
    origin_server: cdktf.listMapper(dataCentersConfigurationDataCenterOriginServerToTerraform, true)(struct!.originServer),
  }
}


export function dataCentersConfigurationDataCenterToHclTerraform(struct?: DataCentersConfigurationDataCenter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dc_lb_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.dcLbAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_locations: {
      value: cdktf.stringToHclTerraform(struct!.geoLocations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_mode: {
      value: cdktf.stringToHclTerraform(struct!.ipMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_active: {
      value: cdktf.booleanToHclTerraform(struct!.isActive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_content: {
      value: cdktf.booleanToHclTerraform(struct!.isContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_rest_of_the_world: {
      value: cdktf.booleanToHclTerraform(struct!.isRestOfTheWorld),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    origin_pop: {
      value: cdktf.stringToHclTerraform(struct!.originPop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_servers_per_server: {
      value: cdktf.numberToHclTerraform(struct!.webServersPerServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    origin_server: {
      value: cdktf.listMapperHcl(dataCentersConfigurationDataCenterOriginServerToHclTerraform, true)(struct!.originServer),
      isBlock: true,
      type: "set",
      storageClassType: "DataCentersConfigurationDataCenterOriginServerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCentersConfigurationDataCenterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCentersConfigurationDataCenter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dcLbAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcLbAlgorithm = this._dcLbAlgorithm;
    }
    if (this._geoLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLocations = this._geoLocations;
    }
    if (this._ipMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMode = this._ipMode;
    }
    if (this._isActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.isActive = this._isActive;
    }
    if (this._isContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.isContent = this._isContent;
    }
    if (this._isEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnabled = this._isEnabled;
    }
    if (this._isRestOfTheWorld !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRestOfTheWorld = this._isRestOfTheWorld;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._originPop !== undefined) {
      hasAnyValues = true;
      internalValueResult.originPop = this._originPop;
    }
    if (this._webServersPerServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.webServersPerServer = this._webServersPerServer;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    if (this._originServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originServer = this._originServer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCentersConfigurationDataCenter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dcLbAlgorithm = undefined;
      this._geoLocations = undefined;
      this._ipMode = undefined;
      this._isActive = undefined;
      this._isContent = undefined;
      this._isEnabled = undefined;
      this._isRestOfTheWorld = undefined;
      this._name = undefined;
      this._originPop = undefined;
      this._webServersPerServer = undefined;
      this._weight = undefined;
      this._originServer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dcLbAlgorithm = value.dcLbAlgorithm;
      this._geoLocations = value.geoLocations;
      this._ipMode = value.ipMode;
      this._isActive = value.isActive;
      this._isContent = value.isContent;
      this._isEnabled = value.isEnabled;
      this._isRestOfTheWorld = value.isRestOfTheWorld;
      this._name = value.name;
      this._originPop = value.originPop;
      this._webServersPerServer = value.webServersPerServer;
      this._weight = value.weight;
      this._originServer.internalValue = value.originServer;
    }
  }

  // dc_id - computed: true, optional: false, required: false
  public get dcId() {
    return this.getNumberAttribute('dc_id');
  }

  // dc_lb_algorithm - computed: false, optional: true, required: false
  private _dcLbAlgorithm?: string; 
  public get dcLbAlgorithm() {
    return this.getStringAttribute('dc_lb_algorithm');
  }
  public set dcLbAlgorithm(value: string) {
    this._dcLbAlgorithm = value;
  }
  public resetDcLbAlgorithm() {
    this._dcLbAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcLbAlgorithmInput() {
    return this._dcLbAlgorithm;
  }

  // geo_locations - computed: false, optional: true, required: false
  private _geoLocations?: string; 
  public get geoLocations() {
    return this.getStringAttribute('geo_locations');
  }
  public set geoLocations(value: string) {
    this._geoLocations = value;
  }
  public resetGeoLocations() {
    this._geoLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLocationsInput() {
    return this._geoLocations;
  }

  // ip_mode - computed: false, optional: true, required: false
  private _ipMode?: string; 
  public get ipMode() {
    return this.getStringAttribute('ip_mode');
  }
  public set ipMode(value: string) {
    this._ipMode = value;
  }
  public resetIpMode() {
    this._ipMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipModeInput() {
    return this._ipMode;
  }

  // is_active - computed: false, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // is_content - computed: false, optional: true, required: false
  private _isContent?: boolean | cdktf.IResolvable; 
  public get isContent() {
    return this.getBooleanAttribute('is_content');
  }
  public set isContent(value: boolean | cdktf.IResolvable) {
    this._isContent = value;
  }
  public resetIsContent() {
    this._isContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isContentInput() {
    return this._isContent;
  }

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // is_rest_of_the_world - computed: false, optional: true, required: false
  private _isRestOfTheWorld?: boolean | cdktf.IResolvable; 
  public get isRestOfTheWorld() {
    return this.getBooleanAttribute('is_rest_of_the_world');
  }
  public set isRestOfTheWorld(value: boolean | cdktf.IResolvable) {
    this._isRestOfTheWorld = value;
  }
  public resetIsRestOfTheWorld() {
    this._isRestOfTheWorld = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRestOfTheWorldInput() {
    return this._isRestOfTheWorld;
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

  // origin_pop - computed: false, optional: true, required: false
  private _originPop?: string; 
  public get originPop() {
    return this.getStringAttribute('origin_pop');
  }
  public set originPop(value: string) {
    this._originPop = value;
  }
  public resetOriginPop() {
    this._originPop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originPopInput() {
    return this._originPop;
  }

  // web_servers_per_server - computed: false, optional: true, required: false
  private _webServersPerServer?: number; 
  public get webServersPerServer() {
    return this.getNumberAttribute('web_servers_per_server');
  }
  public set webServersPerServer(value: number) {
    this._webServersPerServer = value;
  }
  public resetWebServersPerServer() {
    this._webServersPerServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webServersPerServerInput() {
    return this._webServersPerServer;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }

  // origin_server - computed: false, optional: false, required: true
  private _originServer = new DataCentersConfigurationDataCenterOriginServerList(this, "origin_server", true);
  public get originServer() {
    return this._originServer;
  }
  public putOriginServer(value: DataCentersConfigurationDataCenterOriginServer[] | cdktf.IResolvable) {
    this._originServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originServerInput() {
    return this._originServer.internalValue;
  }
}

export class DataCentersConfigurationDataCenterList extends cdktf.ComplexList {
  public internalValue? : DataCentersConfigurationDataCenter[] | cdktf.IResolvable

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
  public get(index: number): DataCentersConfigurationDataCenterOutputReference {
    return new DataCentersConfigurationDataCenterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration incapsula_data_centers_configuration}
*/
export class DataCentersConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "incapsula_data_centers_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCentersConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCentersConfiguration to import
  * @param importFromId The id of the existing DataCentersConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCentersConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "incapsula_data_centers_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/imperva/incapsula/3.35.1/docs/resources/data_centers_configuration incapsula_data_centers_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCentersConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: DataCentersConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'incapsula_data_centers_configuration',
      terraformGeneratorMetadata: {
        providerName: 'incapsula',
        providerVersion: '3.35.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._failOverRequiredMonitors = config.failOverRequiredMonitors;
    this._id = config.id;
    this._isPersistent = config.isPersistent;
    this._kickstartPassword = config.kickstartPassword;
    this._kickstartUrl = config.kickstartUrl;
    this._kickstartUser = config.kickstartUser;
    this._minAvailableServersForDcUp = config.minAvailableServersForDcUp;
    this._siteId = config.siteId;
    this._siteLbAlgorithm = config.siteLbAlgorithm;
    this._siteTopology = config.siteTopology;
    this._dataCenter.internalValue = config.dataCenter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fail_over_required_monitors - computed: false, optional: true, required: false
  private _failOverRequiredMonitors?: string; 
  public get failOverRequiredMonitors() {
    return this.getStringAttribute('fail_over_required_monitors');
  }
  public set failOverRequiredMonitors(value: string) {
    this._failOverRequiredMonitors = value;
  }
  public resetFailOverRequiredMonitors() {
    this._failOverRequiredMonitors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failOverRequiredMonitorsInput() {
    return this._failOverRequiredMonitors;
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

  // is_persistent - computed: false, optional: true, required: false
  private _isPersistent?: boolean | cdktf.IResolvable; 
  public get isPersistent() {
    return this.getBooleanAttribute('is_persistent');
  }
  public set isPersistent(value: boolean | cdktf.IResolvable) {
    this._isPersistent = value;
  }
  public resetIsPersistent() {
    this._isPersistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPersistentInput() {
    return this._isPersistent;
  }

  // kickstart_password - computed: false, optional: true, required: false
  private _kickstartPassword?: string; 
  public get kickstartPassword() {
    return this.getStringAttribute('kickstart_password');
  }
  public set kickstartPassword(value: string) {
    this._kickstartPassword = value;
  }
  public resetKickstartPassword() {
    this._kickstartPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kickstartPasswordInput() {
    return this._kickstartPassword;
  }

  // kickstart_url - computed: false, optional: true, required: false
  private _kickstartUrl?: string; 
  public get kickstartUrl() {
    return this.getStringAttribute('kickstart_url');
  }
  public set kickstartUrl(value: string) {
    this._kickstartUrl = value;
  }
  public resetKickstartUrl() {
    this._kickstartUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kickstartUrlInput() {
    return this._kickstartUrl;
  }

  // kickstart_user - computed: false, optional: true, required: false
  private _kickstartUser?: string; 
  public get kickstartUser() {
    return this.getStringAttribute('kickstart_user');
  }
  public set kickstartUser(value: string) {
    this._kickstartUser = value;
  }
  public resetKickstartUser() {
    this._kickstartUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kickstartUserInput() {
    return this._kickstartUser;
  }

  // min_available_servers_for_dc_up - computed: false, optional: true, required: false
  private _minAvailableServersForDcUp?: number; 
  public get minAvailableServersForDcUp() {
    return this.getNumberAttribute('min_available_servers_for_dc_up');
  }
  public set minAvailableServersForDcUp(value: number) {
    this._minAvailableServersForDcUp = value;
  }
  public resetMinAvailableServersForDcUp() {
    this._minAvailableServersForDcUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minAvailableServersForDcUpInput() {
    return this._minAvailableServersForDcUp;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // site_lb_algorithm - computed: false, optional: true, required: false
  private _siteLbAlgorithm?: string; 
  public get siteLbAlgorithm() {
    return this.getStringAttribute('site_lb_algorithm');
  }
  public set siteLbAlgorithm(value: string) {
    this._siteLbAlgorithm = value;
  }
  public resetSiteLbAlgorithm() {
    this._siteLbAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteLbAlgorithmInput() {
    return this._siteLbAlgorithm;
  }

  // site_topology - computed: false, optional: true, required: false
  private _siteTopology?: string; 
  public get siteTopology() {
    return this.getStringAttribute('site_topology');
  }
  public set siteTopology(value: string) {
    this._siteTopology = value;
  }
  public resetSiteTopology() {
    this._siteTopology = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteTopologyInput() {
    return this._siteTopology;
  }

  // data_center - computed: false, optional: false, required: true
  private _dataCenter = new DataCentersConfigurationDataCenterList(this, "data_center", true);
  public get dataCenter() {
    return this._dataCenter;
  }
  public putDataCenter(value: DataCentersConfigurationDataCenter[] | cdktf.IResolvable) {
    this._dataCenter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCenterInput() {
    return this._dataCenter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fail_over_required_monitors: cdktf.stringToTerraform(this._failOverRequiredMonitors),
      id: cdktf.stringToTerraform(this._id),
      is_persistent: cdktf.booleanToTerraform(this._isPersistent),
      kickstart_password: cdktf.stringToTerraform(this._kickstartPassword),
      kickstart_url: cdktf.stringToTerraform(this._kickstartUrl),
      kickstart_user: cdktf.stringToTerraform(this._kickstartUser),
      min_available_servers_for_dc_up: cdktf.numberToTerraform(this._minAvailableServersForDcUp),
      site_id: cdktf.stringToTerraform(this._siteId),
      site_lb_algorithm: cdktf.stringToTerraform(this._siteLbAlgorithm),
      site_topology: cdktf.stringToTerraform(this._siteTopology),
      data_center: cdktf.listMapper(dataCentersConfigurationDataCenterToTerraform, true)(this._dataCenter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fail_over_required_monitors: {
        value: cdktf.stringToHclTerraform(this._failOverRequiredMonitors),
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
      is_persistent: {
        value: cdktf.booleanToHclTerraform(this._isPersistent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kickstart_password: {
        value: cdktf.stringToHclTerraform(this._kickstartPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kickstart_url: {
        value: cdktf.stringToHclTerraform(this._kickstartUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kickstart_user: {
        value: cdktf.stringToHclTerraform(this._kickstartUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_available_servers_for_dc_up: {
        value: cdktf.numberToHclTerraform(this._minAvailableServersForDcUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_lb_algorithm: {
        value: cdktf.stringToHclTerraform(this._siteLbAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_topology: {
        value: cdktf.stringToHclTerraform(this._siteTopology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_center: {
        value: cdktf.listMapperHcl(dataCentersConfigurationDataCenterToHclTerraform, true)(this._dataCenter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataCentersConfigurationDataCenterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
