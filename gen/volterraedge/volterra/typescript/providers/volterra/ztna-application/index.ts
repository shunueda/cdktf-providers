// https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ZtnaApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#annotations ZtnaApplication#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#description ZtnaApplication#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#disable ZtnaApplication#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#domain_name ZtnaApplication#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#id ZtnaApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#labels ZtnaApplication#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#transport_type ZtnaApplication#transport_type}
  */
  readonly transportType: string;
  /**
  * msg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#msg ZtnaApplication#msg}
  */
  readonly msg?: ZtnaApplicationMsg;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#policies ZtnaApplication#policies}
  */
  readonly policies?: ZtnaApplicationPolicies;
  /**
  * proxy_advertisement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#proxy_advertisement ZtnaApplication#proxy_advertisement}
  */
  readonly proxyAdvertisement?: ZtnaApplicationProxyAdvertisement;
}
export interface ZtnaApplicationMsgIpIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#addr ZtnaApplication#addr}
  */
  readonly addr?: string;
}

export function ztnaApplicationMsgIpIpv4ToTerraform(struct?: ZtnaApplicationMsgIpIpv4OutputReference | ZtnaApplicationMsgIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function ztnaApplicationMsgIpIpv4ToHclTerraform(struct?: ZtnaApplicationMsgIpIpv4OutputReference | ZtnaApplicationMsgIpIpv4): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationMsgIpIpv4OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationMsgIpIpv4 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationMsgIpIpv4 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ZtnaApplicationMsgIpIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#addr ZtnaApplication#addr}
  */
  readonly addr?: string;
}

export function ztnaApplicationMsgIpIpv6ToTerraform(struct?: ZtnaApplicationMsgIpIpv6OutputReference | ZtnaApplicationMsgIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addr: cdktf.stringToTerraform(struct!.addr),
  }
}


export function ztnaApplicationMsgIpIpv6ToHclTerraform(struct?: ZtnaApplicationMsgIpIpv6OutputReference | ZtnaApplicationMsgIpIpv6): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addr: {
      value: cdktf.stringToHclTerraform(struct!.addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationMsgIpIpv6OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationMsgIpIpv6 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.addr = this._addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationMsgIpIpv6 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addr = value.addr;
    }
  }

  // addr - computed: false, optional: true, required: false
  private _addr?: string; 
  public get addr() {
    return this.getStringAttribute('addr');
  }
  public set addr(value: string) {
    this._addr = value;
  }
  public resetAddr() {
    this._addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addrInput() {
    return this._addr;
  }
}
export interface ZtnaApplicationMsgIp {
  /**
  * ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ipv4 ZtnaApplication#ipv4}
  */
  readonly ipv4?: ZtnaApplicationMsgIpIpv4;
  /**
  * ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ipv6 ZtnaApplication#ipv6}
  */
  readonly ipv6?: ZtnaApplicationMsgIpIpv6;
}

export function ztnaApplicationMsgIpToTerraform(struct?: ZtnaApplicationMsgIpOutputReference | ZtnaApplicationMsgIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: ztnaApplicationMsgIpIpv4ToTerraform(struct!.ipv4),
    ipv6: ztnaApplicationMsgIpIpv6ToTerraform(struct!.ipv6),
  }
}


export function ztnaApplicationMsgIpToHclTerraform(struct?: ZtnaApplicationMsgIpOutputReference | ZtnaApplicationMsgIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: ztnaApplicationMsgIpIpv4ToHclTerraform(struct!.ipv4),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationMsgIpIpv4List",
    },
    ipv6: {
      value: ztnaApplicationMsgIpIpv6ToHclTerraform(struct!.ipv6),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationMsgIpIpv6List",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationMsgIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationMsgIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4?.internalValue;
    }
    if (this._ipv6?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationMsgIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4.internalValue = undefined;
      this._ipv6.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4.internalValue = value.ipv4;
      this._ipv6.internalValue = value.ipv6;
    }
  }

  // ipv4 - computed: false, optional: true, required: false
  private _ipv4 = new ZtnaApplicationMsgIpIpv4OutputReference(this, "ipv4");
  public get ipv4() {
    return this._ipv4;
  }
  public putIpv4(value: ZtnaApplicationMsgIpIpv4) {
    this._ipv4.internalValue = value;
  }
  public resetIpv4() {
    this._ipv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4.internalValue;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6 = new ZtnaApplicationMsgIpIpv6OutputReference(this, "ipv6");
  public get ipv6() {
    return this._ipv6;
  }
  public putIpv6(value: ZtnaApplicationMsgIpIpv6) {
    this._ipv6.internalValue = value;
  }
  public resetIpv6() {
    this._ipv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6.internalValue;
  }
}
export interface ZtnaApplicationMsg {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#port ZtnaApplication#port}
  */
  readonly port?: number;
  /**
  * ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ip ZtnaApplication#ip}
  */
  readonly ip?: ZtnaApplicationMsgIp;
}

