// https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceCheckpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicate if `auto_scale` should be enabled for your checkpoint firewall. `ON` and `OFF` are accepted values. `OFF` is the default if field is omitted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#auto_scale ServiceCheckpoint#auto_scale}
  */
  readonly autoScale?: string;
  /**
  * Billing tags to be associated with the resource. (see resource `alkira_billing_tag`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#billing_tag_ids ServiceCheckpoint#billing_tag_ids}
  */
  readonly billingTagIds?: number[];
  /**
  * CXP region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#cxp ServiceCheckpoint#cxp}
  */
  readonly cxp: string;
  /**
  * The description of the checkpoint service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#description ServiceCheckpoint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#id ServiceCheckpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Checkpoint license type, either `BRING_YOUR_OWN` or `PAY_AS_YOU_GO`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#license_type ServiceCheckpoint#license_type}
  */
  readonly licenseType: string;
  /**
  * The maximum number of Checkpoint Firewall instances that should be deployed when auto-scale is enabled. Note that auto-scale is not supported with Checkpoint at this time. `max_instance_count` must be greater than or equal to `min_instance_count`. (**BETA**)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#max_instance_count ServiceCheckpoint#max_instance_count}
  */
  readonly maxInstanceCount: number;
  /**
  * The minimum number of Checkpoint Firewall instances that should be deployed at any point in time. If auto-scale is OFF, min_instance_count must equal max_instance_count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#min_instance_count ServiceCheckpoint#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Name of the Checkpoint Firewall service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#name ServiceCheckpoint#name}
  */
  readonly name: string;
  /**
  * The Checkpoint Firewall service password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#password ServiceCheckpoint#password}
  */
  readonly password: string;
  /**
  * The IPs of the PDP Brokers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#pdp_ips ServiceCheckpoint#pdp_ips}
  */
  readonly pdpIps?: string[];
  /**
  * The ID of the segments associated with the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#segment_id ServiceCheckpoint#segment_id}
  */
  readonly segmentId: string;
  /**
  * The size of the service, one of `SMALL`, `MEDIUM`, `LARGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#size ServiceCheckpoint#size}
  */
  readonly size: string;
  /**
  * Tunnel Protocol, default to `IPSEC`, could be either `IPSEC` or `GRE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#tunnel_protocol ServiceCheckpoint#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * The version of the Checkpoint Firewall. Please check all supported versions from Alkira Portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#version ServiceCheckpoint#version}
  */
  readonly version: string;
  /**
  * instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#instance ServiceCheckpoint#instance}
  */
  readonly instance: ServiceCheckpointInstance[] | cdktf.IResolvable;
  /**
  * management_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#management_server ServiceCheckpoint#management_server}
  */
  readonly managementServer: ServiceCheckpointManagementServer[] | cdktf.IResolvable;
  /**
  * segment_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#segment_options ServiceCheckpoint#segment_options}
  */
  readonly segmentOptions?: ServiceCheckpointSegmentOptions[] | cdktf.IResolvable;
}
export interface ServiceCheckpointInstance {
  /**
  * Enable traffic on the checkpoint instance. Default value is `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#enable_traffic ServiceCheckpoint#enable_traffic}
  */
  readonly enableTraffic?: boolean | cdktf.IResolvable;
  /**
  * The name of the checkpoint instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#name ServiceCheckpoint#name}
  */
  readonly name: string;
  /**
  * The checkpoint instance sic keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#sic_key ServiceCheckpoint#sic_key}
  */
  readonly sicKey: string;
}

export function serviceCheckpointInstanceToTerraform(struct?: ServiceCheckpointInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_traffic: cdktf.booleanToTerraform(struct!.enableTraffic),
    name: cdktf.stringToTerraform(struct!.name),
    sic_key: cdktf.stringToTerraform(struct!.sicKey),
  }
}


