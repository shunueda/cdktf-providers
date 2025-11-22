import * as cdktf from 'cdktf';
export interface Mk8STritonProviderAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#expander Mk8S#expander}
  */
  readonly expander?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#unneeded_time Mk8S#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#unready_time Mk8S#unready_time}
  */
  readonly unreadyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#utilization_threshold Mk8S#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
}

export function mk8STritonProviderAutoscalerToTerraform(struct?: Mk8STritonProviderAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expander: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expander),
    unneeded_time: cdktf.stringToTerraform(struct!.unneededTime),
    unready_time: cdktf.stringToTerraform(struct!.unreadyTime),
    utilization_threshold: cdktf.numberToTerraform(struct!.utilizationThreshold),
  }
}


export function mk8STritonProviderAutoscalerToHclTerraform(struct?: Mk8STritonProviderAutoscaler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expander: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expander),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    unneeded_time: {
      value: cdktf.stringToHclTerraform(struct!.unneededTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unready_time: {
      value: cdktf.stringToHclTerraform(struct!.unreadyTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    utilization_threshold: {
      value: cdktf.numberToHclTerraform(struct!.utilizationThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8STritonProviderAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProviderAutoscaler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expander !== undefined) {
      hasAnyValues = true;
      internalValueResult.expander = this._expander;
    }
    if (this._unneededTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.unneededTime = this._unneededTime;
    }
    if (this._unreadyTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.unreadyTime = this._unreadyTime;
    }
    if (this._utilizationThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.utilizationThreshold = this._utilizationThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProviderAutoscaler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expander = undefined;
      this._unneededTime = undefined;
      this._unreadyTime = undefined;
      this._utilizationThreshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expander = value.expander;
      this._unneededTime = value.unneededTime;
      this._unreadyTime = value.unreadyTime;
      this._utilizationThreshold = value.utilizationThreshold;
    }
  }

  // expander - computed: true, optional: true, required: false
  private _expander?: string[]; 
  public get expander() {
    return cdktf.Fn.tolist(this.getListAttribute('expander'));
  }
  public set expander(value: string[]) {
    this._expander = value;
  }
  public resetExpander() {
    this._expander = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expanderInput() {
    return this._expander;
  }

  // unneeded_time - computed: true, optional: true, required: false
  private _unneededTime?: string; 
  public get unneededTime() {
    return this.getStringAttribute('unneeded_time');
  }
  public set unneededTime(value: string) {
    this._unneededTime = value;
  }
  public resetUnneededTime() {
    this._unneededTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unneededTimeInput() {
    return this._unneededTime;
  }

  // unready_time - computed: true, optional: true, required: false
  private _unreadyTime?: string; 
  public get unreadyTime() {
    return this.getStringAttribute('unready_time');
  }
  public set unreadyTime(value: string) {
    this._unreadyTime = value;
  }
  public resetUnreadyTime() {
    this._unreadyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unreadyTimeInput() {
    return this._unreadyTime;
  }

  // utilization_threshold - computed: true, optional: true, required: false
  private _utilizationThreshold?: number; 
  public get utilizationThreshold() {
    return this.getNumberAttribute('utilization_threshold');
  }
  public set utilizationThreshold(value: number) {
    this._utilizationThreshold = value;
  }
  public resetUtilizationThreshold() {
    this._utilizationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utilizationThresholdInput() {
    return this._utilizationThreshold;
  }
}

export class Mk8STritonProviderAutoscalerList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProviderAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderAutoscalerOutputReference {
    return new Mk8STritonProviderAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8STritonProviderConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#account Mk8S#account}
  */
  readonly account: string;
  /**
  * Link to a SSH or opaque secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#private_key_secret_link Mk8S#private_key_secret_link}
  */
  readonly privateKeySecretLink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#url Mk8S#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#user Mk8S#user}
  */
  readonly user?: string;
}

export function mk8STritonProviderConnectionToTerraform(struct?: Mk8STritonProviderConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    private_key_secret_link: cdktf.stringToTerraform(struct!.privateKeySecretLink),
    url: cdktf.stringToTerraform(struct!.url),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function mk8STritonProviderConnectionToHclTerraform(struct?: Mk8STritonProviderConnection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_secret_link: {
      value: cdktf.stringToHclTerraform(struct!.privateKeySecretLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8STritonProviderConnectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProviderConnection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._privateKeySecretLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeySecretLink = this._privateKeySecretLink;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProviderConnection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._privateKeySecretLink = undefined;
      this._url = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._privateKeySecretLink = value.privateKeySecretLink;
      this._url = value.url;
      this._user = value.user;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // private_key_secret_link - computed: false, optional: false, required: true
  private _privateKeySecretLink?: string; 
  public get privateKeySecretLink() {
    return this.getStringAttribute('private_key_secret_link');
  }
  public set privateKeySecretLink(value: string) {
    this._privateKeySecretLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeySecretLinkInput() {
    return this._privateKeySecretLink;
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

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

export class Mk8STritonProviderConnectionList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProviderConnection[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderConnectionOutputReference {
    return new Mk8STritonProviderConnectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8STritonProviderLoadBalancerGateway {
}

export function mk8STritonProviderLoadBalancerGatewayToTerraform(struct?: Mk8STritonProviderLoadBalancerGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8STritonProviderLoadBalancerGatewayToHclTerraform(struct?: Mk8STritonProviderLoadBalancerGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8STritonProviderLoadBalancerGatewayOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProviderLoadBalancerGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProviderLoadBalancerGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Mk8STritonProviderLoadBalancerGatewayList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProviderLoadBalancerGateway[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderLoadBalancerGatewayOutputReference {
    return new Mk8STritonProviderLoadBalancerGatewayOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8STritonProviderLoadBalancerManualLogging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#external_syslog Mk8S#external_syslog}
  */
  readonly externalSyslog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#node_port Mk8S#node_port}
  */
  readonly nodePort?: number;
}

export function mk8STritonProviderLoadBalancerManualLoggingToTerraform(struct?: Mk8STritonProviderLoadBalancerManualLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_syslog: cdktf.stringToTerraform(struct!.externalSyslog),
    node_port: cdktf.numberToTerraform(struct!.nodePort),
  }
}


export function mk8STritonProviderLoadBalancerManualLoggingToHclTerraform(struct?: Mk8STritonProviderLoadBalancerManualLogging | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_syslog: {
      value: cdktf.stringToHclTerraform(struct!.externalSyslog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_port: {
      value: cdktf.numberToHclTerraform(struct!.nodePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8STritonProviderLoadBalancerManualLoggingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProviderLoadBalancerManualLogging | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalSyslog !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSyslog = this._externalSyslog;
    }
    if (this._nodePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePort = this._nodePort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProviderLoadBalancerManualLogging | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalSyslog = undefined;
      this._nodePort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalSyslog = value.externalSyslog;
      this._nodePort = value.nodePort;
    }
  }

  // external_syslog - computed: false, optional: true, required: false
  private _externalSyslog?: string; 
  public get externalSyslog() {
    return this.getStringAttribute('external_syslog');
  }
  public set externalSyslog(value: string) {
    this._externalSyslog = value;
  }
  public resetExternalSyslog() {
    this._externalSyslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSyslogInput() {
    return this._externalSyslog;
  }

  // node_port - computed: false, optional: true, required: false
  private _nodePort?: number; 
  public get nodePort() {
    return this.getNumberAttribute('node_port');
  }
  public set nodePort(value: number) {
    this._nodePort = value;
  }
  public resetNodePort() {
    this._nodePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePortInput() {
    return this._nodePort;
  }
}

export class Mk8STritonProviderLoadBalancerManualLoggingList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProviderLoadBalancerManualLogging[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderLoadBalancerManualLoggingOutputReference {
    return new Mk8STritonProviderLoadBalancerManualLoggingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8STritonProviderLoadBalancerManual {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#cns_internal_domain Mk8S#cns_internal_domain}
  */
  readonly cnsInternalDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#cns_public_domain Mk8S#cns_public_domain}
  */
  readonly cnsPublicDomain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#count Mk8S#count}
  */
  readonly count?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#image_id Mk8S#image_id}
  */
  readonly imageId: string;
  /**
  * Extra tags to attach to instances from a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#metadata Mk8S#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#package_id Mk8S#package_id}
  */
  readonly packageId: string;
  /**
  * If set, machine will also get a public IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#private_network_ids Mk8S#private_network_ids}
  */
  readonly privateNetworkIds: string[];
  /**
  * If set, machine will also get a public IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#public_network_id Mk8S#public_network_id}
  */
  readonly publicNetworkId: string;
  /**
  * Extra tags to attach to instances from a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#tags Mk8S#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * logging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#logging Mk8S#logging}
  */
  readonly logging?: Mk8STritonProviderLoadBalancerManualLogging[] | cdktf.IResolvable;
}

export function mk8STritonProviderLoadBalancerManualToTerraform(struct?: Mk8STritonProviderLoadBalancerManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cns_internal_domain: cdktf.stringToTerraform(struct!.cnsInternalDomain),
    cns_public_domain: cdktf.stringToTerraform(struct!.cnsPublicDomain),
    count: cdktf.numberToTerraform(struct!.count),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    private_network_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateNetworkIds),
    public_network_id: cdktf.stringToTerraform(struct!.publicNetworkId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    logging: cdktf.listMapper(mk8STritonProviderLoadBalancerManualLoggingToTerraform, true)(struct!.logging),
  }
}


export function mk8STritonProviderLoadBalancerManualToHclTerraform(struct?: Mk8STritonProviderLoadBalancerManual | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cns_internal_domain: {
      value: cdktf.stringToHclTerraform(struct!.cnsInternalDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cns_public_domain: {
      value: cdktf.stringToHclTerraform(struct!.cnsPublicDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    package_id: {
      value: cdktf.stringToHclTerraform(struct!.packageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_network_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateNetworkIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    public_network_id: {
      value: cdktf.stringToHclTerraform(struct!.publicNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    logging: {
      value: cdktf.listMapperHcl(mk8STritonProviderLoadBalancerManualLoggingToHclTerraform, true)(struct!.logging),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8STritonProviderLoadBalancerManualLoggingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8STritonProviderLoadBalancerManualOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProviderLoadBalancerManual | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cnsInternalDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnsInternalDomain = this._cnsInternalDomain;
    }
    if (this._cnsPublicDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnsPublicDomain = this._cnsPublicDomain;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._packageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageId = this._packageId;
    }
    if (this._privateNetworkIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkIds = this._privateNetworkIds;
    }
    if (this._publicNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkId = this._publicNetworkId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._logging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logging = this._logging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProviderLoadBalancerManual | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cnsInternalDomain = undefined;
      this._cnsPublicDomain = undefined;
      this._count = undefined;
      this._imageId = undefined;
      this._metadata = undefined;
      this._packageId = undefined;
      this._privateNetworkIds = undefined;
      this._publicNetworkId = undefined;
      this._tags = undefined;
      this._logging.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cnsInternalDomain = value.cnsInternalDomain;
      this._cnsPublicDomain = value.cnsPublicDomain;
      this._count = value.count;
      this._imageId = value.imageId;
      this._metadata = value.metadata;
      this._packageId = value.packageId;
      this._privateNetworkIds = value.privateNetworkIds;
      this._publicNetworkId = value.publicNetworkId;
      this._tags = value.tags;
      this._logging.internalValue = value.logging;
    }
  }

  // cns_internal_domain - computed: false, optional: false, required: true
  private _cnsInternalDomain?: string; 
  public get cnsInternalDomain() {
    return this.getStringAttribute('cns_internal_domain');
  }
  public set cnsInternalDomain(value: string) {
    this._cnsInternalDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnsInternalDomainInput() {
    return this._cnsInternalDomain;
  }

  // cns_public_domain - computed: false, optional: false, required: true
  private _cnsPublicDomain?: string; 
  public get cnsPublicDomain() {
    return this.getStringAttribute('cns_public_domain');
  }
  public set cnsPublicDomain(value: string) {
    this._cnsPublicDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cnsPublicDomainInput() {
    return this._cnsPublicDomain;
  }

  // count - computed: true, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // package_id - computed: false, optional: false, required: true
  private _packageId?: string; 
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string) {
    this._packageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId;
  }

  // private_network_ids - computed: false, optional: false, required: true
  private _privateNetworkIds?: string[]; 
  public get privateNetworkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('private_network_ids'));
  }
  public set privateNetworkIds(value: string[]) {
    this._privateNetworkIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkIdsInput() {
    return this._privateNetworkIds;
  }

  // public_network_id - computed: false, optional: false, required: true
  private _publicNetworkId?: string; 
  public get publicNetworkId() {
    return this.getStringAttribute('public_network_id');
  }
  public set publicNetworkId(value: string) {
    this._publicNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkIdInput() {
    return this._publicNetworkId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // logging - computed: false, optional: true, required: false
  private _logging = new Mk8STritonProviderLoadBalancerManualLoggingList(this, "logging", false);
  public get logging() {
    return this._logging;
  }
  public putLogging(value: Mk8STritonProviderLoadBalancerManualLogging[] | cdktf.IResolvable) {
    this._logging.internalValue = value;
  }
  public resetLogging() {
    this._logging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging.internalValue;
  }
}

export class Mk8STritonProviderLoadBalancerManualList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProviderLoadBalancerManual[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderLoadBalancerManualOutputReference {
    return new Mk8STritonProviderLoadBalancerManualOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8STritonProviderLoadBalancerNone {
}

export function mk8STritonProviderLoadBalancerNoneToTerraform(struct?: Mk8STritonProviderLoadBalancerNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8STritonProviderLoadBalancerNoneToHclTerraform(struct?: Mk8STritonProviderLoadBalancerNone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8STritonProviderLoadBalancerNoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProviderLoadBalancerNone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProviderLoadBalancerNone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

export class Mk8STritonProviderLoadBalancerNoneList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProviderLoadBalancerNone[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderLoadBalancerNoneOutputReference {
    return new Mk8STritonProviderLoadBalancerNoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8STritonProviderLoadBalancer {
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#gateway Mk8S#gateway}
  */
  readonly gateway?: Mk8STritonProviderLoadBalancerGateway[] | cdktf.IResolvable;
  /**
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#manual Mk8S#manual}
  */
  readonly manual?: Mk8STritonProviderLoadBalancerManual[] | cdktf.IResolvable;
  /**
  * none block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#none Mk8S#none}
  */
  readonly none?: Mk8STritonProviderLoadBalancerNone[] | cdktf.IResolvable;
}

export function mk8STritonProviderLoadBalancerToTerraform(struct?: Mk8STritonProviderLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway: cdktf.listMapper(mk8STritonProviderLoadBalancerGatewayToTerraform, true)(struct!.gateway),
    manual: cdktf.listMapper(mk8STritonProviderLoadBalancerManualToTerraform, true)(struct!.manual),
    none: cdktf.listMapper(mk8STritonProviderLoadBalancerNoneToTerraform, true)(struct!.none),
  }
}


export function mk8STritonProviderLoadBalancerToHclTerraform(struct?: Mk8STritonProviderLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway: {
      value: cdktf.listMapperHcl(mk8STritonProviderLoadBalancerGatewayToHclTerraform, true)(struct!.gateway),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8STritonProviderLoadBalancerGatewayList",
    },
    manual: {
      value: cdktf.listMapperHcl(mk8STritonProviderLoadBalancerManualToHclTerraform, true)(struct!.manual),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8STritonProviderLoadBalancerManualList",
    },
    none: {
      value: cdktf.listMapperHcl(mk8STritonProviderLoadBalancerNoneToHclTerraform, true)(struct!.none),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8STritonProviderLoadBalancerNoneList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8STritonProviderLoadBalancerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProviderLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway?.internalValue;
    }
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
    if (this._none?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProviderLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gateway.internalValue = undefined;
      this._manual.internalValue = undefined;
      this._none.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gateway.internalValue = value.gateway;
      this._manual.internalValue = value.manual;
      this._none.internalValue = value.none;
    }
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway = new Mk8STritonProviderLoadBalancerGatewayList(this, "gateway", false);
  public get gateway() {
    return this._gateway;
  }
  public putGateway(value: Mk8STritonProviderLoadBalancerGateway[] | cdktf.IResolvable) {
    this._gateway.internalValue = value;
  }
  public resetGateway() {
    this._gateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway.internalValue;
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new Mk8STritonProviderLoadBalancerManualList(this, "manual", false);
  public get manual() {
    return this._manual;
  }
  public putManual(value: Mk8STritonProviderLoadBalancerManual[] | cdktf.IResolvable) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
  }

  // none - computed: false, optional: true, required: false
  private _none = new Mk8STritonProviderLoadBalancerNoneList(this, "none", false);
  public get none() {
    return this._none;
  }
  public putNone(value: Mk8STritonProviderLoadBalancerNone[] | cdktf.IResolvable) {
    this._none.internalValue = value;
  }
  public resetNone() {
    this._none.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none.internalValue;
  }
}

export class Mk8STritonProviderLoadBalancerList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProviderLoadBalancer[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderLoadBalancerOutputReference {
    return new Mk8STritonProviderLoadBalancerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8STritonProviderNetworking {
  /**
  * DNS forwarder used by the cluster. Can be a space-delimited list of dns servers. Default is /etc/resolv.conf when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#dns_forwarder Mk8S#dns_forwarder}
  */
  readonly dnsForwarder?: string;
  /**
  * The CIDR of the pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#pod_network Mk8S#pod_network}
  */
  readonly podNetwork?: string;
  /**
  * The CIDR of the service network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#service_network Mk8S#service_network}
  */
  readonly serviceNetwork?: string;
}

export function mk8STritonProviderNetworkingToTerraform(struct?: Mk8STritonProviderNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_forwarder: cdktf.stringToTerraform(struct!.dnsForwarder),
    pod_network: cdktf.stringToTerraform(struct!.podNetwork),
    service_network: cdktf.stringToTerraform(struct!.serviceNetwork),
  }
}


export function mk8STritonProviderNetworkingToHclTerraform(struct?: Mk8STritonProviderNetworking | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_forwarder: {
      value: cdktf.stringToHclTerraform(struct!.dnsForwarder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_network: {
      value: cdktf.stringToHclTerraform(struct!.podNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_network: {
      value: cdktf.stringToHclTerraform(struct!.serviceNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8STritonProviderNetworkingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProviderNetworking | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsForwarder !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsForwarder = this._dnsForwarder;
    }
    if (this._podNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.podNetwork = this._podNetwork;
    }
    if (this._serviceNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNetwork = this._serviceNetwork;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProviderNetworking | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dnsForwarder = undefined;
      this._podNetwork = undefined;
      this._serviceNetwork = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dnsForwarder = value.dnsForwarder;
      this._podNetwork = value.podNetwork;
      this._serviceNetwork = value.serviceNetwork;
    }
  }

  // dns_forwarder - computed: false, optional: true, required: false
  private _dnsForwarder?: string; 
  public get dnsForwarder() {
    return this.getStringAttribute('dns_forwarder');
  }
  public set dnsForwarder(value: string) {
    this._dnsForwarder = value;
  }
  public resetDnsForwarder() {
    this._dnsForwarder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsForwarderInput() {
    return this._dnsForwarder;
  }

  // pod_network - computed: true, optional: true, required: false
  private _podNetwork?: string; 
  public get podNetwork() {
    return this.getStringAttribute('pod_network');
  }
  public set podNetwork(value: string) {
    this._podNetwork = value;
  }
  public resetPodNetwork() {
    this._podNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podNetworkInput() {
    return this._podNetwork;
  }

  // service_network - computed: true, optional: true, required: false
  private _serviceNetwork?: string; 
  public get serviceNetwork() {
    return this.getStringAttribute('service_network');
  }
  public set serviceNetwork(value: string) {
    this._serviceNetwork = value;
  }
  public resetServiceNetwork() {
    this._serviceNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkInput() {
    return this._serviceNetwork;
  }
}

export class Mk8STritonProviderNetworkingList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProviderNetworking[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderNetworkingOutputReference {
    return new Mk8STritonProviderNetworkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8STritonProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8STritonProviderNodePoolTaintToTerraform(struct?: Mk8STritonProviderNodePoolTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mk8STritonProviderNodePoolTaintToHclTerraform(struct?: Mk8STritonProviderNodePoolTaint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8STritonProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProviderNodePoolTaint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProviderNodePoolTaint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class Mk8STritonProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderNodePoolTaintOutputReference {
    return new Mk8STritonProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8STritonProviderNodePool {
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#max_size Mk8S#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#min_size Mk8S#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#override_image_id Mk8S#override_image_id}
  */
  readonly overrideImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#package_id Mk8S#package_id}
  */
  readonly packageId: string;
  /**
  * More private networks to join.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#private_network_ids Mk8S#private_network_ids}
  */
  readonly privateNetworkIds?: string[];
  /**
  * If set, machine will also get a public IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#public_network_id Mk8S#public_network_id}
  */
  readonly publicNetworkId?: string;
  /**
  * Extra tags to attach to instances from a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#triton_tags Mk8S#triton_tags}
  */
  readonly tritonTags?: { [key: string]: string };
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8STritonProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8STritonProviderNodePoolToTerraform(struct?: Mk8STritonProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    override_image_id: cdktf.stringToTerraform(struct!.overrideImageId),
    package_id: cdktf.stringToTerraform(struct!.packageId),
    private_network_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.privateNetworkIds),
    public_network_id: cdktf.stringToTerraform(struct!.publicNetworkId),
    triton_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tritonTags),
    taint: cdktf.listMapper(mk8STritonProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8STritonProviderNodePoolToHclTerraform(struct?: Mk8STritonProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_image_id: {
      value: cdktf.stringToHclTerraform(struct!.overrideImageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    package_id: {
      value: cdktf.stringToHclTerraform(struct!.packageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_network_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.privateNetworkIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    public_network_id: {
      value: cdktf.stringToHclTerraform(struct!.publicNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    triton_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tritonTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8STritonProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "set",
      storageClassType: "Mk8STritonProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8STritonProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProviderNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._overrideImageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideImageId = this._overrideImageId;
    }
    if (this._packageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.packageId = this._packageId;
    }
    if (this._privateNetworkIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkIds = this._privateNetworkIds;
    }
    if (this._publicNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkId = this._publicNetworkId;
    }
    if (this._tritonTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tritonTags = this._tritonTags;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._overrideImageId = undefined;
      this._packageId = undefined;
      this._privateNetworkIds = undefined;
      this._publicNetworkId = undefined;
      this._tritonTags = undefined;
      this._taint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._name = value.name;
      this._overrideImageId = value.overrideImageId;
      this._packageId = value.packageId;
      this._privateNetworkIds = value.privateNetworkIds;
      this._publicNetworkId = value.publicNetworkId;
      this._tritonTags = value.tritonTags;
      this._taint.internalValue = value.taint;
    }
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

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // override_image_id - computed: false, optional: true, required: false
  private _overrideImageId?: string; 
  public get overrideImageId() {
    return this.getStringAttribute('override_image_id');
  }
  public set overrideImageId(value: string) {
    this._overrideImageId = value;
  }
  public resetOverrideImageId() {
    this._overrideImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideImageIdInput() {
    return this._overrideImageId;
  }

  // package_id - computed: false, optional: false, required: true
  private _packageId?: string; 
  public get packageId() {
    return this.getStringAttribute('package_id');
  }
  public set packageId(value: string) {
    this._packageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packageIdInput() {
    return this._packageId;
  }

  // private_network_ids - computed: false, optional: true, required: false
  private _privateNetworkIds?: string[]; 
  public get privateNetworkIds() {
    return cdktf.Fn.tolist(this.getListAttribute('private_network_ids'));
  }
  public set privateNetworkIds(value: string[]) {
    this._privateNetworkIds = value;
  }
  public resetPrivateNetworkIds() {
    this._privateNetworkIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkIdsInput() {
    return this._privateNetworkIds;
  }

  // public_network_id - computed: false, optional: true, required: false
  private _publicNetworkId?: string; 
  public get publicNetworkId() {
    return this.getStringAttribute('public_network_id');
  }
  public set publicNetworkId(value: string) {
    this._publicNetworkId = value;
  }
  public resetPublicNetworkId() {
    this._publicNetworkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkIdInput() {
    return this._publicNetworkId;
  }

  // triton_tags - computed: false, optional: true, required: false
  private _tritonTags?: { [key: string]: string }; 
  public get tritonTags() {
    return this.getStringMapAttribute('triton_tags');
  }
  public set tritonTags(value: { [key: string]: string }) {
    this._tritonTags = value;
  }
  public resetTritonTags() {
    this._tritonTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tritonTagsInput() {
    return this._tritonTags;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8STritonProviderNodePoolTaintList(this, "taint", true);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8STritonProviderNodePoolTaint[] | cdktf.IResolvable) {
    this._taint.internalValue = value;
  }
  public resetTaint() {
    this._taint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintInput() {
    return this._taint.internalValue;
  }
}

export class Mk8STritonProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderNodePoolOutputReference {
    return new Mk8STritonProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8STritonProvider {
  /**
  * Enable firewall for the instances deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#firewall_enabled Mk8S#firewall_enabled}
  */
  readonly firewallEnabled?: boolean | cdktf.IResolvable;
  /**
  * Default image for all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#image_id Mk8S#image_id}
  */
  readonly imageId: string;
  /**
  * Control Plane location that will host the K8s components. Prefer one that is closest to the Triton datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#location Mk8S#location}
  */
  readonly location: string;
  /**
  * Optional shell script that will be run before K8s is installed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#pre_install_script Mk8S#pre_install_script}
  */
  readonly preInstallScript?: string;
  /**
  * ID of the private Fabric/Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#private_network_id Mk8S#private_network_id}
  */
  readonly privateNetworkId: string;
  /**
  * Extra SSH keys to provision for user root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#ssh_keys Mk8S#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#autoscaler Mk8S#autoscaler}
  */
  readonly autoscaler?: Mk8STritonProviderAutoscaler[] | cdktf.IResolvable;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#connection Mk8S#connection}
  */
  readonly connection?: Mk8STritonProviderConnection[] | cdktf.IResolvable;
  /**
  * load_balancer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#load_balancer Mk8S#load_balancer}
  */
  readonly loadBalancer?: Mk8STritonProviderLoadBalancer[] | cdktf.IResolvable;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#networking Mk8S#networking}
  */
  readonly networking?: Mk8STritonProviderNetworking[] | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.15/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8STritonProviderNodePool[] | cdktf.IResolvable;
}

export function mk8STritonProviderToTerraform(struct?: Mk8STritonProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firewall_enabled: cdktf.booleanToTerraform(struct!.firewallEnabled),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    location: cdktf.stringToTerraform(struct!.location),
    pre_install_script: cdktf.stringToTerraform(struct!.preInstallScript),
    private_network_id: cdktf.stringToTerraform(struct!.privateNetworkId),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    autoscaler: cdktf.listMapper(mk8STritonProviderAutoscalerToTerraform, true)(struct!.autoscaler),
    connection: cdktf.listMapper(mk8STritonProviderConnectionToTerraform, true)(struct!.connection),
    load_balancer: cdktf.listMapper(mk8STritonProviderLoadBalancerToTerraform, true)(struct!.loadBalancer),
    networking: cdktf.listMapper(mk8STritonProviderNetworkingToTerraform, true)(struct!.networking),
    node_pool: cdktf.listMapper(mk8STritonProviderNodePoolToTerraform, true)(struct!.nodePool),
  }
}


export function mk8STritonProviderToHclTerraform(struct?: Mk8STritonProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firewall_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.firewallEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pre_install_script: {
      value: cdktf.stringToHclTerraform(struct!.preInstallScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_network_id: {
      value: cdktf.stringToHclTerraform(struct!.privateNetworkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    autoscaler: {
      value: cdktf.listMapperHcl(mk8STritonProviderAutoscalerToHclTerraform, true)(struct!.autoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8STritonProviderAutoscalerList",
    },
    connection: {
      value: cdktf.listMapperHcl(mk8STritonProviderConnectionToHclTerraform, true)(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8STritonProviderConnectionList",
    },
    load_balancer: {
      value: cdktf.listMapperHcl(mk8STritonProviderLoadBalancerToHclTerraform, true)(struct!.loadBalancer),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8STritonProviderLoadBalancerList",
    },
    networking: {
      value: cdktf.listMapperHcl(mk8STritonProviderNetworkingToHclTerraform, true)(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8STritonProviderNetworkingList",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8STritonProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "set",
      storageClassType: "Mk8STritonProviderNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8STritonProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8STritonProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallEnabled = this._firewallEnabled;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._preInstallScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInstallScript = this._preInstallScript;
    }
    if (this._privateNetworkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkId = this._privateNetworkId;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._networking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networking = this._networking?.internalValue;
    }
    if (this._nodePool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePool = this._nodePool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8STritonProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firewallEnabled = undefined;
      this._imageId = undefined;
      this._location = undefined;
      this._preInstallScript = undefined;
      this._privateNetworkId = undefined;
      this._sshKeys = undefined;
      this._autoscaler.internalValue = undefined;
      this._connection.internalValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._networking.internalValue = undefined;
      this._nodePool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._firewallEnabled = value.firewallEnabled;
      this._imageId = value.imageId;
      this._location = value.location;
      this._preInstallScript = value.preInstallScript;
      this._privateNetworkId = value.privateNetworkId;
      this._sshKeys = value.sshKeys;
      this._autoscaler.internalValue = value.autoscaler;
      this._connection.internalValue = value.connection;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._networking.internalValue = value.networking;
      this._nodePool.internalValue = value.nodePool;
    }
  }

  // firewall_enabled - computed: false, optional: true, required: false
  private _firewallEnabled?: boolean | cdktf.IResolvable; 
  public get firewallEnabled() {
    return this.getBooleanAttribute('firewall_enabled');
  }
  public set firewallEnabled(value: boolean | cdktf.IResolvable) {
    this._firewallEnabled = value;
  }
  public resetFirewallEnabled() {
    this._firewallEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallEnabledInput() {
    return this._firewallEnabled;
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // pre_install_script - computed: false, optional: true, required: false
  private _preInstallScript?: string; 
  public get preInstallScript() {
    return this.getStringAttribute('pre_install_script');
  }
  public set preInstallScript(value: string) {
    this._preInstallScript = value;
  }
  public resetPreInstallScript() {
    this._preInstallScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preInstallScriptInput() {
    return this._preInstallScript;
  }

  // private_network_id - computed: false, optional: false, required: true
  private _privateNetworkId?: string; 
  public get privateNetworkId() {
    return this.getStringAttribute('private_network_id');
  }
  public set privateNetworkId(value: string) {
    this._privateNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkIdInput() {
    return this._privateNetworkId;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new Mk8STritonProviderAutoscalerList(this, "autoscaler", false);
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: Mk8STritonProviderAutoscaler[] | cdktf.IResolvable) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new Mk8STritonProviderConnectionList(this, "connection", false);
  public get connection() {
    return this._connection;
  }
  public putConnection(value: Mk8STritonProviderConnection[] | cdktf.IResolvable) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // load_balancer - computed: false, optional: true, required: false
  private _loadBalancer = new Mk8STritonProviderLoadBalancerList(this, "load_balancer", false);
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: Mk8STritonProviderLoadBalancer[] | cdktf.IResolvable) {
    this._loadBalancer.internalValue = value;
  }
  public resetLoadBalancer() {
    this._loadBalancer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new Mk8STritonProviderNetworkingList(this, "networking", false);
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: Mk8STritonProviderNetworking[] | cdktf.IResolvable) {
    this._networking.internalValue = value;
  }
  public resetNetworking() {
    this._networking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInput() {
    return this._networking.internalValue;
  }

  // node_pool - computed: false, optional: true, required: false
  private _nodePool = new Mk8STritonProviderNodePoolList(this, "node_pool", true);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8STritonProviderNodePool[] | cdktf.IResolvable) {
    this._nodePool.internalValue = value;
  }
  public resetNodePool() {
    this._nodePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool.internalValue;
  }
}

export class Mk8STritonProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8STritonProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8STritonProviderOutputReference {
    return new Mk8STritonProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