export function ztnaApplicationMsgToTerraform(struct?: ZtnaApplicationMsgOutputReference | ZtnaApplicationMsg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    ip: ztnaApplicationMsgIpToTerraform(struct!.ip),
  }
}


export function ztnaApplicationMsgToHclTerraform(struct?: ZtnaApplicationMsgOutputReference | ZtnaApplicationMsg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: ztnaApplicationMsgIpToHclTerraform(struct!.ip),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationMsgIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationMsgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationMsg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationMsg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._ip.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._ip.internalValue = value.ip;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ip - computed: false, optional: true, required: false
  private _ip = new ZtnaApplicationMsgIpOutputReference(this, "ip");
  public get ip() {
    return this._ip;
  }
  public putIp(value: ZtnaApplicationMsgIp) {
    this._ip.internalValue = value;
  }
  public resetIp() {
    this._ip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip.internalValue;
  }
}
export interface ZtnaApplicationPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#connectivity_policy_name ZtnaApplication#connectivity_policy_name}
  */
  readonly connectivityPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#message_policy_name ZtnaApplication#message_policy_name}
  */
  readonly messagePolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#session_policy_name ZtnaApplication#session_policy_name}
  */
  readonly sessionPolicyName?: string;
}

export function ztnaApplicationPoliciesToTerraform(struct?: ZtnaApplicationPoliciesOutputReference | ZtnaApplicationPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connectivity_policy_name: cdktf.stringToTerraform(struct!.connectivityPolicyName),
    message_policy_name: cdktf.stringToTerraform(struct!.messagePolicyName),
    session_policy_name: cdktf.stringToTerraform(struct!.sessionPolicyName),
  }
}