export function serviceCheckpointInstanceToHclTerraform(struct?: ServiceCheckpointInstance | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_traffic: {
      value: cdktf.booleanToHclTerraform(struct!.enableTraffic),
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
    sic_key: {
      value: cdktf.stringToHclTerraform(struct!.sicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCheckpointInstanceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCheckpointInstance | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTraffic !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTraffic = this._enableTraffic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sicKey = this._sicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCheckpointInstance | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableTraffic = undefined;
      this._name = undefined;
      this._sicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableTraffic = value.enableTraffic;
      this._name = value.name;
      this._sicKey = value.sicKey;
    }
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }

  // enable_traffic - computed: false, optional: true, required: false
  private _enableTraffic?: boolean | cdktf.IResolvable; 
  public get enableTraffic() {
    return this.getBooleanAttribute('enable_traffic');
  }
  public set enableTraffic(value: boolean | cdktf.IResolvable) {
    this._enableTraffic = value;
  }
  public resetEnableTraffic() {
    this._enableTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTrafficInput() {
    return this._enableTraffic;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // sic_key - computed: false, optional: false, required: true
  private _sicKey?: string; 
  public get sicKey() {
    return this.getStringAttribute('sic_key');
  }
  public set sicKey(value: string) {
    this._sicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sicKeyInput() {
    return this._sicKey;
  }
}

export class ServiceCheckpointInstanceList extends cdktf.ComplexList {
  public internalValue? : ServiceCheckpointInstance[] | cdktf.IResolvable

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
  public get(index: number): ServiceCheckpointInstanceOutputReference {
    return new ServiceCheckpointInstanceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCheckpointManagementServer {
  /**
  * The configuration_mode specifies whether the firewall is to be automatically configured by Alkira or not. To automatically configure the firewall Alkira needs access to the CheckPoint management server. If you choose to use manual configuration Alkira will provide the customer information about the Checkpoint instances so that you can manually configure the firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#configuration_mode ServiceCheckpoint#configuration_mode}
  */
  readonly configurationMode: string;
  /**
  * Management server domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#domain ServiceCheckpoint#domain}
  */
  readonly domain?: string;
  /**
  * The ID of the global cidr list to be associated with the management server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#global_cidr_list_id ServiceCheckpoint#global_cidr_list_id}
  */
  readonly globalCidrListId: number;
  /**
  * Management server IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#ips ServiceCheckpoint#ips}
  */
  readonly ips: string[];
  /**
  * The password of the management server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#password ServiceCheckpoint#password}
  */
  readonly password?: string;
  /**
  * Specifies whether the management server is publicly reachable or not. If the reachability is private then you need to provide the segment to be used to access the management server. Default value is `PUBLIC`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#reachability ServiceCheckpoint#reachability}
  */
  readonly reachability?: string;
  /**
  * The IDs of the segment to be used to access the management server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#segment_id ServiceCheckpoint#segment_id}
  */
  readonly segmentId?: string;
  /**
  * The type of the management server. either `SMS` or `MDS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#type ServiceCheckpoint#type}
  */
  readonly type: string;
  /**
  * The username of the management server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#username ServiceCheckpoint#username}
  */
  readonly username?: string;
}

export function serviceCheckpointManagementServerToTerraform(struct?: ServiceCheckpointManagementServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration_mode: cdktf.stringToTerraform(struct!.configurationMode),
    domain: cdktf.stringToTerraform(struct!.domain),
    global_cidr_list_id: cdktf.numberToTerraform(struct!.globalCidrListId),
    ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ips),
    password: cdktf.stringToTerraform(struct!.password),
    reachability: cdktf.stringToTerraform(struct!.reachability),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    type: cdktf.stringToTerraform(struct!.type),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function serviceCheckpointManagementServerToHclTerraform(struct?: ServiceCheckpointManagementServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration_mode: {
      value: cdktf.stringToHclTerraform(struct!.configurationMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    global_cidr_list_id: {
      value: cdktf.numberToHclTerraform(struct!.globalCidrListId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ips),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reachability: {
      value: cdktf.stringToHclTerraform(struct!.reachability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCheckpointManagementServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCheckpointManagementServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configurationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.configurationMode = this._configurationMode;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._globalCidrListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.globalCidrListId = this._globalCidrListId;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._reachability !== undefined) {
      hasAnyValues = true;
      internalValueResult.reachability = this._reachability;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCheckpointManagementServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configurationMode = undefined;
      this._domain = undefined;
      this._globalCidrListId = undefined;
      this._ips = undefined;
      this._password = undefined;
      this._reachability = undefined;
      this._segmentId = undefined;
      this._type = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configurationMode = value.configurationMode;
      this._domain = value.domain;
      this._globalCidrListId = value.globalCidrListId;
      this._ips = value.ips;
      this._password = value.password;
      this._reachability = value.reachability;
      this._segmentId = value.segmentId;
      this._type = value.type;
      this._username = value.username;
    }
  }

  // configuration_mode - computed: false, optional: false, required: true
  private _configurationMode?: string; 
  public get configurationMode() {
    return this.getStringAttribute('configuration_mode');
  }
  public set configurationMode(value: string) {
    this._configurationMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationModeInput() {
    return this._configurationMode;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // global_cidr_list_id - computed: false, optional: false, required: true
  private _globalCidrListId?: number; 
  public get globalCidrListId() {
    return this.getNumberAttribute('global_cidr_list_id');
  }
  public set globalCidrListId(value: number) {
    this._globalCidrListId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get globalCidrListIdInput() {
    return this._globalCidrListId;
  }

  // ips - computed: false, optional: false, required: true
  private _ips?: string[]; 
  public get ips() {
    return this.getListAttribute('ips');
  }
  public set ips(value: string[]) {
    this._ips = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
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

  // reachability - computed: false, optional: true, required: false
  private _reachability?: string; 
  public get reachability() {
    return this.getStringAttribute('reachability');
  }
  public set reachability(value: string) {
    this._reachability = value;
  }
  public resetReachability() {
    this._reachability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reachabilityInput() {
    return this._reachability;
  }

  // segment_id - computed: false, optional: true, required: false
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  public resetSegmentId() {
    this._segmentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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
}

export class ServiceCheckpointManagementServerList extends cdktf.ComplexList {
  public internalValue? : ServiceCheckpointManagementServer[] | cdktf.IResolvable

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
  public get(index: number): ServiceCheckpointManagementServerOutputReference {
    return new ServiceCheckpointManagementServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceCheckpointSegmentOptions {
  /**
  * The list of Groups associated with the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#groups ServiceCheckpoint#groups}
  */
  readonly groups: string[];
  /**
  * The ID of the segment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#segment_id ServiceCheckpoint#segment_id}
  */
  readonly segmentId: string;
  /**
  * The name of the associated zone. Default value is `DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#zone_name ServiceCheckpoint#zone_name}
  */
  readonly zoneName?: string;
}

export function serviceCheckpointSegmentOptionsToTerraform(struct?: ServiceCheckpointSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    segment_id: cdktf.stringToTerraform(struct!.segmentId),
    zone_name: cdktf.stringToTerraform(struct!.zoneName),
  }
}


export function serviceCheckpointSegmentOptionsToHclTerraform(struct?: ServiceCheckpointSegmentOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    segment_id: {
      value: cdktf.stringToHclTerraform(struct!.segmentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_name: {
      value: cdktf.stringToHclTerraform(struct!.zoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceCheckpointSegmentOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceCheckpointSegmentOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._segmentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.segmentId = this._segmentId;
    }
    if (this._zoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneName = this._zoneName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceCheckpointSegmentOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groups = undefined;
      this._segmentId = undefined;
      this._zoneName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groups = value.groups;
      this._segmentId = value.segmentId;
      this._zoneName = value.zoneName;
    }
  }

  // groups - computed: false, optional: false, required: true
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }
}

export class ServiceCheckpointSegmentOptionsList extends cdktf.ComplexList {
  public internalValue? : ServiceCheckpointSegmentOptions[] | cdktf.IResolvable

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
  public get(index: number): ServiceCheckpointSegmentOptionsOutputReference {
    return new ServiceCheckpointSegmentOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint alkira_service_checkpoint}
*/
export class ServiceCheckpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alkira_service_checkpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceCheckpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceCheckpoint to import
  * @param importFromId The id of the existing ServiceCheckpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceCheckpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alkira_service_checkpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alkiranet/alkira/1.3.2/docs/resources/service_checkpoint alkira_service_checkpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceCheckpointConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceCheckpointConfig) {
    super(scope, id, {
      terraformResourceType: 'alkira_service_checkpoint',
      terraformGeneratorMetadata: {
        providerName: 'alkira',
        providerVersion: '1.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoScale = config.autoScale;
    this._billingTagIds = config.billingTagIds;
    this._cxp = config.cxp;
    this._description = config.description;
    this._id = config.id;
    this._licenseType = config.licenseType;
    this._maxInstanceCount = config.maxInstanceCount;
    this._minInstanceCount = config.minInstanceCount;
    this._name = config.name;
    this._password = config.password;
    this._pdpIps = config.pdpIps;
    this._segmentId = config.segmentId;
    this._size = config.size;
    this._tunnelProtocol = config.tunnelProtocol;
    this._version = config.version;
    this._instance.internalValue = config.instance;
    this._managementServer.internalValue = config.managementServer;
    this._segmentOptions.internalValue = config.segmentOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_scale - computed: false, optional: true, required: false
  private _autoScale?: string; 
  public get autoScale() {
    return this.getStringAttribute('auto_scale');
  }
  public set autoScale(value: string) {
    this._autoScale = value;
  }
  public resetAutoScale() {
    this._autoScale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoScaleInput() {
    return this._autoScale;
  }

  // billing_tag_ids - computed: false, optional: true, required: false
  private _billingTagIds?: number[]; 
  public get billingTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('billing_tag_ids')));
  }
  public set billingTagIds(value: number[]) {
    this._billingTagIds = value;
  }
  public resetBillingTagIds() {
    this._billingTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingTagIdsInput() {
    return this._billingTagIds;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getStringAttribute('credential_id');
  }

  // cxp - computed: false, optional: false, required: true
  private _cxp?: string; 
  public get cxp() {
    return this.getStringAttribute('cxp');
  }
  public set cxp(value: string) {
    this._cxp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cxpInput() {
    return this._cxp;
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

  // license_type - computed: false, optional: false, required: true
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // max_instance_count - computed: false, optional: false, required: true
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pdp_ips - computed: false, optional: true, required: false
  private _pdpIps?: string[]; 
  public get pdpIps() {
    return this.getListAttribute('pdp_ips');
  }
  public set pdpIps(value: string[]) {
    this._pdpIps = value;
  }
  public resetPdpIps() {
    this._pdpIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdpIpsInput() {
    return this._pdpIps;
  }

  // provision_state - computed: true, optional: false, required: false
  public get provisionState() {
    return this.getStringAttribute('provision_state');
  }

  // segment_id - computed: false, optional: false, required: true
  private _segmentId?: string; 
  public get segmentId() {
    return this.getStringAttribute('segment_id');
  }
  public set segmentId(value: string) {
    this._segmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentIdInput() {
    return this._segmentId;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // tunnel_protocol - computed: false, optional: true, required: false
  private _tunnelProtocol?: string; 
  public get tunnelProtocol() {
    return this.getStringAttribute('tunnel_protocol');
  }
  public set tunnelProtocol(value: string) {
    this._tunnelProtocol = value;
  }
  public resetTunnelProtocol() {
    this._tunnelProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProtocolInput() {
    return this._tunnelProtocol;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // instance - computed: false, optional: false, required: true
  private _instance = new ServiceCheckpointInstanceList(this, "instance", false);
  public get instance() {
    return this._instance;
  }
  public putInstance(value: ServiceCheckpointInstance[] | cdktf.IResolvable) {
    this._instance.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance.internalValue;
  }

  // management_server - computed: false, optional: false, required: true
  private _managementServer = new ServiceCheckpointManagementServerList(this, "management_server", true);
  public get managementServer() {
    return this._managementServer;
  }
  public putManagementServer(value: ServiceCheckpointManagementServer[] | cdktf.IResolvable) {
    this._managementServer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managementServerInput() {
    return this._managementServer.internalValue;
  }

  // segment_options - computed: false, optional: true, required: false
  private _segmentOptions = new ServiceCheckpointSegmentOptionsList(this, "segment_options", true);
  public get segmentOptions() {
    return this._segmentOptions;
  }
  public putSegmentOptions(value: ServiceCheckpointSegmentOptions[] | cdktf.IResolvable) {
    this._segmentOptions.internalValue = value;
  }
  public resetSegmentOptions() {
    this._segmentOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentOptionsInput() {
    return this._segmentOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_scale: cdktf.stringToTerraform(this._autoScale),
      billing_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._billingTagIds),
      cxp: cdktf.stringToTerraform(this._cxp),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      license_type: cdktf.stringToTerraform(this._licenseType),
      max_instance_count: cdktf.numberToTerraform(this._maxInstanceCount),
      min_instance_count: cdktf.numberToTerraform(this._minInstanceCount),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      pdp_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pdpIps),
      segment_id: cdktf.stringToTerraform(this._segmentId),
      size: cdktf.stringToTerraform(this._size),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      version: cdktf.stringToTerraform(this._version),
      instance: cdktf.listMapper(serviceCheckpointInstanceToTerraform, true)(this._instance.internalValue),
      management_server: cdktf.listMapper(serviceCheckpointManagementServerToTerraform, true)(this._managementServer.internalValue),
      segment_options: cdktf.listMapper(serviceCheckpointSegmentOptionsToTerraform, true)(this._segmentOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_scale: {
        value: cdktf.stringToHclTerraform(this._autoScale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._billingTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      cxp: {
        value: cdktf.stringToHclTerraform(this._cxp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      license_type: {
        value: cdktf.stringToHclTerraform(this._licenseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_instance_count: {
        value: cdktf.numberToHclTerraform(this._maxInstanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_instance_count: {
        value: cdktf.numberToHclTerraform(this._minInstanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      pdp_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._pdpIps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      segment_id: {
        value: cdktf.stringToHclTerraform(this._segmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_protocol: {
        value: cdktf.stringToHclTerraform(this._tunnelProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance: {
        value: cdktf.listMapperHcl(serviceCheckpointInstanceToHclTerraform, true)(this._instance.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceCheckpointInstanceList",
      },
      management_server: {
        value: cdktf.listMapperHcl(serviceCheckpointManagementServerToHclTerraform, true)(this._managementServer.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceCheckpointManagementServerList",
      },
      segment_options: {
        value: cdktf.listMapperHcl(serviceCheckpointSegmentOptionsToHclTerraform, true)(this._segmentOptions.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServiceCheckpointSegmentOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
