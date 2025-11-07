// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppsecIpGeoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the action set for BLOCK Mode blocking all the traffic except from lists identified in exception_ip_network_lists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#block_action AppsecIpGeo#block_action}
  */
  readonly blockAction?: string;
  /**
  * Unique identifier of the security configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#config_id AppsecIpGeo#config_id}
  */
  readonly configId: number;
  /**
  * List of unique identifiers of ip_network_lists allowed through the firewall.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#exception_ip_network_lists AppsecIpGeo#exception_ip_network_lists}
  */
  readonly exceptionIpNetworkLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#id AppsecIpGeo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protection mode (block or allow)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#mode AppsecIpGeo#mode}
  */
  readonly mode: string;
  /**
  * Unique identifier of the security policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#security_policy_id AppsecIpGeo#security_policy_id}
  */
  readonly securityPolicyId: string;
  /**
  * Action set for Ukraine geo control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#ukraine_geo_control_action AppsecIpGeo#ukraine_geo_control_action}
  */
  readonly ukraineGeoControlAction?: string;
  /**
  * asn_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#asn_controls AppsecIpGeo#asn_controls}
  */
  readonly asnControls?: AppsecIpGeoAsnControls;
  /**
  * geo_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#geo_controls AppsecIpGeo#geo_controls}
  */
  readonly geoControls?: AppsecIpGeoGeoControls;
  /**
  * ip_controls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#ip_controls AppsecIpGeo#ip_controls}
  */
  readonly ipControls?: AppsecIpGeoIpControls;
}
export interface AppsecIpGeoAsnControls {
  /**
  * Action set for ASN Controls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#action AppsecIpGeo#action}
  */
  readonly action?: string;
  /**
  * List of IDs of ASN network list to be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#asn_network_lists AppsecIpGeo#asn_network_lists}
  */
  readonly asnNetworkLists?: string[];
}

export function appsecIpGeoAsnControlsToTerraform(struct?: AppsecIpGeoAsnControlsOutputReference | AppsecIpGeoAsnControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    asn_network_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.asnNetworkLists),
  }
}


export function appsecIpGeoAsnControlsToHclTerraform(struct?: AppsecIpGeoAsnControlsOutputReference | AppsecIpGeoAsnControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    asn_network_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.asnNetworkLists),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecIpGeoAsnControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecIpGeoAsnControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._asnNetworkLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnNetworkLists = this._asnNetworkLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecIpGeoAsnControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._asnNetworkLists = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._asnNetworkLists = value.asnNetworkLists;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // asn_network_lists - computed: false, optional: true, required: false
  private _asnNetworkLists?: string[]; 
  public get asnNetworkLists() {
    return cdktf.Fn.tolist(this.getListAttribute('asn_network_lists'));
  }
  public set asnNetworkLists(value: string[]) {
    this._asnNetworkLists = value;
  }
  public resetAsnNetworkLists() {
    this._asnNetworkLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnNetworkListsInput() {
    return this._asnNetworkLists;
  }
}
export interface AppsecIpGeoGeoControls {
  /**
  * Action set for GEO Controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#action AppsecIpGeo#action}
  */
  readonly action?: string;
  /**
  * List of IDs of geographic network list to be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#geo_network_lists AppsecIpGeo#geo_network_lists}
  */
  readonly geoNetworkLists?: string[];
}

export function appsecIpGeoGeoControlsToTerraform(struct?: AppsecIpGeoGeoControlsOutputReference | AppsecIpGeoGeoControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    geo_network_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geoNetworkLists),
  }
}


export function appsecIpGeoGeoControlsToHclTerraform(struct?: AppsecIpGeoGeoControlsOutputReference | AppsecIpGeoGeoControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    geo_network_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.geoNetworkLists),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecIpGeoGeoControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecIpGeoGeoControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._geoNetworkLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoNetworkLists = this._geoNetworkLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecIpGeoGeoControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._geoNetworkLists = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._geoNetworkLists = value.geoNetworkLists;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // geo_network_lists - computed: false, optional: true, required: false
  private _geoNetworkLists?: string[]; 
  public get geoNetworkLists() {
    return cdktf.Fn.tolist(this.getListAttribute('geo_network_lists'));
  }
  public set geoNetworkLists(value: string[]) {
    this._geoNetworkLists = value;
  }
  public resetGeoNetworkLists() {
    this._geoNetworkLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoNetworkListsInput() {
    return this._geoNetworkLists;
  }
}
export interface AppsecIpGeoIpControls {
  /**
  * Action set for IP Controls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#action AppsecIpGeo#action}
  */
  readonly action?: string;
  /**
  * List of IDs of IP network list to be blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#ip_network_lists AppsecIpGeo#ip_network_lists}
  */
  readonly ipNetworkLists?: string[];
}

export function appsecIpGeoIpControlsToTerraform(struct?: AppsecIpGeoIpControlsOutputReference | AppsecIpGeoIpControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    ip_network_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipNetworkLists),
  }
}


