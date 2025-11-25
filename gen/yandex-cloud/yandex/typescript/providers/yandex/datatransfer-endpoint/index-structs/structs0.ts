import * as cdktf from 'cdktf';
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#name DatatransferEndpoint#name}
  */
  readonly name?: string;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._name = value.name;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // name - computed: true, optional: true, required: false
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
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsOutputReference {
    return new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode {
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}


export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledList",
    },
    enabled: {
      value: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#http_port DatatransferEndpoint#http_port}
  */
  readonly httpPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#native_port DatatransferEndpoint#native_port}
  */
  readonly nativePort?: number;
  /**
  * shards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#shards DatatransferEndpoint#shards}
  */
  readonly shards?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable;
  /**
  * tls_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    native_port: cdktf.numberToTerraform(struct!.nativePort),
    shards: cdktf.listMapper(datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsToTerraform, true)(struct!.shards),
    tls_mode: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}


export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    native_port: {
      value: cdktf.numberToHclTerraform(struct!.nativePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shards: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsToHclTerraform, true)(struct!.shards),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsList",
    },
    tls_mode: {
      value: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeToHclTerraform(struct!.tlsMode),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._nativePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativePort = this._nativePort;
    }
    if (this._shards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shards = this._shards?.internalValue;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPort = undefined;
      this._nativePort = undefined;
      this._shards.internalValue = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPort = value.httpPort;
      this._nativePort = value.nativePort;
      this._shards.internalValue = value.shards;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // native_port - computed: true, optional: true, required: false
  private _nativePort?: number; 
  public get nativePort() {
    return this.getNumberAttribute('native_port');
  }
  public set nativePort(value: number) {
    this._nativePort = value;
  }
  public resetNativePort() {
    this._nativePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativePortInput() {
    return this._nativePort;
  }

  // shards - computed: false, optional: true, required: false
  private _shards = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShardsList(this, "shards", false);
  public get shards() {
    return this._shards;
  }
  public putShards(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable) {
    this._shards.internalValue = value;
  }
  public resetShards() {
    this._shards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsInput() {
    return this._shards.internalValue;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * on_premise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    user: cdktf.stringToTerraform(struct!.user),
    on_premise: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseToTerraform(struct!.onPremise),
    password: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordToTerraform(struct!.password),
  }
}


export function datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdb_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.mdbClusterId),
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
    on_premise: {
      value: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseList",
    },
    password: {
      value: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._mdbClusterId = undefined;
      this._user = undefined;
      this._onPremise.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._mdbClusterId = value.mdbClusterId;
      this._user = value.user;
      this._onPremise.internalValue = value.onPremise;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // user - computed: true, optional: true, required: false
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

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseSourceConnection {
  /**
  * connection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection_options DatatransferEndpoint#connection_options}
  */
  readonly connectionOptions?: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions;
}

export function datatransferEndpointSettingsClickhouseSourceConnectionToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionOutputReference | DatatransferEndpointSettingsClickhouseSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_options: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsToTerraform(struct!.connectionOptions),
  }
}


export function datatransferEndpointSettingsClickhouseSourceConnectionToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceConnectionOutputReference | DatatransferEndpointSettingsClickhouseSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_options: {
      value: datatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsToHclTerraform(struct!.connectionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseSourceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOptions = this._connectionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionOptions.internalValue = value.connectionOptions;
    }
  }

  // connection_options - computed: false, optional: true, required: false
  private _connectionOptions = new DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: DatatransferEndpointSettingsClickhouseSourceConnectionConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#clickhouse_cluster_name DatatransferEndpoint#clickhouse_cluster_name}
  */
  readonly clickhouseClusterName?: string;
  /**
  * The list of tables that should not be transferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#exclude_tables DatatransferEndpoint#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * The list of tables that should be transferred. Leave empty if all tables should be transferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#include_tables DatatransferEndpoint#include_tables}
  */
  readonly includeTables?: string[];
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsClickhouseSourceConnection;
}

export function datatransferEndpointSettingsClickhouseSourceToTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceOutputReference | DatatransferEndpointSettingsClickhouseSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clickhouse_cluster_name: cdktf.stringToTerraform(struct!.clickhouseClusterName),
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    connection: datatransferEndpointSettingsClickhouseSourceConnectionToTerraform(struct!.connection),
  }
}


export function datatransferEndpointSettingsClickhouseSourceToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseSourceOutputReference | DatatransferEndpointSettingsClickhouseSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clickhouse_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clickhouseClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection: {
      value: datatransferEndpointSettingsClickhouseSourceConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseSourceConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clickhouseClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseClusterName = this._clickhouseClusterName;
    }
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clickhouseClusterName = undefined;
      this._excludeTables = undefined;
      this._includeTables = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._connection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clickhouseClusterName = value.clickhouseClusterName;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._connection.internalValue = value.connection;
    }
  }

  // clickhouse_cluster_name - computed: true, optional: true, required: false
  private _clickhouseClusterName?: string; 
  public get clickhouseClusterName() {
    return this.getStringAttribute('clickhouse_cluster_name');
  }
  public set clickhouseClusterName(value: string) {
    this._clickhouseClusterName = value;
  }
  public resetClickhouseClusterName() {
    this._clickhouseClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseClusterNameInput() {
    return this._clickhouseClusterName;
  }

  // exclude_tables - computed: true, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: true, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsClickhouseSourceConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsClickhouseSourceConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetAltNames {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#from_name DatatransferEndpoint#from_name}
  */
  readonly fromName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#to_name DatatransferEndpoint#to_name}
  */
  readonly toName?: string;
}

export function datatransferEndpointSettingsClickhouseTargetAltNamesToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetAltNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from_name: cdktf.stringToTerraform(struct!.fromName),
    to_name: cdktf.stringToTerraform(struct!.toName),
  }
}


export function datatransferEndpointSettingsClickhouseTargetAltNamesToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetAltNames | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from_name: {
      value: cdktf.stringToHclTerraform(struct!.fromName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    to_name: {
      value: cdktf.stringToHclTerraform(struct!.toName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetAltNamesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetAltNames | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fromName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromName = this._fromName;
    }
    if (this._toName !== undefined) {
      hasAnyValues = true;
      internalValueResult.toName = this._toName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetAltNames | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fromName = undefined;
      this._toName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fromName = value.fromName;
      this._toName = value.toName;
    }
  }

  // from_name - computed: true, optional: true, required: false
  private _fromName?: string; 
  public get fromName() {
    return this.getStringAttribute('from_name');
  }
  public set fromName(value: string) {
    this._fromName = value;
  }
  public resetFromName() {
    this._fromName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNameInput() {
    return this._fromName;
  }

  // to_name - computed: true, optional: true, required: false
  private _toName?: string; 
  public get toName() {
    return this.getStringAttribute('to_name');
  }
  public set toName(value: string) {
    this._toName = value;
  }
  public resetToName() {
    this._toName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toNameInput() {
    return this._toName;
  }
}

export class DatatransferEndpointSettingsClickhouseTargetAltNamesList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsClickhouseTargetAltNames[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsClickhouseTargetAltNamesOutputReference {
    return new DatatransferEndpointSettingsClickhouseTargetAltNamesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards {
  /**
  * List of ClickHouse server host names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Arbitrary shard name. This name may be used in `sharding` block to specify custom sharding rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#name DatatransferEndpoint#name}
  */
  readonly name?: string;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hosts = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hosts = value.hosts;
      this._name = value.name;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // name - computed: true, optional: true, required: false
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
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsOutputReference {
    return new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode {
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}


export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledList",
    },
    enabled: {
      value: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise {
  /**
  * TCP port number for the HTTP interface of the ClickHouse server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#http_port DatatransferEndpoint#http_port}
  */
  readonly httpPort?: number;
  /**
  * TCP port number for the native interface of the ClickHouse server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#native_port DatatransferEndpoint#native_port}
  */
  readonly nativePort?: number;
  /**
  * shards block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#shards DatatransferEndpoint#shards}
  */
  readonly shards?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable;
  /**
  * tls_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    native_port: cdktf.numberToTerraform(struct!.nativePort),
    shards: cdktf.listMapper(datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsToTerraform, true)(struct!.shards),
    tls_mode: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}


export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    native_port: {
      value: cdktf.numberToHclTerraform(struct!.nativePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shards: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsToHclTerraform, true)(struct!.shards),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsList",
    },
    tls_mode: {
      value: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeToHclTerraform(struct!.tlsMode),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._nativePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.nativePort = this._nativePort;
    }
    if (this._shards?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shards = this._shards?.internalValue;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpPort = undefined;
      this._nativePort = undefined;
      this._shards.internalValue = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpPort = value.httpPort;
      this._nativePort = value.nativePort;
      this._shards.internalValue = value.shards;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // http_port - computed: true, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // native_port - computed: true, optional: true, required: false
  private _nativePort?: number; 
  public get nativePort() {
    return this.getNumberAttribute('native_port');
  }
  public set nativePort(value: number) {
    this._nativePort = value;
  }
  public resetNativePort() {
    this._nativePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativePortInput() {
    return this._nativePort;
  }

  // shards - computed: false, optional: true, required: false
  private _shards = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShardsList(this, "shards", false);
  public get shards() {
    return this._shards;
  }
  public putShards(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseShards[] | cdktf.IResolvable) {
    this._shards.internalValue = value;
  }
  public resetShards() {
    this._shards.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardsInput() {
    return this._shards.internalValue;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword {
  /**
  * Password for the database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Identifier of the Managed ClickHouse cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * User for database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * on_premise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    user: cdktf.stringToTerraform(struct!.user),
    on_premise: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseToTerraform(struct!.onPremise),
    password: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordToTerraform(struct!.password),
  }
}


export function datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdb_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.mdbClusterId),
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
    on_premise: {
      value: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseList",
    },
    password: {
      value: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._mdbClusterId = undefined;
      this._user = undefined;
      this._onPremise.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._mdbClusterId = value.mdbClusterId;
      this._user = value.user;
      this._onPremise.internalValue = value.onPremise;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // user - computed: true, optional: true, required: false
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

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetConnection {
  /**
  * connection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection_options DatatransferEndpoint#connection_options}
  */
  readonly connectionOptions?: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions;
}

export function datatransferEndpointSettingsClickhouseTargetConnectionToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionOutputReference | DatatransferEndpointSettingsClickhouseTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_options: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsToTerraform(struct!.connectionOptions),
  }
}


export function datatransferEndpointSettingsClickhouseTargetConnectionToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetConnectionOutputReference | DatatransferEndpointSettingsClickhouseTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_options: {
      value: datatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsToHclTerraform(struct!.connectionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOptions = this._connectionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionOptions.internalValue = value.connectionOptions;
    }
  }

  // connection_options - computed: false, optional: true, required: false
  private _connectionOptions = new DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: DatatransferEndpointSettingsClickhouseTargetConnectionConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash {
  /**
  * The name of the column to calculate hash from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#column_name DatatransferEndpoint#column_name}
  */
  readonly columnName?: string;
}

export function datatransferEndpointSettingsClickhouseTargetShardingColumnValueHashToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHashOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
  }
}


export function datatransferEndpointSettingsClickhouseTargetShardingColumnValueHashToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHashOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHashOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
    }
  }

  // column_name - computed: true, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValue {
  /**
  * The string value of the column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#string_value DatatransferEndpoint#string_value}
  */
  readonly stringValue?: string;
}

export function datatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValueToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValueOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string_value: cdktf.stringToTerraform(struct!.stringValue),
  }
}


export function datatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValueToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValueOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string_value: {
      value: cdktf.stringToHclTerraform(struct!.stringValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stringValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringValue = this._stringValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stringValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stringValue = value.stringValue;
    }
  }

  // string_value - computed: true, optional: true, required: false
  private _stringValue?: string; 
  public get stringValue() {
    return this.getStringAttribute('string_value');
  }
  public set stringValue(value: string) {
    this._stringValue = value;
  }
  public resetStringValue() {
    this._stringValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringValueInput() {
    return this._stringValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMapping {
  /**
  * The name of the shard into which all the rows with the specified `column_value` will be written.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#shard_name DatatransferEndpoint#shard_name}
  */
  readonly shardName?: string;
  /**
  * column_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#column_value DatatransferEndpoint#column_value}
  */
  readonly columnValue?: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValue;
}

export function datatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shard_name: cdktf.stringToTerraform(struct!.shardName),
    column_value: datatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValueToTerraform(struct!.columnValue),
  }
}