export function ztnaApplicationPoliciesToHclTerraform(struct?: ZtnaApplicationPoliciesOutputReference | ZtnaApplicationPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connectivity_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.connectivityPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.messagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectivityPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectivityPolicyName = this._connectivityPolicyName;
    }
    if (this._messagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.messagePolicyName = this._messagePolicyName;
    }
    if (this._sessionPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionPolicyName = this._sessionPolicyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectivityPolicyName = undefined;
      this._messagePolicyName = undefined;
      this._sessionPolicyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectivityPolicyName = value.connectivityPolicyName;
      this._messagePolicyName = value.messagePolicyName;
      this._sessionPolicyName = value.sessionPolicyName;
    }
  }

  // connectivity_policy_name - computed: false, optional: true, required: false
  private _connectivityPolicyName?: string; 
  public get connectivityPolicyName() {
    return this.getStringAttribute('connectivity_policy_name');
  }
  public set connectivityPolicyName(value: string) {
    this._connectivityPolicyName = value;
  }
  public resetConnectivityPolicyName() {
    this._connectivityPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectivityPolicyNameInput() {
    return this._connectivityPolicyName;
  }

  // message_policy_name - computed: false, optional: true, required: false
  private _messagePolicyName?: string; 
  public get messagePolicyName() {
    return this.getStringAttribute('message_policy_name');
  }
  public set messagePolicyName(value: string) {
    this._messagePolicyName = value;
  }
  public resetMessagePolicyName() {
    this._messagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messagePolicyNameInput() {
    return this._messagePolicyName;
  }

  // session_policy_name - computed: false, optional: true, required: false
  private _sessionPolicyName?: string; 
  public get sessionPolicyName() {
    return this.getStringAttribute('session_policy_name');
  }
  public set sessionPolicyName(value: string) {
    this._sessionPolicyName = value;
  }
  public resetSessionPolicyName() {
    this._sessionPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPolicyNameInput() {
    return this._sessionPolicyName;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic {
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#public_ip ZtnaApplication#public_ip}
  */
  readonly publicIp: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToTerraform(struct!.publicIp),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicPublicIp) {
    this._publicIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ip ZtnaApplication#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ipv6 ZtnaApplication#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#network ZtnaApplication#network}
  */
  readonly network: string;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#site ZtnaApplication#site}
  */
  readonly site: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    network: cdktf.stringToTerraform(struct!.network),
    site: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteToTerraform(struct!.site),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._network = undefined;
      this._site.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._network = value.network;
      this._site.internalValue = value.site;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // site - computed: false, optional: false, required: true
  private _site = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSite) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ip ZtnaApplication#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ipv6 ZtnaApplication#ipv6}
  */
  readonly ipv6?: string;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#segment ZtnaApplication#segment}
  */
  readonly segment: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#site ZtnaApplication#site}
  */
  readonly site: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    segment: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToTerraform(struct!.segment),
    site: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteToTerraform(struct!.site),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentList",
    },
    site: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._segment.internalValue = undefined;
      this._site.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._segment.internalValue = value.segment;
      this._site.internalValue = value.site;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // segment - computed: false, optional: false, required: true
  private _segment = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // site - computed: false, optional: false, required: true
  private _site = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentSite) {
    this._site.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#default_v6_vip ZtnaApplication#default_v6_vip}
  */
  readonly defaultV6Vip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#default_vip ZtnaApplication#default_vip}
  */
  readonly defaultVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#specific_v6_vip ZtnaApplication#specific_v6_vip}
  */
  readonly specificV6Vip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#specific_vip ZtnaApplication#specific_vip}
  */
  readonly specificVip?: string;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#virtual_network ZtnaApplication#virtual_network}
  */
  readonly virtualNetwork: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_v6_vip: cdktf.booleanToTerraform(struct!.defaultV6Vip),
    default_vip: cdktf.booleanToTerraform(struct!.defaultVip),
    specific_v6_vip: cdktf.stringToTerraform(struct!.specificV6Vip),
    specific_vip: cdktf.stringToTerraform(struct!.specificVip),
    virtual_network: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToTerraform(struct!.virtualNetwork),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_v6_vip: {
      value: cdktf.booleanToHclTerraform(struct!.defaultV6Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_vip: {
      value: cdktf.booleanToHclTerraform(struct!.defaultVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    specific_v6_vip: {
      value: cdktf.stringToHclTerraform(struct!.specificV6Vip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    specific_vip: {
      value: cdktf.stringToHclTerraform(struct!.specificVip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_network: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultV6Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultV6Vip = this._defaultV6Vip;
    }
    if (this._defaultVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVip = this._defaultVip;
    }
    if (this._specificV6Vip !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificV6Vip = this._specificV6Vip;
    }
    if (this._specificVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificVip = this._specificVip;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultV6Vip = undefined;
      this._defaultVip = undefined;
      this._specificV6Vip = undefined;
      this._specificVip = undefined;
      this._virtualNetwork.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultV6Vip = value.defaultV6Vip;
      this._defaultVip = value.defaultVip;
      this._specificV6Vip = value.specificV6Vip;
      this._specificVip = value.specificVip;
      this._virtualNetwork.internalValue = value.virtualNetwork;
    }
  }

  // default_v6_vip - computed: false, optional: true, required: false
  private _defaultV6Vip?: boolean | cdktf.IResolvable; 
  public get defaultV6Vip() {
    return this.getBooleanAttribute('default_v6_vip');
  }
  public set defaultV6Vip(value: boolean | cdktf.IResolvable) {
    this._defaultV6Vip = value;
  }
  public resetDefaultV6Vip() {
    this._defaultV6Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultV6VipInput() {
    return this._defaultV6Vip;
  }

  // default_vip - computed: false, optional: true, required: false
  private _defaultVip?: boolean | cdktf.IResolvable; 
  public get defaultVip() {
    return this.getBooleanAttribute('default_vip');
  }
  public set defaultVip(value: boolean | cdktf.IResolvable) {
    this._defaultVip = value;
  }
  public resetDefaultVip() {
    this._defaultVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVipInput() {
    return this._defaultVip;
  }

  // specific_v6_vip - computed: false, optional: true, required: false
  private _specificV6Vip?: string; 
  public get specificV6Vip() {
    return this.getStringAttribute('specific_v6_vip');
  }
  public set specificV6Vip(value: string) {
    this._specificV6Vip = value;
  }
  public resetSpecificV6Vip() {
    this._specificV6Vip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificV6VipInput() {
    return this._specificV6Vip;
  }

  // specific_vip - computed: false, optional: true, required: false
  private _specificVip?: string; 
  public get specificVip() {
    return this.getStringAttribute('specific_vip');
  }
  public set specificVip(value: string) {
    this._specificVip = value;
  }
  public resetSpecificVip() {
    this._specificVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificVipInput() {
    return this._specificVip;
  }

  // virtual_network - computed: false, optional: false, required: true
  private _virtualNetwork = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#network ZtnaApplication#network}
  */
  readonly network: string;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#virtual_site ZtnaApplication#virtual_site}
  */
  readonly virtualSite: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    virtual_site: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_site: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ip ZtnaApplication#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ipv6 ZtnaApplication#ipv6}
  */
  readonly ipv6?: string;
  /**
  * segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#segment ZtnaApplication#segment}
  */
  readonly segment: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#virtual_site ZtnaApplication#virtual_site}
  */
  readonly virtualSite: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    segment: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToTerraform(struct!.segment),
    virtual_site: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    segment: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentToHclTerraform(struct!.segment),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentList",
    },
    virtual_site: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._segment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.segment = this._segment?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._segment.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._segment.internalValue = value.segment;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // segment - computed: false, optional: false, required: true
  private _segment = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegmentOutputReference(this, "segment");
  public get segment() {
    return this._segment;
  }
  public putSegment(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentSegment) {
    this._segment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment.internalValue;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ip ZtnaApplication#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#ipv6 ZtnaApplication#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#network ZtnaApplication#network}
  */
  readonly network: string;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#virtual_site ZtnaApplication#virtual_site}
  */
  readonly virtualSite: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    network: cdktf.stringToTerraform(struct!.network),
    virtual_site: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_site: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._network = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._network = value.network;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // virtual_site - computed: false, optional: false, required: true
  private _virtualSite = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService {
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#site ZtnaApplication#site}
  */
  readonly site?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#virtual_site ZtnaApplication#virtual_site}
  */
  readonly virtualSite?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    site: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteToTerraform(struct!.site),
    virtual_site: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToTerraform(struct!.virtualSite),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    site: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteList",
    },
    virtual_site: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._site.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._site.internalValue = value.site;
      this._virtualSite.internalValue = value.virtualSite;
    }
  }

  // site - computed: false, optional: true, required: false
  private _site = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhere {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#port ZtnaApplication#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#port_ranges ZtnaApplication#port_ranges}
  */
  readonly portRanges?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#use_default_port ZtnaApplication#use_default_port}
  */
  readonly useDefaultPort?: boolean | cdktf.IResolvable;
  /**
  * advertise_on_public block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#advertise_on_public ZtnaApplication#advertise_on_public}
  */
  readonly advertiseOnPublic?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic;
  /**
  * site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#site ZtnaApplication#site}
  */
  readonly site?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSite;
  /**
  * site_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#site_segment ZtnaApplication#site_segment}
  */
  readonly siteSegment?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment;
  /**
  * virtual_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#virtual_network ZtnaApplication#virtual_network}
  */
  readonly virtualNetwork?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork;
  /**
  * virtual_site block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#virtual_site ZtnaApplication#virtual_site}
  */
  readonly virtualSite?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite;
  /**
  * virtual_site_segment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#virtual_site_segment ZtnaApplication#virtual_site_segment}
  */
  readonly virtualSiteSegment?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment;
  /**
  * virtual_site_with_vip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#virtual_site_with_vip ZtnaApplication#virtual_site_with_vip}
  */
  readonly virtualSiteWithVip?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip;
  /**
  * vk8s_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#vk8s_service ZtnaApplication#vk8s_service}
  */
  readonly vk8SService?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    port_ranges: cdktf.stringToTerraform(struct!.portRanges),
    use_default_port: cdktf.booleanToTerraform(struct!.useDefaultPort),
    advertise_on_public: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToTerraform(struct!.advertiseOnPublic),
    site: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteToTerraform(struct!.site),
    site_segment: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentToTerraform(struct!.siteSegment),
    virtual_network: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkToTerraform(struct!.virtualNetwork),
    virtual_site: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteToTerraform(struct!.virtualSite),
    virtual_site_segment: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToTerraform(struct!.virtualSiteSegment),
    virtual_site_with_vip: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToTerraform(struct!.virtualSiteWithVip),
    vk8s_service: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceToTerraform(struct!.vk8SService),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhere | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_ranges: {
      value: cdktf.stringToHclTerraform(struct!.portRanges),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_port: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultPort),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_on_public: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicToHclTerraform(struct!.advertiseOnPublic),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicList",
    },
    site: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteToHclTerraform(struct!.site),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteList",
    },
    site_segment: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentToHclTerraform(struct!.siteSegment),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentList",
    },
    virtual_network: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkToHclTerraform(struct!.virtualNetwork),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkList",
    },
    virtual_site: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteToHclTerraform(struct!.virtualSite),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteList",
    },
    virtual_site_segment: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentToHclTerraform(struct!.virtualSiteSegment),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentList",
    },
    virtual_site_with_vip: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipToHclTerraform(struct!.virtualSiteWithVip),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipList",
    },
    vk8s_service: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceToHclTerraform(struct!.vk8SService),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhere | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._portRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRanges = this._portRanges;
    }
    if (this._useDefaultPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultPort = this._useDefaultPort;
    }
    if (this._advertiseOnPublic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPublic = this._advertiseOnPublic?.internalValue;
    }
    if (this._site?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site?.internalValue;
    }
    if (this._siteSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteSegment = this._siteSegment?.internalValue;
    }
    if (this._virtualNetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNetwork = this._virtualNetwork?.internalValue;
    }
    if (this._virtualSite?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSite = this._virtualSite?.internalValue;
    }
    if (this._virtualSiteSegment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSiteSegment = this._virtualSiteSegment?.internalValue;
    }
    if (this._virtualSiteWithVip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualSiteWithVip = this._virtualSiteWithVip?.internalValue;
    }
    if (this._vk8SService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vk8SService = this._vk8SService?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhere | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._portRanges = undefined;
      this._useDefaultPort = undefined;
      this._advertiseOnPublic.internalValue = undefined;
      this._site.internalValue = undefined;
      this._siteSegment.internalValue = undefined;
      this._virtualNetwork.internalValue = undefined;
      this._virtualSite.internalValue = undefined;
      this._virtualSiteSegment.internalValue = undefined;
      this._virtualSiteWithVip.internalValue = undefined;
      this._vk8SService.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._portRanges = value.portRanges;
      this._useDefaultPort = value.useDefaultPort;
      this._advertiseOnPublic.internalValue = value.advertiseOnPublic;
      this._site.internalValue = value.site;
      this._siteSegment.internalValue = value.siteSegment;
      this._virtualNetwork.internalValue = value.virtualNetwork;
      this._virtualSite.internalValue = value.virtualSite;
      this._virtualSiteSegment.internalValue = value.virtualSiteSegment;
      this._virtualSiteWithVip.internalValue = value.virtualSiteWithVip;
      this._vk8SService.internalValue = value.vk8SService;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // port_ranges - computed: false, optional: true, required: false
  private _portRanges?: string; 
  public get portRanges() {
    return this.getStringAttribute('port_ranges');
  }
  public set portRanges(value: string) {
    this._portRanges = value;
  }
  public resetPortRanges() {
    this._portRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangesInput() {
    return this._portRanges;
  }

  // use_default_port - computed: false, optional: true, required: false
  private _useDefaultPort?: boolean | cdktf.IResolvable; 
  public get useDefaultPort() {
    return this.getBooleanAttribute('use_default_port');
  }
  public set useDefaultPort(value: boolean | cdktf.IResolvable) {
    this._useDefaultPort = value;
  }
  public resetUseDefaultPort() {
    this._useDefaultPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultPortInput() {
    return this._useDefaultPort;
  }

  // advertise_on_public - computed: false, optional: true, required: false
  private _advertiseOnPublic = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublicOutputReference(this, "advertise_on_public");
  public get advertiseOnPublic() {
    return this._advertiseOnPublic;
  }
  public putAdvertiseOnPublic(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereAdvertiseOnPublic) {
    this._advertiseOnPublic.internalValue = value;
  }
  public resetAdvertiseOnPublic() {
    this._advertiseOnPublic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPublicInput() {
    return this._advertiseOnPublic.internalValue;
  }

  // site - computed: false, optional: true, required: false
  private _site = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteOutputReference(this, "site");
  public get site() {
    return this._site;
  }
  public putSite(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSite) {
    this._site.internalValue = value;
  }
  public resetSite() {
    this._site.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site.internalValue;
  }

  // site_segment - computed: false, optional: true, required: false
  private _siteSegment = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegmentOutputReference(this, "site_segment");
  public get siteSegment() {
    return this._siteSegment;
  }
  public putSiteSegment(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereSiteSegment) {
    this._siteSegment.internalValue = value;
  }
  public resetSiteSegment() {
    this._siteSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteSegmentInput() {
    return this._siteSegment.internalValue;
  }

  // virtual_network - computed: false, optional: true, required: false
  private _virtualNetwork = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetworkOutputReference(this, "virtual_network");
  public get virtualNetwork() {
    return this._virtualNetwork;
  }
  public putVirtualNetwork(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualNetwork) {
    this._virtualNetwork.internalValue = value;
  }
  public resetVirtualNetwork() {
    this._virtualNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNetworkInput() {
    return this._virtualNetwork.internalValue;
  }

  // virtual_site - computed: false, optional: true, required: false
  private _virtualSite = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteOutputReference(this, "virtual_site");
  public get virtualSite() {
    return this._virtualSite;
  }
  public putVirtualSite(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSite) {
    this._virtualSite.internalValue = value;
  }
  public resetVirtualSite() {
    this._virtualSite.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteInput() {
    return this._virtualSite.internalValue;
  }

  // virtual_site_segment - computed: false, optional: true, required: false
  private _virtualSiteSegment = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegmentOutputReference(this, "virtual_site_segment");
  public get virtualSiteSegment() {
    return this._virtualSiteSegment;
  }
  public putVirtualSiteSegment(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteSegment) {
    this._virtualSiteSegment.internalValue = value;
  }
  public resetVirtualSiteSegment() {
    this._virtualSiteSegment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteSegmentInput() {
    return this._virtualSiteSegment.internalValue;
  }

  // virtual_site_with_vip - computed: false, optional: true, required: false
  private _virtualSiteWithVip = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVipOutputReference(this, "virtual_site_with_vip");
  public get virtualSiteWithVip() {
    return this._virtualSiteWithVip;
  }
  public putVirtualSiteWithVip(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVirtualSiteWithVip) {
    this._virtualSiteWithVip.internalValue = value;
  }
  public resetVirtualSiteWithVip() {
    this._virtualSiteWithVip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualSiteWithVipInput() {
    return this._virtualSiteWithVip.internalValue;
  }

  // vk8s_service - computed: false, optional: true, required: false
  private _vk8SService = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SServiceOutputReference(this, "vk8s_service");
  public get vk8SService() {
    return this._vk8SService;
  }
  public putVk8SService(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereVk8SService) {
    this._vk8SService.internalValue = value;
  }
  public resetVk8SService() {
    this._vk8SService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vk8SServiceInput() {
    return this._vk8SService.internalValue;
  }
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereList extends cdktf.ComplexList {
  public internalValue? : ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable

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
  public get(index: number): ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereOutputReference {
    return new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseCustom {
  /**
  * advertise_where block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#advertise_where ZtnaApplication#advertise_where}
  */
  readonly advertiseWhere: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable;
}

export function ztnaApplicationProxyAdvertisementAdvertiseCustomToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_where: cdktf.listMapper(ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereToTerraform, true)(struct!.advertiseWhere),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseCustomToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseCustomOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_where: {
      value: cdktf.listMapperHcl(ztnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereToHclTerraform, true)(struct!.advertiseWhere),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseWhere?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseWhere = this._advertiseWhere?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseWhere.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseWhere.internalValue = value.advertiseWhere;
    }
  }

  // advertise_where - computed: false, optional: false, required: true
  private _advertiseWhere = new ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhereList(this, "advertise_where", false);
  public get advertiseWhere() {
    return this._advertiseWhere;
  }
  public putAdvertiseWhere(value: ZtnaApplicationProxyAdvertisementAdvertiseCustomAdvertiseWhere[] | cdktf.IResolvable) {
    this._advertiseWhere.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseWhereInput() {
    return this._advertiseWhere.internalValue;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#name ZtnaApplication#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#namespace ZtnaApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#tenant ZtnaApplication#tenant}
  */
  readonly tenant?: string;
}

export function ztnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIpToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIpOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIpToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIpOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface ZtnaApplicationProxyAdvertisementAdvertiseOnPublic {
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#public_ip ZtnaApplication#public_ip}
  */
  readonly publicIp: ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIp;
}

export function ztnaApplicationProxyAdvertisementAdvertiseOnPublicToTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseOnPublicOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_ip: ztnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIpToTerraform(struct!.publicIp),
  }
}


export function ztnaApplicationProxyAdvertisementAdvertiseOnPublicToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementAdvertiseOnPublicOutputReference | ZtnaApplicationProxyAdvertisementAdvertiseOnPublic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    public_ip: {
      value: ztnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementAdvertiseOnPublicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisementAdvertiseOnPublic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisementAdvertiseOnPublic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicIp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicIp.internalValue = value.publicIp;
    }
  }

  // public_ip - computed: false, optional: false, required: true
  private _publicIp = new ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: ZtnaApplicationProxyAdvertisementAdvertiseOnPublicPublicIp) {
    this._publicIp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }
}
export interface ZtnaApplicationProxyAdvertisement {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#advertise_on_public_default_vip ZtnaApplication#advertise_on_public_default_vip}
  */
  readonly advertiseOnPublicDefaultVip?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#do_not_advertise ZtnaApplication#do_not_advertise}
  */
  readonly doNotAdvertise?: boolean | cdktf.IResolvable;
  /**
  * advertise_custom block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#advertise_custom ZtnaApplication#advertise_custom}
  */
  readonly advertiseCustom?: ZtnaApplicationProxyAdvertisementAdvertiseCustom;
  /**
  * advertise_on_public block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#advertise_on_public ZtnaApplication#advertise_on_public}
  */
  readonly advertiseOnPublic?: ZtnaApplicationProxyAdvertisementAdvertiseOnPublic;
}

export function ztnaApplicationProxyAdvertisementToTerraform(struct?: ZtnaApplicationProxyAdvertisementOutputReference | ZtnaApplicationProxyAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_on_public_default_vip: cdktf.booleanToTerraform(struct!.advertiseOnPublicDefaultVip),
    do_not_advertise: cdktf.booleanToTerraform(struct!.doNotAdvertise),
    advertise_custom: ztnaApplicationProxyAdvertisementAdvertiseCustomToTerraform(struct!.advertiseCustom),
    advertise_on_public: ztnaApplicationProxyAdvertisementAdvertiseOnPublicToTerraform(struct!.advertiseOnPublic),
  }
}


export function ztnaApplicationProxyAdvertisementToHclTerraform(struct?: ZtnaApplicationProxyAdvertisementOutputReference | ZtnaApplicationProxyAdvertisement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_on_public_default_vip: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseOnPublicDefaultVip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    do_not_advertise: {
      value: cdktf.booleanToHclTerraform(struct!.doNotAdvertise),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_custom: {
      value: ztnaApplicationProxyAdvertisementAdvertiseCustomToHclTerraform(struct!.advertiseCustom),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseCustomList",
    },
    advertise_on_public: {
      value: ztnaApplicationProxyAdvertisementAdvertiseOnPublicToHclTerraform(struct!.advertiseOnPublic),
      isBlock: true,
      type: "list",
      storageClassType: "ZtnaApplicationProxyAdvertisementAdvertiseOnPublicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ZtnaApplicationProxyAdvertisementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ZtnaApplicationProxyAdvertisement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseOnPublicDefaultVip !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPublicDefaultVip = this._advertiseOnPublicDefaultVip;
    }
    if (this._doNotAdvertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.doNotAdvertise = this._doNotAdvertise;
    }
    if (this._advertiseCustom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseCustom = this._advertiseCustom?.internalValue;
    }
    if (this._advertiseOnPublic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseOnPublic = this._advertiseOnPublic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ZtnaApplicationProxyAdvertisement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advertiseOnPublicDefaultVip = undefined;
      this._doNotAdvertise = undefined;
      this._advertiseCustom.internalValue = undefined;
      this._advertiseOnPublic.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advertiseOnPublicDefaultVip = value.advertiseOnPublicDefaultVip;
      this._doNotAdvertise = value.doNotAdvertise;
      this._advertiseCustom.internalValue = value.advertiseCustom;
      this._advertiseOnPublic.internalValue = value.advertiseOnPublic;
    }
  }

  // advertise_on_public_default_vip - computed: false, optional: true, required: false
  private _advertiseOnPublicDefaultVip?: boolean | cdktf.IResolvable; 
  public get advertiseOnPublicDefaultVip() {
    return this.getBooleanAttribute('advertise_on_public_default_vip');
  }
  public set advertiseOnPublicDefaultVip(value: boolean | cdktf.IResolvable) {
    this._advertiseOnPublicDefaultVip = value;
  }
  public resetAdvertiseOnPublicDefaultVip() {
    this._advertiseOnPublicDefaultVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPublicDefaultVipInput() {
    return this._advertiseOnPublicDefaultVip;
  }

  // do_not_advertise - computed: false, optional: true, required: false
  private _doNotAdvertise?: boolean | cdktf.IResolvable; 
  public get doNotAdvertise() {
    return this.getBooleanAttribute('do_not_advertise');
  }
  public set doNotAdvertise(value: boolean | cdktf.IResolvable) {
    this._doNotAdvertise = value;
  }
  public resetDoNotAdvertise() {
    this._doNotAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get doNotAdvertiseInput() {
    return this._doNotAdvertise;
  }

  // advertise_custom - computed: false, optional: true, required: false
  private _advertiseCustom = new ZtnaApplicationProxyAdvertisementAdvertiseCustomOutputReference(this, "advertise_custom");
  public get advertiseCustom() {
    return this._advertiseCustom;
  }
  public putAdvertiseCustom(value: ZtnaApplicationProxyAdvertisementAdvertiseCustom) {
    this._advertiseCustom.internalValue = value;
  }
  public resetAdvertiseCustom() {
    this._advertiseCustom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseCustomInput() {
    return this._advertiseCustom.internalValue;
  }

  // advertise_on_public - computed: false, optional: true, required: false
  private _advertiseOnPublic = new ZtnaApplicationProxyAdvertisementAdvertiseOnPublicOutputReference(this, "advertise_on_public");
  public get advertiseOnPublic() {
    return this._advertiseOnPublic;
  }
  public putAdvertiseOnPublic(value: ZtnaApplicationProxyAdvertisementAdvertiseOnPublic) {
    this._advertiseOnPublic.internalValue = value;
  }
  public resetAdvertiseOnPublic() {
    this._advertiseOnPublic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseOnPublicInput() {
    return this._advertiseOnPublic.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application volterra_ztna_application}
*/
export class ZtnaApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_ztna_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ZtnaApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ZtnaApplication to import
  * @param importFromId The id of the existing ZtnaApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ZtnaApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_ztna_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/ztna_application volterra_ztna_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ZtnaApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ZtnaApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_ztna_application',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.44',
        providerVersionConstraint: '0.11.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._disable = config.disable;
    this._domainName = config.domainName;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._transportType = config.transportType;
    this._msg.internalValue = config.msg;
    this._policies.internalValue = config.policies;
    this._proxyAdvertisement.internalValue = config.proxyAdvertisement;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // transport_type - computed: false, optional: false, required: true
  private _transportType?: string; 
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }
  public set transportType(value: string) {
    this._transportType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportTypeInput() {
    return this._transportType;
  }

  // msg - computed: false, optional: true, required: false
  private _msg = new ZtnaApplicationMsgOutputReference(this, "msg");
  public get msg() {
    return this._msg;
  }
  public putMsg(value: ZtnaApplicationMsg) {
    this._msg.internalValue = value;
  }
  public resetMsg() {
    this._msg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgInput() {
    return this._msg.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new ZtnaApplicationPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: ZtnaApplicationPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // proxy_advertisement - computed: false, optional: true, required: false
  private _proxyAdvertisement = new ZtnaApplicationProxyAdvertisementOutputReference(this, "proxy_advertisement");
  public get proxyAdvertisement() {
    return this._proxyAdvertisement;
  }
  public putProxyAdvertisement(value: ZtnaApplicationProxyAdvertisement) {
    this._proxyAdvertisement.internalValue = value;
  }
  public resetProxyAdvertisement() {
    this._proxyAdvertisement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAdvertisementInput() {
    return this._proxyAdvertisement.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      domain_name: cdktf.stringToTerraform(this._domainName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      transport_type: cdktf.stringToTerraform(this._transportType),
      msg: ztnaApplicationMsgToTerraform(this._msg.internalValue),
      policies: ztnaApplicationPoliciesToTerraform(this._policies.internalValue),
      proxy_advertisement: ztnaApplicationProxyAdvertisementToTerraform(this._proxyAdvertisement.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
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
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_type: {
        value: cdktf.stringToHclTerraform(this._transportType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg: {
        value: ztnaApplicationMsgToHclTerraform(this._msg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZtnaApplicationMsgList",
      },
      policies: {
        value: ztnaApplicationPoliciesToHclTerraform(this._policies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZtnaApplicationPoliciesList",
      },
      proxy_advertisement: {
        value: ztnaApplicationProxyAdvertisementToHclTerraform(this._proxyAdvertisement.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ZtnaApplicationProxyAdvertisementList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