export function appsecIpGeoIpControlsToHclTerraform(struct?: AppsecIpGeoIpControlsOutputReference | AppsecIpGeoIpControls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_network_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipNetworkLists),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AppsecIpGeoIpControlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AppsecIpGeoIpControls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._ipNetworkLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNetworkLists = this._ipNetworkLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AppsecIpGeoIpControls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._ipNetworkLists = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._ipNetworkLists = value.ipNetworkLists;
    }
  }

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // ip_network_lists - computed: false, optional: true, required: false
  private _ipNetworkLists?: string[]; 
  public get ipNetworkLists() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_network_lists'));
  }
  public set ipNetworkLists(value: string[]) {
    this._ipNetworkLists = value;
  }
  public resetIpNetworkLists() {
    this._ipNetworkLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetworkListsInput() {
    return this._ipNetworkLists;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo akamai_appsec_ip_geo}
*/
export class AppsecIpGeo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_appsec_ip_geo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AppsecIpGeo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AppsecIpGeo to import
  * @param importFromId The id of the existing AppsecIpGeo that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AppsecIpGeo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_appsec_ip_geo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/appsec_ip_geo akamai_appsec_ip_geo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppsecIpGeoConfig
  */
  public constructor(scope: Construct, id: string, config: AppsecIpGeoConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_appsec_ip_geo',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blockAction = config.blockAction;
    this._configId = config.configId;
    this._exceptionIpNetworkLists = config.exceptionIpNetworkLists;
    this._id = config.id;
    this._mode = config.mode;
    this._securityPolicyId = config.securityPolicyId;
    this._ukraineGeoControlAction = config.ukraineGeoControlAction;
    this._asnControls.internalValue = config.asnControls;
    this._geoControls.internalValue = config.geoControls;
    this._ipControls.internalValue = config.ipControls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_action - computed: false, optional: true, required: false
  private _blockAction?: string; 
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }
  public set blockAction(value: string) {
    this._blockAction = value;
  }
  public resetBlockAction() {
    this._blockAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockActionInput() {
    return this._blockAction;
  }

  // config_id - computed: false, optional: false, required: true
  private _configId?: number; 
  public get configId() {
    return this.getNumberAttribute('config_id');
  }
  public set configId(value: number) {
    this._configId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configIdInput() {
    return this._configId;
  }

  // exception_ip_network_lists - computed: false, optional: true, required: false
  private _exceptionIpNetworkLists?: string[]; 
  public get exceptionIpNetworkLists() {
    return cdktf.Fn.tolist(this.getListAttribute('exception_ip_network_lists'));
  }
  public set exceptionIpNetworkLists(value: string[]) {
    this._exceptionIpNetworkLists = value;
  }
  public resetExceptionIpNetworkLists() {
    this._exceptionIpNetworkLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionIpNetworkListsInput() {
    return this._exceptionIpNetworkLists;
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

  // security_policy_id - computed: false, optional: false, required: true
  private _securityPolicyId?: string; 
  public get securityPolicyId() {
    return this.getStringAttribute('security_policy_id');
  }
  public set securityPolicyId(value: string) {
    this._securityPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityPolicyIdInput() {
    return this._securityPolicyId;
  }

  // ukraine_geo_control_action - computed: true, optional: true, required: false
  private _ukraineGeoControlAction?: string; 
  public get ukraineGeoControlAction() {
    return this.getStringAttribute('ukraine_geo_control_action');
  }
  public set ukraineGeoControlAction(value: string) {
    this._ukraineGeoControlAction = value;
  }
  public resetUkraineGeoControlAction() {
    this._ukraineGeoControlAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ukraineGeoControlActionInput() {
    return this._ukraineGeoControlAction;
  }

  // asn_controls - computed: false, optional: true, required: false
  private _asnControls = new AppsecIpGeoAsnControlsOutputReference(this, "asn_controls");
  public get asnControls() {
    return this._asnControls;
  }
  public putAsnControls(value: AppsecIpGeoAsnControls) {
    this._asnControls.internalValue = value;
  }
  public resetAsnControls() {
    this._asnControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnControlsInput() {
    return this._asnControls.internalValue;
  }

  // geo_controls - computed: false, optional: true, required: false
  private _geoControls = new AppsecIpGeoGeoControlsOutputReference(this, "geo_controls");
  public get geoControls() {
    return this._geoControls;
  }
  public putGeoControls(value: AppsecIpGeoGeoControls) {
    this._geoControls.internalValue = value;
  }
  public resetGeoControls() {
    this._geoControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoControlsInput() {
    return this._geoControls.internalValue;
  }

  // ip_controls - computed: false, optional: true, required: false
  private _ipControls = new AppsecIpGeoIpControlsOutputReference(this, "ip_controls");
  public get ipControls() {
    return this._ipControls;
  }
  public putIpControls(value: AppsecIpGeoIpControls) {
    this._ipControls.internalValue = value;
  }
  public resetIpControls() {
    this._ipControls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipControlsInput() {
    return this._ipControls.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_action: cdktf.stringToTerraform(this._blockAction),
      config_id: cdktf.numberToTerraform(this._configId),
      exception_ip_network_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exceptionIpNetworkLists),
      id: cdktf.stringToTerraform(this._id),
      mode: cdktf.stringToTerraform(this._mode),
      security_policy_id: cdktf.stringToTerraform(this._securityPolicyId),
      ukraine_geo_control_action: cdktf.stringToTerraform(this._ukraineGeoControlAction),
      asn_controls: appsecIpGeoAsnControlsToTerraform(this._asnControls.internalValue),
      geo_controls: appsecIpGeoGeoControlsToTerraform(this._geoControls.internalValue),
      ip_controls: appsecIpGeoIpControlsToTerraform(this._ipControls.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_action: {
        value: cdktf.stringToHclTerraform(this._blockAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_id: {
        value: cdktf.numberToHclTerraform(this._configId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exception_ip_network_lists: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exceptionIpNetworkLists),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_policy_id: {
        value: cdktf.stringToHclTerraform(this._securityPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ukraine_geo_control_action: {
        value: cdktf.stringToHclTerraform(this._ukraineGeoControlAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      asn_controls: {
        value: appsecIpGeoAsnControlsToHclTerraform(this._asnControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecIpGeoAsnControlsList",
      },
      geo_controls: {
        value: appsecIpGeoGeoControlsToHclTerraform(this._geoControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecIpGeoGeoControlsList",
      },
      ip_controls: {
        value: appsecIpGeoIpControlsToHclTerraform(this._ipControls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AppsecIpGeoIpControlsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