export function datatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shard_name: {
      value: cdktf.stringToHclTerraform(struct!.shardName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_value: {
      value: datatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValueToHclTerraform(struct!.columnValue),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shardName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardName = this._shardName;
    }
    if (this._columnValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnValue = this._columnValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shardName = undefined;
      this._columnValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shardName = value.shardName;
      this._columnValue.internalValue = value.columnValue;
    }
  }

  // shard_name - computed: true, optional: true, required: false
  private _shardName?: string; 
  public get shardName() {
    return this.getStringAttribute('shard_name');
  }
  public set shardName(value: string) {
    this._shardName = value;
  }
  public resetShardName() {
    this._shardName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardNameInput() {
    return this._shardName;
  }

  // column_value - computed: false, optional: true, required: false
  private _columnValue = new DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValueOutputReference(this, "column_value");
  public get columnValue() {
    return this._columnValue;
  }
  public putColumnValue(value: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingColumnValue) {
    this._columnValue.internalValue = value;
  }
  public resetColumnValue() {
    this._columnValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnValueInput() {
    return this._columnValue.internalValue;
  }
}

export class DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMapping[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingOutputReference {
    return new DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetShardingCustomMapping {
  /**
  * The name of the column to inspect when deciding the shard to chose for an incoming row.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#column_name DatatransferEndpoint#column_name}
  */
  readonly columnName?: string;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mapping DatatransferEndpoint#mapping}
  */
  readonly mapping?: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMapping[] | cdktf.IResolvable;
}

export function datatransferEndpointSettingsClickhouseTargetShardingCustomMappingToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingCustomMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_name: cdktf.stringToTerraform(struct!.columnName),
    mapping: cdktf.listMapper(datatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingToTerraform, true)(struct!.mapping),
  }
}


export function datatransferEndpointSettingsClickhouseTargetShardingCustomMappingToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingCustomMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_name: {
      value: cdktf.stringToHclTerraform(struct!.columnName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapping: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetShardingCustomMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnName !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnName = this._columnName;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetShardingCustomMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnName = undefined;
      this._mapping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnName = value.columnName;
      this._mapping.internalValue = value.mapping;
    }
  }

  // column_name - computed: true, optional: true, required: false
  private _columnName?: string; 
  public get columnName() {
    return this.getStringAttribute('column_name');
  }
  public set columnName(value: string) {
    this._columnName = value;
  }
  public resetColumnName() {
    this._columnName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNameInput() {
    return this._columnName;
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping = new DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetShardingRoundRobin {
}

export function datatransferEndpointSettingsClickhouseTargetShardingRoundRobinToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingRoundRobinOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingRoundRobin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsClickhouseTargetShardingRoundRobinToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingRoundRobinOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingRoundRobin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsClickhouseTargetShardingRoundRobinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetShardingRoundRobin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetShardingRoundRobin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetShardingTransferId {
}

export function datatransferEndpointSettingsClickhouseTargetShardingTransferIdToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingTransferIdOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingTransferId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsClickhouseTargetShardingTransferIdToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingTransferIdOutputReference | DatatransferEndpointSettingsClickhouseTargetShardingTransferId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsClickhouseTargetShardingTransferIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetShardingTransferId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetShardingTransferId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsClickhouseTargetSharding {
  /**
  * column_value_hash block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#column_value_hash DatatransferEndpoint#column_value_hash}
  */
  readonly columnValueHash?: DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash;
  /**
  * custom_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#custom_mapping DatatransferEndpoint#custom_mapping}
  */
  readonly customMapping?: DatatransferEndpointSettingsClickhouseTargetShardingCustomMapping;
  /**
  * round_robin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#round_robin DatatransferEndpoint#round_robin}
  */
  readonly roundRobin?: DatatransferEndpointSettingsClickhouseTargetShardingRoundRobin;
  /**
  * transfer_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#transfer_id DatatransferEndpoint#transfer_id}
  */
  readonly transferId?: DatatransferEndpointSettingsClickhouseTargetShardingTransferId;
}

export function datatransferEndpointSettingsClickhouseTargetShardingToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingOutputReference | DatatransferEndpointSettingsClickhouseTargetSharding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    column_value_hash: datatransferEndpointSettingsClickhouseTargetShardingColumnValueHashToTerraform(struct!.columnValueHash),
    custom_mapping: datatransferEndpointSettingsClickhouseTargetShardingCustomMappingToTerraform(struct!.customMapping),
    round_robin: datatransferEndpointSettingsClickhouseTargetShardingRoundRobinToTerraform(struct!.roundRobin),
    transfer_id: datatransferEndpointSettingsClickhouseTargetShardingTransferIdToTerraform(struct!.transferId),
  }
}


export function datatransferEndpointSettingsClickhouseTargetShardingToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetShardingOutputReference | DatatransferEndpointSettingsClickhouseTargetSharding): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    column_value_hash: {
      value: datatransferEndpointSettingsClickhouseTargetShardingColumnValueHashToHclTerraform(struct!.columnValueHash),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHashList",
    },
    custom_mapping: {
      value: datatransferEndpointSettingsClickhouseTargetShardingCustomMappingToHclTerraform(struct!.customMapping),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingList",
    },
    round_robin: {
      value: datatransferEndpointSettingsClickhouseTargetShardingRoundRobinToHclTerraform(struct!.roundRobin),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetShardingRoundRobinList",
    },
    transfer_id: {
      value: datatransferEndpointSettingsClickhouseTargetShardingTransferIdToHclTerraform(struct!.transferId),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetShardingTransferIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetShardingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTargetSharding | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columnValueHash?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnValueHash = this._columnValueHash?.internalValue;
    }
    if (this._customMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMapping = this._customMapping?.internalValue;
    }
    if (this._roundRobin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roundRobin = this._roundRobin?.internalValue;
    }
    if (this._transferId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferId = this._transferId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTargetSharding | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columnValueHash.internalValue = undefined;
      this._customMapping.internalValue = undefined;
      this._roundRobin.internalValue = undefined;
      this._transferId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columnValueHash.internalValue = value.columnValueHash;
      this._customMapping.internalValue = value.customMapping;
      this._roundRobin.internalValue = value.roundRobin;
      this._transferId.internalValue = value.transferId;
    }
  }

  // column_value_hash - computed: false, optional: true, required: false
  private _columnValueHash = new DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHashOutputReference(this, "column_value_hash");
  public get columnValueHash() {
    return this._columnValueHash;
  }
  public putColumnValueHash(value: DatatransferEndpointSettingsClickhouseTargetShardingColumnValueHash) {
    this._columnValueHash.internalValue = value;
  }
  public resetColumnValueHash() {
    this._columnValueHash.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnValueHashInput() {
    return this._columnValueHash.internalValue;
  }

  // custom_mapping - computed: false, optional: true, required: false
  private _customMapping = new DatatransferEndpointSettingsClickhouseTargetShardingCustomMappingOutputReference(this, "custom_mapping");
  public get customMapping() {
    return this._customMapping;
  }
  public putCustomMapping(value: DatatransferEndpointSettingsClickhouseTargetShardingCustomMapping) {
    this._customMapping.internalValue = value;
  }
  public resetCustomMapping() {
    this._customMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMappingInput() {
    return this._customMapping.internalValue;
  }

  // round_robin - computed: false, optional: true, required: false
  private _roundRobin = new DatatransferEndpointSettingsClickhouseTargetShardingRoundRobinOutputReference(this, "round_robin");
  public get roundRobin() {
    return this._roundRobin;
  }
  public putRoundRobin(value: DatatransferEndpointSettingsClickhouseTargetShardingRoundRobin) {
    this._roundRobin.internalValue = value;
  }
  public resetRoundRobin() {
    this._roundRobin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roundRobinInput() {
    return this._roundRobin.internalValue;
  }

  // transfer_id - computed: false, optional: true, required: false
  private _transferId = new DatatransferEndpointSettingsClickhouseTargetShardingTransferIdOutputReference(this, "transfer_id");
  public get transferId() {
    return this._transferId;
  }
  public putTransferId(value: DatatransferEndpointSettingsClickhouseTargetShardingTransferId) {
    this._transferId.internalValue = value;
  }
  public resetTransferId() {
    this._transferId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferIdInput() {
    return this._transferId.internalValue;
  }
}
export interface DatatransferEndpointSettingsClickhouseTarget {
  /**
  * How to clean collections when activating the transfer. One of `CLICKHOUSE_CLEANUP_POLICY_DISABLED` or `CLICKHOUSE_CLEANUP_POLICY_DROP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cleanup_policy DatatransferEndpoint#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Name of the ClickHouse cluster. For managed ClickHouse clusters defaults to managed cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#clickhouse_cluster_name DatatransferEndpoint#clickhouse_cluster_name}
  */
  readonly clickhouseClusterName?: string;
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * alt_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#alt_names DatatransferEndpoint#alt_names}
  */
  readonly altNames?: DatatransferEndpointSettingsClickhouseTargetAltNames[] | cdktf.IResolvable;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsClickhouseTargetConnection;
  /**
  * sharding block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#sharding DatatransferEndpoint#sharding}
  */
  readonly sharding?: DatatransferEndpointSettingsClickhouseTargetSharding;
}

export function datatransferEndpointSettingsClickhouseTargetToTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetOutputReference | DatatransferEndpointSettingsClickhouseTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    clickhouse_cluster_name: cdktf.stringToTerraform(struct!.clickhouseClusterName),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    alt_names: cdktf.listMapper(datatransferEndpointSettingsClickhouseTargetAltNamesToTerraform, true)(struct!.altNames),
    connection: datatransferEndpointSettingsClickhouseTargetConnectionToTerraform(struct!.connection),
    sharding: datatransferEndpointSettingsClickhouseTargetShardingToTerraform(struct!.sharding),
  }
}


export function datatransferEndpointSettingsClickhouseTargetToHclTerraform(struct?: DatatransferEndpointSettingsClickhouseTargetOutputReference | DatatransferEndpointSettingsClickhouseTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    clickhouse_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clickhouseClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    alt_names: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsClickhouseTargetAltNamesToHclTerraform, true)(struct!.altNames),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetAltNamesList",
    },
    connection: {
      value: datatransferEndpointSettingsClickhouseTargetConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetConnectionList",
    },
    sharding: {
      value: datatransferEndpointSettingsClickhouseTargetShardingToHclTerraform(struct!.sharding),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsClickhouseTargetShardingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsClickhouseTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsClickhouseTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._clickhouseClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseClusterName = this._clickhouseClusterName;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._altNames?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.altNames = this._altNames?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._sharding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharding = this._sharding?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsClickhouseTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupPolicy = undefined;
      this._clickhouseClusterName = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._altNames.internalValue = undefined;
      this._connection.internalValue = undefined;
      this._sharding.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupPolicy = value.cleanupPolicy;
      this._clickhouseClusterName = value.clickhouseClusterName;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._altNames.internalValue = value.altNames;
      this._connection.internalValue = value.connection;
      this._sharding.internalValue = value.sharding;
    }
  }

  // cleanup_policy - computed: true, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // clickhouse_cluster_name - computed: true, optional: true, required: false
  private _clickhouseClusterName?: string; 
  public get clickhouseClusterName() {
    return this.getStringAttribute('clickhouse_cluster_name');
  }
  public set clickhouseClusterName(value: string) {
    this._clickhouseClusterName = value;
  }
  public resetClickhouseClusterName() {
    this._clickhouseClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseClusterNameInput() {
    return this._clickhouseClusterName;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // alt_names - computed: false, optional: true, required: false
  private _altNames = new DatatransferEndpointSettingsClickhouseTargetAltNamesList(this, "alt_names", false);
  public get altNames() {
    return this._altNames;
  }
  public putAltNames(value: DatatransferEndpointSettingsClickhouseTargetAltNames[] | cdktf.IResolvable) {
    this._altNames.internalValue = value;
  }
  public resetAltNames() {
    this._altNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altNamesInput() {
    return this._altNames.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsClickhouseTargetConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsClickhouseTargetConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // sharding - computed: false, optional: true, required: false
  private _sharding = new DatatransferEndpointSettingsClickhouseTargetShardingOutputReference(this, "sharding");
  public get sharding() {
    return this._sharding;
  }
  public putSharding(value: DatatransferEndpointSettingsClickhouseTargetSharding) {
    this._sharding.internalValue = value;
  }
  public resetSharding() {
    this._sharding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingInput() {
    return this._sharding.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceAuthNoAuth {
}

export function datatransferEndpointSettingsKafkaSourceAuthNoAuthToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceAuthNoAuthOutputReference | DatatransferEndpointSettingsKafkaSourceAuthNoAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsKafkaSourceAuthNoAuthToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceAuthNoAuthOutputReference | DatatransferEndpointSettingsKafkaSourceAuthNoAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsKafkaSourceAuthNoAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceAuthNoAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceAuthNoAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsKafkaSourceAuthSaslPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsKafkaSourceAuthSaslPasswordToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceAuthSaslPasswordOutputReference | DatatransferEndpointSettingsKafkaSourceAuthSaslPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsKafkaSourceAuthSaslPasswordToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceAuthSaslPasswordOutputReference | DatatransferEndpointSettingsKafkaSourceAuthSaslPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceAuthSaslPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceAuthSaslPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceAuthSaslPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceAuthSasl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mechanism DatatransferEndpoint#mechanism}
  */
  readonly mechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsKafkaSourceAuthSaslPassword;
}

export function datatransferEndpointSettingsKafkaSourceAuthSaslToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceAuthSaslOutputReference | DatatransferEndpointSettingsKafkaSourceAuthSasl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mechanism: cdktf.stringToTerraform(struct!.mechanism),
    user: cdktf.stringToTerraform(struct!.user),
    password: datatransferEndpointSettingsKafkaSourceAuthSaslPasswordToTerraform(struct!.password),
  }
}


export function datatransferEndpointSettingsKafkaSourceAuthSaslToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceAuthSaslOutputReference | DatatransferEndpointSettingsKafkaSourceAuthSasl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mechanism: {
      value: cdktf.stringToHclTerraform(struct!.mechanism),
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
    password: {
      value: datatransferEndpointSettingsKafkaSourceAuthSaslPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceAuthSaslPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceAuthSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceAuthSasl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceAuthSasl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mechanism = undefined;
      this._user = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mechanism = value.mechanism;
      this._user = value.user;
      this._password.internalValue = value.password;
    }
  }

  // mechanism - computed: true, optional: true, required: false
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  public resetMechanism() {
    this._mechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }

  // user - computed: true, optional: true, required: false
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

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsKafkaSourceAuthSaslPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsKafkaSourceAuthSaslPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceAuth {
  /**
  * no_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#no_auth DatatransferEndpoint#no_auth}
  */
  readonly noAuth?: DatatransferEndpointSettingsKafkaSourceAuthNoAuth;
  /**
  * sasl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#sasl DatatransferEndpoint#sasl}
  */
  readonly sasl?: DatatransferEndpointSettingsKafkaSourceAuthSasl;
}

export function datatransferEndpointSettingsKafkaSourceAuthToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceAuthOutputReference | DatatransferEndpointSettingsKafkaSourceAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_auth: datatransferEndpointSettingsKafkaSourceAuthNoAuthToTerraform(struct!.noAuth),
    sasl: datatransferEndpointSettingsKafkaSourceAuthSaslToTerraform(struct!.sasl),
  }
}


export function datatransferEndpointSettingsKafkaSourceAuthToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceAuthOutputReference | DatatransferEndpointSettingsKafkaSourceAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_auth: {
      value: datatransferEndpointSettingsKafkaSourceAuthNoAuthToHclTerraform(struct!.noAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceAuthNoAuthList",
    },
    sasl: {
      value: datatransferEndpointSettingsKafkaSourceAuthSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceAuthSaslList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAuth = this._noAuth?.internalValue;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noAuth.internalValue = undefined;
      this._sasl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noAuth.internalValue = value.noAuth;
      this._sasl.internalValue = value.sasl;
    }
  }

  // no_auth - computed: false, optional: true, required: false
  private _noAuth = new DatatransferEndpointSettingsKafkaSourceAuthNoAuthOutputReference(this, "no_auth");
  public get noAuth() {
    return this._noAuth;
  }
  public putNoAuth(value: DatatransferEndpointSettingsKafkaSourceAuthNoAuth) {
    this._noAuth.internalValue = value;
  }
  public resetNoAuth() {
    this._noAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthInput() {
    return this._noAuth.internalValue;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new DatatransferEndpointSettingsKafkaSourceAuthSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: DatatransferEndpointSettingsKafkaSourceAuthSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabledToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabled {
  /**
  * X.509 certificate of the certificate authority which issued the server's certificate, in PEM format. If empty, the server's certificate must be signed by a well-known CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabledToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsMode {
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabled;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}


export function datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabledList",
    },
    enabled: {
      value: datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceConnectionOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#broker_urls DatatransferEndpoint#broker_urls}
  */
  readonly brokerUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tls_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsMode;
}

export function datatransferEndpointSettingsKafkaSourceConnectionOnPremiseToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseOutputReference | DatatransferEndpointSettingsKafkaSourceConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.brokerUrls),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tls_mode: datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}


export function datatransferEndpointSettingsKafkaSourceConnectionOnPremiseToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseOutputReference | DatatransferEndpointSettingsKafkaSourceConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.brokerUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_mode: {
      value: datatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeToHclTerraform(struct!.tlsMode),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceConnectionOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerUrls = this._brokerUrls;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceConnectionOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokerUrls = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokerUrls = value.brokerUrls;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // broker_urls - computed: true, optional: true, required: false
  private _brokerUrls?: string[]; 
  public get brokerUrls() {
    return this.getListAttribute('broker_urls');
  }
  public set brokerUrls(value: string[]) {
    this._brokerUrls = value;
  }
  public resetBrokerUrls() {
    this._brokerUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerUrlsInput() {
    return this._brokerUrls;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cluster_id DatatransferEndpoint#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * on_premise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsKafkaSourceConnectionOnPremise;
}

export function datatransferEndpointSettingsKafkaSourceConnectionToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceConnectionOutputReference | DatatransferEndpointSettingsKafkaSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    on_premise: datatransferEndpointSettingsKafkaSourceConnectionOnPremiseToTerraform(struct!.onPremise),
  }
}


export function datatransferEndpointSettingsKafkaSourceConnectionToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceConnectionOutputReference | DatatransferEndpointSettingsKafkaSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_premise: {
      value: datatransferEndpointSettingsKafkaSourceConnectionOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._onPremise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsKafkaSourceConnectionOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsKafkaSourceConnectionOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1Parser {
}

export function datatransferEndpointSettingsKafkaSourceParserAuditTrailsV1ParserToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1ParserOutputReference | DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1Parser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsKafkaSourceParserAuditTrailsV1ParserToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1ParserOutputReference | DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1Parser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1ParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1Parser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1Parser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParser {
}

export function datatransferEndpointSettingsKafkaSourceParserCloudLoggingParserToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParserOutputReference | DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsKafkaSourceParserCloudLoggingParserToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParserOutputReference | DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFields {
  /**
  * Mark field as Primary Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#key DatatransferEndpoint#key}
  */
  readonly key?: boolean | cdktf.IResolvable;
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#name DatatransferEndpoint#name}
  */
  readonly name?: string;
  /**
  * Path to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#path DatatransferEndpoint#path}
  */
  readonly path?: string;
  /**
  * Mark field as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#required DatatransferEndpoint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Field type, one of: `INT64`, `INT32`, `INT16`, `INT8`, `UINT64`, `UINT32`, `UINT16`, `UINT8`, `DOUBLE`, `BOOLEAN`, `STRING`, `UTF8`, `ANY`, `DATETIME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#type DatatransferEndpoint#type}
  */
  readonly type?: string;
}

export function datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFieldsToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.booleanToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFieldsToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.booleanToHclTerraform(struct!.key),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._path = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._path = value.path;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: boolean | cdktf.IResolvable; 
  public get key() {
    return this.getBooleanAttribute('key');
  }
  public set key(value: boolean | cdktf.IResolvable) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: true, optional: true, required: false
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
}

export class DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFieldsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFields[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFieldsOutputReference {
    return new DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFields {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#fields DatatransferEndpoint#fields}
  */
  readonly fields?: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFields[] | cdktf.IResolvable;
}

export function datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsOutputReference | DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFieldsToTerraform, true)(struct!.fields),
  }
}


export function datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsOutputReference | DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchema {
  /**
  * Description of the data schema as JSON specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#json_fields DatatransferEndpoint#json_fields}
  */
  readonly jsonFields?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#fields DatatransferEndpoint#fields}
  */
  readonly fields?: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFields;
}

export function datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaOutputReference | DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_fields: cdktf.stringToTerraform(struct!.jsonFields),
    fields: datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsToTerraform(struct!.fields),
  }
}


export function datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaOutputReference | DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_fields: {
      value: cdktf.stringToHclTerraform(struct!.jsonFields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFields = this._jsonFields;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonFields = undefined;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonFields = value.jsonFields;
      this._fields.internalValue = value.fields;
    }
  }

  // json_fields - computed: false, optional: true, required: false
  private _jsonFields?: string; 
  public get jsonFields() {
    return this.getStringAttribute('json_fields');
  }
  public set jsonFields(value: string) {
    this._jsonFields = value;
  }
  public resetJsonFields() {
    this._jsonFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFieldsInput() {
    return this._jsonFields;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaFields) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParserJsonParser {
  /**
  * Add fields, that are not in the schema, into the _rest column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#add_rest_column DatatransferEndpoint#add_rest_column}
  */
  readonly addRestColumn?: boolean | cdktf.IResolvable;
  /**
  * Allow null keys. If `false` - null keys will be putted to unparsed data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#null_keys_allowed DatatransferEndpoint#null_keys_allowed}
  */
  readonly nullKeysAllowed?: boolean | cdktf.IResolvable;
  /**
  * Allow unescape string values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#unescape_string_values DatatransferEndpoint#unescape_string_values}
  */
  readonly unescapeStringValues?: boolean | cdktf.IResolvable;
  /**
  * data_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#data_schema DatatransferEndpoint#data_schema}
  */
  readonly dataSchema?: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchema;
}

export function datatransferEndpointSettingsKafkaSourceParserJsonParserToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserJsonParserOutputReference | DatatransferEndpointSettingsKafkaSourceParserJsonParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_rest_column: cdktf.booleanToTerraform(struct!.addRestColumn),
    null_keys_allowed: cdktf.booleanToTerraform(struct!.nullKeysAllowed),
    unescape_string_values: cdktf.booleanToTerraform(struct!.unescapeStringValues),
    data_schema: datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaToTerraform(struct!.dataSchema),
  }
}


export function datatransferEndpointSettingsKafkaSourceParserJsonParserToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserJsonParserOutputReference | DatatransferEndpointSettingsKafkaSourceParserJsonParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_rest_column: {
      value: cdktf.booleanToHclTerraform(struct!.addRestColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null_keys_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.nullKeysAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unescape_string_values: {
      value: cdktf.booleanToHclTerraform(struct!.unescapeStringValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_schema: {
      value: datatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaToHclTerraform(struct!.dataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceParserJsonParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParserJsonParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addRestColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addRestColumn = this._addRestColumn;
    }
    if (this._nullKeysAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullKeysAllowed = this._nullKeysAllowed;
    }
    if (this._unescapeStringValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.unescapeStringValues = this._unescapeStringValues;
    }
    if (this._dataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSchema = this._dataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParserJsonParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addRestColumn = undefined;
      this._nullKeysAllowed = undefined;
      this._unescapeStringValues = undefined;
      this._dataSchema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addRestColumn = value.addRestColumn;
      this._nullKeysAllowed = value.nullKeysAllowed;
      this._unescapeStringValues = value.unescapeStringValues;
      this._dataSchema.internalValue = value.dataSchema;
    }
  }

  // add_rest_column - computed: true, optional: true, required: false
  private _addRestColumn?: boolean | cdktf.IResolvable; 
  public get addRestColumn() {
    return this.getBooleanAttribute('add_rest_column');
  }
  public set addRestColumn(value: boolean | cdktf.IResolvable) {
    this._addRestColumn = value;
  }
  public resetAddRestColumn() {
    this._addRestColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRestColumnInput() {
    return this._addRestColumn;
  }

  // null_keys_allowed - computed: true, optional: true, required: false
  private _nullKeysAllowed?: boolean | cdktf.IResolvable; 
  public get nullKeysAllowed() {
    return this.getBooleanAttribute('null_keys_allowed');
  }
  public set nullKeysAllowed(value: boolean | cdktf.IResolvable) {
    this._nullKeysAllowed = value;
  }
  public resetNullKeysAllowed() {
    this._nullKeysAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullKeysAllowedInput() {
    return this._nullKeysAllowed;
  }

  // unescape_string_values - computed: true, optional: true, required: false
  private _unescapeStringValues?: boolean | cdktf.IResolvable; 
  public get unescapeStringValues() {
    return this.getBooleanAttribute('unescape_string_values');
  }
  public set unescapeStringValues(value: boolean | cdktf.IResolvable) {
    this._unescapeStringValues = value;
  }
  public resetUnescapeStringValues() {
    this._unescapeStringValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unescapeStringValuesInput() {
    return this._unescapeStringValues;
  }

  // data_schema - computed: false, optional: true, required: false
  private _dataSchema = new DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchemaOutputReference(this, "data_schema");
  public get dataSchema() {
    return this._dataSchema;
  }
  public putDataSchema(value: DatatransferEndpointSettingsKafkaSourceParserJsonParserDataSchema) {
    this._dataSchema.internalValue = value;
  }
  public resetDataSchema() {
    this._dataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSchemaInput() {
    return this._dataSchema.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFields {
  /**
  * Mark field as Primary Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#key DatatransferEndpoint#key}
  */
  readonly key?: boolean | cdktf.IResolvable;
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#name DatatransferEndpoint#name}
  */
  readonly name?: string;
  /**
  * Path to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#path DatatransferEndpoint#path}
  */
  readonly path?: string;
  /**
  * Mark field as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#required DatatransferEndpoint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Field type, one of: `INT64`, `INT32`, `INT16`, `INT8`, `UINT64`, `UINT32`, `UINT16`, `UINT8`, `DOUBLE`, `BOOLEAN`, `STRING`, `UTF8`, `ANY`, `DATETIME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#type DatatransferEndpoint#type}
  */
  readonly type?: string;
}

export function datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFieldsToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.booleanToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFieldsToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.booleanToHclTerraform(struct!.key),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._path = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._path = value.path;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: boolean | cdktf.IResolvable; 
  public get key() {
    return this.getBooleanAttribute('key');
  }
  public set key(value: boolean | cdktf.IResolvable) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: true, optional: true, required: false
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
}

export class DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFieldsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFields[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFieldsOutputReference {
    return new DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFields {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#fields DatatransferEndpoint#fields}
  */
  readonly fields?: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFields[] | cdktf.IResolvable;
}

export function datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsOutputReference | DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFieldsToTerraform, true)(struct!.fields),
  }
}


export function datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsOutputReference | DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchema {
  /**
  * Description of the data schema as JSON specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#json_fields DatatransferEndpoint#json_fields}
  */
  readonly jsonFields?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#fields DatatransferEndpoint#fields}
  */
  readonly fields?: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFields;
}

export function datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaOutputReference | DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_fields: cdktf.stringToTerraform(struct!.jsonFields),
    fields: datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsToTerraform(struct!.fields),
  }
}


export function datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaOutputReference | DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_fields: {
      value: cdktf.stringToHclTerraform(struct!.jsonFields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFields = this._jsonFields;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonFields = undefined;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonFields = value.jsonFields;
      this._fields.internalValue = value.fields;
    }
  }

  // json_fields - computed: false, optional: true, required: false
  private _jsonFields?: string; 
  public get jsonFields() {
    return this.getStringAttribute('json_fields');
  }
  public set jsonFields(value: string) {
    this._jsonFields = value;
  }
  public resetJsonFields() {
    this._jsonFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFieldsInput() {
    return this._jsonFields;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaFields) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParserTskvParser {
  /**
  * Add fields, that are not in the schema, into the _rest column.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#add_rest_column DatatransferEndpoint#add_rest_column}
  */
  readonly addRestColumn?: boolean | cdktf.IResolvable;
  /**
  * Allow null keys. If `false` - null keys will be putted to unparsed data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#null_keys_allowed DatatransferEndpoint#null_keys_allowed}
  */
  readonly nullKeysAllowed?: boolean | cdktf.IResolvable;
  /**
  * Allow unescape string values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#unescape_string_values DatatransferEndpoint#unescape_string_values}
  */
  readonly unescapeStringValues?: boolean | cdktf.IResolvable;
  /**
  * data_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#data_schema DatatransferEndpoint#data_schema}
  */
  readonly dataSchema?: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchema;
}

export function datatransferEndpointSettingsKafkaSourceParserTskvParserToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserTskvParserOutputReference | DatatransferEndpointSettingsKafkaSourceParserTskvParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_rest_column: cdktf.booleanToTerraform(struct!.addRestColumn),
    null_keys_allowed: cdktf.booleanToTerraform(struct!.nullKeysAllowed),
    unescape_string_values: cdktf.booleanToTerraform(struct!.unescapeStringValues),
    data_schema: datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaToTerraform(struct!.dataSchema),
  }
}


export function datatransferEndpointSettingsKafkaSourceParserTskvParserToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserTskvParserOutputReference | DatatransferEndpointSettingsKafkaSourceParserTskvParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_rest_column: {
      value: cdktf.booleanToHclTerraform(struct!.addRestColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null_keys_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.nullKeysAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unescape_string_values: {
      value: cdktf.booleanToHclTerraform(struct!.unescapeStringValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_schema: {
      value: datatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaToHclTerraform(struct!.dataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceParserTskvParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParserTskvParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addRestColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addRestColumn = this._addRestColumn;
    }
    if (this._nullKeysAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullKeysAllowed = this._nullKeysAllowed;
    }
    if (this._unescapeStringValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.unescapeStringValues = this._unescapeStringValues;
    }
    if (this._dataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSchema = this._dataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParserTskvParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addRestColumn = undefined;
      this._nullKeysAllowed = undefined;
      this._unescapeStringValues = undefined;
      this._dataSchema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addRestColumn = value.addRestColumn;
      this._nullKeysAllowed = value.nullKeysAllowed;
      this._unescapeStringValues = value.unescapeStringValues;
      this._dataSchema.internalValue = value.dataSchema;
    }
  }

  // add_rest_column - computed: true, optional: true, required: false
  private _addRestColumn?: boolean | cdktf.IResolvable; 
  public get addRestColumn() {
    return this.getBooleanAttribute('add_rest_column');
  }
  public set addRestColumn(value: boolean | cdktf.IResolvable) {
    this._addRestColumn = value;
  }
  public resetAddRestColumn() {
    this._addRestColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRestColumnInput() {
    return this._addRestColumn;
  }

  // null_keys_allowed - computed: true, optional: true, required: false
  private _nullKeysAllowed?: boolean | cdktf.IResolvable; 
  public get nullKeysAllowed() {
    return this.getBooleanAttribute('null_keys_allowed');
  }
  public set nullKeysAllowed(value: boolean | cdktf.IResolvable) {
    this._nullKeysAllowed = value;
  }
  public resetNullKeysAllowed() {
    this._nullKeysAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullKeysAllowedInput() {
    return this._nullKeysAllowed;
  }

  // unescape_string_values - computed: true, optional: true, required: false
  private _unescapeStringValues?: boolean | cdktf.IResolvable; 
  public get unescapeStringValues() {
    return this.getBooleanAttribute('unescape_string_values');
  }
  public set unescapeStringValues(value: boolean | cdktf.IResolvable) {
    this._unescapeStringValues = value;
  }
  public resetUnescapeStringValues() {
    this._unescapeStringValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unescapeStringValuesInput() {
    return this._unescapeStringValues;
  }

  // data_schema - computed: false, optional: true, required: false
  private _dataSchema = new DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchemaOutputReference(this, "data_schema");
  public get dataSchema() {
    return this._dataSchema;
  }
  public putDataSchema(value: DatatransferEndpointSettingsKafkaSourceParserTskvParserDataSchema) {
    this._dataSchema.internalValue = value;
  }
  public resetDataSchema() {
    this._dataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSchemaInput() {
    return this._dataSchema.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceParser {
  /**
  * audit_trails_v1_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#audit_trails_v1_parser DatatransferEndpoint#audit_trails_v1_parser}
  */
  readonly auditTrailsV1Parser?: DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1Parser;
  /**
  * cloud_logging_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cloud_logging_parser DatatransferEndpoint#cloud_logging_parser}
  */
  readonly cloudLoggingParser?: DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParser;
  /**
  * json_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#json_parser DatatransferEndpoint#json_parser}
  */
  readonly jsonParser?: DatatransferEndpointSettingsKafkaSourceParserJsonParser;
  /**
  * tskv_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tskv_parser DatatransferEndpoint#tskv_parser}
  */
  readonly tskvParser?: DatatransferEndpointSettingsKafkaSourceParserTskvParser;
}

export function datatransferEndpointSettingsKafkaSourceParserToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserOutputReference | DatatransferEndpointSettingsKafkaSourceParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_trails_v1_parser: datatransferEndpointSettingsKafkaSourceParserAuditTrailsV1ParserToTerraform(struct!.auditTrailsV1Parser),
    cloud_logging_parser: datatransferEndpointSettingsKafkaSourceParserCloudLoggingParserToTerraform(struct!.cloudLoggingParser),
    json_parser: datatransferEndpointSettingsKafkaSourceParserJsonParserToTerraform(struct!.jsonParser),
    tskv_parser: datatransferEndpointSettingsKafkaSourceParserTskvParserToTerraform(struct!.tskvParser),
  }
}


export function datatransferEndpointSettingsKafkaSourceParserToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceParserOutputReference | DatatransferEndpointSettingsKafkaSourceParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_trails_v1_parser: {
      value: datatransferEndpointSettingsKafkaSourceParserAuditTrailsV1ParserToHclTerraform(struct!.auditTrailsV1Parser),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1ParserList",
    },
    cloud_logging_parser: {
      value: datatransferEndpointSettingsKafkaSourceParserCloudLoggingParserToHclTerraform(struct!.cloudLoggingParser),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParserList",
    },
    json_parser: {
      value: datatransferEndpointSettingsKafkaSourceParserJsonParserToHclTerraform(struct!.jsonParser),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserJsonParserList",
    },
    tskv_parser: {
      value: datatransferEndpointSettingsKafkaSourceParserTskvParserToHclTerraform(struct!.tskvParser),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserTskvParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditTrailsV1Parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditTrailsV1Parser = this._auditTrailsV1Parser?.internalValue;
    }
    if (this._cloudLoggingParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLoggingParser = this._cloudLoggingParser?.internalValue;
    }
    if (this._jsonParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonParser = this._jsonParser?.internalValue;
    }
    if (this._tskvParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tskvParser = this._tskvParser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditTrailsV1Parser.internalValue = undefined;
      this._cloudLoggingParser.internalValue = undefined;
      this._jsonParser.internalValue = undefined;
      this._tskvParser.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditTrailsV1Parser.internalValue = value.auditTrailsV1Parser;
      this._cloudLoggingParser.internalValue = value.cloudLoggingParser;
      this._jsonParser.internalValue = value.jsonParser;
      this._tskvParser.internalValue = value.tskvParser;
    }
  }

  // audit_trails_v1_parser - computed: false, optional: true, required: false
  private _auditTrailsV1Parser = new DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1ParserOutputReference(this, "audit_trails_v1_parser");
  public get auditTrailsV1Parser() {
    return this._auditTrailsV1Parser;
  }
  public putAuditTrailsV1Parser(value: DatatransferEndpointSettingsKafkaSourceParserAuditTrailsV1Parser) {
    this._auditTrailsV1Parser.internalValue = value;
  }
  public resetAuditTrailsV1Parser() {
    this._auditTrailsV1Parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditTrailsV1ParserInput() {
    return this._auditTrailsV1Parser.internalValue;
  }

  // cloud_logging_parser - computed: false, optional: true, required: false
  private _cloudLoggingParser = new DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParserOutputReference(this, "cloud_logging_parser");
  public get cloudLoggingParser() {
    return this._cloudLoggingParser;
  }
  public putCloudLoggingParser(value: DatatransferEndpointSettingsKafkaSourceParserCloudLoggingParser) {
    this._cloudLoggingParser.internalValue = value;
  }
  public resetCloudLoggingParser() {
    this._cloudLoggingParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLoggingParserInput() {
    return this._cloudLoggingParser.internalValue;
  }

  // json_parser - computed: false, optional: true, required: false
  private _jsonParser = new DatatransferEndpointSettingsKafkaSourceParserJsonParserOutputReference(this, "json_parser");
  public get jsonParser() {
    return this._jsonParser;
  }
  public putJsonParser(value: DatatransferEndpointSettingsKafkaSourceParserJsonParser) {
    this._jsonParser.internalValue = value;
  }
  public resetJsonParser() {
    this._jsonParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonParserInput() {
    return this._jsonParser.internalValue;
  }

  // tskv_parser - computed: false, optional: true, required: false
  private _tskvParser = new DatatransferEndpointSettingsKafkaSourceParserTskvParserOutputReference(this, "tskv_parser");
  public get tskvParser() {
    return this._tskvParser;
  }
  public putTskvParser(value: DatatransferEndpointSettingsKafkaSourceParserTskvParser) {
    this._tskvParser.internalValue = value;
  }
  public resetTskvParser() {
    this._tskvParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tskvParserInput() {
    return this._tskvParser.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaSourceTransformer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#buffer_flush_interval DatatransferEndpoint#buffer_flush_interval}
  */
  readonly bufferFlushInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#buffer_size DatatransferEndpoint#buffer_size}
  */
  readonly bufferSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cloud_function DatatransferEndpoint#cloud_function}
  */
  readonly cloudFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#invocation_timeout DatatransferEndpoint#invocation_timeout}
  */
  readonly invocationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#number_of_retries DatatransferEndpoint#number_of_retries}
  */
  readonly numberOfRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#service_account_id DatatransferEndpoint#service_account_id}
  */
  readonly serviceAccountId?: string;
}

export function datatransferEndpointSettingsKafkaSourceTransformerToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceTransformerOutputReference | DatatransferEndpointSettingsKafkaSourceTransformer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    buffer_flush_interval: cdktf.stringToTerraform(struct!.bufferFlushInterval),
    buffer_size: cdktf.stringToTerraform(struct!.bufferSize),
    cloud_function: cdktf.stringToTerraform(struct!.cloudFunction),
    invocation_timeout: cdktf.stringToTerraform(struct!.invocationTimeout),
    number_of_retries: cdktf.numberToTerraform(struct!.numberOfRetries),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
  }
}


export function datatransferEndpointSettingsKafkaSourceTransformerToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceTransformerOutputReference | DatatransferEndpointSettingsKafkaSourceTransformer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    buffer_flush_interval: {
      value: cdktf.stringToHclTerraform(struct!.bufferFlushInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.bufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_function: {
      value: cdktf.stringToHclTerraform(struct!.cloudFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invocation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.invocationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_retries: {
      value: cdktf.numberToHclTerraform(struct!.numberOfRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceTransformerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSourceTransformer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bufferFlushInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferFlushInterval = this._bufferFlushInterval;
    }
    if (this._bufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferSize = this._bufferSize;
    }
    if (this._cloudFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudFunction = this._cloudFunction;
    }
    if (this._invocationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationTimeout = this._invocationTimeout;
    }
    if (this._numberOfRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfRetries = this._numberOfRetries;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSourceTransformer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bufferFlushInterval = undefined;
      this._bufferSize = undefined;
      this._cloudFunction = undefined;
      this._invocationTimeout = undefined;
      this._numberOfRetries = undefined;
      this._serviceAccountId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bufferFlushInterval = value.bufferFlushInterval;
      this._bufferSize = value.bufferSize;
      this._cloudFunction = value.cloudFunction;
      this._invocationTimeout = value.invocationTimeout;
      this._numberOfRetries = value.numberOfRetries;
      this._serviceAccountId = value.serviceAccountId;
    }
  }

  // buffer_flush_interval - computed: true, optional: true, required: false
  private _bufferFlushInterval?: string; 
  public get bufferFlushInterval() {
    return this.getStringAttribute('buffer_flush_interval');
  }
  public set bufferFlushInterval(value: string) {
    this._bufferFlushInterval = value;
  }
  public resetBufferFlushInterval() {
    this._bufferFlushInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferFlushIntervalInput() {
    return this._bufferFlushInterval;
  }

  // buffer_size - computed: true, optional: true, required: false
  private _bufferSize?: string; 
  public get bufferSize() {
    return this.getStringAttribute('buffer_size');
  }
  public set bufferSize(value: string) {
    this._bufferSize = value;
  }
  public resetBufferSize() {
    this._bufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferSizeInput() {
    return this._bufferSize;
  }

  // cloud_function - computed: true, optional: true, required: false
  private _cloudFunction?: string; 
  public get cloudFunction() {
    return this.getStringAttribute('cloud_function');
  }
  public set cloudFunction(value: string) {
    this._cloudFunction = value;
  }
  public resetCloudFunction() {
    this._cloudFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudFunctionInput() {
    return this._cloudFunction;
  }

  // invocation_timeout - computed: true, optional: true, required: false
  private _invocationTimeout?: string; 
  public get invocationTimeout() {
    return this.getStringAttribute('invocation_timeout');
  }
  public set invocationTimeout(value: string) {
    this._invocationTimeout = value;
  }
  public resetInvocationTimeout() {
    this._invocationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTimeoutInput() {
    return this._invocationTimeout;
  }

  // number_of_retries - computed: true, optional: true, required: false
  private _numberOfRetries?: number; 
  public get numberOfRetries() {
    return this.getNumberAttribute('number_of_retries');
  }
  public set numberOfRetries(value: number) {
    this._numberOfRetries = value;
  }
  public resetNumberOfRetries() {
    this._numberOfRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfRetriesInput() {
    return this._numberOfRetries;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }
}
export interface DatatransferEndpointSettingsKafkaSource {
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * **Deprecated**. Please use `topic_names` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#topic_name DatatransferEndpoint#topic_name}
  */
  readonly topicName?: string;
  /**
  * The list of full source topic names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#topic_names DatatransferEndpoint#topic_names}
  */
  readonly topicNames?: string[];
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#auth DatatransferEndpoint#auth}
  */
  readonly auth?: DatatransferEndpointSettingsKafkaSourceAuth;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsKafkaSourceConnection;
  /**
  * parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#parser DatatransferEndpoint#parser}
  */
  readonly parser?: DatatransferEndpointSettingsKafkaSourceParser;
  /**
  * transformer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#transformer DatatransferEndpoint#transformer}
  */
  readonly transformer?: DatatransferEndpointSettingsKafkaSourceTransformer;
}

export function datatransferEndpointSettingsKafkaSourceToTerraform(struct?: DatatransferEndpointSettingsKafkaSourceOutputReference | DatatransferEndpointSettingsKafkaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
    topic_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.topicNames),
    auth: datatransferEndpointSettingsKafkaSourceAuthToTerraform(struct!.auth),
    connection: datatransferEndpointSettingsKafkaSourceConnectionToTerraform(struct!.connection),
    parser: datatransferEndpointSettingsKafkaSourceParserToTerraform(struct!.parser),
    transformer: datatransferEndpointSettingsKafkaSourceTransformerToTerraform(struct!.transformer),
  }
}


export function datatransferEndpointSettingsKafkaSourceToHclTerraform(struct?: DatatransferEndpointSettingsKafkaSourceOutputReference | DatatransferEndpointSettingsKafkaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.topicNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth: {
      value: datatransferEndpointSettingsKafkaSourceAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceAuthList",
    },
    connection: {
      value: datatransferEndpointSettingsKafkaSourceConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceConnectionList",
    },
    parser: {
      value: datatransferEndpointSettingsKafkaSourceParserToHclTerraform(struct!.parser),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceParserList",
    },
    transformer: {
      value: datatransferEndpointSettingsKafkaSourceTransformerToHclTerraform(struct!.transformer),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaSourceTransformerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    if (this._topicNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicNames = this._topicNames;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parser = this._parser?.internalValue;
    }
    if (this._transformer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformer = this._transformer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroups = undefined;
      this._topicName = undefined;
      this._topicNames = undefined;
      this._auth.internalValue = undefined;
      this._connection.internalValue = undefined;
      this._parser.internalValue = undefined;
      this._transformer.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroups = value.securityGroups;
      this._topicName = value.topicName;
      this._topicNames = value.topicNames;
      this._auth.internalValue = value.auth;
      this._connection.internalValue = value.connection;
      this._parser.internalValue = value.parser;
      this._transformer.internalValue = value.transformer;
    }
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // topic_name - computed: true, optional: true, required: false
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }

  // topic_names - computed: true, optional: true, required: false
  private _topicNames?: string[]; 
  public get topicNames() {
    return this.getListAttribute('topic_names');
  }
  public set topicNames(value: string[]) {
    this._topicNames = value;
  }
  public resetTopicNames() {
    this._topicNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNamesInput() {
    return this._topicNames;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DatatransferEndpointSettingsKafkaSourceAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DatatransferEndpointSettingsKafkaSourceAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsKafkaSourceConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsKafkaSourceConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // parser - computed: false, optional: true, required: false
  private _parser = new DatatransferEndpointSettingsKafkaSourceParserOutputReference(this, "parser");
  public get parser() {
    return this._parser;
  }
  public putParser(value: DatatransferEndpointSettingsKafkaSourceParser) {
    this._parser.internalValue = value;
  }
  public resetParser() {
    this._parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parserInput() {
    return this._parser.internalValue;
  }

  // transformer - computed: false, optional: true, required: false
  private _transformer = new DatatransferEndpointSettingsKafkaSourceTransformerOutputReference(this, "transformer");
  public get transformer() {
    return this._transformer;
  }
  public putTransformer(value: DatatransferEndpointSettingsKafkaSourceTransformer) {
    this._transformer.internalValue = value;
  }
  public resetTransformer() {
    this._transformer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformerInput() {
    return this._transformer.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetAuthNoAuth {
}

export function datatransferEndpointSettingsKafkaTargetAuthNoAuthToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetAuthNoAuthOutputReference | DatatransferEndpointSettingsKafkaTargetAuthNoAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsKafkaTargetAuthNoAuthToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetAuthNoAuthOutputReference | DatatransferEndpointSettingsKafkaTargetAuthNoAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsKafkaTargetAuthNoAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetAuthNoAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetAuthNoAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsKafkaTargetAuthSaslPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsKafkaTargetAuthSaslPasswordToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetAuthSaslPasswordOutputReference | DatatransferEndpointSettingsKafkaTargetAuthSaslPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsKafkaTargetAuthSaslPasswordToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetAuthSaslPasswordOutputReference | DatatransferEndpointSettingsKafkaTargetAuthSaslPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetAuthSaslPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetAuthSaslPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetAuthSaslPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetAuthSasl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mechanism DatatransferEndpoint#mechanism}
  */
  readonly mechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsKafkaTargetAuthSaslPassword;
}

export function datatransferEndpointSettingsKafkaTargetAuthSaslToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetAuthSaslOutputReference | DatatransferEndpointSettingsKafkaTargetAuthSasl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mechanism: cdktf.stringToTerraform(struct!.mechanism),
    user: cdktf.stringToTerraform(struct!.user),
    password: datatransferEndpointSettingsKafkaTargetAuthSaslPasswordToTerraform(struct!.password),
  }
}


export function datatransferEndpointSettingsKafkaTargetAuthSaslToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetAuthSaslOutputReference | DatatransferEndpointSettingsKafkaTargetAuthSasl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mechanism: {
      value: cdktf.stringToHclTerraform(struct!.mechanism),
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
    password: {
      value: datatransferEndpointSettingsKafkaTargetAuthSaslPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetAuthSaslPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetAuthSaslOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetAuthSasl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetAuthSasl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mechanism = undefined;
      this._user = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mechanism = value.mechanism;
      this._user = value.user;
      this._password.internalValue = value.password;
    }
  }

  // mechanism - computed: true, optional: true, required: false
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  public resetMechanism() {
    this._mechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }

  // user - computed: true, optional: true, required: false
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

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsKafkaTargetAuthSaslPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsKafkaTargetAuthSaslPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetAuth {
  /**
  * no_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#no_auth DatatransferEndpoint#no_auth}
  */
  readonly noAuth?: DatatransferEndpointSettingsKafkaTargetAuthNoAuth;
  /**
  * sasl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#sasl DatatransferEndpoint#sasl}
  */
  readonly sasl?: DatatransferEndpointSettingsKafkaTargetAuthSasl;
}

export function datatransferEndpointSettingsKafkaTargetAuthToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetAuthOutputReference | DatatransferEndpointSettingsKafkaTargetAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_auth: datatransferEndpointSettingsKafkaTargetAuthNoAuthToTerraform(struct!.noAuth),
    sasl: datatransferEndpointSettingsKafkaTargetAuthSaslToTerraform(struct!.sasl),
  }
}


export function datatransferEndpointSettingsKafkaTargetAuthToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetAuthOutputReference | DatatransferEndpointSettingsKafkaTargetAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_auth: {
      value: datatransferEndpointSettingsKafkaTargetAuthNoAuthToHclTerraform(struct!.noAuth),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetAuthNoAuthList",
    },
    sasl: {
      value: datatransferEndpointSettingsKafkaTargetAuthSaslToHclTerraform(struct!.sasl),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetAuthSaslList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.noAuth = this._noAuth?.internalValue;
    }
    if (this._sasl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sasl = this._sasl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noAuth.internalValue = undefined;
      this._sasl.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noAuth.internalValue = value.noAuth;
      this._sasl.internalValue = value.sasl;
    }
  }

  // no_auth - computed: false, optional: true, required: false
  private _noAuth = new DatatransferEndpointSettingsKafkaTargetAuthNoAuthOutputReference(this, "no_auth");
  public get noAuth() {
    return this._noAuth;
  }
  public putNoAuth(value: DatatransferEndpointSettingsKafkaTargetAuthNoAuth) {
    this._noAuth.internalValue = value;
  }
  public resetNoAuth() {
    this._noAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noAuthInput() {
    return this._noAuth.internalValue;
  }

  // sasl - computed: false, optional: true, required: false
  private _sasl = new DatatransferEndpointSettingsKafkaTargetAuthSaslOutputReference(this, "sasl");
  public get sasl() {
    return this._sasl;
  }
  public putSasl(value: DatatransferEndpointSettingsKafkaTargetAuthSasl) {
    this._sasl.internalValue = value;
  }
  public resetSasl() {
    this._sasl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saslInput() {
    return this._sasl.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabledToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabledToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsMode {
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabled;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}


export function datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabledList",
    },
    enabled: {
      value: datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetConnectionOnPremise {
  /**
  * List of Kafka broker URLs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#broker_urls DatatransferEndpoint#broker_urls}
  */
  readonly brokerUrls?: string[];
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tls_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsMode;
}

export function datatransferEndpointSettingsKafkaTargetConnectionOnPremiseToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseOutputReference | DatatransferEndpointSettingsKafkaTargetConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broker_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.brokerUrls),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tls_mode: datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}


export function datatransferEndpointSettingsKafkaTargetConnectionOnPremiseToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseOutputReference | DatatransferEndpointSettingsKafkaTargetConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broker_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.brokerUrls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_mode: {
      value: datatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeToHclTerraform(struct!.tlsMode),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetConnectionOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._brokerUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.brokerUrls = this._brokerUrls;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetConnectionOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._brokerUrls = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._brokerUrls = value.brokerUrls;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // broker_urls - computed: true, optional: true, required: false
  private _brokerUrls?: string[]; 
  public get brokerUrls() {
    return this.getListAttribute('broker_urls');
  }
  public set brokerUrls(value: string[]) {
    this._brokerUrls = value;
  }
  public resetBrokerUrls() {
    this._brokerUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get brokerUrlsInput() {
    return this._brokerUrls;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetConnection {
  /**
  * Identifier of the Managed Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cluster_id DatatransferEndpoint#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * on_premise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsKafkaTargetConnectionOnPremise;
}

export function datatransferEndpointSettingsKafkaTargetConnectionToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetConnectionOutputReference | DatatransferEndpointSettingsKafkaTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_id: cdktf.stringToTerraform(struct!.clusterId),
    on_premise: datatransferEndpointSettingsKafkaTargetConnectionOnPremiseToTerraform(struct!.onPremise),
  }
}


export function datatransferEndpointSettingsKafkaTargetConnectionToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetConnectionOutputReference | DatatransferEndpointSettingsKafkaTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.clusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_premise: {
      value: datatransferEndpointSettingsKafkaTargetConnectionOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterId = this._clusterId;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterId = undefined;
      this._onPremise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterId = value.clusterId;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsKafkaTargetConnectionOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsKafkaTargetConnectionOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetSerializerSerializerAuto {
}

export function datatransferEndpointSettingsKafkaTargetSerializerSerializerAutoToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerAutoOutputReference | DatatransferEndpointSettingsKafkaTargetSerializerSerializerAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsKafkaTargetSerializerSerializerAutoToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerAutoOutputReference | DatatransferEndpointSettingsKafkaTargetSerializerSerializerAuto): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsKafkaTargetSerializerSerializerAutoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetSerializerSerializerAuto | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetSerializerSerializerAuto | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#key DatatransferEndpoint#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#value DatatransferEndpoint#value}
  */
  readonly value?: string;
}

export function datatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParametersToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function datatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParametersToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
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

  // value - computed: true, optional: true, required: false
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

export class DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParametersList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParameters[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParametersOutputReference {
    return new DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebezium {
  /**
  * serializer_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#serializer_parameters DatatransferEndpoint#serializer_parameters}
  */
  readonly serializerParameters?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParameters[] | cdktf.IResolvable;
}

export function datatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumOutputReference | DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebezium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serializer_parameters: cdktf.listMapper(datatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParametersToTerraform, true)(struct!.serializerParameters),
  }
}


export function datatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumOutputReference | DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebezium): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serializer_parameters: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParametersToHclTerraform, true)(struct!.serializerParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebezium | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serializerParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializerParameters = this._serializerParameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebezium | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serializerParameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serializerParameters.internalValue = value.serializerParameters;
    }
  }

  // serializer_parameters - computed: false, optional: true, required: false
  private _serializerParameters = new DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParametersList(this, "serializer_parameters", false);
  public get serializerParameters() {
    return this._serializerParameters;
  }
  public putSerializerParameters(value: DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumSerializerParameters[] | cdktf.IResolvable) {
    this._serializerParameters.internalValue = value;
  }
  public resetSerializerParameters() {
    this._serializerParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerParametersInput() {
    return this._serializerParameters.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetSerializerSerializerJson {
}

export function datatransferEndpointSettingsKafkaTargetSerializerSerializerJsonToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerJsonOutputReference | DatatransferEndpointSettingsKafkaTargetSerializerSerializerJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsKafkaTargetSerializerSerializerJsonToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerJsonOutputReference | DatatransferEndpointSettingsKafkaTargetSerializerSerializerJson): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsKafkaTargetSerializerSerializerJsonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetSerializerSerializerJson | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetSerializerSerializerJson | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsKafkaTargetSerializer {
  /**
  * serializer_auto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#serializer_auto DatatransferEndpoint#serializer_auto}
  */
  readonly serializerAuto?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerAuto;
  /**
  * serializer_debezium block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#serializer_debezium DatatransferEndpoint#serializer_debezium}
  */
  readonly serializerDebezium?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebezium;
  /**
  * serializer_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#serializer_json DatatransferEndpoint#serializer_json}
  */
  readonly serializerJson?: DatatransferEndpointSettingsKafkaTargetSerializerSerializerJson;
}

export function datatransferEndpointSettingsKafkaTargetSerializerToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetSerializerOutputReference | DatatransferEndpointSettingsKafkaTargetSerializer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serializer_auto: datatransferEndpointSettingsKafkaTargetSerializerSerializerAutoToTerraform(struct!.serializerAuto),
    serializer_debezium: datatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumToTerraform(struct!.serializerDebezium),
    serializer_json: datatransferEndpointSettingsKafkaTargetSerializerSerializerJsonToTerraform(struct!.serializerJson),
  }
}


export function datatransferEndpointSettingsKafkaTargetSerializerToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetSerializerOutputReference | DatatransferEndpointSettingsKafkaTargetSerializer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serializer_auto: {
      value: datatransferEndpointSettingsKafkaTargetSerializerSerializerAutoToHclTerraform(struct!.serializerAuto),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetSerializerSerializerAutoList",
    },
    serializer_debezium: {
      value: datatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumToHclTerraform(struct!.serializerDebezium),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumList",
    },
    serializer_json: {
      value: datatransferEndpointSettingsKafkaTargetSerializerSerializerJsonToHclTerraform(struct!.serializerJson),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetSerializerSerializerJsonList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetSerializerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetSerializer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serializerAuto?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializerAuto = this._serializerAuto?.internalValue;
    }
    if (this._serializerDebezium?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializerDebezium = this._serializerDebezium?.internalValue;
    }
    if (this._serializerJson?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializerJson = this._serializerJson?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetSerializer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serializerAuto.internalValue = undefined;
      this._serializerDebezium.internalValue = undefined;
      this._serializerJson.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serializerAuto.internalValue = value.serializerAuto;
      this._serializerDebezium.internalValue = value.serializerDebezium;
      this._serializerJson.internalValue = value.serializerJson;
    }
  }

  // serializer_auto - computed: false, optional: true, required: false
  private _serializerAuto = new DatatransferEndpointSettingsKafkaTargetSerializerSerializerAutoOutputReference(this, "serializer_auto");
  public get serializerAuto() {
    return this._serializerAuto;
  }
  public putSerializerAuto(value: DatatransferEndpointSettingsKafkaTargetSerializerSerializerAuto) {
    this._serializerAuto.internalValue = value;
  }
  public resetSerializerAuto() {
    this._serializerAuto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerAutoInput() {
    return this._serializerAuto.internalValue;
  }

  // serializer_debezium - computed: false, optional: true, required: false
  private _serializerDebezium = new DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebeziumOutputReference(this, "serializer_debezium");
  public get serializerDebezium() {
    return this._serializerDebezium;
  }
  public putSerializerDebezium(value: DatatransferEndpointSettingsKafkaTargetSerializerSerializerDebezium) {
    this._serializerDebezium.internalValue = value;
  }
  public resetSerializerDebezium() {
    this._serializerDebezium.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerDebeziumInput() {
    return this._serializerDebezium.internalValue;
  }

  // serializer_json - computed: false, optional: true, required: false
  private _serializerJson = new DatatransferEndpointSettingsKafkaTargetSerializerSerializerJsonOutputReference(this, "serializer_json");
  public get serializerJson() {
    return this._serializerJson;
  }
  public putSerializerJson(value: DatatransferEndpointSettingsKafkaTargetSerializerSerializerJson) {
    this._serializerJson.internalValue = value;
  }
  public resetSerializerJson() {
    this._serializerJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerJsonInput() {
    return this._serializerJson.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetTopicSettingsTopic {
  /**
  * Not to split events queue into separate per-table queues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#save_tx_order DatatransferEndpoint#save_tx_order}
  */
  readonly saveTxOrder?: boolean | cdktf.IResolvable;
  /**
  * Full topic name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#topic_name DatatransferEndpoint#topic_name}
  */
  readonly topicName?: string;
}

export function datatransferEndpointSettingsKafkaTargetTopicSettingsTopicToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetTopicSettingsTopicOutputReference | DatatransferEndpointSettingsKafkaTargetTopicSettingsTopic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    save_tx_order: cdktf.booleanToTerraform(struct!.saveTxOrder),
    topic_name: cdktf.stringToTerraform(struct!.topicName),
  }
}


export function datatransferEndpointSettingsKafkaTargetTopicSettingsTopicToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetTopicSettingsTopicOutputReference | DatatransferEndpointSettingsKafkaTargetTopicSettingsTopic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    save_tx_order: {
      value: cdktf.booleanToHclTerraform(struct!.saveTxOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    topic_name: {
      value: cdktf.stringToHclTerraform(struct!.topicName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetTopicSettingsTopicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetTopicSettingsTopic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._saveTxOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveTxOrder = this._saveTxOrder;
    }
    if (this._topicName !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicName = this._topicName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetTopicSettingsTopic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._saveTxOrder = undefined;
      this._topicName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._saveTxOrder = value.saveTxOrder;
      this._topicName = value.topicName;
    }
  }

  // save_tx_order - computed: true, optional: true, required: false
  private _saveTxOrder?: boolean | cdktf.IResolvable; 
  public get saveTxOrder() {
    return this.getBooleanAttribute('save_tx_order');
  }
  public set saveTxOrder(value: boolean | cdktf.IResolvable) {
    this._saveTxOrder = value;
  }
  public resetSaveTxOrder() {
    this._saveTxOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveTxOrderInput() {
    return this._saveTxOrder;
  }

  // topic_name - computed: true, optional: true, required: false
  private _topicName?: string; 
  public get topicName() {
    return this.getStringAttribute('topic_name');
  }
  public set topicName(value: string) {
    this._topicName = value;
  }
  public resetTopicName() {
    this._topicName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicNameInput() {
    return this._topicName;
  }
}
export interface DatatransferEndpointSettingsKafkaTargetTopicSettings {
  /**
  * Topic name prefix. Messages will be sent to topic with name <topic_prefix>.<schema>.<table_name>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#topic_prefix DatatransferEndpoint#topic_prefix}
  */
  readonly topicPrefix?: string;
  /**
  * topic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#topic DatatransferEndpoint#topic}
  */
  readonly topic?: DatatransferEndpointSettingsKafkaTargetTopicSettingsTopic;
}

export function datatransferEndpointSettingsKafkaTargetTopicSettingsToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetTopicSettingsOutputReference | DatatransferEndpointSettingsKafkaTargetTopicSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic_prefix: cdktf.stringToTerraform(struct!.topicPrefix),
    topic: datatransferEndpointSettingsKafkaTargetTopicSettingsTopicToTerraform(struct!.topic),
  }
}


export function datatransferEndpointSettingsKafkaTargetTopicSettingsToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetTopicSettingsOutputReference | DatatransferEndpointSettingsKafkaTargetTopicSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topic_prefix: {
      value: cdktf.stringToHclTerraform(struct!.topicPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topic: {
      value: datatransferEndpointSettingsKafkaTargetTopicSettingsTopicToHclTerraform(struct!.topic),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetTopicSettingsTopicList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetTopicSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTargetTopicSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topicPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicPrefix = this._topicPrefix;
    }
    if (this._topic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTargetTopicSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topicPrefix = undefined;
      this._topic.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topicPrefix = value.topicPrefix;
      this._topic.internalValue = value.topic;
    }
  }

  // topic_prefix - computed: false, optional: true, required: false
  private _topicPrefix?: string; 
  public get topicPrefix() {
    return this.getStringAttribute('topic_prefix');
  }
  public set topicPrefix(value: string) {
    this._topicPrefix = value;
  }
  public resetTopicPrefix() {
    this._topicPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicPrefixInput() {
    return this._topicPrefix;
  }

  // topic - computed: false, optional: true, required: false
  private _topic = new DatatransferEndpointSettingsKafkaTargetTopicSettingsTopicOutputReference(this, "topic");
  public get topic() {
    return this._topic;
  }
  public putTopic(value: DatatransferEndpointSettingsKafkaTargetTopicSettingsTopic) {
    this._topic.internalValue = value;
  }
  public resetTopic() {
    this._topic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic.internalValue;
  }
}
export interface DatatransferEndpointSettingsKafkaTarget {
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#auth DatatransferEndpoint#auth}
  */
  readonly auth?: DatatransferEndpointSettingsKafkaTargetAuth;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsKafkaTargetConnection;
  /**
  * serializer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#serializer DatatransferEndpoint#serializer}
  */
  readonly serializer?: DatatransferEndpointSettingsKafkaTargetSerializer;
  /**
  * topic_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#topic_settings DatatransferEndpoint#topic_settings}
  */
  readonly topicSettings?: DatatransferEndpointSettingsKafkaTargetTopicSettings;
}

export function datatransferEndpointSettingsKafkaTargetToTerraform(struct?: DatatransferEndpointSettingsKafkaTargetOutputReference | DatatransferEndpointSettingsKafkaTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    auth: datatransferEndpointSettingsKafkaTargetAuthToTerraform(struct!.auth),
    connection: datatransferEndpointSettingsKafkaTargetConnectionToTerraform(struct!.connection),
    serializer: datatransferEndpointSettingsKafkaTargetSerializerToTerraform(struct!.serializer),
    topic_settings: datatransferEndpointSettingsKafkaTargetTopicSettingsToTerraform(struct!.topicSettings),
  }
}


export function datatransferEndpointSettingsKafkaTargetToHclTerraform(struct?: DatatransferEndpointSettingsKafkaTargetOutputReference | DatatransferEndpointSettingsKafkaTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    auth: {
      value: datatransferEndpointSettingsKafkaTargetAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetAuthList",
    },
    connection: {
      value: datatransferEndpointSettingsKafkaTargetConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetConnectionList",
    },
    serializer: {
      value: datatransferEndpointSettingsKafkaTargetSerializerToHclTerraform(struct!.serializer),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetSerializerList",
    },
    topic_settings: {
      value: datatransferEndpointSettingsKafkaTargetTopicSettingsToHclTerraform(struct!.topicSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsKafkaTargetTopicSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsKafkaTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsKafkaTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._serializer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serializer = this._serializer?.internalValue;
    }
    if (this._topicSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicSettings = this._topicSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsKafkaTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._securityGroups = undefined;
      this._auth.internalValue = undefined;
      this._connection.internalValue = undefined;
      this._serializer.internalValue = undefined;
      this._topicSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._securityGroups = value.securityGroups;
      this._auth.internalValue = value.auth;
      this._connection.internalValue = value.connection;
      this._serializer.internalValue = value.serializer;
      this._topicSettings.internalValue = value.topicSettings;
    }
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DatatransferEndpointSettingsKafkaTargetAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DatatransferEndpointSettingsKafkaTargetAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsKafkaTargetConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsKafkaTargetConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // serializer - computed: false, optional: true, required: false
  private _serializer = new DatatransferEndpointSettingsKafkaTargetSerializerOutputReference(this, "serializer");
  public get serializer() {
    return this._serializer;
  }
  public putSerializer(value: DatatransferEndpointSettingsKafkaTargetSerializer) {
    this._serializer.internalValue = value;
  }
  public resetSerializer() {
    this._serializer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serializerInput() {
    return this._serializer.internalValue;
  }

  // topic_settings - computed: false, optional: true, required: false
  private _topicSettings = new DatatransferEndpointSettingsKafkaTargetTopicSettingsOutputReference(this, "topic_settings");
  public get topicSettings() {
    return this._topicSettings;
  }
  public putTopicSettings(value: DatatransferEndpointSettingsKafkaTargetTopicSettings) {
    this._topicSettings.internalValue = value;
  }
  public resetTopicSettings() {
    this._topicSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicSettingsInput() {
    return this._topicSettings.internalValue;
  }
}
export interface DatatransferEndpointSettingsMetrikaSourceStreams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#columns DatatransferEndpoint#columns}
  */
  readonly columns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#type DatatransferEndpoint#type}
  */
  readonly type?: string;
}

export function datatransferEndpointSettingsMetrikaSourceStreamsToTerraform(struct?: DatatransferEndpointSettingsMetrikaSourceStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datatransferEndpointSettingsMetrikaSourceStreamsToHclTerraform(struct?: DatatransferEndpointSettingsMetrikaSourceStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMetrikaSourceStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsMetrikaSourceStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMetrikaSourceStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._columns = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._columns = value.columns;
      this._type = value.type;
    }
  }

  // columns - computed: true, optional: true, required: false
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  public resetColumns() {
    this._columns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }

  // type - computed: true, optional: true, required: false
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
}

export class DatatransferEndpointSettingsMetrikaSourceStreamsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsMetrikaSourceStreams[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsMetrikaSourceStreamsOutputReference {
    return new DatatransferEndpointSettingsMetrikaSourceStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsMetrikaSourceToken {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsMetrikaSourceTokenToTerraform(struct?: DatatransferEndpointSettingsMetrikaSourceTokenOutputReference | DatatransferEndpointSettingsMetrikaSourceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsMetrikaSourceTokenToHclTerraform(struct?: DatatransferEndpointSettingsMetrikaSourceTokenOutputReference | DatatransferEndpointSettingsMetrikaSourceToken): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMetrikaSourceTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMetrikaSourceToken | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMetrikaSourceToken | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsMetrikaSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#counter_ids DatatransferEndpoint#counter_ids}
  */
  readonly counterIds?: number[];
  /**
  * streams block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#streams DatatransferEndpoint#streams}
  */
  readonly streams?: DatatransferEndpointSettingsMetrikaSourceStreams[] | cdktf.IResolvable;
  /**
  * token block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#token DatatransferEndpoint#token}
  */
  readonly token?: DatatransferEndpointSettingsMetrikaSourceToken;
}

export function datatransferEndpointSettingsMetrikaSourceToTerraform(struct?: DatatransferEndpointSettingsMetrikaSourceOutputReference | DatatransferEndpointSettingsMetrikaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counter_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.counterIds),
    streams: cdktf.listMapper(datatransferEndpointSettingsMetrikaSourceStreamsToTerraform, true)(struct!.streams),
    token: datatransferEndpointSettingsMetrikaSourceTokenToTerraform(struct!.token),
  }
}


export function datatransferEndpointSettingsMetrikaSourceToHclTerraform(struct?: DatatransferEndpointSettingsMetrikaSourceOutputReference | DatatransferEndpointSettingsMetrikaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counter_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.counterIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    streams: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsMetrikaSourceStreamsToHclTerraform, true)(struct!.streams),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMetrikaSourceStreamsList",
    },
    token: {
      value: datatransferEndpointSettingsMetrikaSourceTokenToHclTerraform(struct!.token),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMetrikaSourceTokenList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMetrikaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMetrikaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counterIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.counterIds = this._counterIds;
    }
    if (this._streams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams?.internalValue;
    }
    if (this._token?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMetrikaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._counterIds = undefined;
      this._streams.internalValue = undefined;
      this._token.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._counterIds = value.counterIds;
      this._streams.internalValue = value.streams;
      this._token.internalValue = value.token;
    }
  }

  // counter_ids - computed: true, optional: true, required: false
  private _counterIds?: number[]; 
  public get counterIds() {
    return this.getNumberListAttribute('counter_ids');
  }
  public set counterIds(value: number[]) {
    this._counterIds = value;
  }
  public resetCounterIds() {
    this._counterIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counterIdsInput() {
    return this._counterIds;
  }

  // streams - computed: false, optional: true, required: false
  private _streams = new DatatransferEndpointSettingsMetrikaSourceStreamsList(this, "streams", false);
  public get streams() {
    return this._streams;
  }
  public putStreams(value: DatatransferEndpointSettingsMetrikaSourceStreams[] | cdktf.IResolvable) {
    this._streams.internalValue = value;
  }
  public resetStreams() {
    this._streams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams.internalValue;
  }

  // token - computed: false, optional: true, required: false
  private _token = new DatatransferEndpointSettingsMetrikaSourceTokenOutputReference(this, "token");
  public get token() {
    return this._token;
  }
  public putToken(value: DatatransferEndpointSettingsMetrikaSourceToken) {
    this._token.internalValue = value;
  }
  public resetToken() {
    this._token.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoSourceCollections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#collection_name DatatransferEndpoint#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database_name DatatransferEndpoint#database_name}
  */
  readonly databaseName?: string;
}

export function datatransferEndpointSettingsMongoSourceCollectionsToTerraform(struct?: DatatransferEndpointSettingsMongoSourceCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_name: cdktf.stringToTerraform(struct!.collectionName),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
  }
}


export function datatransferEndpointSettingsMongoSourceCollectionsToHclTerraform(struct?: DatatransferEndpointSettingsMongoSourceCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_name: {
      value: cdktf.stringToHclTerraform(struct!.collectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoSourceCollectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsMongoSourceCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionName = undefined;
      this._databaseName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionName = value.collectionName;
      this._databaseName = value.databaseName;
    }
  }

  // collection_name - computed: true, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }
}

export class DatatransferEndpointSettingsMongoSourceCollectionsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsMongoSourceCollections[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsMongoSourceCollectionsOutputReference {
    return new DatatransferEndpointSettingsMongoSourceCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToHclTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToHclTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode {
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}


export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeToHclTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledList",
    },
    enabled: {
      value: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise {
  /**
  * Host names of the replica set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * TCP Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Replica set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#replica_set DatatransferEndpoint#replica_set}
  */
  readonly replicaSet?: string;
  /**
  * tls_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode;
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    replica_set: cdktf.stringToTerraform(struct!.replicaSet),
    tls_mode: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}


export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseToHclTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_set: {
      value: cdktf.stringToHclTerraform(struct!.replicaSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_mode: {
      value: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeToHclTerraform(struct!.tlsMode),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._replicaSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSet = this._replicaSet;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._replicaSet = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._replicaSet = value.replicaSet;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
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

  // replica_set - computed: true, optional: true, required: false
  private _replicaSet?: string; 
  public get replicaSet() {
    return this.getStringAttribute('replica_set');
  }
  public set replicaSet(value: string) {
    this._replicaSet = value;
  }
  public resetReplicaSet() {
    this._replicaSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetInput() {
    return this._replicaSet;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordToHclTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions {
  /**
  * Name of the database associated with the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#auth_source DatatransferEndpoint#auth_source}
  */
  readonly authSource?: string;
  /**
  * Identifier of the Managed MongoDB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * on_premise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword;
}

export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_source: cdktf.stringToTerraform(struct!.authSource),
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    user: cdktf.stringToTerraform(struct!.user),
    on_premise: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseToTerraform(struct!.onPremise),
    password: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordToTerraform(struct!.password),
  }
}


export function datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsToHclTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_source: {
      value: cdktf.stringToHclTerraform(struct!.authSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdb_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.mdbClusterId),
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
    on_premise: {
      value: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseList",
    },
    password: {
      value: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authSource = undefined;
      this._mdbClusterId = undefined;
      this._user = undefined;
      this._onPremise.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authSource = value.authSource;
      this._mdbClusterId = value.mdbClusterId;
      this._user = value.user;
      this._onPremise.internalValue = value.onPremise;
      this._password.internalValue = value.password;
    }
  }

  // auth_source - computed: true, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // user - computed: true, optional: true, required: false
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

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoSourceConnection {
  /**
  * connection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection_options DatatransferEndpoint#connection_options}
  */
  readonly connectionOptions?: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions;
}

export function datatransferEndpointSettingsMongoSourceConnectionToTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionOutputReference | DatatransferEndpointSettingsMongoSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_options: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsToTerraform(struct!.connectionOptions),
  }
}


export function datatransferEndpointSettingsMongoSourceConnectionToHclTerraform(struct?: DatatransferEndpointSettingsMongoSourceConnectionOutputReference | DatatransferEndpointSettingsMongoSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_options: {
      value: datatransferEndpointSettingsMongoSourceConnectionConnectionOptionsToHclTerraform(struct!.connectionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoSourceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOptions = this._connectionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionOptions.internalValue = value.connectionOptions;
    }
  }

  // connection_options - computed: false, optional: true, required: false
  private _connectionOptions = new DatatransferEndpointSettingsMongoSourceConnectionConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: DatatransferEndpointSettingsMongoSourceConnectionConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoSourceExcludedCollections {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#collection_name DatatransferEndpoint#collection_name}
  */
  readonly collectionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database_name DatatransferEndpoint#database_name}
  */
  readonly databaseName?: string;
}

export function datatransferEndpointSettingsMongoSourceExcludedCollectionsToTerraform(struct?: DatatransferEndpointSettingsMongoSourceExcludedCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_name: cdktf.stringToTerraform(struct!.collectionName),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
  }
}


export function datatransferEndpointSettingsMongoSourceExcludedCollectionsToHclTerraform(struct?: DatatransferEndpointSettingsMongoSourceExcludedCollections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_name: {
      value: cdktf.stringToHclTerraform(struct!.collectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoSourceExcludedCollectionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsMongoSourceExcludedCollections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionName = this._collectionName;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSourceExcludedCollections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectionName = undefined;
      this._databaseName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectionName = value.collectionName;
      this._databaseName = value.databaseName;
    }
  }

  // collection_name - computed: true, optional: true, required: false
  private _collectionName?: string; 
  public get collectionName() {
    return this.getStringAttribute('collection_name');
  }
  public set collectionName(value: string) {
    this._collectionName = value;
  }
  public resetCollectionName() {
    this._collectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionNameInput() {
    return this._collectionName;
  }

  // database_name - computed: true, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }
}

export class DatatransferEndpointSettingsMongoSourceExcludedCollectionsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsMongoSourceExcludedCollections[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsMongoSourceExcludedCollectionsOutputReference {
    return new DatatransferEndpointSettingsMongoSourceExcludedCollectionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsMongoSource {
  /**
  * Whether the secondary server should be preferred to the primary when copying data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#secondary_preferred_mode DatatransferEndpoint#secondary_preferred_mode}
  */
  readonly secondaryPreferredMode?: boolean | cdktf.IResolvable;
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * collections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#collections DatatransferEndpoint#collections}
  */
  readonly collections?: DatatransferEndpointSettingsMongoSourceCollections[] | cdktf.IResolvable;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsMongoSourceConnection;
  /**
  * excluded_collections block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#excluded_collections DatatransferEndpoint#excluded_collections}
  */
  readonly excludedCollections?: DatatransferEndpointSettingsMongoSourceExcludedCollections[] | cdktf.IResolvable;
}

export function datatransferEndpointSettingsMongoSourceToTerraform(struct?: DatatransferEndpointSettingsMongoSourceOutputReference | DatatransferEndpointSettingsMongoSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secondary_preferred_mode: cdktf.booleanToTerraform(struct!.secondaryPreferredMode),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    collections: cdktf.listMapper(datatransferEndpointSettingsMongoSourceCollectionsToTerraform, true)(struct!.collections),
    connection: datatransferEndpointSettingsMongoSourceConnectionToTerraform(struct!.connection),
    excluded_collections: cdktf.listMapper(datatransferEndpointSettingsMongoSourceExcludedCollectionsToTerraform, true)(struct!.excludedCollections),
  }
}


export function datatransferEndpointSettingsMongoSourceToHclTerraform(struct?: DatatransferEndpointSettingsMongoSourceOutputReference | DatatransferEndpointSettingsMongoSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secondary_preferred_mode: {
      value: cdktf.booleanToHclTerraform(struct!.secondaryPreferredMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collections: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsMongoSourceCollectionsToHclTerraform, true)(struct!.collections),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoSourceCollectionsList",
    },
    connection: {
      value: datatransferEndpointSettingsMongoSourceConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoSourceConnectionList",
    },
    excluded_collections: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsMongoSourceExcludedCollectionsToHclTerraform, true)(struct!.excludedCollections),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoSourceExcludedCollectionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secondaryPreferredMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPreferredMode = this._secondaryPreferredMode;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._collections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collections = this._collections?.internalValue;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._excludedCollections?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedCollections = this._excludedCollections?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secondaryPreferredMode = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._collections.internalValue = undefined;
      this._connection.internalValue = undefined;
      this._excludedCollections.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secondaryPreferredMode = value.secondaryPreferredMode;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._collections.internalValue = value.collections;
      this._connection.internalValue = value.connection;
      this._excludedCollections.internalValue = value.excludedCollections;
    }
  }

  // secondary_preferred_mode - computed: true, optional: true, required: false
  private _secondaryPreferredMode?: boolean | cdktf.IResolvable; 
  public get secondaryPreferredMode() {
    return this.getBooleanAttribute('secondary_preferred_mode');
  }
  public set secondaryPreferredMode(value: boolean | cdktf.IResolvable) {
    this._secondaryPreferredMode = value;
  }
  public resetSecondaryPreferredMode() {
    this._secondaryPreferredMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPreferredModeInput() {
    return this._secondaryPreferredMode;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // collections - computed: false, optional: true, required: false
  private _collections = new DatatransferEndpointSettingsMongoSourceCollectionsList(this, "collections", false);
  public get collections() {
    return this._collections;
  }
  public putCollections(value: DatatransferEndpointSettingsMongoSourceCollections[] | cdktf.IResolvable) {
    this._collections.internalValue = value;
  }
  public resetCollections() {
    this._collections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionsInput() {
    return this._collections.internalValue;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsMongoSourceConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsMongoSourceConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // excluded_collections - computed: false, optional: true, required: false
  private _excludedCollections = new DatatransferEndpointSettingsMongoSourceExcludedCollectionsList(this, "excluded_collections", false);
  public get excludedCollections() {
    return this._excludedCollections;
  }
  public putExcludedCollections(value: DatatransferEndpointSettingsMongoSourceExcludedCollections[] | cdktf.IResolvable) {
    this._excludedCollections.internalValue = value;
  }
  public resetExcludedCollections() {
    this._excludedCollections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedCollectionsInput() {
    return this._excludedCollections.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToHclTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToHclTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode {
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}


export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeToHclTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledList",
    },
    enabled: {
      value: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise {
  /**
  * Host names of the replica set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * TCP Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Replica set name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#replica_set DatatransferEndpoint#replica_set}
  */
  readonly replicaSet?: string;
  /**
  * tls_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode;
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    replica_set: cdktf.stringToTerraform(struct!.replicaSet),
    tls_mode: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}


export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseToHclTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replica_set: {
      value: cdktf.stringToHclTerraform(struct!.replicaSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_mode: {
      value: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeToHclTerraform(struct!.tlsMode),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._replicaSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaSet = this._replicaSet;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._replicaSet = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._replicaSet = value.replicaSet;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
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

  // replica_set - computed: true, optional: true, required: false
  private _replicaSet?: string; 
  public get replicaSet() {
    return this.getStringAttribute('replica_set');
  }
  public set replicaSet(value: string) {
    this._replicaSet = value;
  }
  public resetReplicaSet() {
    this._replicaSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaSetInput() {
    return this._replicaSet;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword {
  /**
  * Password for the database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordToHclTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions {
  /**
  * Name of the database associated with the credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#auth_source DatatransferEndpoint#auth_source}
  */
  readonly authSource?: string;
  /**
  * Identifier of the Managed MongoDB cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * User for database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * on_premise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword;
}

export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_source: cdktf.stringToTerraform(struct!.authSource),
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    user: cdktf.stringToTerraform(struct!.user),
    on_premise: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseToTerraform(struct!.onPremise),
    password: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordToTerraform(struct!.password),
  }
}


export function datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsToHclTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOutputReference | DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_source: {
      value: cdktf.stringToHclTerraform(struct!.authSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mdb_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.mdbClusterId),
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
    on_premise: {
      value: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseList",
    },
    password: {
      value: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSource = this._authSource;
    }
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authSource = undefined;
      this._mdbClusterId = undefined;
      this._user = undefined;
      this._onPremise.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authSource = value.authSource;
      this._mdbClusterId = value.mdbClusterId;
      this._user = value.user;
      this._onPremise.internalValue = value.onPremise;
      this._password.internalValue = value.password;
    }
  }

  // auth_source - computed: true, optional: true, required: false
  private _authSource?: string; 
  public get authSource() {
    return this.getStringAttribute('auth_source');
  }
  public set authSource(value: string) {
    this._authSource = value;
  }
  public resetAuthSource() {
    this._authSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSourceInput() {
    return this._authSource;
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // user - computed: true, optional: true, required: false
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

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoTargetConnection {
  /**
  * connection_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection_options DatatransferEndpoint#connection_options}
  */
  readonly connectionOptions?: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions;
}

export function datatransferEndpointSettingsMongoTargetConnectionToTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionOutputReference | DatatransferEndpointSettingsMongoTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_options: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsToTerraform(struct!.connectionOptions),
  }
}


export function datatransferEndpointSettingsMongoTargetConnectionToHclTerraform(struct?: DatatransferEndpointSettingsMongoTargetConnectionOutputReference | DatatransferEndpointSettingsMongoTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_options: {
      value: datatransferEndpointSettingsMongoTargetConnectionConnectionOptionsToHclTerraform(struct!.connectionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoTargetConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTargetConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionOptions = this._connectionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTargetConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectionOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectionOptions.internalValue = value.connectionOptions;
    }
  }

  // connection_options - computed: false, optional: true, required: false
  private _connectionOptions = new DatatransferEndpointSettingsMongoTargetConnectionConnectionOptionsOutputReference(this, "connection_options");
  public get connectionOptions() {
    return this._connectionOptions;
  }
  public putConnectionOptions(value: DatatransferEndpointSettingsMongoTargetConnectionConnectionOptions) {
    this._connectionOptions.internalValue = value;
  }
  public resetConnectionOptions() {
    this._connectionOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionOptionsInput() {
    return this._connectionOptions.internalValue;
  }
}
export interface DatatransferEndpointSettingsMongoTarget {
  /**
  * How to clean collections when activating the transfer. One of `DISABLED`, `DROP` or `TRUNCATE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cleanup_policy DatatransferEndpoint#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * If not empty, then all the data will be written to the database with the specified name; otherwise the database name is the same as in the source endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsMongoTargetConnection;
}

export function datatransferEndpointSettingsMongoTargetToTerraform(struct?: DatatransferEndpointSettingsMongoTargetOutputReference | DatatransferEndpointSettingsMongoTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    database: cdktf.stringToTerraform(struct!.database),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    connection: datatransferEndpointSettingsMongoTargetConnectionToTerraform(struct!.connection),
  }
}


export function datatransferEndpointSettingsMongoTargetToHclTerraform(struct?: DatatransferEndpointSettingsMongoTargetOutputReference | DatatransferEndpointSettingsMongoTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection: {
      value: datatransferEndpointSettingsMongoTargetConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMongoTargetConnectionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMongoTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMongoTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMongoTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupPolicy = undefined;
      this._database = undefined;
      this._securityGroups = undefined;
      this._subnetId = undefined;
      this._connection.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupPolicy = value.cleanupPolicy;
      this._database = value.database;
      this._securityGroups = value.securityGroups;
      this._subnetId = value.subnetId;
      this._connection.internalValue = value.connection;
    }
  }

  // cleanup_policy - computed: true, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsMongoTargetConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsMongoTargetConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledToHclTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledToHclTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode {
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}


export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeToHclTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledList",
    },
    enabled: {
      value: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlSourceConnectionOnPremise {
  /**
  * List of host names of the MySQL server. Exactly one host is expected currently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Port for the database connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tls_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode;
}

export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tls_mode: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}


export function datatransferEndpointSettingsMysqlSourceConnectionOnPremiseToHclTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseOutputReference | DatatransferEndpointSettingsMysqlSourceConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_mode: {
      value: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeToHclTerraform(struct!.tlsMode),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceConnectionOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
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

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlSourceConnection {
  /**
  * Identifier of the Managed MySQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * on_premise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsMysqlSourceConnectionOnPremise;
}

export function datatransferEndpointSettingsMysqlSourceConnectionToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOutputReference | DatatransferEndpointSettingsMysqlSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    on_premise: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseToTerraform(struct!.onPremise),
  }
}


export function datatransferEndpointSettingsMysqlSourceConnectionToHclTerraform(struct?: DatatransferEndpointSettingsMysqlSourceConnectionOutputReference | DatatransferEndpointSettingsMysqlSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mdb_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.mdbClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_premise: {
      value: datatransferEndpointSettingsMysqlSourceConnectionOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlSourceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mdbClusterId = undefined;
      this._onPremise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mdbClusterId = value.mdbClusterId;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsMysqlSourceConnectionOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsMysqlSourceConnectionOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlSourceObjectTransferSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#routine DatatransferEndpoint#routine}
  */
  readonly routine?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tables DatatransferEndpoint#tables}
  */
  readonly tables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#trigger DatatransferEndpoint#trigger}
  */
  readonly trigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#view DatatransferEndpoint#view}
  */
  readonly view?: string;
}

export function datatransferEndpointSettingsMysqlSourceObjectTransferSettingsToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceObjectTransferSettingsOutputReference | DatatransferEndpointSettingsMysqlSourceObjectTransferSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    routine: cdktf.stringToTerraform(struct!.routine),
    tables: cdktf.stringToTerraform(struct!.tables),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function datatransferEndpointSettingsMysqlSourceObjectTransferSettingsToHclTerraform(struct?: DatatransferEndpointSettingsMysqlSourceObjectTransferSettingsOutputReference | DatatransferEndpointSettingsMysqlSourceObjectTransferSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    routine: {
      value: cdktf.stringToHclTerraform(struct!.routine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktf.stringToHclTerraform(struct!.tables),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger: {
      value: cdktf.stringToHclTerraform(struct!.trigger),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlSourceObjectTransferSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourceObjectTransferSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._routine !== undefined) {
      hasAnyValues = true;
      internalValueResult.routine = this._routine;
    }
    if (this._tables !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourceObjectTransferSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._routine = undefined;
      this._tables = undefined;
      this._trigger = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._routine = value.routine;
      this._tables = value.tables;
      this._trigger = value.trigger;
      this._view = value.view;
    }
  }

  // routine - computed: true, optional: true, required: false
  private _routine?: string; 
  public get routine() {
    return this.getStringAttribute('routine');
  }
  public set routine(value: string) {
    this._routine = value;
  }
  public resetRoutine() {
    this._routine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineInput() {
    return this._routine;
  }

  // tables - computed: true, optional: true, required: false
  private _tables?: string; 
  public get tables() {
    return this.getStringAttribute('tables');
  }
  public set tables(value: string) {
    this._tables = value;
  }
  public resetTables() {
    this._tables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables;
  }

  // trigger - computed: true, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}
export interface DatatransferEndpointSettingsMysqlSourcePassword {
  /**
  * Password for the database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsMysqlSourcePasswordToTerraform(struct?: DatatransferEndpointSettingsMysqlSourcePasswordOutputReference | DatatransferEndpointSettingsMysqlSourcePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsMysqlSourcePasswordToHclTerraform(struct?: DatatransferEndpointSettingsMysqlSourcePasswordOutputReference | DatatransferEndpointSettingsMysqlSourcePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlSourcePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSourcePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSourcePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsMysqlSource {
  /**
  * Name of the database to transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Opposite of `include_table_regex`. The tables matching the specified regular expressions will not be transferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#exclude_tables_regex DatatransferEndpoint#exclude_tables_regex}
  */
  readonly excludeTablesRegex?: string[];
  /**
  * List of regular expressions of table names which should be transferred. A table name is formatted as schemaname.tablename. For example, a single regular expression may look like `^mydb.employees$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#include_tables_regex DatatransferEndpoint#include_tables_regex}
  */
  readonly includeTablesRegex?: string[];
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#service_database DatatransferEndpoint#service_database}
  */
  readonly serviceDatabase?: string;
  /**
  * Timezone to use for parsing timestamps for saving source timezones. Accepts values from IANA timezone database. Default: `local timezone`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#timezone DatatransferEndpoint#timezone}
  */
  readonly timezone?: string;
  /**
  * User for the database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsMysqlSourceConnection;
  /**
  * object_transfer_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#object_transfer_settings DatatransferEndpoint#object_transfer_settings}
  */
  readonly objectTransferSettings?: DatatransferEndpointSettingsMysqlSourceObjectTransferSettings;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsMysqlSourcePassword;
}

export function datatransferEndpointSettingsMysqlSourceToTerraform(struct?: DatatransferEndpointSettingsMysqlSourceOutputReference | DatatransferEndpointSettingsMysqlSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    exclude_tables_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTablesRegex),
    include_tables_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTablesRegex),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    service_database: cdktf.stringToTerraform(struct!.serviceDatabase),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    user: cdktf.stringToTerraform(struct!.user),
    connection: datatransferEndpointSettingsMysqlSourceConnectionToTerraform(struct!.connection),
    object_transfer_settings: datatransferEndpointSettingsMysqlSourceObjectTransferSettingsToTerraform(struct!.objectTransferSettings),
    password: datatransferEndpointSettingsMysqlSourcePasswordToTerraform(struct!.password),
  }
}


export function datatransferEndpointSettingsMysqlSourceToHclTerraform(struct?: DatatransferEndpointSettingsMysqlSourceOutputReference | DatatransferEndpointSettingsMysqlSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_tables_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTablesRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tables_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTablesRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_database: {
      value: cdktf.stringToHclTerraform(struct!.serviceDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    connection: {
      value: datatransferEndpointSettingsMysqlSourceConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlSourceConnectionList",
    },
    object_transfer_settings: {
      value: datatransferEndpointSettingsMysqlSourceObjectTransferSettingsToHclTerraform(struct!.objectTransferSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlSourceObjectTransferSettingsList",
    },
    password: {
      value: datatransferEndpointSettingsMysqlSourcePasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlSourcePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._excludeTablesRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTablesRegex = this._excludeTablesRegex;
    }
    if (this._includeTablesRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTablesRegex = this._includeTablesRegex;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._serviceDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDatabase = this._serviceDatabase;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._objectTransferSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTransferSettings = this._objectTransferSettings?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._excludeTablesRegex = undefined;
      this._includeTablesRegex = undefined;
      this._securityGroups = undefined;
      this._serviceDatabase = undefined;
      this._timezone = undefined;
      this._user = undefined;
      this._connection.internalValue = undefined;
      this._objectTransferSettings.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._excludeTablesRegex = value.excludeTablesRegex;
      this._includeTablesRegex = value.includeTablesRegex;
      this._securityGroups = value.securityGroups;
      this._serviceDatabase = value.serviceDatabase;
      this._timezone = value.timezone;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._objectTransferSettings.internalValue = value.objectTransferSettings;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // exclude_tables_regex - computed: true, optional: true, required: false
  private _excludeTablesRegex?: string[]; 
  public get excludeTablesRegex() {
    return this.getListAttribute('exclude_tables_regex');
  }
  public set excludeTablesRegex(value: string[]) {
    this._excludeTablesRegex = value;
  }
  public resetExcludeTablesRegex() {
    this._excludeTablesRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesRegexInput() {
    return this._excludeTablesRegex;
  }

  // include_tables_regex - computed: true, optional: true, required: false
  private _includeTablesRegex?: string[]; 
  public get includeTablesRegex() {
    return this.getListAttribute('include_tables_regex');
  }
  public set includeTablesRegex(value: string[]) {
    this._includeTablesRegex = value;
  }
  public resetIncludeTablesRegex() {
    this._includeTablesRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesRegexInput() {
    return this._includeTablesRegex;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // service_database - computed: true, optional: true, required: false
  private _serviceDatabase?: string; 
  public get serviceDatabase() {
    return this.getStringAttribute('service_database');
  }
  public set serviceDatabase(value: string) {
    this._serviceDatabase = value;
  }
  public resetServiceDatabase() {
    this._serviceDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDatabaseInput() {
    return this._serviceDatabase;
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

  // user - computed: true, optional: true, required: false
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

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsMysqlSourceConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsMysqlSourceConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // object_transfer_settings - computed: false, optional: true, required: false
  private _objectTransferSettings = new DatatransferEndpointSettingsMysqlSourceObjectTransferSettingsOutputReference(this, "object_transfer_settings");
  public get objectTransferSettings() {
    return this._objectTransferSettings;
  }
  public putObjectTransferSettings(value: DatatransferEndpointSettingsMysqlSourceObjectTransferSettings) {
    this._objectTransferSettings.internalValue = value;
  }
  public resetObjectTransferSettings() {
    this._objectTransferSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTransferSettingsInput() {
    return this._objectTransferSettings.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsMysqlSourcePasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsMysqlSourcePassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledToHclTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledToHclTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode {
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}


export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeToHclTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledList",
    },
    enabled: {
      value: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlTargetConnectionOnPremise {
  /**
  * List of host names of the MySQL server. Exactly one host is expected currently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Port for the database connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tls_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode;
}

export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tls_mode: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}


export function datatransferEndpointSettingsMysqlTargetConnectionOnPremiseToHclTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseOutputReference | DatatransferEndpointSettingsMysqlTargetConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_mode: {
      value: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeToHclTerraform(struct!.tlsMode),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetConnectionOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
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

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlTargetConnection {
  /**
  * Identifier of the Managed MySQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * on_premise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsMysqlTargetConnectionOnPremise;
}

export function datatransferEndpointSettingsMysqlTargetConnectionToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOutputReference | DatatransferEndpointSettingsMysqlTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    on_premise: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseToTerraform(struct!.onPremise),
  }
}


export function datatransferEndpointSettingsMysqlTargetConnectionToHclTerraform(struct?: DatatransferEndpointSettingsMysqlTargetConnectionOutputReference | DatatransferEndpointSettingsMysqlTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mdb_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.mdbClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_premise: {
      value: datatransferEndpointSettingsMysqlTargetConnectionOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlTargetConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mdbClusterId = undefined;
      this._onPremise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mdbClusterId = value.mdbClusterId;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsMysqlTargetConnectionOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsMysqlTargetConnectionOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface DatatransferEndpointSettingsMysqlTargetPassword {
  /**
  * Password for the database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsMysqlTargetPasswordToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetPasswordOutputReference | DatatransferEndpointSettingsMysqlTargetPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsMysqlTargetPasswordToHclTerraform(struct?: DatatransferEndpointSettingsMysqlTargetPasswordOutputReference | DatatransferEndpointSettingsMysqlTargetPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlTargetPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTargetPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTargetPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsMysqlTarget {
  /**
  * How to clean tables when activating the transfer. One of `DISABLED`, `DROP` or `TRUNCATE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cleanup_policy DatatransferEndpoint#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Name of the database to transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * The name of the database where technical tables (`__tm_keeper`, `__tm_gtid_keeper`) will be created. Default is the value of the attribute `database`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#service_database DatatransferEndpoint#service_database}
  */
  readonly serviceDatabase?: string;
  /**
  * When `true`, disables foreign key checks. See [foreign_key_checks](https://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_foreign_key_checks). `False` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#skip_constraint_checks DatatransferEndpoint#skip_constraint_checks}
  */
  readonly skipConstraintChecks?: boolean | cdktf.IResolvable;
  /**
  * [sql_mode](https://dev.mysql.com/doc/refman/5.7/en/sql-mode.html) to use when interacting with the server. Defaults to `NO_AUTO_VALUE_ON_ZERO,NO_DIR_IN_CREATE,NO_ENGINE_SUBSTITUTION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#sql_mode DatatransferEndpoint#sql_mode}
  */
  readonly sqlMode?: string;
  /**
  * Timezone to use for parsing timestamps for saving source timezones. Accepts values from IANA timezone database. Default: `local timezone`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#timezone DatatransferEndpoint#timezone}
  */
  readonly timezone?: string;
  /**
  * User for the database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsMysqlTargetConnection;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsMysqlTargetPassword;
}

export function datatransferEndpointSettingsMysqlTargetToTerraform(struct?: DatatransferEndpointSettingsMysqlTargetOutputReference | DatatransferEndpointSettingsMysqlTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    database: cdktf.stringToTerraform(struct!.database),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    service_database: cdktf.stringToTerraform(struct!.serviceDatabase),
    skip_constraint_checks: cdktf.booleanToTerraform(struct!.skipConstraintChecks),
    sql_mode: cdktf.stringToTerraform(struct!.sqlMode),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    user: cdktf.stringToTerraform(struct!.user),
    connection: datatransferEndpointSettingsMysqlTargetConnectionToTerraform(struct!.connection),
    password: datatransferEndpointSettingsMysqlTargetPasswordToTerraform(struct!.password),
  }
}


export function datatransferEndpointSettingsMysqlTargetToHclTerraform(struct?: DatatransferEndpointSettingsMysqlTargetOutputReference | DatatransferEndpointSettingsMysqlTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_database: {
      value: cdktf.stringToHclTerraform(struct!.serviceDatabase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_constraint_checks: {
      value: cdktf.booleanToHclTerraform(struct!.skipConstraintChecks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sql_mode: {
      value: cdktf.stringToHclTerraform(struct!.sqlMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
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
    connection: {
      value: datatransferEndpointSettingsMysqlTargetConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlTargetConnectionList",
    },
    password: {
      value: datatransferEndpointSettingsMysqlTargetPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsMysqlTargetPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsMysqlTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsMysqlTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._serviceDatabase !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDatabase = this._serviceDatabase;
    }
    if (this._skipConstraintChecks !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipConstraintChecks = this._skipConstraintChecks;
    }
    if (this._sqlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlMode = this._sqlMode;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsMysqlTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupPolicy = undefined;
      this._database = undefined;
      this._securityGroups = undefined;
      this._serviceDatabase = undefined;
      this._skipConstraintChecks = undefined;
      this._sqlMode = undefined;
      this._timezone = undefined;
      this._user = undefined;
      this._connection.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupPolicy = value.cleanupPolicy;
      this._database = value.database;
      this._securityGroups = value.securityGroups;
      this._serviceDatabase = value.serviceDatabase;
      this._skipConstraintChecks = value.skipConstraintChecks;
      this._sqlMode = value.sqlMode;
      this._timezone = value.timezone;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._password.internalValue = value.password;
    }
  }

  // cleanup_policy - computed: true, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // service_database - computed: true, optional: true, required: false
  private _serviceDatabase?: string; 
  public get serviceDatabase() {
    return this.getStringAttribute('service_database');
  }
  public set serviceDatabase(value: string) {
    this._serviceDatabase = value;
  }
  public resetServiceDatabase() {
    this._serviceDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDatabaseInput() {
    return this._serviceDatabase;
  }

  // skip_constraint_checks - computed: true, optional: true, required: false
  private _skipConstraintChecks?: boolean | cdktf.IResolvable; 
  public get skipConstraintChecks() {
    return this.getBooleanAttribute('skip_constraint_checks');
  }
  public set skipConstraintChecks(value: boolean | cdktf.IResolvable) {
    this._skipConstraintChecks = value;
  }
  public resetSkipConstraintChecks() {
    this._skipConstraintChecks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipConstraintChecksInput() {
    return this._skipConstraintChecks;
  }

  // sql_mode - computed: true, optional: true, required: false
  private _sqlMode?: string; 
  public get sqlMode() {
    return this.getStringAttribute('sql_mode');
  }
  public set sqlMode(value: string) {
    this._sqlMode = value;
  }
  public resetSqlMode() {
    this._sqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlModeInput() {
    return this._sqlMode;
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

  // user - computed: true, optional: true, required: false
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

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsMysqlTargetConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsMysqlTargetConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsMysqlTargetPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsMysqlTargetPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledToHclTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledToHclTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode {
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}


export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeToHclTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledList",
    },
    enabled: {
      value: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresSourceConnectionOnPremise {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tls_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode;
}

export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tls_mode: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}


export function datatransferEndpointSettingsPostgresSourceConnectionOnPremiseToHclTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseOutputReference | DatatransferEndpointSettingsPostgresSourceConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_mode: {
      value: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeToHclTerraform(struct!.tlsMode),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceConnectionOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
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

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresSourceConnection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * on_premise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsPostgresSourceConnectionOnPremise;
}

export function datatransferEndpointSettingsPostgresSourceConnectionToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOutputReference | DatatransferEndpointSettingsPostgresSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    on_premise: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseToTerraform(struct!.onPremise),
  }
}


export function datatransferEndpointSettingsPostgresSourceConnectionToHclTerraform(struct?: DatatransferEndpointSettingsPostgresSourceConnectionOutputReference | DatatransferEndpointSettingsPostgresSourceConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mdb_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.mdbClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_premise: {
      value: datatransferEndpointSettingsPostgresSourceConnectionOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresSourceConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mdbClusterId = undefined;
      this._onPremise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mdbClusterId = value.mdbClusterId;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsPostgresSourceConnectionOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsPostgresSourceConnectionOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresSourceObjectTransferSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cast DatatransferEndpoint#cast}
  */
  readonly cast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#collation DatatransferEndpoint#collation}
  */
  readonly collation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#constraint DatatransferEndpoint#constraint}
  */
  readonly constraint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#default_values DatatransferEndpoint#default_values}
  */
  readonly defaultValues?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#fk_constraint DatatransferEndpoint#fk_constraint}
  */
  readonly fkConstraint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#function DatatransferEndpoint#function}
  */
  readonly function?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#index DatatransferEndpoint#index}
  */
  readonly index?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#materialized_view DatatransferEndpoint#materialized_view}
  */
  readonly materializedView?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#policy DatatransferEndpoint#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#primary_key DatatransferEndpoint#primary_key}
  */
  readonly primaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#rule DatatransferEndpoint#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#sequence DatatransferEndpoint#sequence}
  */
  readonly sequence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#sequence_owned_by DatatransferEndpoint#sequence_owned_by}
  */
  readonly sequenceOwnedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#sequence_set DatatransferEndpoint#sequence_set}
  */
  readonly sequenceSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#table DatatransferEndpoint#table}
  */
  readonly table?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#trigger DatatransferEndpoint#trigger}
  */
  readonly trigger?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#type DatatransferEndpoint#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#view DatatransferEndpoint#view}
  */
  readonly view?: string;
}

export function datatransferEndpointSettingsPostgresSourceObjectTransferSettingsToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceObjectTransferSettingsOutputReference | DatatransferEndpointSettingsPostgresSourceObjectTransferSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cast: cdktf.stringToTerraform(struct!.cast),
    collation: cdktf.stringToTerraform(struct!.collation),
    constraint: cdktf.stringToTerraform(struct!.constraint),
    default_values: cdktf.stringToTerraform(struct!.defaultValues),
    fk_constraint: cdktf.stringToTerraform(struct!.fkConstraint),
    function: cdktf.stringToTerraform(struct!.function),
    index: cdktf.stringToTerraform(struct!.index),
    materialized_view: cdktf.stringToTerraform(struct!.materializedView),
    policy: cdktf.stringToTerraform(struct!.policy),
    primary_key: cdktf.stringToTerraform(struct!.primaryKey),
    rule: cdktf.stringToTerraform(struct!.rule),
    sequence: cdktf.stringToTerraform(struct!.sequence),
    sequence_owned_by: cdktf.stringToTerraform(struct!.sequenceOwnedBy),
    sequence_set: cdktf.stringToTerraform(struct!.sequenceSet),
    table: cdktf.stringToTerraform(struct!.table),
    trigger: cdktf.stringToTerraform(struct!.trigger),
    type: cdktf.stringToTerraform(struct!.type),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function datatransferEndpointSettingsPostgresSourceObjectTransferSettingsToHclTerraform(struct?: DatatransferEndpointSettingsPostgresSourceObjectTransferSettingsOutputReference | DatatransferEndpointSettingsPostgresSourceObjectTransferSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cast: {
      value: cdktf.stringToHclTerraform(struct!.cast),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collation: {
      value: cdktf.stringToHclTerraform(struct!.collation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    constraint: {
      value: cdktf.stringToHclTerraform(struct!.constraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_values: {
      value: cdktf.stringToHclTerraform(struct!.defaultValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fk_constraint: {
      value: cdktf.stringToHclTerraform(struct!.fkConstraint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function: {
      value: cdktf.stringToHclTerraform(struct!.function),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index: {
      value: cdktf.stringToHclTerraform(struct!.index),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    materialized_view: {
      value: cdktf.stringToHclTerraform(struct!.materializedView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_key: {
      value: cdktf.stringToHclTerraform(struct!.primaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence: {
      value: cdktf.stringToHclTerraform(struct!.sequence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_owned_by: {
      value: cdktf.stringToHclTerraform(struct!.sequenceOwnedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sequence_set: {
      value: cdktf.stringToHclTerraform(struct!.sequenceSet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger: {
      value: cdktf.stringToHclTerraform(struct!.trigger),
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
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresSourceObjectTransferSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourceObjectTransferSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cast !== undefined) {
      hasAnyValues = true;
      internalValueResult.cast = this._cast;
    }
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._constraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.constraint = this._constraint;
    }
    if (this._defaultValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValues = this._defaultValues;
    }
    if (this._fkConstraint !== undefined) {
      hasAnyValues = true;
      internalValueResult.fkConstraint = this._fkConstraint;
    }
    if (this._function !== undefined) {
      hasAnyValues = true;
      internalValueResult.function = this._function;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._materializedView !== undefined) {
      hasAnyValues = true;
      internalValueResult.materializedView = this._materializedView;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._sequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequence = this._sequence;
    }
    if (this._sequenceOwnedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceOwnedBy = this._sequenceOwnedBy;
    }
    if (this._sequenceSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.sequenceSet = this._sequenceSet;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._trigger !== undefined) {
      hasAnyValues = true;
      internalValueResult.trigger = this._trigger;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourceObjectTransferSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cast = undefined;
      this._collation = undefined;
      this._constraint = undefined;
      this._defaultValues = undefined;
      this._fkConstraint = undefined;
      this._function = undefined;
      this._index = undefined;
      this._materializedView = undefined;
      this._policy = undefined;
      this._primaryKey = undefined;
      this._rule = undefined;
      this._sequence = undefined;
      this._sequenceOwnedBy = undefined;
      this._sequenceSet = undefined;
      this._table = undefined;
      this._trigger = undefined;
      this._type = undefined;
      this._view = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cast = value.cast;
      this._collation = value.collation;
      this._constraint = value.constraint;
      this._defaultValues = value.defaultValues;
      this._fkConstraint = value.fkConstraint;
      this._function = value.function;
      this._index = value.index;
      this._materializedView = value.materializedView;
      this._policy = value.policy;
      this._primaryKey = value.primaryKey;
      this._rule = value.rule;
      this._sequence = value.sequence;
      this._sequenceOwnedBy = value.sequenceOwnedBy;
      this._sequenceSet = value.sequenceSet;
      this._table = value.table;
      this._trigger = value.trigger;
      this._type = value.type;
      this._view = value.view;
    }
  }

  // cast - computed: true, optional: true, required: false
  private _cast?: string; 
  public get cast() {
    return this.getStringAttribute('cast');
  }
  public set cast(value: string) {
    this._cast = value;
  }
  public resetCast() {
    this._cast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get castInput() {
    return this._cast;
  }

  // collation - computed: true, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // constraint - computed: true, optional: true, required: false
  private _constraint?: string; 
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  public resetConstraint() {
    this._constraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint;
  }

  // default_values - computed: true, optional: true, required: false
  private _defaultValues?: string; 
  public get defaultValues() {
    return this.getStringAttribute('default_values');
  }
  public set defaultValues(value: string) {
    this._defaultValues = value;
  }
  public resetDefaultValues() {
    this._defaultValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValuesInput() {
    return this._defaultValues;
  }

  // fk_constraint - computed: true, optional: true, required: false
  private _fkConstraint?: string; 
  public get fkConstraint() {
    return this.getStringAttribute('fk_constraint');
  }
  public set fkConstraint(value: string) {
    this._fkConstraint = value;
  }
  public resetFkConstraint() {
    this._fkConstraint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fkConstraintInput() {
    return this._fkConstraint;
  }

  // function - computed: true, optional: true, required: false
  private _function?: string; 
  public get function() {
    return this.getStringAttribute('function');
  }
  public set function(value: string) {
    this._function = value;
  }
  public resetFunction() {
    this._function = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionInput() {
    return this._function;
  }

  // index - computed: true, optional: true, required: false
  private _index?: string; 
  public get index() {
    return this.getStringAttribute('index');
  }
  public set index(value: string) {
    this._index = value;
  }
  public resetIndex() {
    this._index = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // materialized_view - computed: true, optional: true, required: false
  private _materializedView?: string; 
  public get materializedView() {
    return this.getStringAttribute('materialized_view');
  }
  public set materializedView(value: string) {
    this._materializedView = value;
  }
  public resetMaterializedView() {
    this._materializedView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewInput() {
    return this._materializedView;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // primary_key - computed: true, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // rule - computed: true, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // sequence - computed: true, optional: true, required: false
  private _sequence?: string; 
  public get sequence() {
    return this.getStringAttribute('sequence');
  }
  public set sequence(value: string) {
    this._sequence = value;
  }
  public resetSequence() {
    this._sequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceInput() {
    return this._sequence;
  }

  // sequence_owned_by - computed: true, optional: true, required: false
  private _sequenceOwnedBy?: string; 
  public get sequenceOwnedBy() {
    return this.getStringAttribute('sequence_owned_by');
  }
  public set sequenceOwnedBy(value: string) {
    this._sequenceOwnedBy = value;
  }
  public resetSequenceOwnedBy() {
    this._sequenceOwnedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceOwnedByInput() {
    return this._sequenceOwnedBy;
  }

  // sequence_set - computed: true, optional: true, required: false
  private _sequenceSet?: string; 
  public get sequenceSet() {
    return this.getStringAttribute('sequence_set');
  }
  public set sequenceSet(value: string) {
    this._sequenceSet = value;
  }
  public resetSequenceSet() {
    this._sequenceSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceSetInput() {
    return this._sequenceSet;
  }

  // table - computed: true, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // trigger - computed: true, optional: true, required: false
  private _trigger?: string; 
  public get trigger() {
    return this.getStringAttribute('trigger');
  }
  public set trigger(value: string) {
    this._trigger = value;
  }
  public resetTrigger() {
    this._trigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerInput() {
    return this._trigger;
  }

  // type - computed: true, optional: true, required: false
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

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}
export interface DatatransferEndpointSettingsPostgresSourcePassword {
  /**
  * Password for the database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsPostgresSourcePasswordToTerraform(struct?: DatatransferEndpointSettingsPostgresSourcePasswordOutputReference | DatatransferEndpointSettingsPostgresSourcePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsPostgresSourcePasswordToHclTerraform(struct?: DatatransferEndpointSettingsPostgresSourcePasswordOutputReference | DatatransferEndpointSettingsPostgresSourcePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresSourcePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSourcePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSourcePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsPostgresSource {
  /**
  * Name of the database to transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * List of tables which will not be transfered, formatted as `schemaname.tablename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#exclude_tables DatatransferEndpoint#exclude_tables}
  */
  readonly excludeTables?: string[];
  /**
  * List of tables to transfer, formatted as `schemaname.tablename`. If omitted or an empty list is specified, all tables will be transferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#include_tables DatatransferEndpoint#include_tables}
  */
  readonly includeTables?: string[];
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Name of the database schema in which auxiliary tables needed for the transfer will be created. Empty `service_schema` implies schema `public`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#service_schema DatatransferEndpoint#service_schema}
  */
  readonly serviceSchema?: string;
  /**
  * Maximum WAL size held by the replication slot, in gigabytes. Exceeding this limit will result in a replication failure and deletion of the replication slot. `Unlimited` by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#slot_gigabyte_lag_limit DatatransferEndpoint#slot_gigabyte_lag_limit}
  */
  readonly slotGigabyteLagLimit?: number;
  /**
  * User for the database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsPostgresSourceConnection;
  /**
  * object_transfer_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#object_transfer_settings DatatransferEndpoint#object_transfer_settings}
  */
  readonly objectTransferSettings?: DatatransferEndpointSettingsPostgresSourceObjectTransferSettings;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsPostgresSourcePassword;
}

export function datatransferEndpointSettingsPostgresSourceToTerraform(struct?: DatatransferEndpointSettingsPostgresSourceOutputReference | DatatransferEndpointSettingsPostgresSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    exclude_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTables),
    include_tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTables),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    service_schema: cdktf.stringToTerraform(struct!.serviceSchema),
    slot_gigabyte_lag_limit: cdktf.numberToTerraform(struct!.slotGigabyteLagLimit),
    user: cdktf.stringToTerraform(struct!.user),
    connection: datatransferEndpointSettingsPostgresSourceConnectionToTerraform(struct!.connection),
    object_transfer_settings: datatransferEndpointSettingsPostgresSourceObjectTransferSettingsToTerraform(struct!.objectTransferSettings),
    password: datatransferEndpointSettingsPostgresSourcePasswordToTerraform(struct!.password),
  }
}


export function datatransferEndpointSettingsPostgresSourceToHclTerraform(struct?: DatatransferEndpointSettingsPostgresSourceOutputReference | DatatransferEndpointSettingsPostgresSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_schema: {
      value: cdktf.stringToHclTerraform(struct!.serviceSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slot_gigabyte_lag_limit: {
      value: cdktf.numberToHclTerraform(struct!.slotGigabyteLagLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection: {
      value: datatransferEndpointSettingsPostgresSourceConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresSourceConnectionList",
    },
    object_transfer_settings: {
      value: datatransferEndpointSettingsPostgresSourceObjectTransferSettingsToHclTerraform(struct!.objectTransferSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresSourceObjectTransferSettingsList",
    },
    password: {
      value: datatransferEndpointSettingsPostgresSourcePasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresSourcePasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._excludeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTables = this._excludeTables;
    }
    if (this._includeTables !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTables = this._includeTables;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._serviceSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceSchema = this._serviceSchema;
    }
    if (this._slotGigabyteLagLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotGigabyteLagLimit = this._slotGigabyteLagLimit;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._objectTransferSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectTransferSettings = this._objectTransferSettings?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._excludeTables = undefined;
      this._includeTables = undefined;
      this._securityGroups = undefined;
      this._serviceSchema = undefined;
      this._slotGigabyteLagLimit = undefined;
      this._user = undefined;
      this._connection.internalValue = undefined;
      this._objectTransferSettings.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._excludeTables = value.excludeTables;
      this._includeTables = value.includeTables;
      this._securityGroups = value.securityGroups;
      this._serviceSchema = value.serviceSchema;
      this._slotGigabyteLagLimit = value.slotGigabyteLagLimit;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._objectTransferSettings.internalValue = value.objectTransferSettings;
      this._password.internalValue = value.password;
    }
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // exclude_tables - computed: true, optional: true, required: false
  private _excludeTables?: string[]; 
  public get excludeTables() {
    return this.getListAttribute('exclude_tables');
  }
  public set excludeTables(value: string[]) {
    this._excludeTables = value;
  }
  public resetExcludeTables() {
    this._excludeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTablesInput() {
    return this._excludeTables;
  }

  // include_tables - computed: true, optional: true, required: false
  private _includeTables?: string[]; 
  public get includeTables() {
    return this.getListAttribute('include_tables');
  }
  public set includeTables(value: string[]) {
    this._includeTables = value;
  }
  public resetIncludeTables() {
    this._includeTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTablesInput() {
    return this._includeTables;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // service_schema - computed: true, optional: true, required: false
  private _serviceSchema?: string; 
  public get serviceSchema() {
    return this.getStringAttribute('service_schema');
  }
  public set serviceSchema(value: string) {
    this._serviceSchema = value;
  }
  public resetServiceSchema() {
    this._serviceSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSchemaInput() {
    return this._serviceSchema;
  }

  // slot_gigabyte_lag_limit - computed: true, optional: true, required: false
  private _slotGigabyteLagLimit?: number; 
  public get slotGigabyteLagLimit() {
    return this.getNumberAttribute('slot_gigabyte_lag_limit');
  }
  public set slotGigabyteLagLimit(value: number) {
    this._slotGigabyteLagLimit = value;
  }
  public resetSlotGigabyteLagLimit() {
    this._slotGigabyteLagLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotGigabyteLagLimitInput() {
    return this._slotGigabyteLagLimit;
  }

  // user - computed: true, optional: true, required: false
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

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsPostgresSourceConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsPostgresSourceConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // object_transfer_settings - computed: false, optional: true, required: false
  private _objectTransferSettings = new DatatransferEndpointSettingsPostgresSourceObjectTransferSettingsOutputReference(this, "object_transfer_settings");
  public get objectTransferSettings() {
    return this._objectTransferSettings;
  }
  public putObjectTransferSettings(value: DatatransferEndpointSettingsPostgresSourceObjectTransferSettings) {
    this._objectTransferSettings.internalValue = value;
  }
  public resetObjectTransferSettings() {
    this._objectTransferSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTransferSettingsInput() {
    return this._objectTransferSettings.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsPostgresSourcePasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsPostgresSourcePassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled {
}

export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledToHclTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#ca_certificate DatatransferEndpoint#ca_certificate}
  */
  readonly caCertificate?: string;
}

export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certificate: cdktf.stringToTerraform(struct!.caCertificate),
  }
}


export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledToHclTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certificate: {
      value: cdktf.stringToHclTerraform(struct!.caCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCertificate = this._caCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCertificate = value.caCertificate;
    }
  }

  // ca_certificate - computed: true, optional: true, required: false
  private _caCertificate?: string; 
  public get caCertificate() {
    return this.getStringAttribute('ca_certificate');
  }
  public set caCertificate(value: string) {
    this._caCertificate = value;
  }
  public resetCaCertificate() {
    this._caCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificateInput() {
    return this._caCertificate;
  }
}
export interface DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode {
  /**
  * disabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#disabled DatatransferEndpoint#disabled}
  */
  readonly disabled?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled;
  /**
  * enabled block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#enabled DatatransferEndpoint#enabled}
  */
  readonly enabled?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled;
}

export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledToTerraform(struct!.disabled),
    enabled: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledToTerraform(struct!.enabled),
  }
}


export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeToHclTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledToHclTerraform(struct!.disabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledList",
    },
    enabled: {
      value: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledToHclTerraform(struct!.enabled),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled?.internalValue;
    }
    if (this._enabled?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disabled.internalValue = undefined;
      this._enabled.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disabled.internalValue = value.disabled;
      this._enabled.internalValue = value.enabled;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled = new DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabledOutputReference(this, "disabled");
  public get disabled() {
    return this._disabled;
  }
  public putDisabled(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeDisabled) {
    this._disabled.internalValue = value;
  }
  public resetDisabled() {
    this._disabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled.internalValue;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled = new DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabledOutputReference(this, "enabled");
  public get enabled() {
    return this._enabled;
  }
  public putEnabled(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeEnabled) {
    this._enabled.internalValue = value;
  }
  public resetEnabled() {
    this._enabled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresTargetConnectionOnPremise {
  /**
  * List of host names of the PostgreSQL server. Exactly one host is expected currently.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#hosts DatatransferEndpoint#hosts}
  */
  readonly hosts?: string[];
  /**
  * Port for the database connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#port DatatransferEndpoint#port}
  */
  readonly port?: number;
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * tls_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tls_mode DatatransferEndpoint#tls_mode}
  */
  readonly tlsMode?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode;
}

export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hosts),
    port: cdktf.numberToTerraform(struct!.port),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tls_mode: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeToTerraform(struct!.tlsMode),
  }
}


export function datatransferEndpointSettingsPostgresTargetConnectionOnPremiseToHclTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseOutputReference | DatatransferEndpointSettingsPostgresTargetConnectionOnPremise): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_mode: {
      value: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeToHclTerraform(struct!.tlsMode),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetConnectionOnPremise | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hosts = this._hosts;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tlsMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsMode = this._tlsMode?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremise | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hosts = undefined;
      this._port = undefined;
      this._subnetId = undefined;
      this._tlsMode.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hosts = value.hosts;
      this._port = value.port;
      this._subnetId = value.subnetId;
      this._tlsMode.internalValue = value.tlsMode;
    }
  }

  // hosts - computed: true, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // port - computed: true, optional: true, required: false
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

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tls_mode - computed: false, optional: true, required: false
  private _tlsMode = new DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsModeOutputReference(this, "tls_mode");
  public get tlsMode() {
    return this._tlsMode;
  }
  public putTlsMode(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseTlsMode) {
    this._tlsMode.internalValue = value;
  }
  public resetTlsMode() {
    this._tlsMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsModeInput() {
    return this._tlsMode.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresTargetConnection {
  /**
  * Identifier of the Managed PostgreSQL cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#mdb_cluster_id DatatransferEndpoint#mdb_cluster_id}
  */
  readonly mdbClusterId?: string;
  /**
  * on_premise block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#on_premise DatatransferEndpoint#on_premise}
  */
  readonly onPremise?: DatatransferEndpointSettingsPostgresTargetConnectionOnPremise;
}

export function datatransferEndpointSettingsPostgresTargetConnectionToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOutputReference | DatatransferEndpointSettingsPostgresTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mdb_cluster_id: cdktf.stringToTerraform(struct!.mdbClusterId),
    on_premise: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseToTerraform(struct!.onPremise),
  }
}


export function datatransferEndpointSettingsPostgresTargetConnectionToHclTerraform(struct?: DatatransferEndpointSettingsPostgresTargetConnectionOutputReference | DatatransferEndpointSettingsPostgresTargetConnection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mdb_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.mdbClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_premise: {
      value: datatransferEndpointSettingsPostgresTargetConnectionOnPremiseToHclTerraform(struct!.onPremise),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresTargetConnectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetConnection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mdbClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mdbClusterId = this._mdbClusterId;
    }
    if (this._onPremise?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onPremise = this._onPremise?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetConnection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mdbClusterId = undefined;
      this._onPremise.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mdbClusterId = value.mdbClusterId;
      this._onPremise.internalValue = value.onPremise;
    }
  }

  // mdb_cluster_id - computed: false, optional: true, required: false
  private _mdbClusterId?: string; 
  public get mdbClusterId() {
    return this.getStringAttribute('mdb_cluster_id');
  }
  public set mdbClusterId(value: string) {
    this._mdbClusterId = value;
  }
  public resetMdbClusterId() {
    this._mdbClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdbClusterIdInput() {
    return this._mdbClusterId;
  }

  // on_premise - computed: false, optional: true, required: false
  private _onPremise = new DatatransferEndpointSettingsPostgresTargetConnectionOnPremiseOutputReference(this, "on_premise");
  public get onPremise() {
    return this._onPremise;
  }
  public putOnPremise(value: DatatransferEndpointSettingsPostgresTargetConnectionOnPremise) {
    this._onPremise.internalValue = value;
  }
  public resetOnPremise() {
    this._onPremise.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onPremiseInput() {
    return this._onPremise.internalValue;
  }
}
export interface DatatransferEndpointSettingsPostgresTargetPassword {
  /**
  * Password for the database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#raw DatatransferEndpoint#raw}
  */
  readonly raw?: string;
}

export function datatransferEndpointSettingsPostgresTargetPasswordToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetPasswordOutputReference | DatatransferEndpointSettingsPostgresTargetPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw: cdktf.stringToTerraform(struct!.raw),
  }
}


export function datatransferEndpointSettingsPostgresTargetPasswordToHclTerraform(struct?: DatatransferEndpointSettingsPostgresTargetPasswordOutputReference | DatatransferEndpointSettingsPostgresTargetPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw: {
      value: cdktf.stringToHclTerraform(struct!.raw),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresTargetPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTargetPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._raw !== undefined) {
      hasAnyValues = true;
      internalValueResult.raw = this._raw;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTargetPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._raw = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._raw = value.raw;
    }
  }

  // raw - computed: true, optional: true, required: false
  private _raw?: string; 
  public get raw() {
    return this.getStringAttribute('raw');
  }
  public set raw(value: string) {
    this._raw = value;
  }
  public resetRaw() {
    this._raw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rawInput() {
    return this._raw;
  }
}
export interface DatatransferEndpointSettingsPostgresTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cleanup_policy DatatransferEndpoint#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Name of the database to transfer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * User for the database access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#user DatatransferEndpoint#user}
  */
  readonly user?: string;
  /**
  * connection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#connection DatatransferEndpoint#connection}
  */
  readonly connection?: DatatransferEndpointSettingsPostgresTargetConnection;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#password DatatransferEndpoint#password}
  */
  readonly password?: DatatransferEndpointSettingsPostgresTargetPassword;
}

export function datatransferEndpointSettingsPostgresTargetToTerraform(struct?: DatatransferEndpointSettingsPostgresTargetOutputReference | DatatransferEndpointSettingsPostgresTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    database: cdktf.stringToTerraform(struct!.database),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    user: cdktf.stringToTerraform(struct!.user),
    connection: datatransferEndpointSettingsPostgresTargetConnectionToTerraform(struct!.connection),
    password: datatransferEndpointSettingsPostgresTargetPasswordToTerraform(struct!.password),
  }
}


export function datatransferEndpointSettingsPostgresTargetToHclTerraform(struct?: DatatransferEndpointSettingsPostgresTargetOutputReference | DatatransferEndpointSettingsPostgresTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection: {
      value: datatransferEndpointSettingsPostgresTargetConnectionToHclTerraform(struct!.connection),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresTargetConnectionList",
    },
    password: {
      value: datatransferEndpointSettingsPostgresTargetPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsPostgresTargetPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsPostgresTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsPostgresTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._connection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection?.internalValue;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsPostgresTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupPolicy = undefined;
      this._database = undefined;
      this._securityGroups = undefined;
      this._user = undefined;
      this._connection.internalValue = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupPolicy = value.cleanupPolicy;
      this._database = value.database;
      this._securityGroups = value.securityGroups;
      this._user = value.user;
      this._connection.internalValue = value.connection;
      this._password.internalValue = value.password;
    }
  }

  // cleanup_policy - computed: true, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // user - computed: true, optional: true, required: false
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

  // connection - computed: false, optional: true, required: false
  private _connection = new DatatransferEndpointSettingsPostgresTargetConnectionOutputReference(this, "connection");
  public get connection() {
    return this._connection;
  }
  public putConnection(value: DatatransferEndpointSettingsPostgresTargetConnection) {
    this._connection.internalValue = value;
  }
  public resetConnection() {
    this._connection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection.internalValue;
  }

  // password - computed: false, optional: true, required: false
  private _password = new DatatransferEndpointSettingsPostgresTargetPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: DatatransferEndpointSettingsPostgresTargetPassword) {
    this._password.internalValue = value;
  }
  public resetPassword() {
    this._password.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface DatatransferEndpointSettingsYdbSource {
  /**
  * Custom name for changefeed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#changefeed_custom_name DatatransferEndpoint#changefeed_custom_name}
  */
  readonly changefeedCustomName?: string;
  /**
  * Database path in YDB where tables are stored. Example: `/ru/transfer_manager/prod/data-transfer-yt`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Instance of YDB. Example: `my-cute-ydb.yandex.cloud:2135`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#instance DatatransferEndpoint#instance}
  */
  readonly instance?: string;
  /**
  * A list of paths which should be uploaded. When not specified, all available tables are uploaded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#paths DatatransferEndpoint#paths}
  */
  readonly paths?: string[];
  /**
  * Authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#sa_key_content DatatransferEndpoint#sa_key_content}
  */
  readonly saKeyContent?: string;
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Service account ID for interaction with database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#service_account_id DatatransferEndpoint#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
}

export function datatransferEndpointSettingsYdbSourceToTerraform(struct?: DatatransferEndpointSettingsYdbSourceOutputReference | DatatransferEndpointSettingsYdbSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    changefeed_custom_name: cdktf.stringToTerraform(struct!.changefeedCustomName),
    database: cdktf.stringToTerraform(struct!.database),
    instance: cdktf.stringToTerraform(struct!.instance),
    paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.paths),
    sa_key_content: cdktf.stringToTerraform(struct!.saKeyContent),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function datatransferEndpointSettingsYdbSourceToHclTerraform(struct?: DatatransferEndpointSettingsYdbSourceOutputReference | DatatransferEndpointSettingsYdbSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    changefeed_custom_name: {
      value: cdktf.stringToHclTerraform(struct!.changefeedCustomName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.paths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sa_key_content: {
      value: cdktf.stringToHclTerraform(struct!.saKeyContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdbSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdbSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changefeedCustomName !== undefined) {
      hasAnyValues = true;
      internalValueResult.changefeedCustomName = this._changefeedCustomName;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._paths !== undefined) {
      hasAnyValues = true;
      internalValueResult.paths = this._paths;
    }
    if (this._saKeyContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.saKeyContent = this._saKeyContent;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdbSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changefeedCustomName = undefined;
      this._database = undefined;
      this._instance = undefined;
      this._paths = undefined;
      this._saKeyContent = undefined;
      this._securityGroups = undefined;
      this._serviceAccountId = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changefeedCustomName = value.changefeedCustomName;
      this._database = value.database;
      this._instance = value.instance;
      this._paths = value.paths;
      this._saKeyContent = value.saKeyContent;
      this._securityGroups = value.securityGroups;
      this._serviceAccountId = value.serviceAccountId;
      this._subnetId = value.subnetId;
    }
  }

  // changefeed_custom_name - computed: true, optional: true, required: false
  private _changefeedCustomName?: string; 
  public get changefeedCustomName() {
    return this.getStringAttribute('changefeed_custom_name');
  }
  public set changefeedCustomName(value: string) {
    this._changefeedCustomName = value;
  }
  public resetChangefeedCustomName() {
    this._changefeedCustomName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changefeedCustomNameInput() {
    return this._changefeedCustomName;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // instance - computed: true, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // paths - computed: true, optional: true, required: false
  private _paths?: string[]; 
  public get paths() {
    return this.getListAttribute('paths');
  }
  public set paths(value: string[]) {
    this._paths = value;
  }
  public resetPaths() {
    this._paths = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathsInput() {
    return this._paths;
  }

  // sa_key_content - computed: true, optional: true, required: false
  private _saKeyContent?: string; 
  public get saKeyContent() {
    return this.getStringAttribute('sa_key_content');
  }
  public set saKeyContent(value: string) {
    this._saKeyContent = value;
  }
  public resetSaKeyContent() {
    this._saKeyContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saKeyContentInput() {
    return this._saKeyContent;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface DatatransferEndpointSettingsYdbTarget {
  /**
  * How to clean collections when activating the transfer. One of `YDB_CLEANUP_POLICY_DISABLED` or `YDB_CLEANUP_POLICY_DROP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cleanup_policy DatatransferEndpoint#cleanup_policy}
  */
  readonly cleanupPolicy?: string;
  /**
  * Database path in YDB where tables are stored. Example: `/ru/transfer_manager/prod/data-transfer-yt`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#database DatatransferEndpoint#database}
  */
  readonly database?: string;
  /**
  * Compression that will be used for default columns family on YDB table creation One of `YDB_DEFAULT_COMPRESSION_UNSPECIFIED`, `YDB_DEFAULT_COMPRESSION_DISABLED`, `YDB_DEFAULT_COMPRESSION_LZ4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#default_compression DatatransferEndpoint#default_compression}
  */
  readonly defaultCompression?: string;
  /**
  * Instance of YDB. Example: `my-cute-ydb.yandex.cloud:2135`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#instance DatatransferEndpoint#instance}
  */
  readonly instance?: string;
  /**
  * Whether a column-oriented (i.e. OLAP) tables should be created. Default is `false` (create row-oriented OLTP tables).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#is_table_column_oriented DatatransferEndpoint#is_table_column_oriented}
  */
  readonly isTableColumnOriented?: boolean | cdktf.IResolvable;
  /**
  * A path where resulting tables are stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#path DatatransferEndpoint#path}
  */
  readonly path?: string;
  /**
  * Authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#sa_key_content DatatransferEndpoint#sa_key_content}
  */
  readonly saKeyContent?: string;
  /**
  * List of security groups that the transfer associated with this endpoint should use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#security_groups DatatransferEndpoint#security_groups}
  */
  readonly securityGroups?: string[];
  /**
  * Service account ID for interaction with database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#service_account_id DatatransferEndpoint#service_account_id}
  */
  readonly serviceAccountId?: string;
  /**
  * Identifier of the Yandex Cloud VPC subnetwork to user for accessing the database. If omitted, the server has to be accessible via Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#subnet_id DatatransferEndpoint#subnet_id}
  */
  readonly subnetId?: string;
}

export function datatransferEndpointSettingsYdbTargetToTerraform(struct?: DatatransferEndpointSettingsYdbTargetOutputReference | DatatransferEndpointSettingsYdbTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleanup_policy: cdktf.stringToTerraform(struct!.cleanupPolicy),
    database: cdktf.stringToTerraform(struct!.database),
    default_compression: cdktf.stringToTerraform(struct!.defaultCompression),
    instance: cdktf.stringToTerraform(struct!.instance),
    is_table_column_oriented: cdktf.booleanToTerraform(struct!.isTableColumnOriented),
    path: cdktf.stringToTerraform(struct!.path),
    sa_key_content: cdktf.stringToTerraform(struct!.saKeyContent),
    security_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroups),
    service_account_id: cdktf.stringToTerraform(struct!.serviceAccountId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function datatransferEndpointSettingsYdbTargetToHclTerraform(struct?: DatatransferEndpointSettingsYdbTargetOutputReference | DatatransferEndpointSettingsYdbTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleanup_policy: {
      value: cdktf.stringToHclTerraform(struct!.cleanupPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_compression: {
      value: cdktf.stringToHclTerraform(struct!.defaultCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_table_column_oriented: {
      value: cdktf.booleanToHclTerraform(struct!.isTableColumnOriented),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_key_content: {
      value: cdktf.stringToHclTerraform(struct!.saKeyContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdbTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdbTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleanupPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleanupPolicy = this._cleanupPolicy;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._defaultCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCompression = this._defaultCompression;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._isTableColumnOriented !== undefined) {
      hasAnyValues = true;
      internalValueResult.isTableColumnOriented = this._isTableColumnOriented;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._saKeyContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.saKeyContent = this._saKeyContent;
    }
    if (this._securityGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups;
    }
    if (this._serviceAccountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountId = this._serviceAccountId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdbTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleanupPolicy = undefined;
      this._database = undefined;
      this._defaultCompression = undefined;
      this._instance = undefined;
      this._isTableColumnOriented = undefined;
      this._path = undefined;
      this._saKeyContent = undefined;
      this._securityGroups = undefined;
      this._serviceAccountId = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleanupPolicy = value.cleanupPolicy;
      this._database = value.database;
      this._defaultCompression = value.defaultCompression;
      this._instance = value.instance;
      this._isTableColumnOriented = value.isTableColumnOriented;
      this._path = value.path;
      this._saKeyContent = value.saKeyContent;
      this._securityGroups = value.securityGroups;
      this._serviceAccountId = value.serviceAccountId;
      this._subnetId = value.subnetId;
    }
  }

  // cleanup_policy - computed: true, optional: true, required: false
  private _cleanupPolicy?: string; 
  public get cleanupPolicy() {
    return this.getStringAttribute('cleanup_policy');
  }
  public set cleanupPolicy(value: string) {
    this._cleanupPolicy = value;
  }
  public resetCleanupPolicy() {
    this._cleanupPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanupPolicyInput() {
    return this._cleanupPolicy;
  }

  // database - computed: true, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // default_compression - computed: true, optional: true, required: false
  private _defaultCompression?: string; 
  public get defaultCompression() {
    return this.getStringAttribute('default_compression');
  }
  public set defaultCompression(value: string) {
    this._defaultCompression = value;
  }
  public resetDefaultCompression() {
    this._defaultCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCompressionInput() {
    return this._defaultCompression;
  }

  // instance - computed: true, optional: true, required: false
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  public resetInstance() {
    this._instance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // is_table_column_oriented - computed: true, optional: true, required: false
  private _isTableColumnOriented?: boolean | cdktf.IResolvable; 
  public get isTableColumnOriented() {
    return this.getBooleanAttribute('is_table_column_oriented');
  }
  public set isTableColumnOriented(value: boolean | cdktf.IResolvable) {
    this._isTableColumnOriented = value;
  }
  public resetIsTableColumnOriented() {
    this._isTableColumnOriented = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTableColumnOrientedInput() {
    return this._isTableColumnOriented;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // sa_key_content - computed: true, optional: true, required: false
  private _saKeyContent?: string; 
  public get saKeyContent() {
    return this.getStringAttribute('sa_key_content');
  }
  public set saKeyContent(value: string) {
    this._saKeyContent = value;
  }
  public resetSaKeyContent() {
    this._saKeyContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saKeyContentInput() {
    return this._saKeyContent;
  }

  // security_groups - computed: true, optional: true, required: false
  private _securityGroups?: string[]; 
  public get securityGroups() {
    return this.getListAttribute('security_groups');
  }
  public set securityGroups(value: string[]) {
    this._securityGroups = value;
  }
  public resetSecurityGroups() {
    this._securityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups;
  }

  // service_account_id - computed: true, optional: true, required: false
  private _serviceAccountId?: string; 
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }
  public set serviceAccountId(value: string) {
    this._serviceAccountId = value;
  }
  public resetServiceAccountId() {
    this._serviceAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountIdInput() {
    return this._serviceAccountId;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }
}
export interface DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1Parser {
}

export function datatransferEndpointSettingsYdsSourceParserAuditTrailsV1ParserToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1ParserOutputReference | DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1Parser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsYdsSourceParserAuditTrailsV1ParserToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1ParserOutputReference | DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1Parser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1ParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1Parser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1Parser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsYdsSourceParserCloudLoggingParser {
}

export function datatransferEndpointSettingsYdsSourceParserCloudLoggingParserToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserCloudLoggingParserOutputReference | DatatransferEndpointSettingsYdsSourceParserCloudLoggingParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function datatransferEndpointSettingsYdsSourceParserCloudLoggingParserToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserCloudLoggingParserOutputReference | DatatransferEndpointSettingsYdsSourceParserCloudLoggingParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DatatransferEndpointSettingsYdsSourceParserCloudLoggingParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParserCloudLoggingParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParserCloudLoggingParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFields {
  /**
  * Mark field as Primary Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#key DatatransferEndpoint#key}
  */
  readonly key?: boolean | cdktf.IResolvable;
  /**
  * Field name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#name DatatransferEndpoint#name}
  */
  readonly name?: string;
  /**
  * Path to the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#path DatatransferEndpoint#path}
  */
  readonly path?: string;
  /**
  * Mark field as required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#required DatatransferEndpoint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Field type, one of: `INT64`, `INT32`, `INT16`, `INT8`, `UINT64`, `UINT32`, `UINT16`, `UINT8`, `DOUBLE`, `BOOLEAN`, `STRING`, `UTF8`, `ANY`, `DATETIME`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#type DatatransferEndpoint#type}
  */
  readonly type?: string;
}

export function datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFieldsToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.booleanToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFieldsToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.booleanToHclTerraform(struct!.key),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._path = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._path = value.path;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: boolean | cdktf.IResolvable; 
  public get key() {
    return this.getBooleanAttribute('key');
  }
  public set key(value: boolean | cdktf.IResolvable) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: true, optional: true, required: false
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
}

export class DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFieldsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFields[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFieldsOutputReference {
    return new DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFields {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#fields DatatransferEndpoint#fields}
  */
  readonly fields?: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFields[] | cdktf.IResolvable;
}

export function datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsOutputReference | DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFieldsToTerraform, true)(struct!.fields),
  }
}


export function datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsOutputReference | DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchema {
  /**
  * Description of the data schema as JSON specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#json_fields DatatransferEndpoint#json_fields}
  */
  readonly jsonFields?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#fields DatatransferEndpoint#fields}
  */
  readonly fields?: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFields;
}

export function datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaOutputReference | DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_fields: cdktf.stringToTerraform(struct!.jsonFields),
    fields: datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsToTerraform(struct!.fields),
  }
}


export function datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaOutputReference | DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_fields: {
      value: cdktf.stringToHclTerraform(struct!.jsonFields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFields = this._jsonFields;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonFields = undefined;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonFields = value.jsonFields;
      this._fields.internalValue = value.fields;
    }
  }

  // json_fields - computed: false, optional: true, required: false
  private _jsonFields?: string; 
  public get jsonFields() {
    return this.getStringAttribute('json_fields');
  }
  public set jsonFields(value: string) {
    this._jsonFields = value;
  }
  public resetJsonFields() {
    this._jsonFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFieldsInput() {
    return this._jsonFields;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaFields) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface DatatransferEndpointSettingsYdsSourceParserJsonParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#add_rest_column DatatransferEndpoint#add_rest_column}
  */
  readonly addRestColumn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#null_keys_allowed DatatransferEndpoint#null_keys_allowed}
  */
  readonly nullKeysAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#unescape_string_values DatatransferEndpoint#unescape_string_values}
  */
  readonly unescapeStringValues?: boolean | cdktf.IResolvable;
  /**
  * data_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#data_schema DatatransferEndpoint#data_schema}
  */
  readonly dataSchema?: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchema;
}

export function datatransferEndpointSettingsYdsSourceParserJsonParserToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserJsonParserOutputReference | DatatransferEndpointSettingsYdsSourceParserJsonParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_rest_column: cdktf.booleanToTerraform(struct!.addRestColumn),
    null_keys_allowed: cdktf.booleanToTerraform(struct!.nullKeysAllowed),
    unescape_string_values: cdktf.booleanToTerraform(struct!.unescapeStringValues),
    data_schema: datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaToTerraform(struct!.dataSchema),
  }
}


export function datatransferEndpointSettingsYdsSourceParserJsonParserToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserJsonParserOutputReference | DatatransferEndpointSettingsYdsSourceParserJsonParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_rest_column: {
      value: cdktf.booleanToHclTerraform(struct!.addRestColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null_keys_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.nullKeysAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unescape_string_values: {
      value: cdktf.booleanToHclTerraform(struct!.unescapeStringValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_schema: {
      value: datatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaToHclTerraform(struct!.dataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsSourceParserJsonParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParserJsonParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addRestColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addRestColumn = this._addRestColumn;
    }
    if (this._nullKeysAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullKeysAllowed = this._nullKeysAllowed;
    }
    if (this._unescapeStringValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.unescapeStringValues = this._unescapeStringValues;
    }
    if (this._dataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSchema = this._dataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParserJsonParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addRestColumn = undefined;
      this._nullKeysAllowed = undefined;
      this._unescapeStringValues = undefined;
      this._dataSchema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addRestColumn = value.addRestColumn;
      this._nullKeysAllowed = value.nullKeysAllowed;
      this._unescapeStringValues = value.unescapeStringValues;
      this._dataSchema.internalValue = value.dataSchema;
    }
  }

  // add_rest_column - computed: true, optional: true, required: false
  private _addRestColumn?: boolean | cdktf.IResolvable; 
  public get addRestColumn() {
    return this.getBooleanAttribute('add_rest_column');
  }
  public set addRestColumn(value: boolean | cdktf.IResolvable) {
    this._addRestColumn = value;
  }
  public resetAddRestColumn() {
    this._addRestColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRestColumnInput() {
    return this._addRestColumn;
  }

  // null_keys_allowed - computed: true, optional: true, required: false
  private _nullKeysAllowed?: boolean | cdktf.IResolvable; 
  public get nullKeysAllowed() {
    return this.getBooleanAttribute('null_keys_allowed');
  }
  public set nullKeysAllowed(value: boolean | cdktf.IResolvable) {
    this._nullKeysAllowed = value;
  }
  public resetNullKeysAllowed() {
    this._nullKeysAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullKeysAllowedInput() {
    return this._nullKeysAllowed;
  }

  // unescape_string_values - computed: true, optional: true, required: false
  private _unescapeStringValues?: boolean | cdktf.IResolvable; 
  public get unescapeStringValues() {
    return this.getBooleanAttribute('unescape_string_values');
  }
  public set unescapeStringValues(value: boolean | cdktf.IResolvable) {
    this._unescapeStringValues = value;
  }
  public resetUnescapeStringValues() {
    this._unescapeStringValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unescapeStringValuesInput() {
    return this._unescapeStringValues;
  }

  // data_schema - computed: false, optional: true, required: false
  private _dataSchema = new DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchemaOutputReference(this, "data_schema");
  public get dataSchema() {
    return this._dataSchema;
  }
  public putDataSchema(value: DatatransferEndpointSettingsYdsSourceParserJsonParserDataSchema) {
    this._dataSchema.internalValue = value;
  }
  public resetDataSchema() {
    this._dataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSchemaInput() {
    return this._dataSchema.internalValue;
  }
}
export interface DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#key DatatransferEndpoint#key}
  */
  readonly key?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#name DatatransferEndpoint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#path DatatransferEndpoint#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#required DatatransferEndpoint#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#type DatatransferEndpoint#type}
  */
  readonly type?: string;
}

export function datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFieldsToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.booleanToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFieldsToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.booleanToHclTerraform(struct!.key),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._path = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._path = value.path;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: boolean | cdktf.IResolvable; 
  public get key() {
    return this.getBooleanAttribute('key');
  }
  public set key(value: boolean | cdktf.IResolvable) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: true, required: false
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

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: true, optional: true, required: false
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
}

export class DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFieldsList extends cdktf.ComplexList {
  public internalValue? : DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFields[] | cdktf.IResolvable

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
  public get(index: number): DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFieldsOutputReference {
    return new DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFields {
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#fields DatatransferEndpoint#fields}
  */
  readonly fields?: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFields[] | cdktf.IResolvable;
}

export function datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsOutputReference | DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fields: cdktf.listMapper(datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFieldsToTerraform, true)(struct!.fields),
  }
}


export function datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsOutputReference | DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFields): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fields: {
      value: cdktf.listMapperHcl(datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFieldsToHclTerraform, true)(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFields | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFields | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fields.internalValue = value.fields;
    }
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFieldsList(this, "fields", false);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#json_fields DatatransferEndpoint#json_fields}
  */
  readonly jsonFields?: string;
  /**
  * fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#fields DatatransferEndpoint#fields}
  */
  readonly fields?: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFields;
}

export function datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaOutputReference | DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_fields: cdktf.stringToTerraform(struct!.jsonFields),
    fields: datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsToTerraform(struct!.fields),
  }
}


export function datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaOutputReference | DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchema): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_fields: {
      value: cdktf.stringToHclTerraform(struct!.jsonFields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields: {
      value: datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsToHclTerraform(struct!.fields),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFields = this._jsonFields;
    }
    if (this._fields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fields = this._fields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jsonFields = undefined;
      this._fields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jsonFields = value.jsonFields;
      this._fields.internalValue = value.fields;
    }
  }

  // json_fields - computed: false, optional: true, required: false
  private _jsonFields?: string; 
  public get jsonFields() {
    return this.getStringAttribute('json_fields');
  }
  public set jsonFields(value: string) {
    this._jsonFields = value;
  }
  public resetJsonFields() {
    this._jsonFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFieldsInput() {
    return this._jsonFields;
  }

  // fields - computed: false, optional: true, required: false
  private _fields = new DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFieldsOutputReference(this, "fields");
  public get fields() {
    return this._fields;
  }
  public putFields(value: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaFields) {
    this._fields.internalValue = value;
  }
  public resetFields() {
    this._fields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
  }
}
export interface DatatransferEndpointSettingsYdsSourceParserTskvParser {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#add_rest_column DatatransferEndpoint#add_rest_column}
  */
  readonly addRestColumn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#null_keys_allowed DatatransferEndpoint#null_keys_allowed}
  */
  readonly nullKeysAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#unescape_string_values DatatransferEndpoint#unescape_string_values}
  */
  readonly unescapeStringValues?: boolean | cdktf.IResolvable;
  /**
  * data_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#data_schema DatatransferEndpoint#data_schema}
  */
  readonly dataSchema?: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchema;
}

export function datatransferEndpointSettingsYdsSourceParserTskvParserToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserTskvParserOutputReference | DatatransferEndpointSettingsYdsSourceParserTskvParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_rest_column: cdktf.booleanToTerraform(struct!.addRestColumn),
    null_keys_allowed: cdktf.booleanToTerraform(struct!.nullKeysAllowed),
    unescape_string_values: cdktf.booleanToTerraform(struct!.unescapeStringValues),
    data_schema: datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaToTerraform(struct!.dataSchema),
  }
}


export function datatransferEndpointSettingsYdsSourceParserTskvParserToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserTskvParserOutputReference | DatatransferEndpointSettingsYdsSourceParserTskvParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_rest_column: {
      value: cdktf.booleanToHclTerraform(struct!.addRestColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    null_keys_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.nullKeysAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unescape_string_values: {
      value: cdktf.booleanToHclTerraform(struct!.unescapeStringValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_schema: {
      value: datatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaToHclTerraform(struct!.dataSchema),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsSourceParserTskvParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParserTskvParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addRestColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.addRestColumn = this._addRestColumn;
    }
    if (this._nullKeysAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullKeysAllowed = this._nullKeysAllowed;
    }
    if (this._unescapeStringValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.unescapeStringValues = this._unescapeStringValues;
    }
    if (this._dataSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSchema = this._dataSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParserTskvParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addRestColumn = undefined;
      this._nullKeysAllowed = undefined;
      this._unescapeStringValues = undefined;
      this._dataSchema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addRestColumn = value.addRestColumn;
      this._nullKeysAllowed = value.nullKeysAllowed;
      this._unescapeStringValues = value.unescapeStringValues;
      this._dataSchema.internalValue = value.dataSchema;
    }
  }

  // add_rest_column - computed: true, optional: true, required: false
  private _addRestColumn?: boolean | cdktf.IResolvable; 
  public get addRestColumn() {
    return this.getBooleanAttribute('add_rest_column');
  }
  public set addRestColumn(value: boolean | cdktf.IResolvable) {
    this._addRestColumn = value;
  }
  public resetAddRestColumn() {
    this._addRestColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addRestColumnInput() {
    return this._addRestColumn;
  }

  // null_keys_allowed - computed: true, optional: true, required: false
  private _nullKeysAllowed?: boolean | cdktf.IResolvable; 
  public get nullKeysAllowed() {
    return this.getBooleanAttribute('null_keys_allowed');
  }
  public set nullKeysAllowed(value: boolean | cdktf.IResolvable) {
    this._nullKeysAllowed = value;
  }
  public resetNullKeysAllowed() {
    this._nullKeysAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullKeysAllowedInput() {
    return this._nullKeysAllowed;
  }

  // unescape_string_values - computed: true, optional: true, required: false
  private _unescapeStringValues?: boolean | cdktf.IResolvable; 
  public get unescapeStringValues() {
    return this.getBooleanAttribute('unescape_string_values');
  }
  public set unescapeStringValues(value: boolean | cdktf.IResolvable) {
    this._unescapeStringValues = value;
  }
  public resetUnescapeStringValues() {
    this._unescapeStringValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unescapeStringValuesInput() {
    return this._unescapeStringValues;
  }

  // data_schema - computed: false, optional: true, required: false
  private _dataSchema = new DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchemaOutputReference(this, "data_schema");
  public get dataSchema() {
    return this._dataSchema;
  }
  public putDataSchema(value: DatatransferEndpointSettingsYdsSourceParserTskvParserDataSchema) {
    this._dataSchema.internalValue = value;
  }
  public resetDataSchema() {
    this._dataSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSchemaInput() {
    return this._dataSchema.internalValue;
  }
}
export interface DatatransferEndpointSettingsYdsSourceParser {
  /**
  * audit_trails_v1_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#audit_trails_v1_parser DatatransferEndpoint#audit_trails_v1_parser}
  */
  readonly auditTrailsV1Parser?: DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1Parser;
  /**
  * cloud_logging_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#cloud_logging_parser DatatransferEndpoint#cloud_logging_parser}
  */
  readonly cloudLoggingParser?: DatatransferEndpointSettingsYdsSourceParserCloudLoggingParser;
  /**
  * json_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#json_parser DatatransferEndpoint#json_parser}
  */
  readonly jsonParser?: DatatransferEndpointSettingsYdsSourceParserJsonParser;
  /**
  * tskv_parser block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/resources/datatransfer_endpoint#tskv_parser DatatransferEndpoint#tskv_parser}
  */
  readonly tskvParser?: DatatransferEndpointSettingsYdsSourceParserTskvParser;
}

export function datatransferEndpointSettingsYdsSourceParserToTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserOutputReference | DatatransferEndpointSettingsYdsSourceParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_trails_v1_parser: datatransferEndpointSettingsYdsSourceParserAuditTrailsV1ParserToTerraform(struct!.auditTrailsV1Parser),
    cloud_logging_parser: datatransferEndpointSettingsYdsSourceParserCloudLoggingParserToTerraform(struct!.cloudLoggingParser),
    json_parser: datatransferEndpointSettingsYdsSourceParserJsonParserToTerraform(struct!.jsonParser),
    tskv_parser: datatransferEndpointSettingsYdsSourceParserTskvParserToTerraform(struct!.tskvParser),
  }
}


export function datatransferEndpointSettingsYdsSourceParserToHclTerraform(struct?: DatatransferEndpointSettingsYdsSourceParserOutputReference | DatatransferEndpointSettingsYdsSourceParser): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_trails_v1_parser: {
      value: datatransferEndpointSettingsYdsSourceParserAuditTrailsV1ParserToHclTerraform(struct!.auditTrailsV1Parser),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1ParserList",
    },
    cloud_logging_parser: {
      value: datatransferEndpointSettingsYdsSourceParserCloudLoggingParserToHclTerraform(struct!.cloudLoggingParser),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserCloudLoggingParserList",
    },
    json_parser: {
      value: datatransferEndpointSettingsYdsSourceParserJsonParserToHclTerraform(struct!.jsonParser),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserJsonParserList",
    },
    tskv_parser: {
      value: datatransferEndpointSettingsYdsSourceParserTskvParserToHclTerraform(struct!.tskvParser),
      isBlock: true,
      type: "list",
      storageClassType: "DatatransferEndpointSettingsYdsSourceParserTskvParserList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatatransferEndpointSettingsYdsSourceParserOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatatransferEndpointSettingsYdsSourceParser | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditTrailsV1Parser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditTrailsV1Parser = this._auditTrailsV1Parser?.internalValue;
    }
    if (this._cloudLoggingParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLoggingParser = this._cloudLoggingParser?.internalValue;
    }
    if (this._jsonParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonParser = this._jsonParser?.internalValue;
    }
    if (this._tskvParser?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tskvParser = this._tskvParser?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatatransferEndpointSettingsYdsSourceParser | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._auditTrailsV1Parser.internalValue = undefined;
      this._cloudLoggingParser.internalValue = undefined;
      this._jsonParser.internalValue = undefined;
      this._tskvParser.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._auditTrailsV1Parser.internalValue = value.auditTrailsV1Parser;
      this._cloudLoggingParser.internalValue = value.cloudLoggingParser;
      this._jsonParser.internalValue = value.jsonParser;
      this._tskvParser.internalValue = value.tskvParser;
    }
  }

  // audit_trails_v1_parser - computed: false, optional: true, required: false
  private _auditTrailsV1Parser = new DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1ParserOutputReference(this, "audit_trails_v1_parser");
  public get auditTrailsV1Parser() {
    return this._auditTrailsV1Parser;
  }
  public putAuditTrailsV1Parser(value: DatatransferEndpointSettingsYdsSourceParserAuditTrailsV1Parser) {
    this._auditTrailsV1Parser.internalValue = value;
  }
  public resetAuditTrailsV1Parser() {
    this._auditTrailsV1Parser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditTrailsV1ParserInput() {
    return this._auditTrailsV1Parser.internalValue;
  }

  // cloud_logging_parser - computed: false, optional: true, required: false
  private _cloudLoggingParser = new DatatransferEndpointSettingsYdsSourceParserCloudLoggingParserOutputReference(this, "cloud_logging_parser");
  public get cloudLoggingParser() {
    return this._cloudLoggingParser;
  }
  public putCloudLoggingParser(value: DatatransferEndpointSettingsYdsSourceParserCloudLoggingParser) {
    this._cloudLoggingParser.internalValue = value;
  }
  public resetCloudLoggingParser() {
    this._cloudLoggingParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLoggingParserInput() {
    return this._cloudLoggingParser.internalValue;
  }

  // json_parser - computed: false, optional: true, required: false
  private _jsonParser = new DatatransferEndpointSettingsYdsSourceParserJsonParserOutputReference(this, "json_parser");
  public get jsonParser() {
    return this._jsonParser;
  }
  public putJsonParser(value: DatatransferEndpointSettingsYdsSourceParserJsonParser) {
    this._jsonParser.internalValue = value;
  }
  public resetJsonParser() {
    this._jsonParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonParserInput() {
    return this._jsonParser.internalValue;
  }

  // tskv_parser - computed: false, optional: true, required: false
  private _tskvParser = new DatatransferEndpointSettingsYdsSourceParserTskvParserOutputReference(this, "tskv_parser");
  public get tskvParser() {
    return this._tskvParser;
  }
  public putTskvParser(value: DatatransferEndpointSettingsYdsSourceParserTskvParser) {
    this._tskvParser.internalValue = value;
  }
  public resetTskvParser() {
    this._tskvParser.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tskvParserInput() {
    return this._tskvParser.internalValue;
  }
}
