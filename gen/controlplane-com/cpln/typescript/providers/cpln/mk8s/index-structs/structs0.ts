import * as cdktf from 'cdktf';
export interface Mk8SStatusAddOnsAwsEcr {
}

export function mk8SStatusAddOnsAwsEcrToTerraform(struct?: Mk8SStatusAddOnsAwsEcr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusAddOnsAwsEcrToHclTerraform(struct?: Mk8SStatusAddOnsAwsEcr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusAddOnsAwsEcrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatusAddOnsAwsEcr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatusAddOnsAwsEcr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trust_policy - computed: true, optional: false, required: false
  public get trustPolicy() {
    return this.getStringAttribute('trust_policy');
  }
}

export class Mk8SStatusAddOnsAwsEcrList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusAddOnsAwsEcrOutputReference {
    return new Mk8SStatusAddOnsAwsEcrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SStatusAddOnsAwsEfs {
}

export function mk8SStatusAddOnsAwsEfsToTerraform(struct?: Mk8SStatusAddOnsAwsEfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusAddOnsAwsEfsToHclTerraform(struct?: Mk8SStatusAddOnsAwsEfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusAddOnsAwsEfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatusAddOnsAwsEfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatusAddOnsAwsEfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trust_policy - computed: true, optional: false, required: false
  public get trustPolicy() {
    return this.getStringAttribute('trust_policy');
  }
}

export class Mk8SStatusAddOnsAwsEfsList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusAddOnsAwsEfsOutputReference {
    return new Mk8SStatusAddOnsAwsEfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SStatusAddOnsAwsElb {
}

export function mk8SStatusAddOnsAwsElbToTerraform(struct?: Mk8SStatusAddOnsAwsElb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusAddOnsAwsElbToHclTerraform(struct?: Mk8SStatusAddOnsAwsElb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusAddOnsAwsElbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatusAddOnsAwsElb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatusAddOnsAwsElb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // trust_policy - computed: true, optional: false, required: false
  public get trustPolicy() {
    return this.getStringAttribute('trust_policy');
  }
}

export class Mk8SStatusAddOnsAwsElbList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusAddOnsAwsElbOutputReference {
    return new Mk8SStatusAddOnsAwsElbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfig {
}

export function mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfigToTerraform(struct?: Mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfigToHclTerraform(struct?: Mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // audience - computed: true, optional: false, required: false
  public get audience() {
    return this.getStringAttribute('audience');
  }

  // provider_url - computed: true, optional: false, required: false
  public get providerUrl() {
    return this.getStringAttribute('provider_url');
  }
}

export class Mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfigList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfigOutputReference {
    return new Mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SStatusAddOnsAwsWorkloadIdentity {
}

export function mk8SStatusAddOnsAwsWorkloadIdentityToTerraform(struct?: Mk8SStatusAddOnsAwsWorkloadIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusAddOnsAwsWorkloadIdentityToHclTerraform(struct?: Mk8SStatusAddOnsAwsWorkloadIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusAddOnsAwsWorkloadIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatusAddOnsAwsWorkloadIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatusAddOnsAwsWorkloadIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // oidc_provider_config - computed: true, optional: false, required: false
  private _oidcProviderConfig = new Mk8SStatusAddOnsAwsWorkloadIdentityOidcProviderConfigList(this, "oidc_provider_config", false);
  public get oidcProviderConfig() {
    return this._oidcProviderConfig;
  }

  // trust_policy - computed: true, optional: false, required: false
  public get trustPolicy() {
    return this.getStringAttribute('trust_policy');
  }
}

export class Mk8SStatusAddOnsAwsWorkloadIdentityList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusAddOnsAwsWorkloadIdentityOutputReference {
    return new Mk8SStatusAddOnsAwsWorkloadIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SStatusAddOnsDashboard {
}

export function mk8SStatusAddOnsDashboardToTerraform(struct?: Mk8SStatusAddOnsDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusAddOnsDashboardToHclTerraform(struct?: Mk8SStatusAddOnsDashboard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusAddOnsDashboardOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatusAddOnsDashboard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatusAddOnsDashboard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class Mk8SStatusAddOnsDashboardList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusAddOnsDashboardOutputReference {
    return new Mk8SStatusAddOnsDashboardOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SStatusAddOnsHeadlamp {
}

export function mk8SStatusAddOnsHeadlampToTerraform(struct?: Mk8SStatusAddOnsHeadlamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusAddOnsHeadlampToHclTerraform(struct?: Mk8SStatusAddOnsHeadlamp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusAddOnsHeadlampOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatusAddOnsHeadlamp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatusAddOnsHeadlamp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class Mk8SStatusAddOnsHeadlampList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusAddOnsHeadlampOutputReference {
    return new Mk8SStatusAddOnsHeadlampOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SStatusAddOnsLogs {
}

export function mk8SStatusAddOnsLogsToTerraform(struct?: Mk8SStatusAddOnsLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusAddOnsLogsToHclTerraform(struct?: Mk8SStatusAddOnsLogs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusAddOnsLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatusAddOnsLogs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatusAddOnsLogs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // loki_address - computed: true, optional: false, required: false
  public get lokiAddress() {
    return this.getStringAttribute('loki_address');
  }
}

export class Mk8SStatusAddOnsLogsList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusAddOnsLogsOutputReference {
    return new Mk8SStatusAddOnsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SStatusAddOnsMetrics {
}

export function mk8SStatusAddOnsMetricsToTerraform(struct?: Mk8SStatusAddOnsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusAddOnsMetricsToHclTerraform(struct?: Mk8SStatusAddOnsMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusAddOnsMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatusAddOnsMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatusAddOnsMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // prometheus_endpoint - computed: true, optional: false, required: false
  public get prometheusEndpoint() {
    return this.getStringAttribute('prometheus_endpoint');
  }

  // remote_write_config - computed: true, optional: false, required: false
  public get remoteWriteConfig() {
    return this.getStringAttribute('remote_write_config');
  }
}

export class Mk8SStatusAddOnsMetricsList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusAddOnsMetricsOutputReference {
    return new Mk8SStatusAddOnsMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SStatusAddOns {
}

export function mk8SStatusAddOnsToTerraform(struct?: Mk8SStatusAddOns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusAddOnsToHclTerraform(struct?: Mk8SStatusAddOns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusAddOnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatusAddOns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatusAddOns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aws_ecr - computed: true, optional: false, required: false
  private _awsEcr = new Mk8SStatusAddOnsAwsEcrList(this, "aws_ecr", false);
  public get awsEcr() {
    return this._awsEcr;
  }

  // aws_efs - computed: true, optional: false, required: false
  private _awsEfs = new Mk8SStatusAddOnsAwsEfsList(this, "aws_efs", false);
  public get awsEfs() {
    return this._awsEfs;
  }

  // aws_elb - computed: true, optional: false, required: false
  private _awsElb = new Mk8SStatusAddOnsAwsElbList(this, "aws_elb", false);
  public get awsElb() {
    return this._awsElb;
  }

  // aws_workload_identity - computed: true, optional: false, required: false
  private _awsWorkloadIdentity = new Mk8SStatusAddOnsAwsWorkloadIdentityList(this, "aws_workload_identity", false);
  public get awsWorkloadIdentity() {
    return this._awsWorkloadIdentity;
  }

  // dashboard - computed: true, optional: false, required: false
  private _dashboard = new Mk8SStatusAddOnsDashboardList(this, "dashboard", false);
  public get dashboard() {
    return this._dashboard;
  }

  // headlamp - computed: true, optional: false, required: false
  private _headlamp = new Mk8SStatusAddOnsHeadlampList(this, "headlamp", false);
  public get headlamp() {
    return this._headlamp;
  }

  // logs - computed: true, optional: false, required: false
  private _logs = new Mk8SStatusAddOnsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new Mk8SStatusAddOnsMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
}

export class Mk8SStatusAddOnsList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusAddOnsOutputReference {
    return new Mk8SStatusAddOnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SStatus {
}

export function mk8SStatusToTerraform(struct?: Mk8SStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mk8SStatusToHclTerraform(struct?: Mk8SStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class Mk8SStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // add_ons - computed: true, optional: false, required: false
  private _addOns = new Mk8SStatusAddOnsList(this, "add_ons", false);
  public get addOns() {
    return this._addOns;
  }

  // home_location - computed: true, optional: false, required: false
  public get homeLocation() {
    return this.getStringAttribute('home_location');
  }

  // oidc_provider_url - computed: true, optional: false, required: false
  public get oidcProviderUrl() {
    return this.getStringAttribute('oidc_provider_url');
  }

  // server_url - computed: true, optional: false, required: false
  public get serverUrl() {
    return this.getStringAttribute('server_url');
  }
}

export class Mk8SStatusList extends cdktf.ComplexList {

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
  public get(index: number): Mk8SStatusOutputReference {
    return new Mk8SStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsByokConfigActuator {
  /**
  * Additional environment variables injected into actuator pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#env Mk8S#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Log level override for actuator containers. Valid values are: trace, info, error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#log_level Mk8S#log_level}
  */
  readonly logLevel?: string;
  /**
  * CPU limit applied to actuator pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_cpu Mk8S#max_cpu}
  */
  readonly maxCpu?: string;
  /**
  * Memory limit applied to actuator pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_memory Mk8S#max_memory}
  */
  readonly maxMemory?: string;
  /**
  * Minimum CPU request applied to actuator pods (e.g. "100m").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_cpu Mk8S#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Minimum memory request applied to actuator pods (e.g. "128Mi").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
}

export function mk8SAddOnsByokConfigActuatorToTerraform(struct?: Mk8SAddOnsByokConfigActuator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    max_cpu: cdktf.stringToTerraform(struct!.maxCpu),
    max_memory: cdktf.stringToTerraform(struct!.maxMemory),
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
  }
}


export function mk8SAddOnsByokConfigActuatorToHclTerraform(struct?: Mk8SAddOnsByokConfigActuator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_cpu: {
      value: cdktf.stringToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_memory: {
      value: cdktf.stringToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigActuatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigActuator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigActuator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env = undefined;
      this._logLevel = undefined;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env = value.env;
      this._logLevel = value.logLevel;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
    }
  }

  // env - computed: true, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_cpu - computed: true, optional: true, required: false
  private _maxCpu?: string; 
  public get maxCpu() {
    return this.getStringAttribute('max_cpu');
  }
  public set maxCpu(value: string) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: true, optional: true, required: false
  private _maxMemory?: string; 
  public get maxMemory() {
    return this.getStringAttribute('max_memory');
  }
  public set maxMemory(value: string) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // min_cpu - computed: true, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }
}
export interface Mk8SAddOnsByokConfigCommonPdb {
  /**
  * Maximum number of pods that can be unavailable during disruptions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_unavailable Mk8S#max_unavailable}
  */
  readonly maxUnavailable?: number;
}

export function mk8SAddOnsByokConfigCommonPdbToTerraform(struct?: Mk8SAddOnsByokConfigCommonPdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unavailable: cdktf.numberToTerraform(struct!.maxUnavailable),
  }
}


export function mk8SAddOnsByokConfigCommonPdbToHclTerraform(struct?: Mk8SAddOnsByokConfigCommonPdb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigCommonPdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigCommonPdb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigCommonPdb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // max_unavailable - computed: true, optional: true, required: false
  private _maxUnavailable?: number; 
  public get maxUnavailable() {
    return this.getNumberAttribute('max_unavailable');
  }
  public set maxUnavailable(value: number) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface Mk8SAddOnsByokConfigCommon {
  /**
  * Replica count shared by BYOK control plane deployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#deployment_replicas Mk8S#deployment_replicas}
  */
  readonly deploymentReplicas?: number;
  /**
  * Pod disruption budget limits for BYOK workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pdb Mk8S#pdb}
  */
  readonly pdb?: Mk8SAddOnsByokConfigCommonPdb;
}

export function mk8SAddOnsByokConfigCommonToTerraform(struct?: Mk8SAddOnsByokConfigCommon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment_replicas: cdktf.numberToTerraform(struct!.deploymentReplicas),
    pdb: mk8SAddOnsByokConfigCommonPdbToTerraform(struct!.pdb),
  }
}


export function mk8SAddOnsByokConfigCommonToHclTerraform(struct?: Mk8SAddOnsByokConfigCommon | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deployment_replicas: {
      value: cdktf.numberToHclTerraform(struct!.deploymentReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pdb: {
      value: mk8SAddOnsByokConfigCommonPdbToHclTerraform(struct!.pdb),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigCommonPdb",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigCommonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigCommon | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deploymentReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentReplicas = this._deploymentReplicas;
    }
    if (this._pdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdb = this._pdb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigCommon | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deploymentReplicas = undefined;
      this._pdb.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deploymentReplicas = value.deploymentReplicas;
      this._pdb.internalValue = value.pdb;
    }
  }

  // deployment_replicas - computed: true, optional: true, required: false
  private _deploymentReplicas?: number; 
  public get deploymentReplicas() {
    return this.getNumberAttribute('deployment_replicas');
  }
  public set deploymentReplicas(value: number) {
    this._deploymentReplicas = value;
  }
  public resetDeploymentReplicas() {
    this._deploymentReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentReplicasInput() {
    return this._deploymentReplicas;
  }

  // pdb - computed: true, optional: true, required: false
  private _pdb = new Mk8SAddOnsByokConfigCommonPdbOutputReference(this, "pdb");
  public get pdb() {
    return this._pdb;
  }
  public putPdb(value: Mk8SAddOnsByokConfigCommonPdb) {
    this._pdb.internalValue = value;
  }
  public resetPdb() {
    this._pdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbInput() {
    return this._pdb.internalValue;
  }
}
export interface Mk8SAddOnsByokConfigIngress {
  /**
  * CPU request/limit string applied to ingress pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#cpu Mk8S#cpu}
  */
  readonly cpu?: string;
  /**
  * Memory request/limit string applied to ingress pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#memory Mk8S#memory}
  */
  readonly memory?: string;
  /**
  * Target usage percentage that triggers ingress autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#target_percent Mk8S#target_percent}
  */
  readonly targetPercent?: number;
}

export function mk8SAddOnsByokConfigIngressToTerraform(struct?: Mk8SAddOnsByokConfigIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
    target_percent: cdktf.numberToTerraform(struct!.targetPercent),
  }
}


export function mk8SAddOnsByokConfigIngressToHclTerraform(struct?: Mk8SAddOnsByokConfigIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_percent: {
      value: cdktf.numberToHclTerraform(struct!.targetPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._targetPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPercent = this._targetPercent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
      this._targetPercent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
      this._targetPercent = value.targetPercent;
    }
  }

  // cpu - computed: true, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: true, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // target_percent - computed: true, optional: true, required: false
  private _targetPercent?: number; 
  public get targetPercent() {
    return this.getNumberAttribute('target_percent');
  }
  public set targetPercent(value: number) {
    this._targetPercent = value;
  }
  public resetTargetPercent() {
    this._targetPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPercentInput() {
    return this._targetPercent;
  }
}
export interface Mk8SAddOnsByokConfigInternalDns {
  /**
  * CPU limit applied to internal DNS pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_cpu Mk8S#max_cpu}
  */
  readonly maxCpu?: string;
  /**
  * Memory limit applied to internal DNS pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_memory Mk8S#max_memory}
  */
  readonly maxMemory?: string;
  /**
  * CPU request applied to internal DNS pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_cpu Mk8S#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Memory request applied to internal DNS pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
}

export function mk8SAddOnsByokConfigInternalDnsToTerraform(struct?: Mk8SAddOnsByokConfigInternalDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.stringToTerraform(struct!.maxCpu),
    max_memory: cdktf.stringToTerraform(struct!.maxMemory),
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
  }
}


export function mk8SAddOnsByokConfigInternalDnsToHclTerraform(struct?: Mk8SAddOnsByokConfigInternalDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.stringToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_memory: {
      value: cdktf.stringToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigInternalDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigInternalDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigInternalDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
    }
  }

  // max_cpu - computed: true, optional: true, required: false
  private _maxCpu?: string; 
  public get maxCpu() {
    return this.getStringAttribute('max_cpu');
  }
  public set maxCpu(value: string) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: true, optional: true, required: false
  private _maxMemory?: string; 
  public get maxMemory() {
    return this.getStringAttribute('max_memory');
  }
  public set maxMemory(value: string) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // min_cpu - computed: true, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }
}
export interface Mk8SAddOnsByokConfigIstioIngressGateway {
  /**
  * CPU limit applied to ingress gateway pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_cpu Mk8S#max_cpu}
  */
  readonly maxCpu?: string;
  /**
  * Memory limit applied to ingress gateway pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_memory Mk8S#max_memory}
  */
  readonly maxMemory?: string;
  /**
  * Number of ingress gateway replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#replicas Mk8S#replicas}
  */
  readonly replicas?: number;
}

export function mk8SAddOnsByokConfigIstioIngressGatewayToTerraform(struct?: Mk8SAddOnsByokConfigIstioIngressGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.stringToTerraform(struct!.maxCpu),
    max_memory: cdktf.stringToTerraform(struct!.maxMemory),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function mk8SAddOnsByokConfigIstioIngressGatewayToHclTerraform(struct?: Mk8SAddOnsByokConfigIstioIngressGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.stringToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_memory: {
      value: cdktf.stringToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigIstioIngressGatewayOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigIstioIngressGateway | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigIstioIngressGateway | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._replicas = value.replicas;
    }
  }

  // max_cpu - computed: true, optional: true, required: false
  private _maxCpu?: string; 
  public get maxCpu() {
    return this.getStringAttribute('max_cpu');
  }
  public set maxCpu(value: string) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: true, optional: true, required: false
  private _maxMemory?: string; 
  public get maxMemory() {
    return this.getStringAttribute('max_memory');
  }
  public set maxMemory(value: string) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // replicas - computed: true, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface Mk8SAddOnsByokConfigIstioIstiod {
  /**
  * CPU limit applied to istiod pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_cpu Mk8S#max_cpu}
  */
  readonly maxCpu?: string;
  /**
  * Memory limit applied to istiod pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_memory Mk8S#max_memory}
  */
  readonly maxMemory?: string;
  /**
  * CPU request applied to istiod pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_cpu Mk8S#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Memory request applied to istiod pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
  /**
  * Pod disruption budget maxUnavailable for istiod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pdb Mk8S#pdb}
  */
  readonly pdb?: number;
  /**
  * Number of istiod replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#replicas Mk8S#replicas}
  */
  readonly replicas?: number;
}

export function mk8SAddOnsByokConfigIstioIstiodToTerraform(struct?: Mk8SAddOnsByokConfigIstioIstiod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.stringToTerraform(struct!.maxCpu),
    max_memory: cdktf.stringToTerraform(struct!.maxMemory),
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
    pdb: cdktf.numberToTerraform(struct!.pdb),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function mk8SAddOnsByokConfigIstioIstiodToHclTerraform(struct?: Mk8SAddOnsByokConfigIstioIstiod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.stringToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_memory: {
      value: cdktf.stringToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pdb: {
      value: cdktf.numberToHclTerraform(struct!.pdb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigIstioIstiodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigIstioIstiod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._pdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdb = this._pdb;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigIstioIstiod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
      this._pdb = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
      this._pdb = value.pdb;
      this._replicas = value.replicas;
    }
  }

  // max_cpu - computed: true, optional: true, required: false
  private _maxCpu?: string; 
  public get maxCpu() {
    return this.getStringAttribute('max_cpu');
  }
  public set maxCpu(value: string) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: true, optional: true, required: false
  private _maxMemory?: string; 
  public get maxMemory() {
    return this.getStringAttribute('max_memory');
  }
  public set maxMemory(value: string) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // min_cpu - computed: true, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }

  // pdb - computed: true, optional: true, required: false
  private _pdb?: number; 
  public get pdb() {
    return this.getNumberAttribute('pdb');
  }
  public set pdb(value: number) {
    this._pdb = value;
  }
  public resetPdb() {
    this._pdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdbInput() {
    return this._pdb;
  }

  // replicas - computed: true, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface Mk8SAddOnsByokConfigIstioSidecar {
  /**
  * CPU request applied to injected sidecars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_cpu Mk8S#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Memory request applied to injected sidecars.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
}

export function mk8SAddOnsByokConfigIstioSidecarToTerraform(struct?: Mk8SAddOnsByokConfigIstioSidecar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
  }
}


export function mk8SAddOnsByokConfigIstioSidecarToHclTerraform(struct?: Mk8SAddOnsByokConfigIstioSidecar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigIstioSidecarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigIstioSidecar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigIstioSidecar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
    }
  }

  // min_cpu - computed: true, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }
}
export interface Mk8SAddOnsByokConfigIstio {
  /**
  * Istio ingress gateway deployment settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#ingress_gateway Mk8S#ingress_gateway}
  */
  readonly ingressGateway?: Mk8SAddOnsByokConfigIstioIngressGateway;
  /**
  * Control plane deployment settings for istiod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#istiod Mk8S#istiod}
  */
  readonly istiod?: Mk8SAddOnsByokConfigIstioIstiod;
  /**
  * Default resource requests for Istio sidecar injection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#sidecar Mk8S#sidecar}
  */
  readonly sidecar?: Mk8SAddOnsByokConfigIstioSidecar;
}

export function mk8SAddOnsByokConfigIstioToTerraform(struct?: Mk8SAddOnsByokConfigIstio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ingress_gateway: mk8SAddOnsByokConfigIstioIngressGatewayToTerraform(struct!.ingressGateway),
    istiod: mk8SAddOnsByokConfigIstioIstiodToTerraform(struct!.istiod),
    sidecar: mk8SAddOnsByokConfigIstioSidecarToTerraform(struct!.sidecar),
  }
}


export function mk8SAddOnsByokConfigIstioToHclTerraform(struct?: Mk8SAddOnsByokConfigIstio | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ingress_gateway: {
      value: mk8SAddOnsByokConfigIstioIngressGatewayToHclTerraform(struct!.ingressGateway),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigIstioIngressGateway",
    },
    istiod: {
      value: mk8SAddOnsByokConfigIstioIstiodToHclTerraform(struct!.istiod),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigIstioIstiod",
    },
    sidecar: {
      value: mk8SAddOnsByokConfigIstioSidecarToHclTerraform(struct!.sidecar),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigIstioSidecar",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigIstioOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigIstio | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ingressGateway?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressGateway = this._ingressGateway?.internalValue;
    }
    if (this._istiod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istiod = this._istiod?.internalValue;
    }
    if (this._sidecar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecar = this._sidecar?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigIstio | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ingressGateway.internalValue = undefined;
      this._istiod.internalValue = undefined;
      this._sidecar.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ingressGateway.internalValue = value.ingressGateway;
      this._istiod.internalValue = value.istiod;
      this._sidecar.internalValue = value.sidecar;
    }
  }

  // ingress_gateway - computed: true, optional: true, required: false
  private _ingressGateway = new Mk8SAddOnsByokConfigIstioIngressGatewayOutputReference(this, "ingress_gateway");
  public get ingressGateway() {
    return this._ingressGateway;
  }
  public putIngressGateway(value: Mk8SAddOnsByokConfigIstioIngressGateway) {
    this._ingressGateway.internalValue = value;
  }
  public resetIngressGateway() {
    this._ingressGateway.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressGatewayInput() {
    return this._ingressGateway.internalValue;
  }

  // istiod - computed: true, optional: true, required: false
  private _istiod = new Mk8SAddOnsByokConfigIstioIstiodOutputReference(this, "istiod");
  public get istiod() {
    return this._istiod;
  }
  public putIstiod(value: Mk8SAddOnsByokConfigIstioIstiod) {
    this._istiod.internalValue = value;
  }
  public resetIstiod() {
    this._istiod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istiodInput() {
    return this._istiod.internalValue;
  }

  // sidecar - computed: true, optional: true, required: false
  private _sidecar = new Mk8SAddOnsByokConfigIstioSidecarOutputReference(this, "sidecar");
  public get sidecar() {
    return this._sidecar;
  }
  public putSidecar(value: Mk8SAddOnsByokConfigIstioSidecar) {
    this._sidecar.internalValue = value;
  }
  public resetSidecar() {
    this._sidecar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarInput() {
    return this._sidecar.internalValue;
  }
}
export interface Mk8SAddOnsByokConfigLogSplitter {
  /**
  * CPU limit applied to log splitter pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_cpu Mk8S#max_cpu}
  */
  readonly maxCpu?: string;
  /**
  * Memory limit applied to log splitter pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_memory Mk8S#max_memory}
  */
  readonly maxMemory?: string;
  /**
  * In-memory buffer size consumed by each log splitter pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#mem_buffer_size Mk8S#mem_buffer_size}
  */
  readonly memBufferSize?: string;
  /**
  * CPU request applied to log splitter pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_cpu Mk8S#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Memory request applied to log splitter pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
  /**
  * Per-pod log processing rate limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#per_pod_rate Mk8S#per_pod_rate}
  */
  readonly perPodRate?: number;
}

export function mk8SAddOnsByokConfigLogSplitterToTerraform(struct?: Mk8SAddOnsByokConfigLogSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.stringToTerraform(struct!.maxCpu),
    max_memory: cdktf.stringToTerraform(struct!.maxMemory),
    mem_buffer_size: cdktf.stringToTerraform(struct!.memBufferSize),
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
    per_pod_rate: cdktf.numberToTerraform(struct!.perPodRate),
  }
}


export function mk8SAddOnsByokConfigLogSplitterToHclTerraform(struct?: Mk8SAddOnsByokConfigLogSplitter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.stringToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_memory: {
      value: cdktf.stringToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mem_buffer_size: {
      value: cdktf.stringToHclTerraform(struct!.memBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    per_pod_rate: {
      value: cdktf.numberToHclTerraform(struct!.perPodRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigLogSplitterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigLogSplitter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._memBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memBufferSize = this._memBufferSize;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._perPodRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.perPodRate = this._perPodRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigLogSplitter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._memBufferSize = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
      this._perPodRate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._memBufferSize = value.memBufferSize;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
      this._perPodRate = value.perPodRate;
    }
  }

  // max_cpu - computed: true, optional: true, required: false
  private _maxCpu?: string; 
  public get maxCpu() {
    return this.getStringAttribute('max_cpu');
  }
  public set maxCpu(value: string) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: true, optional: true, required: false
  private _maxMemory?: string; 
  public get maxMemory() {
    return this.getStringAttribute('max_memory');
  }
  public set maxMemory(value: string) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // mem_buffer_size - computed: true, optional: true, required: false
  private _memBufferSize?: string; 
  public get memBufferSize() {
    return this.getStringAttribute('mem_buffer_size');
  }
  public set memBufferSize(value: string) {
    this._memBufferSize = value;
  }
  public resetMemBufferSize() {
    this._memBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memBufferSizeInput() {
    return this._memBufferSize;
  }

  // min_cpu - computed: true, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }

  // per_pod_rate - computed: true, optional: true, required: false
  private _perPodRate?: number; 
  public get perPodRate() {
    return this.getNumberAttribute('per_pod_rate');
  }
  public set perPodRate(value: number) {
    this._perPodRate = value;
  }
  public resetPerPodRate() {
    this._perPodRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perPodRateInput() {
    return this._perPodRate;
  }
}
export interface Mk8SAddOnsByokConfigLonghorn {
  /**
  * Replica factor for Longhorn volumes. Minimum: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#replicas Mk8S#replicas}
  */
  readonly replicas?: number;
}

export function mk8SAddOnsByokConfigLonghornToTerraform(struct?: Mk8SAddOnsByokConfigLonghorn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function mk8SAddOnsByokConfigLonghornToHclTerraform(struct?: Mk8SAddOnsByokConfigLonghorn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigLonghornOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigLonghorn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigLonghorn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicas = value.replicas;
    }
  }

  // replicas - computed: true, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }
}
export interface Mk8SAddOnsByokConfigMiddlebox {
  /**
  * Alert threshold, in Mbps, for middlebox bandwidth usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#bandwidth_alert_mbps Mk8S#bandwidth_alert_mbps}
  */
  readonly bandwidthAlertMbps?: number;
  /**
  * Whether to deploy the middlebox component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#enabled Mk8S#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function mk8SAddOnsByokConfigMiddleboxToTerraform(struct?: Mk8SAddOnsByokConfigMiddlebox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bandwidth_alert_mbps: cdktf.numberToTerraform(struct!.bandwidthAlertMbps),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function mk8SAddOnsByokConfigMiddleboxToHclTerraform(struct?: Mk8SAddOnsByokConfigMiddlebox | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bandwidth_alert_mbps: {
      value: cdktf.numberToHclTerraform(struct!.bandwidthAlertMbps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigMiddleboxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigMiddlebox | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bandwidthAlertMbps !== undefined) {
      hasAnyValues = true;
      internalValueResult.bandwidthAlertMbps = this._bandwidthAlertMbps;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigMiddlebox | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bandwidthAlertMbps = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bandwidthAlertMbps = value.bandwidthAlertMbps;
      this._enabled = value.enabled;
    }
  }

  // bandwidth_alert_mbps - computed: true, optional: true, required: false
  private _bandwidthAlertMbps?: number; 
  public get bandwidthAlertMbps() {
    return this.getNumberAttribute('bandwidth_alert_mbps');
  }
  public set bandwidthAlertMbps(value: number) {
    this._bandwidthAlertMbps = value;
  }
  public resetBandwidthAlertMbps() {
    this._bandwidthAlertMbps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthAlertMbpsInput() {
    return this._bandwidthAlertMbps;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface Mk8SAddOnsByokConfigMonitoringKubeStateMetrics {
  /**
  * Memory request applied to kube-state-metrics pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
}

export function mk8SAddOnsByokConfigMonitoringKubeStateMetricsToTerraform(struct?: Mk8SAddOnsByokConfigMonitoringKubeStateMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
  }
}


export function mk8SAddOnsByokConfigMonitoringKubeStateMetricsToHclTerraform(struct?: Mk8SAddOnsByokConfigMonitoringKubeStateMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigMonitoringKubeStateMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigMonitoringKubeStateMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigMonitoringKubeStateMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minMemory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minMemory = value.minMemory;
    }
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }
}
export interface Mk8SAddOnsByokConfigMonitoringPrometheusMain {
  /**
  * Persistent volume size for Prometheus (for example, "50Gi").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#storage Mk8S#storage}
  */
  readonly storage?: string;
}

export function mk8SAddOnsByokConfigMonitoringPrometheusMainToTerraform(struct?: Mk8SAddOnsByokConfigMonitoringPrometheusMain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}


export function mk8SAddOnsByokConfigMonitoringPrometheusMainToHclTerraform(struct?: Mk8SAddOnsByokConfigMonitoringPrometheusMain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigMonitoringPrometheusMainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigMonitoringPrometheusMain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigMonitoringPrometheusMain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._storage = value.storage;
    }
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface Mk8SAddOnsByokConfigMonitoringPrometheus {
  /**
  * Primary Prometheus instance settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#main Mk8S#main}
  */
  readonly main?: Mk8SAddOnsByokConfigMonitoringPrometheusMain;
}

export function mk8SAddOnsByokConfigMonitoringPrometheusToTerraform(struct?: Mk8SAddOnsByokConfigMonitoringPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    main: mk8SAddOnsByokConfigMonitoringPrometheusMainToTerraform(struct!.main),
  }
}


export function mk8SAddOnsByokConfigMonitoringPrometheusToHclTerraform(struct?: Mk8SAddOnsByokConfigMonitoringPrometheus | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    main: {
      value: mk8SAddOnsByokConfigMonitoringPrometheusMainToHclTerraform(struct!.main),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigMonitoringPrometheusMain",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigMonitoringPrometheusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigMonitoringPrometheus | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._main?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.main = this._main?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigMonitoringPrometheus | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._main.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._main.internalValue = value.main;
    }
  }

  // main - computed: true, optional: true, required: false
  private _main = new Mk8SAddOnsByokConfigMonitoringPrometheusMainOutputReference(this, "main");
  public get main() {
    return this._main;
  }
  public putMain(value: Mk8SAddOnsByokConfigMonitoringPrometheusMain) {
    this._main.internalValue = value;
  }
  public resetMain() {
    this._main.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainInput() {
    return this._main.internalValue;
  }
}
export interface Mk8SAddOnsByokConfigMonitoring {
  /**
  * Kube-state-metrics resource overrides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#kube_state_metrics Mk8S#kube_state_metrics}
  */
  readonly kubeStateMetrics?: Mk8SAddOnsByokConfigMonitoringKubeStateMetrics;
  /**
  * Maximum memory limit for monitoring components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_memory Mk8S#max_memory}
  */
  readonly maxMemory?: string;
  /**
  * Minimum memory request for monitoring components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
  /**
  * Prometheus deployment configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#prometheus Mk8S#prometheus}
  */
  readonly prometheus?: Mk8SAddOnsByokConfigMonitoringPrometheus;
}

export function mk8SAddOnsByokConfigMonitoringToTerraform(struct?: Mk8SAddOnsByokConfigMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kube_state_metrics: mk8SAddOnsByokConfigMonitoringKubeStateMetricsToTerraform(struct!.kubeStateMetrics),
    max_memory: cdktf.stringToTerraform(struct!.maxMemory),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
    prometheus: mk8SAddOnsByokConfigMonitoringPrometheusToTerraform(struct!.prometheus),
  }
}


export function mk8SAddOnsByokConfigMonitoringToHclTerraform(struct?: Mk8SAddOnsByokConfigMonitoring | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kube_state_metrics: {
      value: mk8SAddOnsByokConfigMonitoringKubeStateMetricsToHclTerraform(struct!.kubeStateMetrics),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigMonitoringKubeStateMetrics",
    },
    max_memory: {
      value: cdktf.stringToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prometheus: {
      value: mk8SAddOnsByokConfigMonitoringPrometheusToHclTerraform(struct!.prometheus),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigMonitoringPrometheus",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigMonitoringOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigMonitoring | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kubeStateMetrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeStateMetrics = this._kubeStateMetrics?.internalValue;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._prometheus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigMonitoring | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kubeStateMetrics.internalValue = undefined;
      this._maxMemory = undefined;
      this._minMemory = undefined;
      this._prometheus.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kubeStateMetrics.internalValue = value.kubeStateMetrics;
      this._maxMemory = value.maxMemory;
      this._minMemory = value.minMemory;
      this._prometheus.internalValue = value.prometheus;
    }
  }

  // kube_state_metrics - computed: true, optional: true, required: false
  private _kubeStateMetrics = new Mk8SAddOnsByokConfigMonitoringKubeStateMetricsOutputReference(this, "kube_state_metrics");
  public get kubeStateMetrics() {
    return this._kubeStateMetrics;
  }
  public putKubeStateMetrics(value: Mk8SAddOnsByokConfigMonitoringKubeStateMetrics) {
    this._kubeStateMetrics.internalValue = value;
  }
  public resetKubeStateMetrics() {
    this._kubeStateMetrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeStateMetricsInput() {
    return this._kubeStateMetrics.internalValue;
  }

  // max_memory - computed: true, optional: true, required: false
  private _maxMemory?: string; 
  public get maxMemory() {
    return this.getStringAttribute('max_memory');
  }
  public set maxMemory(value: string) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }

  // prometheus - computed: true, optional: true, required: false
  private _prometheus = new Mk8SAddOnsByokConfigMonitoringPrometheusOutputReference(this, "prometheus");
  public get prometheus() {
    return this._prometheus;
  }
  public putPrometheus(value: Mk8SAddOnsByokConfigMonitoringPrometheus) {
    this._prometheus.internalValue = value;
  }
  public resetPrometheus() {
    this._prometheus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus.internalValue;
  }
}
export interface Mk8SAddOnsByokConfigRedis {
  /**
  * CPU limit applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_cpu Mk8S#max_cpu}
  */
  readonly maxCpu?: string;
  /**
  * Memory limit applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_memory Mk8S#max_memory}
  */
  readonly maxMemory?: string;
  /**
  * CPU request applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_cpu Mk8S#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Memory request applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
  /**
  * Persistent storage size allocated to the Redis pods (for example, "8Gi").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#storage Mk8S#storage}
  */
  readonly storage?: string;
}

export function mk8SAddOnsByokConfigRedisToTerraform(struct?: Mk8SAddOnsByokConfigRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.stringToTerraform(struct!.maxCpu),
    max_memory: cdktf.stringToTerraform(struct!.maxMemory),
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}


export function mk8SAddOnsByokConfigRedisToHclTerraform(struct?: Mk8SAddOnsByokConfigRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.stringToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_memory: {
      value: cdktf.stringToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
      this._storage = value.storage;
    }
  }

  // max_cpu - computed: true, optional: true, required: false
  private _maxCpu?: string; 
  public get maxCpu() {
    return this.getStringAttribute('max_cpu');
  }
  public set maxCpu(value: string) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: true, optional: true, required: false
  private _maxMemory?: string; 
  public get maxMemory() {
    return this.getStringAttribute('max_memory');
  }
  public set maxMemory(value: string) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // min_cpu - computed: true, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface Mk8SAddOnsByokConfigRedisHa {
  /**
  * CPU limit applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_cpu Mk8S#max_cpu}
  */
  readonly maxCpu?: string;
  /**
  * Memory limit applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_memory Mk8S#max_memory}
  */
  readonly maxMemory?: string;
  /**
  * CPU request applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_cpu Mk8S#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Memory request applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
  /**
  * Persistent storage size allocated to the Redis pods, in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#storage Mk8S#storage}
  */
  readonly storage?: number;
}

export function mk8SAddOnsByokConfigRedisHaToTerraform(struct?: Mk8SAddOnsByokConfigRedisHa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.stringToTerraform(struct!.maxCpu),
    max_memory: cdktf.stringToTerraform(struct!.maxMemory),
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
    storage: cdktf.numberToTerraform(struct!.storage),
  }
}


export function mk8SAddOnsByokConfigRedisHaToHclTerraform(struct?: Mk8SAddOnsByokConfigRedisHa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.stringToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_memory: {
      value: cdktf.stringToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: cdktf.numberToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigRedisHaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigRedisHa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigRedisHa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
      this._storage = value.storage;
    }
  }

  // max_cpu - computed: true, optional: true, required: false
  private _maxCpu?: string; 
  public get maxCpu() {
    return this.getStringAttribute('max_cpu');
  }
  public set maxCpu(value: string) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: true, optional: true, required: false
  private _maxMemory?: string; 
  public get maxMemory() {
    return this.getStringAttribute('max_memory');
  }
  public set maxMemory(value: string) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // min_cpu - computed: true, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface Mk8SAddOnsByokConfigRedisSentinel {
  /**
  * CPU limit applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_cpu Mk8S#max_cpu}
  */
  readonly maxCpu?: string;
  /**
  * Memory limit applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_memory Mk8S#max_memory}
  */
  readonly maxMemory?: string;
  /**
  * CPU request applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_cpu Mk8S#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Memory request applied to the Redis pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
  /**
  * Persistent storage size allocated to the Redis pods, in GiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#storage Mk8S#storage}
  */
  readonly storage?: number;
}

export function mk8SAddOnsByokConfigRedisSentinelToTerraform(struct?: Mk8SAddOnsByokConfigRedisSentinel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_cpu: cdktf.stringToTerraform(struct!.maxCpu),
    max_memory: cdktf.stringToTerraform(struct!.maxMemory),
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
    storage: cdktf.numberToTerraform(struct!.storage),
  }
}


export function mk8SAddOnsByokConfigRedisSentinelToHclTerraform(struct?: Mk8SAddOnsByokConfigRedisSentinel | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_cpu: {
      value: cdktf.stringToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_memory: {
      value: cdktf.stringToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: cdktf.numberToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigRedisSentinelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigRedisSentinel | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigRedisSentinel | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
      this._storage = value.storage;
    }
  }

  // max_cpu - computed: true, optional: true, required: false
  private _maxCpu?: string; 
  public get maxCpu() {
    return this.getStringAttribute('max_cpu');
  }
  public set maxCpu(value: string) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: true, optional: true, required: false
  private _maxMemory?: string; 
  public get maxMemory() {
    return this.getStringAttribute('max_memory');
  }
  public set maxMemory(value: string) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // min_cpu - computed: true, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface Mk8SAddOnsByokConfigTempoAgent {
  /**
  * CPU request applied to tempo agent pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_cpu Mk8S#min_cpu}
  */
  readonly minCpu?: string;
  /**
  * Memory request applied to tempo agent pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_memory Mk8S#min_memory}
  */
  readonly minMemory?: string;
}

export function mk8SAddOnsByokConfigTempoAgentToTerraform(struct?: Mk8SAddOnsByokConfigTempoAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_cpu: cdktf.stringToTerraform(struct!.minCpu),
    min_memory: cdktf.stringToTerraform(struct!.minMemory),
  }
}


export function mk8SAddOnsByokConfigTempoAgentToHclTerraform(struct?: Mk8SAddOnsByokConfigTempoAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_cpu: {
      value: cdktf.stringToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_memory: {
      value: cdktf.stringToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigTempoAgentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfigTempoAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfigTempoAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
    }
  }

  // min_cpu - computed: true, optional: true, required: false
  private _minCpu?: string; 
  public get minCpu() {
    return this.getStringAttribute('min_cpu');
  }
  public set minCpu(value: string) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: true, optional: true, required: false
  private _minMemory?: string; 
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
  public set minMemory(value: string) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }
}
export interface Mk8SAddOnsByokConfig {
  /**
  * Resource tuning for the actuator component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#actuator Mk8S#actuator}
  */
  readonly actuator?: Mk8SAddOnsByokConfigActuator;
  /**
  * Shared rollout settings for BYOK workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#common Mk8S#common}
  */
  readonly common?: Mk8SAddOnsByokConfigCommon;
  /**
  * Ingress controller resource configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#ingress Mk8S#ingress}
  */
  readonly ingress?: Mk8SAddOnsByokConfigIngress;
  /**
  * Internal DNS deployment settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#internal_dns Mk8S#internal_dns}
  */
  readonly internalDns?: Mk8SAddOnsByokConfigInternalDns;
  /**
  * Istio service mesh configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#istio Mk8S#istio}
  */
  readonly istio?: Mk8SAddOnsByokConfigIstio;
  /**
  * Log splitter deployment configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#log_splitter Mk8S#log_splitter}
  */
  readonly logSplitter?: Mk8SAddOnsByokConfigLogSplitter;
  /**
  * Longhorn persistent volume settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#longhorn Mk8S#longhorn}
  */
  readonly longhorn?: Mk8SAddOnsByokConfigLonghorn;
  /**
  * Configuration for the optional middlebox traffic shaper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#middlebox Mk8S#middlebox}
  */
  readonly middlebox?: Mk8SAddOnsByokConfigMiddlebox;
  /**
  * Monitoring stack configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#monitoring Mk8S#monitoring}
  */
  readonly monitoring?: Mk8SAddOnsByokConfigMonitoring;
  /**
  * Redis cache configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#redis Mk8S#redis}
  */
  readonly redis?: Mk8SAddOnsByokConfigRedis;
  /**
  * High-availability Redis configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#redis_ha Mk8S#redis_ha}
  */
  readonly redisHa?: Mk8SAddOnsByokConfigRedisHa;
  /**
  * Redis Sentinel configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#redis_sentinel Mk8S#redis_sentinel}
  */
  readonly redisSentinel?: Mk8SAddOnsByokConfigRedisSentinel;
  /**
  * Tempo agent resource configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#tempo_agent Mk8S#tempo_agent}
  */
  readonly tempoAgent?: Mk8SAddOnsByokConfigTempoAgent;
}

export function mk8SAddOnsByokConfigToTerraform(struct?: Mk8SAddOnsByokConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actuator: mk8SAddOnsByokConfigActuatorToTerraform(struct!.actuator),
    common: mk8SAddOnsByokConfigCommonToTerraform(struct!.common),
    ingress: mk8SAddOnsByokConfigIngressToTerraform(struct!.ingress),
    internal_dns: mk8SAddOnsByokConfigInternalDnsToTerraform(struct!.internalDns),
    istio: mk8SAddOnsByokConfigIstioToTerraform(struct!.istio),
    log_splitter: mk8SAddOnsByokConfigLogSplitterToTerraform(struct!.logSplitter),
    longhorn: mk8SAddOnsByokConfigLonghornToTerraform(struct!.longhorn),
    middlebox: mk8SAddOnsByokConfigMiddleboxToTerraform(struct!.middlebox),
    monitoring: mk8SAddOnsByokConfigMonitoringToTerraform(struct!.monitoring),
    redis: mk8SAddOnsByokConfigRedisToTerraform(struct!.redis),
    redis_ha: mk8SAddOnsByokConfigRedisHaToTerraform(struct!.redisHa),
    redis_sentinel: mk8SAddOnsByokConfigRedisSentinelToTerraform(struct!.redisSentinel),
    tempo_agent: mk8SAddOnsByokConfigTempoAgentToTerraform(struct!.tempoAgent),
  }
}


export function mk8SAddOnsByokConfigToHclTerraform(struct?: Mk8SAddOnsByokConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actuator: {
      value: mk8SAddOnsByokConfigActuatorToHclTerraform(struct!.actuator),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigActuator",
    },
    common: {
      value: mk8SAddOnsByokConfigCommonToHclTerraform(struct!.common),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigCommon",
    },
    ingress: {
      value: mk8SAddOnsByokConfigIngressToHclTerraform(struct!.ingress),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigIngress",
    },
    internal_dns: {
      value: mk8SAddOnsByokConfigInternalDnsToHclTerraform(struct!.internalDns),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigInternalDns",
    },
    istio: {
      value: mk8SAddOnsByokConfigIstioToHclTerraform(struct!.istio),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigIstio",
    },
    log_splitter: {
      value: mk8SAddOnsByokConfigLogSplitterToHclTerraform(struct!.logSplitter),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigLogSplitter",
    },
    longhorn: {
      value: mk8SAddOnsByokConfigLonghornToHclTerraform(struct!.longhorn),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigLonghorn",
    },
    middlebox: {
      value: mk8SAddOnsByokConfigMiddleboxToHclTerraform(struct!.middlebox),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigMiddlebox",
    },
    monitoring: {
      value: mk8SAddOnsByokConfigMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigMonitoring",
    },
    redis: {
      value: mk8SAddOnsByokConfigRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigRedis",
    },
    redis_ha: {
      value: mk8SAddOnsByokConfigRedisHaToHclTerraform(struct!.redisHa),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigRedisHa",
    },
    redis_sentinel: {
      value: mk8SAddOnsByokConfigRedisSentinelToHclTerraform(struct!.redisSentinel),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigRedisSentinel",
    },
    tempo_agent: {
      value: mk8SAddOnsByokConfigTempoAgentToHclTerraform(struct!.tempoAgent),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfigTempoAgent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByokConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actuator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actuator = this._actuator?.internalValue;
    }
    if (this._common?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.common = this._common?.internalValue;
    }
    if (this._ingress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingress = this._ingress?.internalValue;
    }
    if (this._internalDns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalDns = this._internalDns?.internalValue;
    }
    if (this._istio?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.istio = this._istio?.internalValue;
    }
    if (this._logSplitter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSplitter = this._logSplitter?.internalValue;
    }
    if (this._longhorn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.longhorn = this._longhorn?.internalValue;
    }
    if (this._middlebox?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.middlebox = this._middlebox?.internalValue;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._redisHa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisHa = this._redisHa?.internalValue;
    }
    if (this._redisSentinel?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redisSentinel = this._redisSentinel?.internalValue;
    }
    if (this._tempoAgent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempoAgent = this._tempoAgent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByokConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actuator.internalValue = undefined;
      this._common.internalValue = undefined;
      this._ingress.internalValue = undefined;
      this._internalDns.internalValue = undefined;
      this._istio.internalValue = undefined;
      this._logSplitter.internalValue = undefined;
      this._longhorn.internalValue = undefined;
      this._middlebox.internalValue = undefined;
      this._monitoring.internalValue = undefined;
      this._redis.internalValue = undefined;
      this._redisHa.internalValue = undefined;
      this._redisSentinel.internalValue = undefined;
      this._tempoAgent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actuator.internalValue = value.actuator;
      this._common.internalValue = value.common;
      this._ingress.internalValue = value.ingress;
      this._internalDns.internalValue = value.internalDns;
      this._istio.internalValue = value.istio;
      this._logSplitter.internalValue = value.logSplitter;
      this._longhorn.internalValue = value.longhorn;
      this._middlebox.internalValue = value.middlebox;
      this._monitoring.internalValue = value.monitoring;
      this._redis.internalValue = value.redis;
      this._redisHa.internalValue = value.redisHa;
      this._redisSentinel.internalValue = value.redisSentinel;
      this._tempoAgent.internalValue = value.tempoAgent;
    }
  }

  // actuator - computed: true, optional: true, required: false
  private _actuator = new Mk8SAddOnsByokConfigActuatorOutputReference(this, "actuator");
  public get actuator() {
    return this._actuator;
  }
  public putActuator(value: Mk8SAddOnsByokConfigActuator) {
    this._actuator.internalValue = value;
  }
  public resetActuator() {
    this._actuator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actuatorInput() {
    return this._actuator.internalValue;
  }

  // common - computed: true, optional: true, required: false
  private _common = new Mk8SAddOnsByokConfigCommonOutputReference(this, "common");
  public get common() {
    return this._common;
  }
  public putCommon(value: Mk8SAddOnsByokConfigCommon) {
    this._common.internalValue = value;
  }
  public resetCommon() {
    this._common.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonInput() {
    return this._common.internalValue;
  }

  // ingress - computed: true, optional: true, required: false
  private _ingress = new Mk8SAddOnsByokConfigIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: Mk8SAddOnsByokConfigIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
  }

  // internal_dns - computed: true, optional: true, required: false
  private _internalDns = new Mk8SAddOnsByokConfigInternalDnsOutputReference(this, "internal_dns");
  public get internalDns() {
    return this._internalDns;
  }
  public putInternalDns(value: Mk8SAddOnsByokConfigInternalDns) {
    this._internalDns.internalValue = value;
  }
  public resetInternalDns() {
    this._internalDns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalDnsInput() {
    return this._internalDns.internalValue;
  }

  // istio - computed: true, optional: true, required: false
  private _istio = new Mk8SAddOnsByokConfigIstioOutputReference(this, "istio");
  public get istio() {
    return this._istio;
  }
  public putIstio(value: Mk8SAddOnsByokConfigIstio) {
    this._istio.internalValue = value;
  }
  public resetIstio() {
    this._istio.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get istioInput() {
    return this._istio.internalValue;
  }

  // log_splitter - computed: true, optional: true, required: false
  private _logSplitter = new Mk8SAddOnsByokConfigLogSplitterOutputReference(this, "log_splitter");
  public get logSplitter() {
    return this._logSplitter;
  }
  public putLogSplitter(value: Mk8SAddOnsByokConfigLogSplitter) {
    this._logSplitter.internalValue = value;
  }
  public resetLogSplitter() {
    this._logSplitter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSplitterInput() {
    return this._logSplitter.internalValue;
  }

  // longhorn - computed: true, optional: true, required: false
  private _longhorn = new Mk8SAddOnsByokConfigLonghornOutputReference(this, "longhorn");
  public get longhorn() {
    return this._longhorn;
  }
  public putLonghorn(value: Mk8SAddOnsByokConfigLonghorn) {
    this._longhorn.internalValue = value;
  }
  public resetLonghorn() {
    this._longhorn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longhornInput() {
    return this._longhorn.internalValue;
  }

  // middlebox - computed: true, optional: true, required: false
  private _middlebox = new Mk8SAddOnsByokConfigMiddleboxOutputReference(this, "middlebox");
  public get middlebox() {
    return this._middlebox;
  }
  public putMiddlebox(value: Mk8SAddOnsByokConfigMiddlebox) {
    this._middlebox.internalValue = value;
  }
  public resetMiddlebox() {
    this._middlebox.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleboxInput() {
    return this._middlebox.internalValue;
  }

  // monitoring - computed: true, optional: true, required: false
  private _monitoring = new Mk8SAddOnsByokConfigMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: Mk8SAddOnsByokConfigMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // redis - computed: true, optional: true, required: false
  private _redis = new Mk8SAddOnsByokConfigRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: Mk8SAddOnsByokConfigRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // redis_ha - computed: true, optional: true, required: false
  private _redisHa = new Mk8SAddOnsByokConfigRedisHaOutputReference(this, "redis_ha");
  public get redisHa() {
    return this._redisHa;
  }
  public putRedisHa(value: Mk8SAddOnsByokConfigRedisHa) {
    this._redisHa.internalValue = value;
  }
  public resetRedisHa() {
    this._redisHa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisHaInput() {
    return this._redisHa.internalValue;
  }

  // redis_sentinel - computed: true, optional: true, required: false
  private _redisSentinel = new Mk8SAddOnsByokConfigRedisSentinelOutputReference(this, "redis_sentinel");
  public get redisSentinel() {
    return this._redisSentinel;
  }
  public putRedisSentinel(value: Mk8SAddOnsByokConfigRedisSentinel) {
    this._redisSentinel.internalValue = value;
  }
  public resetRedisSentinel() {
    this._redisSentinel.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisSentinelInput() {
    return this._redisSentinel.internalValue;
  }

  // tempo_agent - computed: true, optional: true, required: false
  private _tempoAgent = new Mk8SAddOnsByokConfigTempoAgentOutputReference(this, "tempo_agent");
  public get tempoAgent() {
    return this._tempoAgent;
  }
  public putTempoAgent(value: Mk8SAddOnsByokConfigTempoAgent) {
    this._tempoAgent.internalValue = value;
  }
  public resetTempoAgent() {
    this._tempoAgent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempoAgentInput() {
    return this._tempoAgent.internalValue;
  }
}
export interface Mk8SAddOnsByok {
  /**
  * Fine-grained configuration for the BYOK workloads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#config Mk8S#config}
  */
  readonly config?: Mk8SAddOnsByokConfig;
  /**
  * Disable Control Plane managed upgrades for BYOK components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#ignore_updates Mk8S#ignore_updates}
  */
  readonly ignoreUpdates?: boolean | cdktf.IResolvable;
  /**
  * The full link of a BYOK location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#location Mk8S#location}
  */
  readonly location: string;
}

export function mk8SAddOnsByokToTerraform(struct?: Mk8SAddOnsByok | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: mk8SAddOnsByokConfigToTerraform(struct!.config),
    ignore_updates: cdktf.booleanToTerraform(struct!.ignoreUpdates),
    location: cdktf.stringToTerraform(struct!.location),
  }
}


export function mk8SAddOnsByokToHclTerraform(struct?: Mk8SAddOnsByok | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: mk8SAddOnsByokConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByokConfig",
    },
    ignore_updates: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsByokOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SAddOnsByok | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._ignoreUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUpdates = this._ignoreUpdates;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsByok | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._ignoreUpdates = undefined;
      this._location = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._ignoreUpdates = value.ignoreUpdates;
      this._location = value.location;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new Mk8SAddOnsByokConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: Mk8SAddOnsByokConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // ignore_updates - computed: false, optional: true, required: false
  private _ignoreUpdates?: boolean | cdktf.IResolvable; 
  public get ignoreUpdates() {
    return this.getBooleanAttribute('ignore_updates');
  }
  public set ignoreUpdates(value: boolean | cdktf.IResolvable) {
    this._ignoreUpdates = value;
  }
  public resetIgnoreUpdates() {
    this._ignoreUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUpdatesInput() {
    return this._ignoreUpdates;
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
}
export interface Mk8SAddOnsAwsEcr {
  /**
  * Role to use when authorizing ECR pulls. Optional on AWS, in which case it will use the instance role to pull.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#role_arn Mk8S#role_arn}
  */
  readonly roleArn?: string;
}

export function mk8SAddOnsAwsEcrToTerraform(struct?: Mk8SAddOnsAwsEcr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function mk8SAddOnsAwsEcrToHclTerraform(struct?: Mk8SAddOnsAwsEcr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsAwsEcrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsAwsEcr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsAwsEcr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class Mk8SAddOnsAwsEcrList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsAwsEcr[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsAwsEcrOutputReference {
    return new Mk8SAddOnsAwsEcrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsAwsEfs {
  /**
  * Use this role for EFS interaction.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#role_arn Mk8S#role_arn}
  */
  readonly roleArn?: string;
}

export function mk8SAddOnsAwsEfsToTerraform(struct?: Mk8SAddOnsAwsEfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function mk8SAddOnsAwsEfsToHclTerraform(struct?: Mk8SAddOnsAwsEfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsAwsEfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsAwsEfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsAwsEfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class Mk8SAddOnsAwsEfsList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsAwsEfs[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsAwsEfsOutputReference {
    return new Mk8SAddOnsAwsEfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsAwsElb {
  /**
  * Role to use when authorizing calls to EC2 ELB. Optional on AWS, when not provided it will create the recommended role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#role_arn Mk8S#role_arn}
  */
  readonly roleArn?: string;
}

export function mk8SAddOnsAwsElbToTerraform(struct?: Mk8SAddOnsAwsElb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
  }
}


export function mk8SAddOnsAwsElbToHclTerraform(struct?: Mk8SAddOnsAwsElb | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsAwsElbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsAwsElb | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsAwsElb | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._roleArn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._roleArn = value.roleArn;
    }
  }

  // role_arn - computed: false, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }
}

export class Mk8SAddOnsAwsElbList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsAwsElb[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsAwsElbOutputReference {
    return new Mk8SAddOnsAwsElbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsAzureAcr {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#client_id Mk8S#client_id}
  */
  readonly clientId: string;
}

export function mk8SAddOnsAzureAcrToTerraform(struct?: Mk8SAddOnsAzureAcr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
  }
}


export function mk8SAddOnsAzureAcrToHclTerraform(struct?: Mk8SAddOnsAzureAcr | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsAzureAcrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsAzureAcr | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsAzureAcr | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }
}

export class Mk8SAddOnsAzureAcrList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsAzureAcr[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsAzureAcrOutputReference {
    return new Mk8SAddOnsAzureAcrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsAzureWorkloadIdentity {
  /**
  * Tenant ID to use for workload identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#tenant_id Mk8S#tenant_id}
  */
  readonly tenantId?: string;
}

export function mk8SAddOnsAzureWorkloadIdentityToTerraform(struct?: Mk8SAddOnsAzureWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function mk8SAddOnsAzureWorkloadIdentityToHclTerraform(struct?: Mk8SAddOnsAzureWorkloadIdentity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsAzureWorkloadIdentityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsAzureWorkloadIdentity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsAzureWorkloadIdentity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tenantId = value.tenantId;
    }
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class Mk8SAddOnsAzureWorkloadIdentityList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsAzureWorkloadIdentity[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsAzureWorkloadIdentityOutputReference {
    return new Mk8SAddOnsAzureWorkloadIdentityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsLogs {
  /**
  * Collect k8s audit log as log events.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#audit_enabled Mk8S#audit_enabled}
  */
  readonly auditEnabled?: boolean | cdktf.IResolvable;
  /**
  * Collect docker logs if docker is also running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#docker Mk8S#docker}
  */
  readonly docker?: boolean | cdktf.IResolvable;
  /**
  * Collect K8S events from all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#events Mk8S#events}
  */
  readonly events?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#exclude_namespaces Mk8S#exclude_namespaces}
  */
  readonly excludeNamespaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#include_namespaces Mk8S#include_namespaces}
  */
  readonly includeNamespaces?: string;
  /**
  * Collect kernel logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#kernel Mk8S#kernel}
  */
  readonly kernel?: boolean | cdktf.IResolvable;
  /**
  * Collect kubelet logs from journald.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#kubelet Mk8S#kubelet}
  */
  readonly kubelet?: boolean | cdktf.IResolvable;
}

export function mk8SAddOnsLogsToTerraform(struct?: Mk8SAddOnsLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audit_enabled: cdktf.booleanToTerraform(struct!.auditEnabled),
    docker: cdktf.booleanToTerraform(struct!.docker),
    events: cdktf.booleanToTerraform(struct!.events),
    exclude_namespaces: cdktf.stringToTerraform(struct!.excludeNamespaces),
    include_namespaces: cdktf.stringToTerraform(struct!.includeNamespaces),
    kernel: cdktf.booleanToTerraform(struct!.kernel),
    kubelet: cdktf.booleanToTerraform(struct!.kubelet),
  }
}


export function mk8SAddOnsLogsToHclTerraform(struct?: Mk8SAddOnsLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.auditEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    docker: {
      value: cdktf.booleanToHclTerraform(struct!.docker),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    events: {
      value: cdktf.booleanToHclTerraform(struct!.events),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_namespaces: {
      value: cdktf.stringToHclTerraform(struct!.excludeNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_namespaces: {
      value: cdktf.stringToHclTerraform(struct!.includeNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kernel: {
      value: cdktf.booleanToHclTerraform(struct!.kernel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kubelet: {
      value: cdktf.booleanToHclTerraform(struct!.kubelet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auditEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.auditEnabled = this._auditEnabled;
    }
    if (this._docker !== undefined) {
      hasAnyValues = true;
      internalValueResult.docker = this._docker;
    }
    if (this._events !== undefined) {
      hasAnyValues = true;
      internalValueResult.events = this._events;
    }
    if (this._excludeNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeNamespaces = this._excludeNamespaces;
    }
    if (this._includeNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNamespaces = this._includeNamespaces;
    }
    if (this._kernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.kernel = this._kernel;
    }
    if (this._kubelet !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubelet = this._kubelet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auditEnabled = undefined;
      this._docker = undefined;
      this._events = undefined;
      this._excludeNamespaces = undefined;
      this._includeNamespaces = undefined;
      this._kernel = undefined;
      this._kubelet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auditEnabled = value.auditEnabled;
      this._docker = value.docker;
      this._events = value.events;
      this._excludeNamespaces = value.excludeNamespaces;
      this._includeNamespaces = value.includeNamespaces;
      this._kernel = value.kernel;
      this._kubelet = value.kubelet;
    }
  }

  // audit_enabled - computed: false, optional: true, required: false
  private _auditEnabled?: boolean | cdktf.IResolvable; 
  public get auditEnabled() {
    return this.getBooleanAttribute('audit_enabled');
  }
  public set auditEnabled(value: boolean | cdktf.IResolvable) {
    this._auditEnabled = value;
  }
  public resetAuditEnabled() {
    this._auditEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditEnabledInput() {
    return this._auditEnabled;
  }

  // docker - computed: false, optional: true, required: false
  private _docker?: boolean | cdktf.IResolvable; 
  public get docker() {
    return this.getBooleanAttribute('docker');
  }
  public set docker(value: boolean | cdktf.IResolvable) {
    this._docker = value;
  }
  public resetDocker() {
    this._docker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerInput() {
    return this._docker;
  }

  // events - computed: false, optional: true, required: false
  private _events?: boolean | cdktf.IResolvable; 
  public get events() {
    return this.getBooleanAttribute('events');
  }
  public set events(value: boolean | cdktf.IResolvable) {
    this._events = value;
  }
  public resetEvents() {
    this._events = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsInput() {
    return this._events;
  }

  // exclude_namespaces - computed: false, optional: true, required: false
  private _excludeNamespaces?: string; 
  public get excludeNamespaces() {
    return this.getStringAttribute('exclude_namespaces');
  }
  public set excludeNamespaces(value: string) {
    this._excludeNamespaces = value;
  }
  public resetExcludeNamespaces() {
    this._excludeNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNamespacesInput() {
    return this._excludeNamespaces;
  }

  // include_namespaces - computed: false, optional: true, required: false
  private _includeNamespaces?: string; 
  public get includeNamespaces() {
    return this.getStringAttribute('include_namespaces');
  }
  public set includeNamespaces(value: string) {
    this._includeNamespaces = value;
  }
  public resetIncludeNamespaces() {
    this._includeNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNamespacesInput() {
    return this._includeNamespaces;
  }

  // kernel - computed: false, optional: true, required: false
  private _kernel?: boolean | cdktf.IResolvable; 
  public get kernel() {
    return this.getBooleanAttribute('kernel');
  }
  public set kernel(value: boolean | cdktf.IResolvable) {
    this._kernel = value;
  }
  public resetKernel() {
    this._kernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kernelInput() {
    return this._kernel;
  }

  // kubelet - computed: false, optional: true, required: false
  private _kubelet?: boolean | cdktf.IResolvable; 
  public get kubelet() {
    return this.getBooleanAttribute('kubelet');
  }
  public set kubelet(value: boolean | cdktf.IResolvable) {
    this._kubelet = value;
  }
  public resetKubelet() {
    this._kubelet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletInput() {
    return this._kubelet;
  }
}

export class Mk8SAddOnsLogsList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsLogs[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsLogsOutputReference {
    return new Mk8SAddOnsLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsMetricsScrapeAnnotated {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#exclude_namespaces Mk8S#exclude_namespaces}
  */
  readonly excludeNamespaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#include_namespaces Mk8S#include_namespaces}
  */
  readonly includeNamespaces?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#interval_seconds Mk8S#interval_seconds}
  */
  readonly intervalSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#retain_labels Mk8S#retain_labels}
  */
  readonly retainLabels?: string;
}

export function mk8SAddOnsMetricsScrapeAnnotatedToTerraform(struct?: Mk8SAddOnsMetricsScrapeAnnotated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_namespaces: cdktf.stringToTerraform(struct!.excludeNamespaces),
    include_namespaces: cdktf.stringToTerraform(struct!.includeNamespaces),
    interval_seconds: cdktf.numberToTerraform(struct!.intervalSeconds),
    retain_labels: cdktf.stringToTerraform(struct!.retainLabels),
  }
}


export function mk8SAddOnsMetricsScrapeAnnotatedToHclTerraform(struct?: Mk8SAddOnsMetricsScrapeAnnotated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_namespaces: {
      value: cdktf.stringToHclTerraform(struct!.excludeNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_namespaces: {
      value: cdktf.stringToHclTerraform(struct!.includeNamespaces),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retain_labels: {
      value: cdktf.stringToHclTerraform(struct!.retainLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsMetricsScrapeAnnotatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsMetricsScrapeAnnotated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeNamespaces = this._excludeNamespaces;
    }
    if (this._includeNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNamespaces = this._includeNamespaces;
    }
    if (this._intervalSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalSeconds = this._intervalSeconds;
    }
    if (this._retainLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.retainLabels = this._retainLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsMetricsScrapeAnnotated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._excludeNamespaces = undefined;
      this._includeNamespaces = undefined;
      this._intervalSeconds = undefined;
      this._retainLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._excludeNamespaces = value.excludeNamespaces;
      this._includeNamespaces = value.includeNamespaces;
      this._intervalSeconds = value.intervalSeconds;
      this._retainLabels = value.retainLabels;
    }
  }

  // exclude_namespaces - computed: false, optional: true, required: false
  private _excludeNamespaces?: string; 
  public get excludeNamespaces() {
    return this.getStringAttribute('exclude_namespaces');
  }
  public set excludeNamespaces(value: string) {
    this._excludeNamespaces = value;
  }
  public resetExcludeNamespaces() {
    this._excludeNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNamespacesInput() {
    return this._excludeNamespaces;
  }

  // include_namespaces - computed: false, optional: true, required: false
  private _includeNamespaces?: string; 
  public get includeNamespaces() {
    return this.getStringAttribute('include_namespaces');
  }
  public set includeNamespaces(value: string) {
    this._includeNamespaces = value;
  }
  public resetIncludeNamespaces() {
    this._includeNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNamespacesInput() {
    return this._includeNamespaces;
  }

  // interval_seconds - computed: true, optional: true, required: false
  private _intervalSeconds?: number; 
  public get intervalSeconds() {
    return this.getNumberAttribute('interval_seconds');
  }
  public set intervalSeconds(value: number) {
    this._intervalSeconds = value;
  }
  public resetIntervalSeconds() {
    this._intervalSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalSecondsInput() {
    return this._intervalSeconds;
  }

  // retain_labels - computed: false, optional: true, required: false
  private _retainLabels?: string; 
  public get retainLabels() {
    return this.getStringAttribute('retain_labels');
  }
  public set retainLabels(value: string) {
    this._retainLabels = value;
  }
  public resetRetainLabels() {
    this._retainLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainLabelsInput() {
    return this._retainLabels;
  }
}

export class Mk8SAddOnsMetricsScrapeAnnotatedList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsMetricsScrapeAnnotated[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsMetricsScrapeAnnotatedOutputReference {
    return new Mk8SAddOnsMetricsScrapeAnnotatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsMetrics {
  /**
  * Enable scraping apiserver stats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#api_server Mk8S#api_server}
  */
  readonly apiServer?: boolean | cdktf.IResolvable;
  /**
  * Enable CNI-level container stats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#cadvisor Mk8S#cadvisor}
  */
  readonly cadvisor?: boolean | cdktf.IResolvable;
  /**
  * Enable scraping of core-dns service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#core_dns Mk8S#core_dns}
  */
  readonly coreDns?: boolean | cdktf.IResolvable;
  /**
  * Enable kube-state metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#kube_state Mk8S#kube_state}
  */
  readonly kubeState?: boolean | cdktf.IResolvable;
  /**
  * Enable scraping kubelet stats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#kubelet Mk8S#kubelet}
  */
  readonly kubelet?: boolean | cdktf.IResolvable;
  /**
  * Enable collecting node-level stats (disk, network, filesystem, etc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_exporter Mk8S#node_exporter}
  */
  readonly nodeExporter?: boolean | cdktf.IResolvable;
  /**
  * scrape_annotated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#scrape_annotated Mk8S#scrape_annotated}
  */
  readonly scrapeAnnotated?: Mk8SAddOnsMetricsScrapeAnnotated[] | cdktf.IResolvable;
}

export function mk8SAddOnsMetricsToTerraform(struct?: Mk8SAddOnsMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_server: cdktf.booleanToTerraform(struct!.apiServer),
    cadvisor: cdktf.booleanToTerraform(struct!.cadvisor),
    core_dns: cdktf.booleanToTerraform(struct!.coreDns),
    kube_state: cdktf.booleanToTerraform(struct!.kubeState),
    kubelet: cdktf.booleanToTerraform(struct!.kubelet),
    node_exporter: cdktf.booleanToTerraform(struct!.nodeExporter),
    scrape_annotated: cdktf.listMapper(mk8SAddOnsMetricsScrapeAnnotatedToTerraform, true)(struct!.scrapeAnnotated),
  }
}


export function mk8SAddOnsMetricsToHclTerraform(struct?: Mk8SAddOnsMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_server: {
      value: cdktf.booleanToHclTerraform(struct!.apiServer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cadvisor: {
      value: cdktf.booleanToHclTerraform(struct!.cadvisor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    core_dns: {
      value: cdktf.booleanToHclTerraform(struct!.coreDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kube_state: {
      value: cdktf.booleanToHclTerraform(struct!.kubeState),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kubelet: {
      value: cdktf.booleanToHclTerraform(struct!.kubelet),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_exporter: {
      value: cdktf.booleanToHclTerraform(struct!.nodeExporter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scrape_annotated: {
      value: cdktf.listMapperHcl(mk8SAddOnsMetricsScrapeAnnotatedToHclTerraform, true)(struct!.scrapeAnnotated),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAddOnsMetricsScrapeAnnotatedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiServer = this._apiServer;
    }
    if (this._cadvisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.cadvisor = this._cadvisor;
    }
    if (this._coreDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreDns = this._coreDns;
    }
    if (this._kubeState !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeState = this._kubeState;
    }
    if (this._kubelet !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubelet = this._kubelet;
    }
    if (this._nodeExporter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeExporter = this._nodeExporter;
    }
    if (this._scrapeAnnotated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scrapeAnnotated = this._scrapeAnnotated?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiServer = undefined;
      this._cadvisor = undefined;
      this._coreDns = undefined;
      this._kubeState = undefined;
      this._kubelet = undefined;
      this._nodeExporter = undefined;
      this._scrapeAnnotated.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiServer = value.apiServer;
      this._cadvisor = value.cadvisor;
      this._coreDns = value.coreDns;
      this._kubeState = value.kubeState;
      this._kubelet = value.kubelet;
      this._nodeExporter = value.nodeExporter;
      this._scrapeAnnotated.internalValue = value.scrapeAnnotated;
    }
  }

  // api_server - computed: false, optional: true, required: false
  private _apiServer?: boolean | cdktf.IResolvable; 
  public get apiServer() {
    return this.getBooleanAttribute('api_server');
  }
  public set apiServer(value: boolean | cdktf.IResolvable) {
    this._apiServer = value;
  }
  public resetApiServer() {
    this._apiServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiServerInput() {
    return this._apiServer;
  }

  // cadvisor - computed: false, optional: true, required: false
  private _cadvisor?: boolean | cdktf.IResolvable; 
  public get cadvisor() {
    return this.getBooleanAttribute('cadvisor');
  }
  public set cadvisor(value: boolean | cdktf.IResolvable) {
    this._cadvisor = value;
  }
  public resetCadvisor() {
    this._cadvisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cadvisorInput() {
    return this._cadvisor;
  }

  // core_dns - computed: false, optional: true, required: false
  private _coreDns?: boolean | cdktf.IResolvable; 
  public get coreDns() {
    return this.getBooleanAttribute('core_dns');
  }
  public set coreDns(value: boolean | cdktf.IResolvable) {
    this._coreDns = value;
  }
  public resetCoreDns() {
    this._coreDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreDnsInput() {
    return this._coreDns;
  }

  // kube_state - computed: false, optional: true, required: false
  private _kubeState?: boolean | cdktf.IResolvable; 
  public get kubeState() {
    return this.getBooleanAttribute('kube_state');
  }
  public set kubeState(value: boolean | cdktf.IResolvable) {
    this._kubeState = value;
  }
  public resetKubeState() {
    this._kubeState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeStateInput() {
    return this._kubeState;
  }

  // kubelet - computed: false, optional: true, required: false
  private _kubelet?: boolean | cdktf.IResolvable; 
  public get kubelet() {
    return this.getBooleanAttribute('kubelet');
  }
  public set kubelet(value: boolean | cdktf.IResolvable) {
    this._kubelet = value;
  }
  public resetKubelet() {
    this._kubelet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeletInput() {
    return this._kubelet;
  }

  // node_exporter - computed: false, optional: true, required: false
  private _nodeExporter?: boolean | cdktf.IResolvable; 
  public get nodeExporter() {
    return this.getBooleanAttribute('node_exporter');
  }
  public set nodeExporter(value: boolean | cdktf.IResolvable) {
    this._nodeExporter = value;
  }
  public resetNodeExporter() {
    this._nodeExporter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeExporterInput() {
    return this._nodeExporter;
  }

  // scrape_annotated - computed: false, optional: true, required: false
  private _scrapeAnnotated = new Mk8SAddOnsMetricsScrapeAnnotatedList(this, "scrape_annotated", false);
  public get scrapeAnnotated() {
    return this._scrapeAnnotated;
  }
  public putScrapeAnnotated(value: Mk8SAddOnsMetricsScrapeAnnotated[] | cdktf.IResolvable) {
    this._scrapeAnnotated.internalValue = value;
  }
  public resetScrapeAnnotated() {
    this._scrapeAnnotated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scrapeAnnotatedInput() {
    return this._scrapeAnnotated.internalValue;
  }
}

export class Mk8SAddOnsMetricsList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsMetrics[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsMetricsOutputReference {
    return new Mk8SAddOnsMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsNvidia {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint_gpu_nodes Mk8S#taint_gpu_nodes}
  */
  readonly taintGpuNodes?: boolean | cdktf.IResolvable;
}

export function mk8SAddOnsNvidiaToTerraform(struct?: Mk8SAddOnsNvidia | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    taint_gpu_nodes: cdktf.booleanToTerraform(struct!.taintGpuNodes),
  }
}


export function mk8SAddOnsNvidiaToHclTerraform(struct?: Mk8SAddOnsNvidia | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    taint_gpu_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.taintGpuNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsNvidiaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsNvidia | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._taintGpuNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.taintGpuNodes = this._taintGpuNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsNvidia | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._taintGpuNodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._taintGpuNodes = value.taintGpuNodes;
    }
  }

  // taint_gpu_nodes - computed: false, optional: true, required: false
  private _taintGpuNodes?: boolean | cdktf.IResolvable; 
  public get taintGpuNodes() {
    return this.getBooleanAttribute('taint_gpu_nodes');
  }
  public set taintGpuNodes(value: boolean | cdktf.IResolvable) {
    this._taintGpuNodes = value;
  }
  public resetTaintGpuNodes() {
    this._taintGpuNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintGpuNodesInput() {
    return this._taintGpuNodes;
  }
}

export class Mk8SAddOnsNvidiaList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsNvidia[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsNvidiaOutputReference {
    return new Mk8SAddOnsNvidiaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsRegistryMirrorMirror {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#mirrors Mk8S#mirrors}
  */
  readonly mirrors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#registry Mk8S#registry}
  */
  readonly registry: string;
}

export function mk8SAddOnsRegistryMirrorMirrorToTerraform(struct?: Mk8SAddOnsRegistryMirrorMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirrors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mirrors),
    registry: cdktf.stringToTerraform(struct!.registry),
  }
}


export function mk8SAddOnsRegistryMirrorMirrorToHclTerraform(struct?: Mk8SAddOnsRegistryMirrorMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirrors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mirrors),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsRegistryMirrorMirrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsRegistryMirrorMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirrors = this._mirrors;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsRegistryMirrorMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirrors = undefined;
      this._registry = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirrors = value.mirrors;
      this._registry = value.registry;
    }
  }

  // mirrors - computed: false, optional: true, required: false
  private _mirrors?: string[]; 
  public get mirrors() {
    return cdktf.Fn.tolist(this.getListAttribute('mirrors'));
  }
  public set mirrors(value: string[]) {
    this._mirrors = value;
  }
  public resetMirrors() {
    this._mirrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorsInput() {
    return this._mirrors;
  }

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }
}

export class Mk8SAddOnsRegistryMirrorMirrorList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsRegistryMirrorMirror[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsRegistryMirrorMirrorOutputReference {
    return new Mk8SAddOnsRegistryMirrorMirrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOnsRegistryMirror {
  /**
  * mirror block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#mirror Mk8S#mirror}
  */
  readonly mirror?: Mk8SAddOnsRegistryMirrorMirror[] | cdktf.IResolvable;
}

export function mk8SAddOnsRegistryMirrorToTerraform(struct?: Mk8SAddOnsRegistryMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mirror: cdktf.listMapper(mk8SAddOnsRegistryMirrorMirrorToTerraform, true)(struct!.mirror),
  }
}


export function mk8SAddOnsRegistryMirrorToHclTerraform(struct?: Mk8SAddOnsRegistryMirror | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mirror: {
      value: cdktf.listMapperHcl(mk8SAddOnsRegistryMirrorMirrorToHclTerraform, true)(struct!.mirror),
      isBlock: true,
      type: "set",
      storageClassType: "Mk8SAddOnsRegistryMirrorMirrorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsRegistryMirrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOnsRegistryMirror | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mirror = this._mirror?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOnsRegistryMirror | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mirror.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mirror.internalValue = value.mirror;
    }
  }

  // mirror - computed: false, optional: true, required: false
  private _mirror = new Mk8SAddOnsRegistryMirrorMirrorList(this, "mirror", true);
  public get mirror() {
    return this._mirror;
  }
  public putMirror(value: Mk8SAddOnsRegistryMirrorMirror[] | cdktf.IResolvable) {
    this._mirror.internalValue = value;
  }
  public resetMirror() {
    this._mirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mirrorInput() {
    return this._mirror.internalValue;
  }
}

export class Mk8SAddOnsRegistryMirrorList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOnsRegistryMirror[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsRegistryMirrorOutputReference {
    return new Mk8SAddOnsRegistryMirrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAddOns {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#aws_workload_identity Mk8S#aws_workload_identity}
  */
  readonly awsWorkloadIdentity?: boolean | cdktf.IResolvable;
  /**
  * Bring-your-own Kubernetes (BYOK) add-on settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#byok Mk8S#byok}
  */
  readonly byok?: Mk8SAddOnsByok;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#dashboard Mk8S#dashboard}
  */
  readonly dashboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#local_path_storage Mk8S#local_path_storage}
  */
  readonly localPathStorage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#sysbox Mk8S#sysbox}
  */
  readonly sysbox?: boolean | cdktf.IResolvable;
  /**
  * aws_ecr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#aws_ecr Mk8S#aws_ecr}
  */
  readonly awsEcr?: Mk8SAddOnsAwsEcr[] | cdktf.IResolvable;
  /**
  * aws_efs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#aws_efs Mk8S#aws_efs}
  */
  readonly awsEfs?: Mk8SAddOnsAwsEfs[] | cdktf.IResolvable;
  /**
  * aws_elb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#aws_elb Mk8S#aws_elb}
  */
  readonly awsElb?: Mk8SAddOnsAwsElb[] | cdktf.IResolvable;
  /**
  * azure_acr block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#azure_acr Mk8S#azure_acr}
  */
  readonly azureAcr?: Mk8SAddOnsAzureAcr[] | cdktf.IResolvable;
  /**
  * azure_workload_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#azure_workload_identity Mk8S#azure_workload_identity}
  */
  readonly azureWorkloadIdentity?: Mk8SAddOnsAzureWorkloadIdentity[] | cdktf.IResolvable;
  /**
  * logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#logs Mk8S#logs}
  */
  readonly logs?: Mk8SAddOnsLogs[] | cdktf.IResolvable;
  /**
  * metrics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#metrics Mk8S#metrics}
  */
  readonly metrics?: Mk8SAddOnsMetrics[] | cdktf.IResolvable;
  /**
  * nvidia block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#nvidia Mk8S#nvidia}
  */
  readonly nvidia?: Mk8SAddOnsNvidia[] | cdktf.IResolvable;
  /**
  * registry_mirror block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#registry_mirror Mk8S#registry_mirror}
  */
  readonly registryMirror?: Mk8SAddOnsRegistryMirror[] | cdktf.IResolvable;
}

export function mk8SAddOnsToTerraform(struct?: Mk8SAddOns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_workload_identity: cdktf.booleanToTerraform(struct!.awsWorkloadIdentity),
    byok: mk8SAddOnsByokToTerraform(struct!.byok),
    dashboard: cdktf.booleanToTerraform(struct!.dashboard),
    local_path_storage: cdktf.booleanToTerraform(struct!.localPathStorage),
    sysbox: cdktf.booleanToTerraform(struct!.sysbox),
    aws_ecr: cdktf.listMapper(mk8SAddOnsAwsEcrToTerraform, true)(struct!.awsEcr),
    aws_efs: cdktf.listMapper(mk8SAddOnsAwsEfsToTerraform, true)(struct!.awsEfs),
    aws_elb: cdktf.listMapper(mk8SAddOnsAwsElbToTerraform, true)(struct!.awsElb),
    azure_acr: cdktf.listMapper(mk8SAddOnsAzureAcrToTerraform, true)(struct!.azureAcr),
    azure_workload_identity: cdktf.listMapper(mk8SAddOnsAzureWorkloadIdentityToTerraform, true)(struct!.azureWorkloadIdentity),
    logs: cdktf.listMapper(mk8SAddOnsLogsToTerraform, true)(struct!.logs),
    metrics: cdktf.listMapper(mk8SAddOnsMetricsToTerraform, true)(struct!.metrics),
    nvidia: cdktf.listMapper(mk8SAddOnsNvidiaToTerraform, true)(struct!.nvidia),
    registry_mirror: cdktf.listMapper(mk8SAddOnsRegistryMirrorToTerraform, true)(struct!.registryMirror),
  }
}


export function mk8SAddOnsToHclTerraform(struct?: Mk8SAddOns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_workload_identity: {
      value: cdktf.booleanToHclTerraform(struct!.awsWorkloadIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    byok: {
      value: mk8SAddOnsByokToHclTerraform(struct!.byok),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SAddOnsByok",
    },
    dashboard: {
      value: cdktf.booleanToHclTerraform(struct!.dashboard),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path_storage: {
      value: cdktf.booleanToHclTerraform(struct!.localPathStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sysbox: {
      value: cdktf.booleanToHclTerraform(struct!.sysbox),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    aws_ecr: {
      value: cdktf.listMapperHcl(mk8SAddOnsAwsEcrToHclTerraform, true)(struct!.awsEcr),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAddOnsAwsEcrList",
    },
    aws_efs: {
      value: cdktf.listMapperHcl(mk8SAddOnsAwsEfsToHclTerraform, true)(struct!.awsEfs),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAddOnsAwsEfsList",
    },
    aws_elb: {
      value: cdktf.listMapperHcl(mk8SAddOnsAwsElbToHclTerraform, true)(struct!.awsElb),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAddOnsAwsElbList",
    },
    azure_acr: {
      value: cdktf.listMapperHcl(mk8SAddOnsAzureAcrToHclTerraform, true)(struct!.azureAcr),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAddOnsAzureAcrList",
    },
    azure_workload_identity: {
      value: cdktf.listMapperHcl(mk8SAddOnsAzureWorkloadIdentityToHclTerraform, true)(struct!.azureWorkloadIdentity),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAddOnsAzureWorkloadIdentityList",
    },
    logs: {
      value: cdktf.listMapperHcl(mk8SAddOnsLogsToHclTerraform, true)(struct!.logs),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAddOnsLogsList",
    },
    metrics: {
      value: cdktf.listMapperHcl(mk8SAddOnsMetricsToHclTerraform, true)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAddOnsMetricsList",
    },
    nvidia: {
      value: cdktf.listMapperHcl(mk8SAddOnsNvidiaToHclTerraform, true)(struct!.nvidia),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAddOnsNvidiaList",
    },
    registry_mirror: {
      value: cdktf.listMapperHcl(mk8SAddOnsRegistryMirrorToHclTerraform, true)(struct!.registryMirror),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAddOnsRegistryMirrorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAddOnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAddOns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsWorkloadIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsWorkloadIdentity = this._awsWorkloadIdentity;
    }
    if (this._byok?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.byok = this._byok?.internalValue;
    }
    if (this._dashboard !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboard = this._dashboard;
    }
    if (this._localPathStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPathStorage = this._localPathStorage;
    }
    if (this._sysbox !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysbox = this._sysbox;
    }
    if (this._awsEcr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEcr = this._awsEcr?.internalValue;
    }
    if (this._awsEfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEfs = this._awsEfs?.internalValue;
    }
    if (this._awsElb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsElb = this._awsElb?.internalValue;
    }
    if (this._azureAcr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureAcr = this._azureAcr?.internalValue;
    }
    if (this._azureWorkloadIdentity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureWorkloadIdentity = this._azureWorkloadIdentity?.internalValue;
    }
    if (this._logs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logs = this._logs?.internalValue;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._nvidia?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nvidia = this._nvidia?.internalValue;
    }
    if (this._registryMirror?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registryMirror = this._registryMirror?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAddOns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsWorkloadIdentity = undefined;
      this._byok.internalValue = undefined;
      this._dashboard = undefined;
      this._localPathStorage = undefined;
      this._sysbox = undefined;
      this._awsEcr.internalValue = undefined;
      this._awsEfs.internalValue = undefined;
      this._awsElb.internalValue = undefined;
      this._azureAcr.internalValue = undefined;
      this._azureWorkloadIdentity.internalValue = undefined;
      this._logs.internalValue = undefined;
      this._metrics.internalValue = undefined;
      this._nvidia.internalValue = undefined;
      this._registryMirror.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsWorkloadIdentity = value.awsWorkloadIdentity;
      this._byok.internalValue = value.byok;
      this._dashboard = value.dashboard;
      this._localPathStorage = value.localPathStorage;
      this._sysbox = value.sysbox;
      this._awsEcr.internalValue = value.awsEcr;
      this._awsEfs.internalValue = value.awsEfs;
      this._awsElb.internalValue = value.awsElb;
      this._azureAcr.internalValue = value.azureAcr;
      this._azureWorkloadIdentity.internalValue = value.azureWorkloadIdentity;
      this._logs.internalValue = value.logs;
      this._metrics.internalValue = value.metrics;
      this._nvidia.internalValue = value.nvidia;
      this._registryMirror.internalValue = value.registryMirror;
    }
  }

  // aws_workload_identity - computed: false, optional: true, required: false
  private _awsWorkloadIdentity?: boolean | cdktf.IResolvable; 
  public get awsWorkloadIdentity() {
    return this.getBooleanAttribute('aws_workload_identity');
  }
  public set awsWorkloadIdentity(value: boolean | cdktf.IResolvable) {
    this._awsWorkloadIdentity = value;
  }
  public resetAwsWorkloadIdentity() {
    this._awsWorkloadIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsWorkloadIdentityInput() {
    return this._awsWorkloadIdentity;
  }

  // byok - computed: false, optional: true, required: false
  private _byok = new Mk8SAddOnsByokOutputReference(this, "byok");
  public get byok() {
    return this._byok;
  }
  public putByok(value: Mk8SAddOnsByok) {
    this._byok.internalValue = value;
  }
  public resetByok() {
    this._byok.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byokInput() {
    return this._byok.internalValue;
  }

  // dashboard - computed: false, optional: true, required: false
  private _dashboard?: boolean | cdktf.IResolvable; 
  public get dashboard() {
    return this.getBooleanAttribute('dashboard');
  }
  public set dashboard(value: boolean | cdktf.IResolvable) {
    this._dashboard = value;
  }
  public resetDashboard() {
    this._dashboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInput() {
    return this._dashboard;
  }

  // local_path_storage - computed: false, optional: true, required: false
  private _localPathStorage?: boolean | cdktf.IResolvable; 
  public get localPathStorage() {
    return this.getBooleanAttribute('local_path_storage');
  }
  public set localPathStorage(value: boolean | cdktf.IResolvable) {
    this._localPathStorage = value;
  }
  public resetLocalPathStorage() {
    this._localPathStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathStorageInput() {
    return this._localPathStorage;
  }

  // sysbox - computed: false, optional: true, required: false
  private _sysbox?: boolean | cdktf.IResolvable; 
  public get sysbox() {
    return this.getBooleanAttribute('sysbox');
  }
  public set sysbox(value: boolean | cdktf.IResolvable) {
    this._sysbox = value;
  }
  public resetSysbox() {
    this._sysbox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysboxInput() {
    return this._sysbox;
  }

  // aws_ecr - computed: false, optional: true, required: false
  private _awsEcr = new Mk8SAddOnsAwsEcrList(this, "aws_ecr", false);
  public get awsEcr() {
    return this._awsEcr;
  }
  public putAwsEcr(value: Mk8SAddOnsAwsEcr[] | cdktf.IResolvable) {
    this._awsEcr.internalValue = value;
  }
  public resetAwsEcr() {
    this._awsEcr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEcrInput() {
    return this._awsEcr.internalValue;
  }

  // aws_efs - computed: false, optional: true, required: false
  private _awsEfs = new Mk8SAddOnsAwsEfsList(this, "aws_efs", false);
  public get awsEfs() {
    return this._awsEfs;
  }
  public putAwsEfs(value: Mk8SAddOnsAwsEfs[] | cdktf.IResolvable) {
    this._awsEfs.internalValue = value;
  }
  public resetAwsEfs() {
    this._awsEfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEfsInput() {
    return this._awsEfs.internalValue;
  }

  // aws_elb - computed: false, optional: true, required: false
  private _awsElb = new Mk8SAddOnsAwsElbList(this, "aws_elb", false);
  public get awsElb() {
    return this._awsElb;
  }
  public putAwsElb(value: Mk8SAddOnsAwsElb[] | cdktf.IResolvable) {
    this._awsElb.internalValue = value;
  }
  public resetAwsElb() {
    this._awsElb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsElbInput() {
    return this._awsElb.internalValue;
  }

  // azure_acr - computed: false, optional: true, required: false
  private _azureAcr = new Mk8SAddOnsAzureAcrList(this, "azure_acr", false);
  public get azureAcr() {
    return this._azureAcr;
  }
  public putAzureAcr(value: Mk8SAddOnsAzureAcr[] | cdktf.IResolvable) {
    this._azureAcr.internalValue = value;
  }
  public resetAzureAcr() {
    this._azureAcr.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAcrInput() {
    return this._azureAcr.internalValue;
  }

  // azure_workload_identity - computed: false, optional: true, required: false
  private _azureWorkloadIdentity = new Mk8SAddOnsAzureWorkloadIdentityList(this, "azure_workload_identity", false);
  public get azureWorkloadIdentity() {
    return this._azureWorkloadIdentity;
  }
  public putAzureWorkloadIdentity(value: Mk8SAddOnsAzureWorkloadIdentity[] | cdktf.IResolvable) {
    this._azureWorkloadIdentity.internalValue = value;
  }
  public resetAzureWorkloadIdentity() {
    this._azureWorkloadIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureWorkloadIdentityInput() {
    return this._azureWorkloadIdentity.internalValue;
  }

  // logs - computed: false, optional: true, required: false
  private _logs = new Mk8SAddOnsLogsList(this, "logs", false);
  public get logs() {
    return this._logs;
  }
  public putLogs(value: Mk8SAddOnsLogs[] | cdktf.IResolvable) {
    this._logs.internalValue = value;
  }
  public resetLogs() {
    this._logs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsInput() {
    return this._logs.internalValue;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new Mk8SAddOnsMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: Mk8SAddOnsMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // nvidia - computed: false, optional: true, required: false
  private _nvidia = new Mk8SAddOnsNvidiaList(this, "nvidia", false);
  public get nvidia() {
    return this._nvidia;
  }
  public putNvidia(value: Mk8SAddOnsNvidia[] | cdktf.IResolvable) {
    this._nvidia.internalValue = value;
  }
  public resetNvidia() {
    this._nvidia.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nvidiaInput() {
    return this._nvidia.internalValue;
  }

  // registry_mirror - computed: false, optional: true, required: false
  private _registryMirror = new Mk8SAddOnsRegistryMirrorList(this, "registry_mirror", false);
  public get registryMirror() {
    return this._registryMirror;
  }
  public putRegistryMirror(value: Mk8SAddOnsRegistryMirror[] | cdktf.IResolvable) {
    this._registryMirror.internalValue = value;
  }
  public resetRegistryMirror() {
    this._registryMirror.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryMirrorInput() {
    return this._registryMirror.internalValue;
  }
}

export class Mk8SAddOnsList extends cdktf.ComplexList {
  public internalValue? : Mk8SAddOns[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAddOnsOutputReference {
    return new Mk8SAddOnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAwsProviderAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#expander Mk8S#expander}
  */
  readonly expander?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unneeded_time Mk8S#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unready_time Mk8S#unready_time}
  */
  readonly unreadyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#utilization_threshold Mk8S#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
}

export function mk8SAwsProviderAutoscalerToTerraform(struct?: Mk8SAwsProviderAutoscaler | cdktf.IResolvable): any {
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


export function mk8SAwsProviderAutoscalerToHclTerraform(struct?: Mk8SAwsProviderAutoscaler | cdktf.IResolvable): any {
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

export class Mk8SAwsProviderAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAwsProviderAutoscaler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SAwsProviderAutoscaler | cdktf.IResolvable | undefined) {
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

export class Mk8SAwsProviderAutoscalerList extends cdktf.ComplexList {
  public internalValue? : Mk8SAwsProviderAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAwsProviderAutoscalerOutputReference {
    return new Mk8SAwsProviderAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAwsProviderDeployRoleChain {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#external_id Mk8S#external_id}
  */
  readonly externalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#role_arn Mk8S#role_arn}
  */
  readonly roleArn: string;
  /**
  * Control Plane will set up the cluster by assuming this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#session_name_prefix Mk8S#session_name_prefix}
  */
  readonly sessionNamePrefix?: string;
}

export function mk8SAwsProviderDeployRoleChainToTerraform(struct?: Mk8SAwsProviderDeployRoleChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_id: cdktf.stringToTerraform(struct!.externalId),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    session_name_prefix: cdktf.stringToTerraform(struct!.sessionNamePrefix),
  }
}


export function mk8SAwsProviderDeployRoleChainToHclTerraform(struct?: Mk8SAwsProviderDeployRoleChain | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_id: {
      value: cdktf.stringToHclTerraform(struct!.externalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sessionNamePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAwsProviderDeployRoleChainOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAwsProviderDeployRoleChain | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalId = this._externalId;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._sessionNamePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionNamePrefix = this._sessionNamePrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAwsProviderDeployRoleChain | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalId = undefined;
      this._roleArn = undefined;
      this._sessionNamePrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalId = value.externalId;
      this._roleArn = value.roleArn;
      this._sessionNamePrefix = value.sessionNamePrefix;
    }
  }

  // external_id - computed: false, optional: true, required: false
  private _externalId?: string; 
  public get externalId() {
    return this.getStringAttribute('external_id');
  }
  public set externalId(value: string) {
    this._externalId = value;
  }
  public resetExternalId() {
    this._externalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdInput() {
    return this._externalId;
  }

  // role_arn - computed: false, optional: false, required: true
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // session_name_prefix - computed: false, optional: true, required: false
  private _sessionNamePrefix?: string; 
  public get sessionNamePrefix() {
    return this.getStringAttribute('session_name_prefix');
  }
  public set sessionNamePrefix(value: string) {
    this._sessionNamePrefix = value;
  }
  public resetSessionNamePrefix() {
    this._sessionNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNamePrefixInput() {
    return this._sessionNamePrefix;
  }
}

export class Mk8SAwsProviderDeployRoleChainList extends cdktf.ComplexList {
  public internalValue? : Mk8SAwsProviderDeployRoleChain[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAwsProviderDeployRoleChainOutputReference {
    return new Mk8SAwsProviderDeployRoleChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAwsProviderImage {
  /**
  * Support SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#exact Mk8S#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#recommended Mk8S#recommended}
  */
  readonly recommended?: string;
}

export function mk8SAwsProviderImageToTerraform(struct?: Mk8SAwsProviderImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    recommended: cdktf.stringToTerraform(struct!.recommended),
  }
}


export function mk8SAwsProviderImageToHclTerraform(struct?: Mk8SAwsProviderImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recommended: {
      value: cdktf.stringToHclTerraform(struct!.recommended),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAwsProviderImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAwsProviderImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._recommended !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommended = this._recommended;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAwsProviderImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._recommended = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._recommended = value.recommended;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // recommended - computed: false, optional: true, required: false
  private _recommended?: string; 
  public get recommended() {
    return this.getStringAttribute('recommended');
  }
  public set recommended(value: string) {
    this._recommended = value;
  }
  public resetRecommended() {
    this._recommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedInput() {
    return this._recommended;
  }
}

export class Mk8SAwsProviderImageList extends cdktf.ComplexList {
  public internalValue? : Mk8SAwsProviderImage[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAwsProviderImageOutputReference {
    return new Mk8SAwsProviderImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAwsProviderNetworking {
  /**
  * DNS forwarder used by the cluster. Can be a space-delimited list of dns servers. Default is /etc/resolv.conf when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#dns_forwarder Mk8S#dns_forwarder}
  */
  readonly dnsForwarder?: string;
  /**
  * The CIDR of the pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pod_network Mk8S#pod_network}
  */
  readonly podNetwork?: string;
  /**
  * The CIDR of the service network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#service_network Mk8S#service_network}
  */
  readonly serviceNetwork?: string;
}

export function mk8SAwsProviderNetworkingToTerraform(struct?: Mk8SAwsProviderNetworking | cdktf.IResolvable): any {
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


export function mk8SAwsProviderNetworkingToHclTerraform(struct?: Mk8SAwsProviderNetworking | cdktf.IResolvable): any {
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

export class Mk8SAwsProviderNetworkingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAwsProviderNetworking | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SAwsProviderNetworking | cdktf.IResolvable | undefined) {
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

export class Mk8SAwsProviderNetworkingList extends cdktf.ComplexList {
  public internalValue? : Mk8SAwsProviderNetworking[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAwsProviderNetworkingOutputReference {
    return new Mk8SAwsProviderNetworkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAwsProviderNodePoolOverrideImage {
  /**
  * Support SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#exact Mk8S#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#recommended Mk8S#recommended}
  */
  readonly recommended?: string;
}

export function mk8SAwsProviderNodePoolOverrideImageToTerraform(struct?: Mk8SAwsProviderNodePoolOverrideImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    recommended: cdktf.stringToTerraform(struct!.recommended),
  }
}


export function mk8SAwsProviderNodePoolOverrideImageToHclTerraform(struct?: Mk8SAwsProviderNodePoolOverrideImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recommended: {
      value: cdktf.stringToHclTerraform(struct!.recommended),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAwsProviderNodePoolOverrideImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAwsProviderNodePoolOverrideImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._recommended !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommended = this._recommended;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAwsProviderNodePoolOverrideImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._recommended = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._recommended = value.recommended;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // recommended - computed: false, optional: true, required: false
  private _recommended?: string; 
  public get recommended() {
    return this.getStringAttribute('recommended');
  }
  public set recommended(value: string) {
    this._recommended = value;
  }
  public resetRecommended() {
    this._recommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedInput() {
    return this._recommended;
  }
}

export class Mk8SAwsProviderNodePoolOverrideImageList extends cdktf.ComplexList {
  public internalValue? : Mk8SAwsProviderNodePoolOverrideImage[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAwsProviderNodePoolOverrideImageOutputReference {
    return new Mk8SAwsProviderNodePoolOverrideImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAwsProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SAwsProviderNodePoolTaintToTerraform(struct?: Mk8SAwsProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SAwsProviderNodePoolTaintToHclTerraform(struct?: Mk8SAwsProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SAwsProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAwsProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SAwsProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SAwsProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SAwsProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAwsProviderNodePoolTaintOutputReference {
    return new Mk8SAwsProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAwsProviderNodePool {
  /**
  * Size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#boot_disk_size Mk8S#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Security groups to deploy nodes to. Security groups control if the cluster is multi-zone or single-zon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#extra_security_group_ids Mk8S#extra_security_group_ids}
  */
  readonly extraSecurityGroupIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#instance_types Mk8S#instance_types}
  */
  readonly instanceTypes: string[];
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_size Mk8S#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_size Mk8S#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#on_demand_base_capacity Mk8S#on_demand_base_capacity}
  */
  readonly onDemandBaseCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#on_demand_percentage_above_base_capacity Mk8S#on_demand_percentage_above_base_capacity}
  */
  readonly onDemandPercentageAboveBaseCapacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#spot_allocation_strategy Mk8S#spot_allocation_strategy}
  */
  readonly spotAllocationStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#subnet_ids Mk8S#subnet_ids}
  */
  readonly subnetIds: string[];
  /**
  * override_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#override_image Mk8S#override_image}
  */
  readonly overrideImage?: Mk8SAwsProviderNodePoolOverrideImage[] | cdktf.IResolvable;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SAwsProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SAwsProviderNodePoolToTerraform(struct?: Mk8SAwsProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size: cdktf.numberToTerraform(struct!.bootDiskSize),
    extra_security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraSecurityGroupIds),
    instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypes),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    on_demand_base_capacity: cdktf.numberToTerraform(struct!.onDemandBaseCapacity),
    on_demand_percentage_above_base_capacity: cdktf.numberToTerraform(struct!.onDemandPercentageAboveBaseCapacity),
    spot_allocation_strategy: cdktf.stringToTerraform(struct!.spotAllocationStrategy),
    subnet_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subnetIds),
    override_image: cdktf.listMapper(mk8SAwsProviderNodePoolOverrideImageToTerraform, true)(struct!.overrideImage),
    taint: cdktf.listMapper(mk8SAwsProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SAwsProviderNodePoolToHclTerraform(struct?: Mk8SAwsProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extra_security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraSecurityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
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
    on_demand_base_capacity: {
      value: cdktf.numberToHclTerraform(struct!.onDemandBaseCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_demand_percentage_above_base_capacity: {
      value: cdktf.numberToHclTerraform(struct!.onDemandPercentageAboveBaseCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_allocation_strategy: {
      value: cdktf.stringToHclTerraform(struct!.spotAllocationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subnetIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    override_image: {
      value: cdktf.listMapperHcl(mk8SAwsProviderNodePoolOverrideImageToHclTerraform, true)(struct!.overrideImage),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAwsProviderNodePoolOverrideImageList",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8SAwsProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAwsProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAwsProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAwsProviderNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._extraSecurityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraSecurityGroupIds = this._extraSecurityGroupIds;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
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
    if (this._onDemandBaseCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandBaseCapacity = this._onDemandBaseCapacity;
    }
    if (this._onDemandPercentageAboveBaseCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemandPercentageAboveBaseCapacity = this._onDemandPercentageAboveBaseCapacity;
    }
    if (this._spotAllocationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotAllocationStrategy = this._spotAllocationStrategy;
    }
    if (this._subnetIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIds = this._subnetIds;
    }
    if (this._overrideImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideImage = this._overrideImage?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAwsProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDiskSize = undefined;
      this._extraSecurityGroupIds = undefined;
      this._instanceTypes = undefined;
      this._labels = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._onDemandBaseCapacity = undefined;
      this._onDemandPercentageAboveBaseCapacity = undefined;
      this._spotAllocationStrategy = undefined;
      this._subnetIds = undefined;
      this._overrideImage.internalValue = undefined;
      this._taint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDiskSize = value.bootDiskSize;
      this._extraSecurityGroupIds = value.extraSecurityGroupIds;
      this._instanceTypes = value.instanceTypes;
      this._labels = value.labels;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._name = value.name;
      this._onDemandBaseCapacity = value.onDemandBaseCapacity;
      this._onDemandPercentageAboveBaseCapacity = value.onDemandPercentageAboveBaseCapacity;
      this._spotAllocationStrategy = value.spotAllocationStrategy;
      this._subnetIds = value.subnetIds;
      this._overrideImage.internalValue = value.overrideImage;
      this._taint.internalValue = value.taint;
    }
  }

  // boot_disk_size - computed: true, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
  }

  // extra_security_group_ids - computed: false, optional: true, required: false
  private _extraSecurityGroupIds?: string[]; 
  public get extraSecurityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('extra_security_group_ids'));
  }
  public set extraSecurityGroupIds(value: string[]) {
    this._extraSecurityGroupIds = value;
  }
  public resetExtraSecurityGroupIds() {
    this._extraSecurityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraSecurityGroupIdsInput() {
    return this._extraSecurityGroupIds;
  }

  // instance_types - computed: false, optional: false, required: true
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_types'));
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
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

  // on_demand_base_capacity - computed: true, optional: true, required: false
  private _onDemandBaseCapacity?: number; 
  public get onDemandBaseCapacity() {
    return this.getNumberAttribute('on_demand_base_capacity');
  }
  public set onDemandBaseCapacity(value: number) {
    this._onDemandBaseCapacity = value;
  }
  public resetOnDemandBaseCapacity() {
    this._onDemandBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandBaseCapacityInput() {
    return this._onDemandBaseCapacity;
  }

  // on_demand_percentage_above_base_capacity - computed: true, optional: true, required: false
  private _onDemandPercentageAboveBaseCapacity?: number; 
  public get onDemandPercentageAboveBaseCapacity() {
    return this.getNumberAttribute('on_demand_percentage_above_base_capacity');
  }
  public set onDemandPercentageAboveBaseCapacity(value: number) {
    this._onDemandPercentageAboveBaseCapacity = value;
  }
  public resetOnDemandPercentageAboveBaseCapacity() {
    this._onDemandPercentageAboveBaseCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandPercentageAboveBaseCapacityInput() {
    return this._onDemandPercentageAboveBaseCapacity;
  }

  // spot_allocation_strategy - computed: true, optional: true, required: false
  private _spotAllocationStrategy?: string; 
  public get spotAllocationStrategy() {
    return this.getStringAttribute('spot_allocation_strategy');
  }
  public set spotAllocationStrategy(value: string) {
    this._spotAllocationStrategy = value;
  }
  public resetSpotAllocationStrategy() {
    this._spotAllocationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotAllocationStrategyInput() {
    return this._spotAllocationStrategy;
  }

  // subnet_ids - computed: false, optional: false, required: true
  private _subnetIds?: string[]; 
  public get subnetIds() {
    return cdktf.Fn.tolist(this.getListAttribute('subnet_ids'));
  }
  public set subnetIds(value: string[]) {
    this._subnetIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdsInput() {
    return this._subnetIds;
  }

  // override_image - computed: false, optional: true, required: false
  private _overrideImage = new Mk8SAwsProviderNodePoolOverrideImageList(this, "override_image", false);
  public get overrideImage() {
    return this._overrideImage;
  }
  public putOverrideImage(value: Mk8SAwsProviderNodePoolOverrideImage[] | cdktf.IResolvable) {
    this._overrideImage.internalValue = value;
  }
  public resetOverrideImage() {
    this._overrideImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideImageInput() {
    return this._overrideImage.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SAwsProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SAwsProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SAwsProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SAwsProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAwsProviderNodePoolOutputReference {
    return new Mk8SAwsProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAwsProvider {
  /**
  * Extra tags to attach to all created objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#aws_tags Mk8S#aws_tags}
  */
  readonly awsTags?: { [key: string]: string };
  /**
  * Control Plane will set up the cluster by assuming this role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#deploy_role_arn Mk8S#deploy_role_arn}
  */
  readonly deployRoleArn: string;
  /**
  * KMS key used to encrypt volumes. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#disk_encryption_key_arn Mk8S#disk_encryption_key_arn}
  */
  readonly diskEncryptionKeyArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#extra_node_policies Mk8S#extra_node_policies}
  */
  readonly extraNodePolicies?: string[];
  /**
  * Name of keyPair. Supports SSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key_pair Mk8S#key_pair}
  */
  readonly keyPair?: string;
  /**
  * Optional shell script that will be run before K8s is installed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pre_install_script Mk8S#pre_install_script}
  */
  readonly preInstallScript?: string;
  /**
  * Region where the cluster nodes will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#region Mk8S#region}
  */
  readonly region: string;
  /**
  * Security groups to deploy nodes to. Security groups control if the cluster is multi-zone or single-zon.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#security_group_ids Mk8S#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * If true, Control Plane will not create any roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#skip_create_roles Mk8S#skip_create_roles}
  */
  readonly skipCreateRoles?: boolean | cdktf.IResolvable;
  /**
  * The vpc where nodes will be deployed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#vpc_id Mk8S#vpc_id}
  */
  readonly vpcId: string;
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#autoscaler Mk8S#autoscaler}
  */
  readonly autoscaler?: Mk8SAwsProviderAutoscaler[] | cdktf.IResolvable;
  /**
  * deploy_role_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#deploy_role_chain Mk8S#deploy_role_chain}
  */
  readonly deployRoleChain?: Mk8SAwsProviderDeployRoleChain[] | cdktf.IResolvable;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#image Mk8S#image}
  */
  readonly image?: Mk8SAwsProviderImage[] | cdktf.IResolvable;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#networking Mk8S#networking}
  */
  readonly networking?: Mk8SAwsProviderNetworking[] | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8SAwsProviderNodePool[] | cdktf.IResolvable;
}

export function mk8SAwsProviderToTerraform(struct?: Mk8SAwsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.awsTags),
    deploy_role_arn: cdktf.stringToTerraform(struct!.deployRoleArn),
    disk_encryption_key_arn: cdktf.stringToTerraform(struct!.diskEncryptionKeyArn),
    extra_node_policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraNodePolicies),
    key_pair: cdktf.stringToTerraform(struct!.keyPair),
    pre_install_script: cdktf.stringToTerraform(struct!.preInstallScript),
    region: cdktf.stringToTerraform(struct!.region),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    skip_create_roles: cdktf.booleanToTerraform(struct!.skipCreateRoles),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    autoscaler: cdktf.listMapper(mk8SAwsProviderAutoscalerToTerraform, true)(struct!.autoscaler),
    deploy_role_chain: cdktf.listMapper(mk8SAwsProviderDeployRoleChainToTerraform, true)(struct!.deployRoleChain),
    image: cdktf.listMapper(mk8SAwsProviderImageToTerraform, true)(struct!.image),
    networking: cdktf.listMapper(mk8SAwsProviderNetworkingToTerraform, true)(struct!.networking),
    node_pool: cdktf.listMapper(mk8SAwsProviderNodePoolToTerraform, true)(struct!.nodePool),
  }
}


export function mk8SAwsProviderToHclTerraform(struct?: Mk8SAwsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.awsTags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    deploy_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.deployRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_encryption_key_arn: {
      value: cdktf.stringToHclTerraform(struct!.diskEncryptionKeyArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_node_policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraNodePolicies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    key_pair: {
      value: cdktf.stringToHclTerraform(struct!.keyPair),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    skip_create_roles: {
      value: cdktf.booleanToHclTerraform(struct!.skipCreateRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaler: {
      value: cdktf.listMapperHcl(mk8SAwsProviderAutoscalerToHclTerraform, true)(struct!.autoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAwsProviderAutoscalerList",
    },
    deploy_role_chain: {
      value: cdktf.listMapperHcl(mk8SAwsProviderDeployRoleChainToHclTerraform, true)(struct!.deployRoleChain),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAwsProviderDeployRoleChainList",
    },
    image: {
      value: cdktf.listMapperHcl(mk8SAwsProviderImageToHclTerraform, true)(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAwsProviderImageList",
    },
    networking: {
      value: cdktf.listMapperHcl(mk8SAwsProviderNetworkingToHclTerraform, true)(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAwsProviderNetworkingList",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8SAwsProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAwsProviderNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAwsProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAwsProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsTags = this._awsTags;
    }
    if (this._deployRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployRoleArn = this._deployRoleArn;
    }
    if (this._diskEncryptionKeyArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskEncryptionKeyArn = this._diskEncryptionKeyArn;
    }
    if (this._extraNodePolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraNodePolicies = this._extraNodePolicies;
    }
    if (this._keyPair !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPair = this._keyPair;
    }
    if (this._preInstallScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInstallScript = this._preInstallScript;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._skipCreateRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCreateRoles = this._skipCreateRoles;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._deployRoleChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployRoleChain = this._deployRoleChain?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
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

  public set internalValue(value: Mk8SAwsProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsTags = undefined;
      this._deployRoleArn = undefined;
      this._diskEncryptionKeyArn = undefined;
      this._extraNodePolicies = undefined;
      this._keyPair = undefined;
      this._preInstallScript = undefined;
      this._region = undefined;
      this._securityGroupIds = undefined;
      this._skipCreateRoles = undefined;
      this._vpcId = undefined;
      this._autoscaler.internalValue = undefined;
      this._deployRoleChain.internalValue = undefined;
      this._image.internalValue = undefined;
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
      this._awsTags = value.awsTags;
      this._deployRoleArn = value.deployRoleArn;
      this._diskEncryptionKeyArn = value.diskEncryptionKeyArn;
      this._extraNodePolicies = value.extraNodePolicies;
      this._keyPair = value.keyPair;
      this._preInstallScript = value.preInstallScript;
      this._region = value.region;
      this._securityGroupIds = value.securityGroupIds;
      this._skipCreateRoles = value.skipCreateRoles;
      this._vpcId = value.vpcId;
      this._autoscaler.internalValue = value.autoscaler;
      this._deployRoleChain.internalValue = value.deployRoleChain;
      this._image.internalValue = value.image;
      this._networking.internalValue = value.networking;
      this._nodePool.internalValue = value.nodePool;
    }
  }

  // aws_tags - computed: false, optional: true, required: false
  private _awsTags?: { [key: string]: string }; 
  public get awsTags() {
    return this.getStringMapAttribute('aws_tags');
  }
  public set awsTags(value: { [key: string]: string }) {
    this._awsTags = value;
  }
  public resetAwsTags() {
    this._awsTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsTagsInput() {
    return this._awsTags;
  }

  // deploy_role_arn - computed: false, optional: false, required: true
  private _deployRoleArn?: string; 
  public get deployRoleArn() {
    return this.getStringAttribute('deploy_role_arn');
  }
  public set deployRoleArn(value: string) {
    this._deployRoleArn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployRoleArnInput() {
    return this._deployRoleArn;
  }

  // disk_encryption_key_arn - computed: false, optional: true, required: false
  private _diskEncryptionKeyArn?: string; 
  public get diskEncryptionKeyArn() {
    return this.getStringAttribute('disk_encryption_key_arn');
  }
  public set diskEncryptionKeyArn(value: string) {
    this._diskEncryptionKeyArn = value;
  }
  public resetDiskEncryptionKeyArn() {
    this._diskEncryptionKeyArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskEncryptionKeyArnInput() {
    return this._diskEncryptionKeyArn;
  }

  // extra_node_policies - computed: false, optional: true, required: false
  private _extraNodePolicies?: string[]; 
  public get extraNodePolicies() {
    return cdktf.Fn.tolist(this.getListAttribute('extra_node_policies'));
  }
  public set extraNodePolicies(value: string[]) {
    this._extraNodePolicies = value;
  }
  public resetExtraNodePolicies() {
    this._extraNodePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraNodePoliciesInput() {
    return this._extraNodePolicies;
  }

  // key_pair - computed: false, optional: true, required: false
  private _keyPair?: string; 
  public get keyPair() {
    return this.getStringAttribute('key_pair');
  }
  public set keyPair(value: string) {
    this._keyPair = value;
  }
  public resetKeyPair() {
    this._keyPair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPairInput() {
    return this._keyPair;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('security_group_ids'));
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // skip_create_roles - computed: true, optional: true, required: false
  private _skipCreateRoles?: boolean | cdktf.IResolvable; 
  public get skipCreateRoles() {
    return this.getBooleanAttribute('skip_create_roles');
  }
  public set skipCreateRoles(value: boolean | cdktf.IResolvable) {
    this._skipCreateRoles = value;
  }
  public resetSkipCreateRoles() {
    this._skipCreateRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCreateRolesInput() {
    return this._skipCreateRoles;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new Mk8SAwsProviderAutoscalerList(this, "autoscaler", false);
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: Mk8SAwsProviderAutoscaler[] | cdktf.IResolvable) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // deploy_role_chain - computed: false, optional: true, required: false
  private _deployRoleChain = new Mk8SAwsProviderDeployRoleChainList(this, "deploy_role_chain", false);
  public get deployRoleChain() {
    return this._deployRoleChain;
  }
  public putDeployRoleChain(value: Mk8SAwsProviderDeployRoleChain[] | cdktf.IResolvable) {
    this._deployRoleChain.internalValue = value;
  }
  public resetDeployRoleChain() {
    this._deployRoleChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployRoleChainInput() {
    return this._deployRoleChain.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new Mk8SAwsProviderImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: Mk8SAwsProviderImage[] | cdktf.IResolvable) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new Mk8SAwsProviderNetworkingList(this, "networking", false);
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: Mk8SAwsProviderNetworking[] | cdktf.IResolvable) {
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
  private _nodePool = new Mk8SAwsProviderNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8SAwsProviderNodePool[] | cdktf.IResolvable) {
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

export class Mk8SAwsProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8SAwsProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAwsProviderOutputReference {
    return new Mk8SAwsProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAzureProviderAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#expander Mk8S#expander}
  */
  readonly expander?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unneeded_time Mk8S#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unready_time Mk8S#unready_time}
  */
  readonly unreadyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#utilization_threshold Mk8S#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
}

export function mk8SAzureProviderAutoscalerToTerraform(struct?: Mk8SAzureProviderAutoscaler | cdktf.IResolvable): any {
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


export function mk8SAzureProviderAutoscalerToHclTerraform(struct?: Mk8SAzureProviderAutoscaler | cdktf.IResolvable): any {
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

export class Mk8SAzureProviderAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAzureProviderAutoscaler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SAzureProviderAutoscaler | cdktf.IResolvable | undefined) {
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

export class Mk8SAzureProviderAutoscalerList extends cdktf.ComplexList {
  public internalValue? : Mk8SAzureProviderAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAzureProviderAutoscalerOutputReference {
    return new Mk8SAzureProviderAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAzureProviderImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#offer Mk8S#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#publisher Mk8S#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#sku Mk8S#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#version Mk8S#version}
  */
  readonly version: string;
}

export function mk8SAzureProviderImageReferenceToTerraform(struct?: Mk8SAzureProviderImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function mk8SAzureProviderImageReferenceToHclTerraform(struct?: Mk8SAzureProviderImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAzureProviderImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAzureProviderImageReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAzureProviderImageReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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
}

export class Mk8SAzureProviderImageReferenceList extends cdktf.ComplexList {
  public internalValue? : Mk8SAzureProviderImageReference[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAzureProviderImageReferenceOutputReference {
    return new Mk8SAzureProviderImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAzureProviderImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#recommended Mk8S#recommended}
  */
  readonly recommended?: string;
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#reference Mk8S#reference}
  */
  readonly reference?: Mk8SAzureProviderImageReference[] | cdktf.IResolvable;
}

export function mk8SAzureProviderImageToTerraform(struct?: Mk8SAzureProviderImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recommended: cdktf.stringToTerraform(struct!.recommended),
    reference: cdktf.listMapper(mk8SAzureProviderImageReferenceToTerraform, true)(struct!.reference),
  }
}


export function mk8SAzureProviderImageToHclTerraform(struct?: Mk8SAzureProviderImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recommended: {
      value: cdktf.stringToHclTerraform(struct!.recommended),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.listMapperHcl(mk8SAzureProviderImageReferenceToHclTerraform, true)(struct!.reference),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAzureProviderImageReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAzureProviderImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAzureProviderImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recommended !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommended = this._recommended;
    }
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAzureProviderImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recommended = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recommended = value.recommended;
      this._reference.internalValue = value.reference;
    }
  }

  // recommended - computed: false, optional: true, required: false
  private _recommended?: string; 
  public get recommended() {
    return this.getStringAttribute('recommended');
  }
  public set recommended(value: string) {
    this._recommended = value;
  }
  public resetRecommended() {
    this._recommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedInput() {
    return this._recommended;
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new Mk8SAzureProviderImageReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: Mk8SAzureProviderImageReference[] | cdktf.IResolvable) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class Mk8SAzureProviderImageList extends cdktf.ComplexList {
  public internalValue? : Mk8SAzureProviderImage[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAzureProviderImageOutputReference {
    return new Mk8SAzureProviderImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAzureProviderNetworking {
  /**
  * DNS forwarder used by the cluster. Can be a space-delimited list of dns servers. Default is /etc/resolv.conf when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#dns_forwarder Mk8S#dns_forwarder}
  */
  readonly dnsForwarder?: string;
  /**
  * The CIDR of the pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pod_network Mk8S#pod_network}
  */
  readonly podNetwork?: string;
  /**
  * The CIDR of the service network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#service_network Mk8S#service_network}
  */
  readonly serviceNetwork?: string;
}

export function mk8SAzureProviderNetworkingToTerraform(struct?: Mk8SAzureProviderNetworking | cdktf.IResolvable): any {
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


export function mk8SAzureProviderNetworkingToHclTerraform(struct?: Mk8SAzureProviderNetworking | cdktf.IResolvable): any {
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

export class Mk8SAzureProviderNetworkingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAzureProviderNetworking | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SAzureProviderNetworking | cdktf.IResolvable | undefined) {
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

export class Mk8SAzureProviderNetworkingList extends cdktf.ComplexList {
  public internalValue? : Mk8SAzureProviderNetworking[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAzureProviderNetworkingOutputReference {
    return new Mk8SAzureProviderNetworkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAzureProviderNodePoolOverrideImageReference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#offer Mk8S#offer}
  */
  readonly offer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#publisher Mk8S#publisher}
  */
  readonly publisher: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#sku Mk8S#sku}
  */
  readonly sku: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#version Mk8S#version}
  */
  readonly version: string;
}

export function mk8SAzureProviderNodePoolOverrideImageReferenceToTerraform(struct?: Mk8SAzureProviderNodePoolOverrideImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offer: cdktf.stringToTerraform(struct!.offer),
    publisher: cdktf.stringToTerraform(struct!.publisher),
    sku: cdktf.stringToTerraform(struct!.sku),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function mk8SAzureProviderNodePoolOverrideImageReferenceToHclTerraform(struct?: Mk8SAzureProviderNodePoolOverrideImageReference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offer: {
      value: cdktf.stringToHclTerraform(struct!.offer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    publisher: {
      value: cdktf.stringToHclTerraform(struct!.publisher),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sku: {
      value: cdktf.stringToHclTerraform(struct!.sku),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAzureProviderNodePoolOverrideImageReferenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAzureProviderNodePoolOverrideImageReference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offer !== undefined) {
      hasAnyValues = true;
      internalValueResult.offer = this._offer;
    }
    if (this._publisher !== undefined) {
      hasAnyValues = true;
      internalValueResult.publisher = this._publisher;
    }
    if (this._sku !== undefined) {
      hasAnyValues = true;
      internalValueResult.sku = this._sku;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAzureProviderNodePoolOverrideImageReference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offer = undefined;
      this._publisher = undefined;
      this._sku = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offer = value.offer;
      this._publisher = value.publisher;
      this._sku = value.sku;
      this._version = value.version;
    }
  }

  // offer - computed: false, optional: false, required: true
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // publisher - computed: false, optional: false, required: true
  private _publisher?: string; 
  public get publisher() {
    return this.getStringAttribute('publisher');
  }
  public set publisher(value: string) {
    this._publisher = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publisherInput() {
    return this._publisher;
  }

  // sku - computed: false, optional: false, required: true
  private _sku?: string; 
  public get sku() {
    return this.getStringAttribute('sku');
  }
  public set sku(value: string) {
    this._sku = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skuInput() {
    return this._sku;
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
}

export class Mk8SAzureProviderNodePoolOverrideImageReferenceList extends cdktf.ComplexList {
  public internalValue? : Mk8SAzureProviderNodePoolOverrideImageReference[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAzureProviderNodePoolOverrideImageReferenceOutputReference {
    return new Mk8SAzureProviderNodePoolOverrideImageReferenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAzureProviderNodePoolOverrideImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#recommended Mk8S#recommended}
  */
  readonly recommended?: string;
  /**
  * reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#reference Mk8S#reference}
  */
  readonly reference?: Mk8SAzureProviderNodePoolOverrideImageReference[] | cdktf.IResolvable;
}

export function mk8SAzureProviderNodePoolOverrideImageToTerraform(struct?: Mk8SAzureProviderNodePoolOverrideImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recommended: cdktf.stringToTerraform(struct!.recommended),
    reference: cdktf.listMapper(mk8SAzureProviderNodePoolOverrideImageReferenceToTerraform, true)(struct!.reference),
  }
}


export function mk8SAzureProviderNodePoolOverrideImageToHclTerraform(struct?: Mk8SAzureProviderNodePoolOverrideImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recommended: {
      value: cdktf.stringToHclTerraform(struct!.recommended),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference: {
      value: cdktf.listMapperHcl(mk8SAzureProviderNodePoolOverrideImageReferenceToHclTerraform, true)(struct!.reference),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAzureProviderNodePoolOverrideImageReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAzureProviderNodePoolOverrideImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAzureProviderNodePoolOverrideImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recommended !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommended = this._recommended;
    }
    if (this._reference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAzureProviderNodePoolOverrideImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._recommended = undefined;
      this._reference.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._recommended = value.recommended;
      this._reference.internalValue = value.reference;
    }
  }

  // recommended - computed: false, optional: true, required: false
  private _recommended?: string; 
  public get recommended() {
    return this.getStringAttribute('recommended');
  }
  public set recommended(value: string) {
    this._recommended = value;
  }
  public resetRecommended() {
    this._recommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedInput() {
    return this._recommended;
  }

  // reference - computed: false, optional: true, required: false
  private _reference = new Mk8SAzureProviderNodePoolOverrideImageReferenceList(this, "reference", false);
  public get reference() {
    return this._reference;
  }
  public putReference(value: Mk8SAzureProviderNodePoolOverrideImageReference[] | cdktf.IResolvable) {
    this._reference.internalValue = value;
  }
  public resetReference() {
    this._reference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference.internalValue;
  }
}

export class Mk8SAzureProviderNodePoolOverrideImageList extends cdktf.ComplexList {
  public internalValue? : Mk8SAzureProviderNodePoolOverrideImage[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAzureProviderNodePoolOverrideImageOutputReference {
    return new Mk8SAzureProviderNodePoolOverrideImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAzureProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SAzureProviderNodePoolTaintToTerraform(struct?: Mk8SAzureProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SAzureProviderNodePoolTaintToHclTerraform(struct?: Mk8SAzureProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SAzureProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAzureProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SAzureProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SAzureProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SAzureProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAzureProviderNodePoolTaintOutputReference {
    return new Mk8SAzureProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAzureProviderNodePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#boot_disk_size Mk8S#boot_disk_size}
  */
  readonly bootDiskSize: number;
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_size Mk8S#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_size Mk8S#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#size Mk8S#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#subnet_id Mk8S#subnet_id}
  */
  readonly subnetId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#zones Mk8S#zones}
  */
  readonly zones: number[];
  /**
  * override_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#override_image Mk8S#override_image}
  */
  readonly overrideImage?: Mk8SAzureProviderNodePoolOverrideImage[] | cdktf.IResolvable;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SAzureProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SAzureProviderNodePoolToTerraform(struct?: Mk8SAzureProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size: cdktf.numberToTerraform(struct!.bootDiskSize),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.stringToTerraform(struct!.size),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    zones: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.zones),
    override_image: cdktf.listMapper(mk8SAzureProviderNodePoolOverrideImageToTerraform, true)(struct!.overrideImage),
    taint: cdktf.listMapper(mk8SAzureProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SAzureProviderNodePoolToHclTerraform(struct?: Mk8SAzureProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
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
    zones: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.zones),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    override_image: {
      value: cdktf.listMapperHcl(mk8SAzureProviderNodePoolOverrideImageToHclTerraform, true)(struct!.overrideImage),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAzureProviderNodePoolOverrideImageList",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8SAzureProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAzureProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAzureProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAzureProviderNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
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
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._zones !== undefined) {
      hasAnyValues = true;
      internalValueResult.zones = this._zones;
    }
    if (this._overrideImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideImage = this._overrideImage?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SAzureProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDiskSize = undefined;
      this._labels = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._size = undefined;
      this._subnetId = undefined;
      this._zones = undefined;
      this._overrideImage.internalValue = undefined;
      this._taint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDiskSize = value.bootDiskSize;
      this._labels = value.labels;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._name = value.name;
      this._size = value.size;
      this._subnetId = value.subnetId;
      this._zones = value.zones;
      this._overrideImage.internalValue = value.overrideImage;
      this._taint.internalValue = value.taint;
    }
  }

  // boot_disk_size - computed: false, optional: false, required: true
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // zones - computed: false, optional: false, required: true
  private _zones?: number[]; 
  public get zones() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('zones')));
  }
  public set zones(value: number[]) {
    this._zones = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // override_image - computed: false, optional: true, required: false
  private _overrideImage = new Mk8SAzureProviderNodePoolOverrideImageList(this, "override_image", false);
  public get overrideImage() {
    return this._overrideImage;
  }
  public putOverrideImage(value: Mk8SAzureProviderNodePoolOverrideImage[] | cdktf.IResolvable) {
    this._overrideImage.internalValue = value;
  }
  public resetOverrideImage() {
    this._overrideImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideImageInput() {
    return this._overrideImage.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SAzureProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SAzureProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SAzureProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SAzureProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAzureProviderNodePoolOutputReference {
    return new Mk8SAzureProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SAzureProvider {
  /**
  * Region where the cluster nodes will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#location Mk8S#location}
  */
  readonly location: string;
  /**
  * The vpc where nodes will be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#network_id Mk8S#network_id}
  */
  readonly networkId: string;
  /**
  * Optional shell script that will be run before K8s is installed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pre_install_script Mk8S#pre_install_script}
  */
  readonly preInstallScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#resource_group Mk8S#resource_group}
  */
  readonly resourceGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#sdk_secret_link Mk8S#sdk_secret_link}
  */
  readonly sdkSecretLink: string;
  /**
  * SSH keys to install for "azureuser" linux user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#ssh_keys Mk8S#ssh_keys}
  */
  readonly sshKeys: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#subscription_id Mk8S#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * Extra tags to attach to all created objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#tags Mk8S#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#autoscaler Mk8S#autoscaler}
  */
  readonly autoscaler?: Mk8SAzureProviderAutoscaler[] | cdktf.IResolvable;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#image Mk8S#image}
  */
  readonly image?: Mk8SAzureProviderImage[] | cdktf.IResolvable;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#networking Mk8S#networking}
  */
  readonly networking?: Mk8SAzureProviderNetworking[] | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8SAzureProviderNodePool[] | cdktf.IResolvable;
}

export function mk8SAzureProviderToTerraform(struct?: Mk8SAzureProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    pre_install_script: cdktf.stringToTerraform(struct!.preInstallScript),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    sdk_secret_link: cdktf.stringToTerraform(struct!.sdkSecretLink),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
    autoscaler: cdktf.listMapper(mk8SAzureProviderAutoscalerToTerraform, true)(struct!.autoscaler),
    image: cdktf.listMapper(mk8SAzureProviderImageToTerraform, true)(struct!.image),
    networking: cdktf.listMapper(mk8SAzureProviderNetworkingToTerraform, true)(struct!.networking),
    node_pool: cdktf.listMapper(mk8SAzureProviderNodePoolToTerraform, true)(struct!.nodePool),
  }
}


export function mk8SAzureProviderToHclTerraform(struct?: Mk8SAzureProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
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
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sdk_secret_link: {
      value: cdktf.stringToHclTerraform(struct!.sdkSecretLink),
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
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
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
    autoscaler: {
      value: cdktf.listMapperHcl(mk8SAzureProviderAutoscalerToHclTerraform, true)(struct!.autoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAzureProviderAutoscalerList",
    },
    image: {
      value: cdktf.listMapperHcl(mk8SAzureProviderImageToHclTerraform, true)(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAzureProviderImageList",
    },
    networking: {
      value: cdktf.listMapperHcl(mk8SAzureProviderNetworkingToHclTerraform, true)(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAzureProviderNetworkingList",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8SAzureProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SAzureProviderNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SAzureProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SAzureProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._preInstallScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInstallScript = this._preInstallScript;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._sdkSecretLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.sdkSecretLink = this._sdkSecretLink;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
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

  public set internalValue(value: Mk8SAzureProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._networkId = undefined;
      this._preInstallScript = undefined;
      this._resourceGroup = undefined;
      this._sdkSecretLink = undefined;
      this._sshKeys = undefined;
      this._subscriptionId = undefined;
      this._tags = undefined;
      this._autoscaler.internalValue = undefined;
      this._image.internalValue = undefined;
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
      this._location = value.location;
      this._networkId = value.networkId;
      this._preInstallScript = value.preInstallScript;
      this._resourceGroup = value.resourceGroup;
      this._sdkSecretLink = value.sdkSecretLink;
      this._sshKeys = value.sshKeys;
      this._subscriptionId = value.subscriptionId;
      this._tags = value.tags;
      this._autoscaler.internalValue = value.autoscaler;
      this._image.internalValue = value.image;
      this._networking.internalValue = value.networking;
      this._nodePool.internalValue = value.nodePool;
    }
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

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
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

  // resource_group - computed: false, optional: false, required: true
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // sdk_secret_link - computed: false, optional: false, required: true
  private _sdkSecretLink?: string; 
  public get sdkSecretLink() {
    return this.getStringAttribute('sdk_secret_link');
  }
  public set sdkSecretLink(value: string) {
    this._sdkSecretLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkSecretLinkInput() {
    return this._sdkSecretLink;
  }

  // ssh_keys - computed: false, optional: false, required: true
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
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

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new Mk8SAzureProviderAutoscalerList(this, "autoscaler", false);
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: Mk8SAzureProviderAutoscaler[] | cdktf.IResolvable) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new Mk8SAzureProviderImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: Mk8SAzureProviderImage[] | cdktf.IResolvable) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new Mk8SAzureProviderNetworkingList(this, "networking", false);
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: Mk8SAzureProviderNetworking[] | cdktf.IResolvable) {
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
  private _nodePool = new Mk8SAzureProviderNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8SAzureProviderNodePool[] | cdktf.IResolvable) {
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

export class Mk8SAzureProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8SAzureProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8SAzureProviderOutputReference {
    return new Mk8SAzureProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SDigitalOceanProviderAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#expander Mk8S#expander}
  */
  readonly expander?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unneeded_time Mk8S#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unready_time Mk8S#unready_time}
  */
  readonly unreadyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#utilization_threshold Mk8S#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
}

export function mk8SDigitalOceanProviderAutoscalerToTerraform(struct?: Mk8SDigitalOceanProviderAutoscaler | cdktf.IResolvable): any {
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


export function mk8SDigitalOceanProviderAutoscalerToHclTerraform(struct?: Mk8SDigitalOceanProviderAutoscaler | cdktf.IResolvable): any {
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

export class Mk8SDigitalOceanProviderAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SDigitalOceanProviderAutoscaler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SDigitalOceanProviderAutoscaler | cdktf.IResolvable | undefined) {
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

export class Mk8SDigitalOceanProviderAutoscalerList extends cdktf.ComplexList {
  public internalValue? : Mk8SDigitalOceanProviderAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): Mk8SDigitalOceanProviderAutoscalerOutputReference {
    return new Mk8SDigitalOceanProviderAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SDigitalOceanProviderNetworking {
  /**
  * DNS forwarder used by the cluster. Can be a space-delimited list of dns servers. Default is /etc/resolv.conf when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#dns_forwarder Mk8S#dns_forwarder}
  */
  readonly dnsForwarder?: string;
  /**
  * The CIDR of the pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pod_network Mk8S#pod_network}
  */
  readonly podNetwork?: string;
  /**
  * The CIDR of the service network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#service_network Mk8S#service_network}
  */
  readonly serviceNetwork?: string;
}

export function mk8SDigitalOceanProviderNetworkingToTerraform(struct?: Mk8SDigitalOceanProviderNetworking | cdktf.IResolvable): any {
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


export function mk8SDigitalOceanProviderNetworkingToHclTerraform(struct?: Mk8SDigitalOceanProviderNetworking | cdktf.IResolvable): any {
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

export class Mk8SDigitalOceanProviderNetworkingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SDigitalOceanProviderNetworking | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SDigitalOceanProviderNetworking | cdktf.IResolvable | undefined) {
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

export class Mk8SDigitalOceanProviderNetworkingList extends cdktf.ComplexList {
  public internalValue? : Mk8SDigitalOceanProviderNetworking[] | cdktf.IResolvable

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
  public get(index: number): Mk8SDigitalOceanProviderNetworkingOutputReference {
    return new Mk8SDigitalOceanProviderNetworkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SDigitalOceanProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SDigitalOceanProviderNodePoolTaintToTerraform(struct?: Mk8SDigitalOceanProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SDigitalOceanProviderNodePoolTaintToHclTerraform(struct?: Mk8SDigitalOceanProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SDigitalOceanProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SDigitalOceanProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SDigitalOceanProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SDigitalOceanProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SDigitalOceanProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SDigitalOceanProviderNodePoolTaintOutputReference {
    return new Mk8SDigitalOceanProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SDigitalOceanProviderNodePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#droplet_size Mk8S#droplet_size}
  */
  readonly dropletSize: string;
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_size Mk8S#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_size Mk8S#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#override_image Mk8S#override_image}
  */
  readonly overrideImage?: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SDigitalOceanProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SDigitalOceanProviderNodePoolToTerraform(struct?: Mk8SDigitalOceanProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    droplet_size: cdktf.stringToTerraform(struct!.dropletSize),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    override_image: cdktf.stringToTerraform(struct!.overrideImage),
    taint: cdktf.listMapper(mk8SDigitalOceanProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SDigitalOceanProviderNodePoolToHclTerraform(struct?: Mk8SDigitalOceanProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    droplet_size: {
      value: cdktf.stringToHclTerraform(struct!.dropletSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    override_image: {
      value: cdktf.stringToHclTerraform(struct!.overrideImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8SDigitalOceanProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SDigitalOceanProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SDigitalOceanProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SDigitalOceanProviderNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dropletSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropletSize = this._dropletSize;
    }
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
    if (this._overrideImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideImage = this._overrideImage;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SDigitalOceanProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dropletSize = undefined;
      this._labels = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._overrideImage = undefined;
      this._taint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dropletSize = value.dropletSize;
      this._labels = value.labels;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._name = value.name;
      this._overrideImage = value.overrideImage;
      this._taint.internalValue = value.taint;
    }
  }

  // droplet_size - computed: false, optional: false, required: true
  private _dropletSize?: string; 
  public get dropletSize() {
    return this.getStringAttribute('droplet_size');
  }
  public set dropletSize(value: string) {
    this._dropletSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dropletSizeInput() {
    return this._dropletSize;
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

  // override_image - computed: false, optional: true, required: false
  private _overrideImage?: string; 
  public get overrideImage() {
    return this.getStringAttribute('override_image');
  }
  public set overrideImage(value: string) {
    this._overrideImage = value;
  }
  public resetOverrideImage() {
    this._overrideImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideImageInput() {
    return this._overrideImage;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SDigitalOceanProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SDigitalOceanProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SDigitalOceanProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SDigitalOceanProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SDigitalOceanProviderNodePoolOutputReference {
    return new Mk8SDigitalOceanProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SDigitalOceanProvider {
  /**
  * Extra tags to attach to droplets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#digital_ocean_tags Mk8S#digital_ocean_tags}
  */
  readonly digitalOceanTags?: string[];
  /**
  * Extra SSH keys to provision for user root that are not registered in the DigitalOcean.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#extra_ssh_keys Mk8S#extra_ssh_keys}
  */
  readonly extraSshKeys?: string[];
  /**
  * Default image for all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#image Mk8S#image}
  */
  readonly image: string;
  /**
  * Optional shell script that will be run before K8s is installed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pre_install_script Mk8S#pre_install_script}
  */
  readonly preInstallScript?: string;
  /**
  * Region to deploy nodes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#region Mk8S#region}
  */
  readonly region: string;
  /**
  * Optional set of IPs to assign as extra IPs for nodes of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#reserved_ips Mk8S#reserved_ips}
  */
  readonly reservedIps?: string[];
  /**
  * SSH key name for accessing deployed nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#ssh_keys Mk8S#ssh_keys}
  */
  readonly sshKeys: string[];
  /**
  * Link to a secret holding personal access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#token_secret_link Mk8S#token_secret_link}
  */
  readonly tokenSecretLink: string;
  /**
  * ID of the Hetzner network to deploy nodes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#vpc_id Mk8S#vpc_id}
  */
  readonly vpcId: string;
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#autoscaler Mk8S#autoscaler}
  */
  readonly autoscaler?: Mk8SDigitalOceanProviderAutoscaler[] | cdktf.IResolvable;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#networking Mk8S#networking}
  */
  readonly networking?: Mk8SDigitalOceanProviderNetworking[] | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8SDigitalOceanProviderNodePool[] | cdktf.IResolvable;
}

export function mk8SDigitalOceanProviderToTerraform(struct?: Mk8SDigitalOceanProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digital_ocean_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.digitalOceanTags),
    extra_ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraSshKeys),
    image: cdktf.stringToTerraform(struct!.image),
    pre_install_script: cdktf.stringToTerraform(struct!.preInstallScript),
    region: cdktf.stringToTerraform(struct!.region),
    reserved_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.reservedIps),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    token_secret_link: cdktf.stringToTerraform(struct!.tokenSecretLink),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    autoscaler: cdktf.listMapper(mk8SDigitalOceanProviderAutoscalerToTerraform, true)(struct!.autoscaler),
    networking: cdktf.listMapper(mk8SDigitalOceanProviderNetworkingToTerraform, true)(struct!.networking),
    node_pool: cdktf.listMapper(mk8SDigitalOceanProviderNodePoolToTerraform, true)(struct!.nodePool),
  }
}


export function mk8SDigitalOceanProviderToHclTerraform(struct?: Mk8SDigitalOceanProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digital_ocean_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.digitalOceanTags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    extra_ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraSshKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reserved_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.reservedIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    token_secret_link: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecretLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaler: {
      value: cdktf.listMapperHcl(mk8SDigitalOceanProviderAutoscalerToHclTerraform, true)(struct!.autoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SDigitalOceanProviderAutoscalerList",
    },
    networking: {
      value: cdktf.listMapperHcl(mk8SDigitalOceanProviderNetworkingToHclTerraform, true)(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SDigitalOceanProviderNetworkingList",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8SDigitalOceanProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SDigitalOceanProviderNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SDigitalOceanProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SDigitalOceanProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digitalOceanTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalOceanTags = this._digitalOceanTags;
    }
    if (this._extraSshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraSshKeys = this._extraSshKeys;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._preInstallScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInstallScript = this._preInstallScript;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._reservedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedIps = this._reservedIps;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._tokenSecretLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretLink = this._tokenSecretLink;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
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

  public set internalValue(value: Mk8SDigitalOceanProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digitalOceanTags = undefined;
      this._extraSshKeys = undefined;
      this._image = undefined;
      this._preInstallScript = undefined;
      this._region = undefined;
      this._reservedIps = undefined;
      this._sshKeys = undefined;
      this._tokenSecretLink = undefined;
      this._vpcId = undefined;
      this._autoscaler.internalValue = undefined;
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
      this._digitalOceanTags = value.digitalOceanTags;
      this._extraSshKeys = value.extraSshKeys;
      this._image = value.image;
      this._preInstallScript = value.preInstallScript;
      this._region = value.region;
      this._reservedIps = value.reservedIps;
      this._sshKeys = value.sshKeys;
      this._tokenSecretLink = value.tokenSecretLink;
      this._vpcId = value.vpcId;
      this._autoscaler.internalValue = value.autoscaler;
      this._networking.internalValue = value.networking;
      this._nodePool.internalValue = value.nodePool;
    }
  }

  // digital_ocean_tags - computed: false, optional: true, required: false
  private _digitalOceanTags?: string[]; 
  public get digitalOceanTags() {
    return cdktf.Fn.tolist(this.getListAttribute('digital_ocean_tags'));
  }
  public set digitalOceanTags(value: string[]) {
    this._digitalOceanTags = value;
  }
  public resetDigitalOceanTags() {
    this._digitalOceanTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalOceanTagsInput() {
    return this._digitalOceanTags;
  }

  // extra_ssh_keys - computed: false, optional: true, required: false
  private _extraSshKeys?: string[]; 
  public get extraSshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('extra_ssh_keys'));
  }
  public set extraSshKeys(value: string[]) {
    this._extraSshKeys = value;
  }
  public resetExtraSshKeys() {
    this._extraSshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraSshKeysInput() {
    return this._extraSshKeys;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // reserved_ips - computed: false, optional: true, required: false
  private _reservedIps?: string[]; 
  public get reservedIps() {
    return cdktf.Fn.tolist(this.getListAttribute('reserved_ips'));
  }
  public set reservedIps(value: string[]) {
    this._reservedIps = value;
  }
  public resetReservedIps() {
    this._reservedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedIpsInput() {
    return this._reservedIps;
  }

  // ssh_keys - computed: false, optional: false, required: true
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('ssh_keys'));
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // token_secret_link - computed: false, optional: false, required: true
  private _tokenSecretLink?: string; 
  public get tokenSecretLink() {
    return this.getStringAttribute('token_secret_link');
  }
  public set tokenSecretLink(value: string) {
    this._tokenSecretLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretLinkInput() {
    return this._tokenSecretLink;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new Mk8SDigitalOceanProviderAutoscalerList(this, "autoscaler", false);
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: Mk8SDigitalOceanProviderAutoscaler[] | cdktf.IResolvable) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new Mk8SDigitalOceanProviderNetworkingList(this, "networking", false);
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: Mk8SDigitalOceanProviderNetworking[] | cdktf.IResolvable) {
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
  private _nodePool = new Mk8SDigitalOceanProviderNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8SDigitalOceanProviderNodePool[] | cdktf.IResolvable) {
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

export class Mk8SDigitalOceanProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8SDigitalOceanProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8SDigitalOceanProviderOutputReference {
    return new Mk8SDigitalOceanProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SEphemeralProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SEphemeralProviderNodePoolTaintToTerraform(struct?: Mk8SEphemeralProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SEphemeralProviderNodePoolTaintToHclTerraform(struct?: Mk8SEphemeralProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SEphemeralProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SEphemeralProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SEphemeralProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SEphemeralProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SEphemeralProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SEphemeralProviderNodePoolTaintOutputReference {
    return new Mk8SEphemeralProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SEphemeralProviderNodePool {
  /**
  * CPU architecture of the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#arch Mk8S#arch}
  */
  readonly arch: string;
  /**
  * Number of nodes to deploy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#count Mk8S#count}
  */
  readonly count: number;
  /**
  * Allocated CPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#cpu Mk8S#cpu}
  */
  readonly cpu: string;
  /**
  * Linux distro to use for ephemeral nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#flavor Mk8S#flavor}
  */
  readonly flavor?: string;
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Allocated memory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#memory Mk8S#memory}
  */
  readonly memory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SEphemeralProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SEphemeralProviderNodePoolToTerraform(struct?: Mk8SEphemeralProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    count: cdktf.numberToTerraform(struct!.count),
    cpu: cdktf.stringToTerraform(struct!.cpu),
    flavor: cdktf.stringToTerraform(struct!.flavor),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    memory: cdktf.stringToTerraform(struct!.memory),
    name: cdktf.stringToTerraform(struct!.name),
    taint: cdktf.listMapper(mk8SEphemeralProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SEphemeralProviderNodePoolToHclTerraform(struct?: Mk8SEphemeralProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
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
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
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
    taint: {
      value: cdktf.listMapperHcl(mk8SEphemeralProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SEphemeralProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SEphemeralProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SEphemeralProviderNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SEphemeralProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._count = undefined;
      this._cpu = undefined;
      this._flavor = undefined;
      this._labels = undefined;
      this._memory = undefined;
      this._name = undefined;
      this._taint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._count = value.count;
      this._cpu = value.cpu;
      this._flavor = value.flavor;
      this._labels = value.labels;
      this._memory = value.memory;
      this._name = value.name;
      this._taint.internalValue = value.taint;
    }
  }

  // arch - computed: false, optional: false, required: true
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // count - computed: false, optional: false, required: true
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // cpu - computed: false, optional: false, required: true
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // flavor - computed: true, optional: true, required: false
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  public resetFlavor() {
    this._flavor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // memory - computed: false, optional: false, required: true
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
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

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SEphemeralProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SEphemeralProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SEphemeralProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SEphemeralProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SEphemeralProviderNodePoolOutputReference {
    return new Mk8SEphemeralProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SEphemeralProvider {
  /**
  * Control Plane location that will host the K8s components. Prefer one that is closest to where the nodes are running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#location Mk8S#location}
  */
  readonly location: string;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8SEphemeralProviderNodePool[] | cdktf.IResolvable;
}

export function mk8SEphemeralProviderToTerraform(struct?: Mk8SEphemeralProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    node_pool: cdktf.listMapper(mk8SEphemeralProviderNodePoolToTerraform, true)(struct!.nodePool),
  }
}


export function mk8SEphemeralProviderToHclTerraform(struct?: Mk8SEphemeralProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8SEphemeralProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SEphemeralProviderNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SEphemeralProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SEphemeralProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._nodePool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePool = this._nodePool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SEphemeralProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._nodePool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._nodePool.internalValue = value.nodePool;
    }
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

  // node_pool - computed: false, optional: true, required: false
  private _nodePool = new Mk8SEphemeralProviderNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8SEphemeralProviderNodePool[] | cdktf.IResolvable) {
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

export class Mk8SEphemeralProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8SEphemeralProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8SEphemeralProviderOutputReference {
    return new Mk8SEphemeralProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SFirewall {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#description Mk8S#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#source_cidr Mk8S#source_cidr}
  */
  readonly sourceCidr: string;
}

export function mk8SFirewallToTerraform(struct?: Mk8SFirewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    source_cidr: cdktf.stringToTerraform(struct!.sourceCidr),
  }
}


export function mk8SFirewallToHclTerraform(struct?: Mk8SFirewall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_cidr: {
      value: cdktf.stringToHclTerraform(struct!.sourceCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SFirewallOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SFirewall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._sourceCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceCidr = this._sourceCidr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SFirewall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._sourceCidr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._sourceCidr = value.sourceCidr;
    }
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

  // source_cidr - computed: false, optional: false, required: true
  private _sourceCidr?: string; 
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }
  public set sourceCidr(value: string) {
    this._sourceCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCidrInput() {
    return this._sourceCidr;
  }
}

export class Mk8SFirewallList extends cdktf.ComplexList {
  public internalValue? : Mk8SFirewall[] | cdktf.IResolvable

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
  public get(index: number): Mk8SFirewallOutputReference {
    return new Mk8SFirewallOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGcpProviderAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#expander Mk8S#expander}
  */
  readonly expander?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unneeded_time Mk8S#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unready_time Mk8S#unready_time}
  */
  readonly unreadyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#utilization_threshold Mk8S#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
}

export function mk8SGcpProviderAutoscalerToTerraform(struct?: Mk8SGcpProviderAutoscaler | cdktf.IResolvable): any {
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


export function mk8SGcpProviderAutoscalerToHclTerraform(struct?: Mk8SGcpProviderAutoscaler | cdktf.IResolvable): any {
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

export class Mk8SGcpProviderAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGcpProviderAutoscaler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SGcpProviderAutoscaler | cdktf.IResolvable | undefined) {
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

export class Mk8SGcpProviderAutoscalerList extends cdktf.ComplexList {
  public internalValue? : Mk8SGcpProviderAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGcpProviderAutoscalerOutputReference {
    return new Mk8SGcpProviderAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGcpProviderImageFamily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#family Mk8S#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#project Mk8S#project}
  */
  readonly project: string;
}

export function mk8SGcpProviderImageFamilyToTerraform(struct?: Mk8SGcpProviderImageFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function mk8SGcpProviderImageFamilyToHclTerraform(struct?: Mk8SGcpProviderImageFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SGcpProviderImageFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SGcpProviderImageFamily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SGcpProviderImageFamily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._project = value.project;
    }
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface Mk8SGcpProviderImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#exact Mk8S#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#family Mk8S#family}
  */
  readonly family?: Mk8SGcpProviderImageFamily;
  /**
  * Recommended image alias. Valid values: `ubuntu/jammy-22.04`, `ubuntu/noble-24.04`, `debian/bookworm-12`, `debian/trixie-13`, `google/cos-stable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#recommended Mk8S#recommended}
  */
  readonly recommended?: string;
}

export function mk8SGcpProviderImageToTerraform(struct?: Mk8SGcpProviderImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    family: mk8SGcpProviderImageFamilyToTerraform(struct!.family),
    recommended: cdktf.stringToTerraform(struct!.recommended),
  }
}


export function mk8SGcpProviderImageToHclTerraform(struct?: Mk8SGcpProviderImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: mk8SGcpProviderImageFamilyToHclTerraform(struct!.family),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SGcpProviderImageFamily",
    },
    recommended: {
      value: cdktf.stringToHclTerraform(struct!.recommended),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SGcpProviderImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGcpProviderImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._family?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family?.internalValue;
    }
    if (this._recommended !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommended = this._recommended;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SGcpProviderImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._family.internalValue = undefined;
      this._recommended = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._family.internalValue = value.family;
      this._recommended = value.recommended;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // family - computed: false, optional: true, required: false
  private _family = new Mk8SGcpProviderImageFamilyOutputReference(this, "family");
  public get family() {
    return this._family;
  }
  public putFamily(value: Mk8SGcpProviderImageFamily) {
    this._family.internalValue = value;
  }
  public resetFamily() {
    this._family.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family.internalValue;
  }

  // recommended - computed: false, optional: true, required: false
  private _recommended?: string; 
  public get recommended() {
    return this.getStringAttribute('recommended');
  }
  public set recommended(value: string) {
    this._recommended = value;
  }
  public resetRecommended() {
    this._recommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedInput() {
    return this._recommended;
  }
}

export class Mk8SGcpProviderImageList extends cdktf.ComplexList {
  public internalValue? : Mk8SGcpProviderImage[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGcpProviderImageOutputReference {
    return new Mk8SGcpProviderImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGcpProviderNetworking {
  /**
  * DNS forwarder used by the cluster. Can be a space-delimited list of dns servers. Default is /etc/resolv.conf when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#dns_forwarder Mk8S#dns_forwarder}
  */
  readonly dnsForwarder?: string;
  /**
  * The CIDR of the pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pod_network Mk8S#pod_network}
  */
  readonly podNetwork?: string;
  /**
  * The CIDR of the service network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#service_network Mk8S#service_network}
  */
  readonly serviceNetwork?: string;
}

export function mk8SGcpProviderNetworkingToTerraform(struct?: Mk8SGcpProviderNetworking | cdktf.IResolvable): any {
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


export function mk8SGcpProviderNetworkingToHclTerraform(struct?: Mk8SGcpProviderNetworking | cdktf.IResolvable): any {
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

export class Mk8SGcpProviderNetworkingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGcpProviderNetworking | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SGcpProviderNetworking | cdktf.IResolvable | undefined) {
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

export class Mk8SGcpProviderNetworkingList extends cdktf.ComplexList {
  public internalValue? : Mk8SGcpProviderNetworking[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGcpProviderNetworkingOutputReference {
    return new Mk8SGcpProviderNetworkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGcpProviderNodePoolOverrideImageFamily {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#family Mk8S#family}
  */
  readonly family: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#project Mk8S#project}
  */
  readonly project: string;
}

export function mk8SGcpProviderNodePoolOverrideImageFamilyToTerraform(struct?: Mk8SGcpProviderNodePoolOverrideImageFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    family: cdktf.stringToTerraform(struct!.family),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function mk8SGcpProviderNodePoolOverrideImageFamilyToHclTerraform(struct?: Mk8SGcpProviderNodePoolOverrideImageFamily | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    family: {
      value: cdktf.stringToHclTerraform(struct!.family),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SGcpProviderNodePoolOverrideImageFamilyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): Mk8SGcpProviderNodePoolOverrideImageFamily | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SGcpProviderNodePoolOverrideImageFamily | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._family = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._family = value.family;
      this._project = value.project;
    }
  }

  // family - computed: false, optional: false, required: true
  private _family?: string; 
  public get family() {
    return this.getStringAttribute('family');
  }
  public set family(value: string) {
    this._family = value;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface Mk8SGcpProviderNodePoolOverrideImage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#exact Mk8S#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#family Mk8S#family}
  */
  readonly family?: Mk8SGcpProviderNodePoolOverrideImageFamily;
  /**
  * Recommended image alias. Valid values: `ubuntu/jammy-22.04`, `ubuntu/noble-24.04`, `debian/bookworm-12`, `debian/trixie-13`, `google/cos-stable`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#recommended Mk8S#recommended}
  */
  readonly recommended?: string;
}

export function mk8SGcpProviderNodePoolOverrideImageToTerraform(struct?: Mk8SGcpProviderNodePoolOverrideImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    family: mk8SGcpProviderNodePoolOverrideImageFamilyToTerraform(struct!.family),
    recommended: cdktf.stringToTerraform(struct!.recommended),
  }
}


export function mk8SGcpProviderNodePoolOverrideImageToHclTerraform(struct?: Mk8SGcpProviderNodePoolOverrideImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: mk8SGcpProviderNodePoolOverrideImageFamilyToHclTerraform(struct!.family),
      isBlock: true,
      type: "struct",
      storageClassType: "Mk8SGcpProviderNodePoolOverrideImageFamily",
    },
    recommended: {
      value: cdktf.stringToHclTerraform(struct!.recommended),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SGcpProviderNodePoolOverrideImageOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGcpProviderNodePoolOverrideImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._family?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family?.internalValue;
    }
    if (this._recommended !== undefined) {
      hasAnyValues = true;
      internalValueResult.recommended = this._recommended;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SGcpProviderNodePoolOverrideImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._family.internalValue = undefined;
      this._recommended = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._family.internalValue = value.family;
      this._recommended = value.recommended;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // family - computed: false, optional: true, required: false
  private _family = new Mk8SGcpProviderNodePoolOverrideImageFamilyOutputReference(this, "family");
  public get family() {
    return this._family;
  }
  public putFamily(value: Mk8SGcpProviderNodePoolOverrideImageFamily) {
    this._family.internalValue = value;
  }
  public resetFamily() {
    this._family.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family.internalValue;
  }

  // recommended - computed: false, optional: true, required: false
  private _recommended?: string; 
  public get recommended() {
    return this.getStringAttribute('recommended');
  }
  public set recommended(value: string) {
    this._recommended = value;
  }
  public resetRecommended() {
    this._recommended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recommendedInput() {
    return this._recommended;
  }
}

export class Mk8SGcpProviderNodePoolOverrideImageList extends cdktf.ComplexList {
  public internalValue? : Mk8SGcpProviderNodePoolOverrideImage[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGcpProviderNodePoolOverrideImageOutputReference {
    return new Mk8SGcpProviderNodePoolOverrideImageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGcpProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SGcpProviderNodePoolTaintToTerraform(struct?: Mk8SGcpProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SGcpProviderNodePoolTaintToHclTerraform(struct?: Mk8SGcpProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SGcpProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGcpProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SGcpProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SGcpProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SGcpProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGcpProviderNodePoolTaintOutputReference {
    return new Mk8SGcpProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGcpProviderNodePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#assign_public_ip Mk8S#assign_public_ip}
  */
  readonly assignPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Size in GB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#boot_disk_size Mk8S#boot_disk_size}
  */
  readonly bootDiskSize: number;
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#local_persistent_disks Mk8S#local_persistent_disks}
  */
  readonly localPersistentDisks?: number;
  /**
  * GCE machine type for nodes in this pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#machine_type Mk8S#machine_type}
  */
  readonly machineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_size Mk8S#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_size Mk8S#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#preemptible Mk8S#preemptible}
  */
  readonly preemptible?: boolean | cdktf.IResolvable;
  /**
  * Subnet within the selected network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#subnet Mk8S#subnet}
  */
  readonly subnet: string;
  /**
  * Zone where the pool nodes run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#zone Mk8S#zone}
  */
  readonly zone: string;
  /**
  * override_image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#override_image Mk8S#override_image}
  */
  readonly overrideImage?: Mk8SGcpProviderNodePoolOverrideImage[] | cdktf.IResolvable;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SGcpProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SGcpProviderNodePoolToTerraform(struct?: Mk8SGcpProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_public_ip: cdktf.booleanToTerraform(struct!.assignPublicIp),
    boot_disk_size: cdktf.numberToTerraform(struct!.bootDiskSize),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    local_persistent_disks: cdktf.numberToTerraform(struct!.localPersistentDisks),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    preemptible: cdktf.booleanToTerraform(struct!.preemptible),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    zone: cdktf.stringToTerraform(struct!.zone),
    override_image: cdktf.listMapper(mk8SGcpProviderNodePoolOverrideImageToTerraform, true)(struct!.overrideImage),
    taint: cdktf.listMapper(mk8SGcpProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SGcpProviderNodePoolToHclTerraform(struct?: Mk8SGcpProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.assignPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    boot_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    local_persistent_disks: {
      value: cdktf.numberToHclTerraform(struct!.localPersistentDisks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    preemptible: {
      value: cdktf.booleanToHclTerraform(struct!.preemptible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_image: {
      value: cdktf.listMapperHcl(mk8SGcpProviderNodePoolOverrideImageToHclTerraform, true)(struct!.overrideImage),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SGcpProviderNodePoolOverrideImageList",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8SGcpProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SGcpProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SGcpProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGcpProviderNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignPublicIp = this._assignPublicIp;
    }
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._localPersistentDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPersistentDisks = this._localPersistentDisks;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
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
    if (this._preemptible !== undefined) {
      hasAnyValues = true;
      internalValueResult.preemptible = this._preemptible;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._overrideImage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideImage = this._overrideImage?.internalValue;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SGcpProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._assignPublicIp = undefined;
      this._bootDiskSize = undefined;
      this._labels = undefined;
      this._localPersistentDisks = undefined;
      this._machineType = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._preemptible = undefined;
      this._subnet = undefined;
      this._zone = undefined;
      this._overrideImage.internalValue = undefined;
      this._taint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._assignPublicIp = value.assignPublicIp;
      this._bootDiskSize = value.bootDiskSize;
      this._labels = value.labels;
      this._localPersistentDisks = value.localPersistentDisks;
      this._machineType = value.machineType;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._name = value.name;
      this._preemptible = value.preemptible;
      this._subnet = value.subnet;
      this._zone = value.zone;
      this._overrideImage.internalValue = value.overrideImage;
      this._taint.internalValue = value.taint;
    }
  }

  // assign_public_ip - computed: false, optional: true, required: false
  private _assignPublicIp?: boolean | cdktf.IResolvable; 
  public get assignPublicIp() {
    return this.getBooleanAttribute('assign_public_ip');
  }
  public set assignPublicIp(value: boolean | cdktf.IResolvable) {
    this._assignPublicIp = value;
  }
  public resetAssignPublicIp() {
    this._assignPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPublicIpInput() {
    return this._assignPublicIp;
  }

  // boot_disk_size - computed: false, optional: false, required: true
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
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

  // local_persistent_disks - computed: false, optional: true, required: false
  private _localPersistentDisks?: number; 
  public get localPersistentDisks() {
    return this.getNumberAttribute('local_persistent_disks');
  }
  public set localPersistentDisks(value: number) {
    this._localPersistentDisks = value;
  }
  public resetLocalPersistentDisks() {
    this._localPersistentDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPersistentDisksInput() {
    return this._localPersistentDisks;
  }

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // preemptible - computed: false, optional: true, required: false
  private _preemptible?: boolean | cdktf.IResolvable; 
  public get preemptible() {
    return this.getBooleanAttribute('preemptible');
  }
  public set preemptible(value: boolean | cdktf.IResolvable) {
    this._preemptible = value;
  }
  public resetPreemptible() {
    this._preemptible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptibleInput() {
    return this._preemptible;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // override_image - computed: false, optional: true, required: false
  private _overrideImage = new Mk8SGcpProviderNodePoolOverrideImageList(this, "override_image", false);
  public get overrideImage() {
    return this._overrideImage;
  }
  public putOverrideImage(value: Mk8SGcpProviderNodePoolOverrideImage[] | cdktf.IResolvable) {
    this._overrideImage.internalValue = value;
  }
  public resetOverrideImage() {
    this._overrideImage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideImageInput() {
    return this._overrideImage.internalValue;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SGcpProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SGcpProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SGcpProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SGcpProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGcpProviderNodePoolOutputReference {
    return new Mk8SGcpProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGcpProvider {
  /**
  * Extra tags to attach to all created objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#metadata Mk8S#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * VPC network used by the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#network Mk8S#network}
  */
  readonly network: string;
  /**
  * Optional shell script that will be run before K8s is installed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pre_install_script Mk8S#pre_install_script}
  */
  readonly preInstallScript?: string;
  /**
  * GCP project ID that hosts the cluster infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#project_id Mk8S#project_id}
  */
  readonly projectId: string;
  /**
  * Region where the cluster nodes will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#region Mk8S#region}
  */
  readonly region: string;
  /**
  * Link to a secret containing the service account JSON key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#sa_key_link Mk8S#sa_key_link}
  */
  readonly saKeyLink: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#tags Mk8S#tags}
  */
  readonly tags?: string[];
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#autoscaler Mk8S#autoscaler}
  */
  readonly autoscaler?: Mk8SGcpProviderAutoscaler[] | cdktf.IResolvable;
  /**
  * image block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#image Mk8S#image}
  */
  readonly image?: Mk8SGcpProviderImage[] | cdktf.IResolvable;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#networking Mk8S#networking}
  */
  readonly networking?: Mk8SGcpProviderNetworking[] | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8SGcpProviderNodePool[] | cdktf.IResolvable;
}

export function mk8SGcpProviderToTerraform(struct?: Mk8SGcpProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    network: cdktf.stringToTerraform(struct!.network),
    pre_install_script: cdktf.stringToTerraform(struct!.preInstallScript),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    region: cdktf.stringToTerraform(struct!.region),
    sa_key_link: cdktf.stringToTerraform(struct!.saKeyLink),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    autoscaler: cdktf.listMapper(mk8SGcpProviderAutoscalerToTerraform, true)(struct!.autoscaler),
    image: cdktf.listMapper(mk8SGcpProviderImageToTerraform, true)(struct!.image),
    networking: cdktf.listMapper(mk8SGcpProviderNetworkingToTerraform, true)(struct!.networking),
    node_pool: cdktf.listMapper(mk8SGcpProviderNodePoolToTerraform, true)(struct!.nodePool),
  }
}


export function mk8SGcpProviderToHclTerraform(struct?: Mk8SGcpProvider | cdktf.IResolvable): any {
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
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_key_link: {
      value: cdktf.stringToHclTerraform(struct!.saKeyLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    autoscaler: {
      value: cdktf.listMapperHcl(mk8SGcpProviderAutoscalerToHclTerraform, true)(struct!.autoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SGcpProviderAutoscalerList",
    },
    image: {
      value: cdktf.listMapperHcl(mk8SGcpProviderImageToHclTerraform, true)(struct!.image),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SGcpProviderImageList",
    },
    networking: {
      value: cdktf.listMapperHcl(mk8SGcpProviderNetworkingToHclTerraform, true)(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SGcpProviderNetworkingList",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8SGcpProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SGcpProviderNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SGcpProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGcpProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._preInstallScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInstallScript = this._preInstallScript;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._saKeyLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.saKeyLink = this._saKeyLink;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
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

  public set internalValue(value: Mk8SGcpProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._metadata = undefined;
      this._network = undefined;
      this._preInstallScript = undefined;
      this._projectId = undefined;
      this._region = undefined;
      this._saKeyLink = undefined;
      this._tags = undefined;
      this._autoscaler.internalValue = undefined;
      this._image.internalValue = undefined;
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
      this._labels = value.labels;
      this._metadata = value.metadata;
      this._network = value.network;
      this._preInstallScript = value.preInstallScript;
      this._projectId = value.projectId;
      this._region = value.region;
      this._saKeyLink = value.saKeyLink;
      this._tags = value.tags;
      this._autoscaler.internalValue = value.autoscaler;
      this._image.internalValue = value.image;
      this._networking.internalValue = value.networking;
      this._nodePool.internalValue = value.nodePool;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sa_key_link - computed: false, optional: false, required: true
  private _saKeyLink?: string; 
  public get saKeyLink() {
    return this.getStringAttribute('sa_key_link');
  }
  public set saKeyLink(value: string) {
    this._saKeyLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saKeyLinkInput() {
    return this._saKeyLink;
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

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new Mk8SGcpProviderAutoscalerList(this, "autoscaler", false);
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: Mk8SGcpProviderAutoscaler[] | cdktf.IResolvable) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new Mk8SGcpProviderImageList(this, "image", false);
  public get image() {
    return this._image;
  }
  public putImage(value: Mk8SGcpProviderImage[] | cdktf.IResolvable) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new Mk8SGcpProviderNetworkingList(this, "networking", false);
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: Mk8SGcpProviderNetworking[] | cdktf.IResolvable) {
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
  private _nodePool = new Mk8SGcpProviderNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8SGcpProviderNodePool[] | cdktf.IResolvable) {
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

export class Mk8SGcpProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8SGcpProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGcpProviderOutputReference {
    return new Mk8SGcpProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGenericProviderNetworking {
  /**
  * DNS forwarder used by the cluster. Can be a space-delimited list of dns servers. Default is /etc/resolv.conf when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#dns_forwarder Mk8S#dns_forwarder}
  */
  readonly dnsForwarder?: string;
  /**
  * The CIDR of the pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pod_network Mk8S#pod_network}
  */
  readonly podNetwork?: string;
  /**
  * The CIDR of the service network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#service_network Mk8S#service_network}
  */
  readonly serviceNetwork?: string;
}

export function mk8SGenericProviderNetworkingToTerraform(struct?: Mk8SGenericProviderNetworking | cdktf.IResolvable): any {
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


export function mk8SGenericProviderNetworkingToHclTerraform(struct?: Mk8SGenericProviderNetworking | cdktf.IResolvable): any {
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

export class Mk8SGenericProviderNetworkingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGenericProviderNetworking | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SGenericProviderNetworking | cdktf.IResolvable | undefined) {
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

export class Mk8SGenericProviderNetworkingList extends cdktf.ComplexList {
  public internalValue? : Mk8SGenericProviderNetworking[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGenericProviderNetworkingOutputReference {
    return new Mk8SGenericProviderNetworkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGenericProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SGenericProviderNodePoolTaintToTerraform(struct?: Mk8SGenericProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SGenericProviderNodePoolTaintToHclTerraform(struct?: Mk8SGenericProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SGenericProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGenericProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SGenericProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SGenericProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SGenericProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGenericProviderNodePoolTaintOutputReference {
    return new Mk8SGenericProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGenericProviderNodePool {
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SGenericProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SGenericProviderNodePoolToTerraform(struct?: Mk8SGenericProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    taint: cdktf.listMapper(mk8SGenericProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SGenericProviderNodePoolToHclTerraform(struct?: Mk8SGenericProviderNodePool | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8SGenericProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SGenericProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SGenericProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGenericProviderNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SGenericProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SGenericProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SGenericProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SGenericProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SGenericProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGenericProviderNodePoolOutputReference {
    return new Mk8SGenericProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SGenericProvider {
  /**
  * Control Plane location that will host the K8s components. Prefer one that is closest to where the nodes are running.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#location Mk8S#location}
  */
  readonly location: string;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#networking Mk8S#networking}
  */
  readonly networking?: Mk8SGenericProviderNetworking[] | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8SGenericProviderNodePool[] | cdktf.IResolvable;
}

export function mk8SGenericProviderToTerraform(struct?: Mk8SGenericProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    networking: cdktf.listMapper(mk8SGenericProviderNetworkingToTerraform, true)(struct!.networking),
    node_pool: cdktf.listMapper(mk8SGenericProviderNodePoolToTerraform, true)(struct!.nodePool),
  }
}


export function mk8SGenericProviderToHclTerraform(struct?: Mk8SGenericProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networking: {
      value: cdktf.listMapperHcl(mk8SGenericProviderNetworkingToHclTerraform, true)(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SGenericProviderNetworkingList",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8SGenericProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SGenericProviderNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SGenericProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SGenericProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
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

  public set internalValue(value: Mk8SGenericProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
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
      this._location = value.location;
      this._networking.internalValue = value.networking;
      this._nodePool.internalValue = value.nodePool;
    }
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

  // networking - computed: false, optional: true, required: false
  private _networking = new Mk8SGenericProviderNetworkingList(this, "networking", false);
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: Mk8SGenericProviderNetworking[] | cdktf.IResolvable) {
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
  private _nodePool = new Mk8SGenericProviderNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8SGenericProviderNodePool[] | cdktf.IResolvable) {
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

export class Mk8SGenericProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8SGenericProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8SGenericProviderOutputReference {
    return new Mk8SGenericProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SHetznerProviderAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#expander Mk8S#expander}
  */
  readonly expander?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unneeded_time Mk8S#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unready_time Mk8S#unready_time}
  */
  readonly unreadyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#utilization_threshold Mk8S#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
}

export function mk8SHetznerProviderAutoscalerToTerraform(struct?: Mk8SHetznerProviderAutoscaler | cdktf.IResolvable): any {
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


export function mk8SHetznerProviderAutoscalerToHclTerraform(struct?: Mk8SHetznerProviderAutoscaler | cdktf.IResolvable): any {
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

export class Mk8SHetznerProviderAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SHetznerProviderAutoscaler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SHetznerProviderAutoscaler | cdktf.IResolvable | undefined) {
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

export class Mk8SHetznerProviderAutoscalerList extends cdktf.ComplexList {
  public internalValue? : Mk8SHetznerProviderAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): Mk8SHetznerProviderAutoscalerOutputReference {
    return new Mk8SHetznerProviderAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SHetznerProviderDedicatedServerNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SHetznerProviderDedicatedServerNodePoolTaintToTerraform(struct?: Mk8SHetznerProviderDedicatedServerNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SHetznerProviderDedicatedServerNodePoolTaintToHclTerraform(struct?: Mk8SHetznerProviderDedicatedServerNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SHetznerProviderDedicatedServerNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SHetznerProviderDedicatedServerNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SHetznerProviderDedicatedServerNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SHetznerProviderDedicatedServerNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SHetznerProviderDedicatedServerNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SHetznerProviderDedicatedServerNodePoolTaintOutputReference {
    return new Mk8SHetznerProviderDedicatedServerNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SHetznerProviderDedicatedServerNodePool {
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SHetznerProviderDedicatedServerNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SHetznerProviderDedicatedServerNodePoolToTerraform(struct?: Mk8SHetznerProviderDedicatedServerNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    taint: cdktf.listMapper(mk8SHetznerProviderDedicatedServerNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SHetznerProviderDedicatedServerNodePoolToHclTerraform(struct?: Mk8SHetznerProviderDedicatedServerNodePool | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8SHetznerProviderDedicatedServerNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SHetznerProviderDedicatedServerNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SHetznerProviderDedicatedServerNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SHetznerProviderDedicatedServerNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SHetznerProviderDedicatedServerNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SHetznerProviderDedicatedServerNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SHetznerProviderDedicatedServerNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SHetznerProviderDedicatedServerNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SHetznerProviderDedicatedServerNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SHetznerProviderDedicatedServerNodePoolOutputReference {
    return new Mk8SHetznerProviderDedicatedServerNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SHetznerProviderNetworking {
  /**
  * DNS forwarder used by the cluster. Can be a space-delimited list of dns servers. Default is /etc/resolv.conf when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#dns_forwarder Mk8S#dns_forwarder}
  */
  readonly dnsForwarder?: string;
  /**
  * The CIDR of the pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pod_network Mk8S#pod_network}
  */
  readonly podNetwork?: string;
  /**
  * The CIDR of the service network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#service_network Mk8S#service_network}
  */
  readonly serviceNetwork?: string;
}

export function mk8SHetznerProviderNetworkingToTerraform(struct?: Mk8SHetznerProviderNetworking | cdktf.IResolvable): any {
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


export function mk8SHetznerProviderNetworkingToHclTerraform(struct?: Mk8SHetznerProviderNetworking | cdktf.IResolvable): any {
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

export class Mk8SHetznerProviderNetworkingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SHetznerProviderNetworking | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SHetznerProviderNetworking | cdktf.IResolvable | undefined) {
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

export class Mk8SHetznerProviderNetworkingList extends cdktf.ComplexList {
  public internalValue? : Mk8SHetznerProviderNetworking[] | cdktf.IResolvable

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
  public get(index: number): Mk8SHetznerProviderNetworkingOutputReference {
    return new Mk8SHetznerProviderNetworkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SHetznerProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SHetznerProviderNodePoolTaintToTerraform(struct?: Mk8SHetznerProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SHetznerProviderNodePoolTaintToHclTerraform(struct?: Mk8SHetznerProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SHetznerProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SHetznerProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SHetznerProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SHetznerProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SHetznerProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SHetznerProviderNodePoolTaintOutputReference {
    return new Mk8SHetznerProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SHetznerProviderNodePool {
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_size Mk8S#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_size Mk8S#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#override_image Mk8S#override_image}
  */
  readonly overrideImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#server_type Mk8S#server_type}
  */
  readonly serverType: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SHetznerProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SHetznerProviderNodePoolToTerraform(struct?: Mk8SHetznerProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    override_image: cdktf.stringToTerraform(struct!.overrideImage),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    taint: cdktf.listMapper(mk8SHetznerProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SHetznerProviderNodePoolToHclTerraform(struct?: Mk8SHetznerProviderNodePool | cdktf.IResolvable): any {
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
    override_image: {
      value: cdktf.stringToHclTerraform(struct!.overrideImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8SHetznerProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SHetznerProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SHetznerProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SHetznerProviderNodePool | cdktf.IResolvable | undefined {
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
    if (this._overrideImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideImage = this._overrideImage;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SHetznerProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._overrideImage = undefined;
      this._serverType = undefined;
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
      this._overrideImage = value.overrideImage;
      this._serverType = value.serverType;
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

  // override_image - computed: false, optional: true, required: false
  private _overrideImage?: string; 
  public get overrideImage() {
    return this.getStringAttribute('override_image');
  }
  public set overrideImage(value: string) {
    this._overrideImage = value;
  }
  public resetOverrideImage() {
    this._overrideImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideImageInput() {
    return this._overrideImage;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SHetznerProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SHetznerProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SHetznerProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SHetznerProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SHetznerProviderNodePoolOutputReference {
    return new Mk8SHetznerProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SHetznerProvider {
  /**
  * Optional firewall rule to attach to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#firewall_id Mk8S#firewall_id}
  */
  readonly firewallId?: string;
  /**
  * If supplied, nodes will get assigned a random floating ip matching the selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#floating_ip_selector Mk8S#floating_ip_selector}
  */
  readonly floatingIpSelector?: { [key: string]: string };
  /**
  * Extra labels to attach to servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#hetzner_labels Mk8S#hetzner_labels}
  */
  readonly hetznerLabels?: { [key: string]: string };
  /**
  * Default image for all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#image Mk8S#image}
  */
  readonly image?: string;
  /**
  * ID of the Hetzner network to deploy nodes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#network_id Mk8S#network_id}
  */
  readonly networkId: string;
  /**
  * Optional shell script that will be run before K8s is installed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pre_install_script Mk8S#pre_install_script}
  */
  readonly preInstallScript?: string;
  /**
  * Hetzner region to deploy nodes to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#region Mk8S#region}
  */
  readonly region: string;
  /**
  * SSH key name for accessing deployed nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#ssh_key Mk8S#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * Link to a secret holding Hetzner access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#token_secret_link Mk8S#token_secret_link}
  */
  readonly tokenSecretLink: string;
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#autoscaler Mk8S#autoscaler}
  */
  readonly autoscaler?: Mk8SHetznerProviderAutoscaler[] | cdktf.IResolvable;
  /**
  * dedicated_server_node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#dedicated_server_node_pool Mk8S#dedicated_server_node_pool}
  */
  readonly dedicatedServerNodePool?: Mk8SHetznerProviderDedicatedServerNodePool[] | cdktf.IResolvable;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#networking Mk8S#networking}
  */
  readonly networking?: Mk8SHetznerProviderNetworking[] | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8SHetznerProviderNodePool[] | cdktf.IResolvable;
}

export function mk8SHetznerProviderToTerraform(struct?: Mk8SHetznerProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    firewall_id: cdktf.stringToTerraform(struct!.firewallId),
    floating_ip_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.floatingIpSelector),
    hetzner_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.hetznerLabels),
    image: cdktf.stringToTerraform(struct!.image),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    pre_install_script: cdktf.stringToTerraform(struct!.preInstallScript),
    region: cdktf.stringToTerraform(struct!.region),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    token_secret_link: cdktf.stringToTerraform(struct!.tokenSecretLink),
    autoscaler: cdktf.listMapper(mk8SHetznerProviderAutoscalerToTerraform, true)(struct!.autoscaler),
    dedicated_server_node_pool: cdktf.listMapper(mk8SHetznerProviderDedicatedServerNodePoolToTerraform, true)(struct!.dedicatedServerNodePool),
    networking: cdktf.listMapper(mk8SHetznerProviderNetworkingToTerraform, true)(struct!.networking),
    node_pool: cdktf.listMapper(mk8SHetznerProviderNodePoolToTerraform, true)(struct!.nodePool),
  }
}


export function mk8SHetznerProviderToHclTerraform(struct?: Mk8SHetznerProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    firewall_id: {
      value: cdktf.stringToHclTerraform(struct!.firewallId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ip_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.floatingIpSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    hetzner_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.hetznerLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_secret_link: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecretLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaler: {
      value: cdktf.listMapperHcl(mk8SHetznerProviderAutoscalerToHclTerraform, true)(struct!.autoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SHetznerProviderAutoscalerList",
    },
    dedicated_server_node_pool: {
      value: cdktf.listMapperHcl(mk8SHetznerProviderDedicatedServerNodePoolToHclTerraform, true)(struct!.dedicatedServerNodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SHetznerProviderDedicatedServerNodePoolList",
    },
    networking: {
      value: cdktf.listMapperHcl(mk8SHetznerProviderNetworkingToHclTerraform, true)(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SHetznerProviderNetworkingList",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8SHetznerProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SHetznerProviderNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SHetznerProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SHetznerProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._firewallId !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallId = this._firewallId;
    }
    if (this._floatingIpSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpSelector = this._floatingIpSelector;
    }
    if (this._hetznerLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.hetznerLabels = this._hetznerLabels;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._preInstallScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInstallScript = this._preInstallScript;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tokenSecretLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretLink = this._tokenSecretLink;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._dedicatedServerNodePool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedServerNodePool = this._dedicatedServerNodePool?.internalValue;
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

  public set internalValue(value: Mk8SHetznerProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._firewallId = undefined;
      this._floatingIpSelector = undefined;
      this._hetznerLabels = undefined;
      this._image = undefined;
      this._networkId = undefined;
      this._preInstallScript = undefined;
      this._region = undefined;
      this._sshKey = undefined;
      this._tokenSecretLink = undefined;
      this._autoscaler.internalValue = undefined;
      this._dedicatedServerNodePool.internalValue = undefined;
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
      this._firewallId = value.firewallId;
      this._floatingIpSelector = value.floatingIpSelector;
      this._hetznerLabels = value.hetznerLabels;
      this._image = value.image;
      this._networkId = value.networkId;
      this._preInstallScript = value.preInstallScript;
      this._region = value.region;
      this._sshKey = value.sshKey;
      this._tokenSecretLink = value.tokenSecretLink;
      this._autoscaler.internalValue = value.autoscaler;
      this._dedicatedServerNodePool.internalValue = value.dedicatedServerNodePool;
      this._networking.internalValue = value.networking;
      this._nodePool.internalValue = value.nodePool;
    }
  }

  // firewall_id - computed: false, optional: true, required: false
  private _firewallId?: string; 
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }
  public set firewallId(value: string) {
    this._firewallId = value;
  }
  public resetFirewallId() {
    this._firewallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
  }

  // floating_ip_selector - computed: false, optional: true, required: false
  private _floatingIpSelector?: { [key: string]: string }; 
  public get floatingIpSelector() {
    return this.getStringMapAttribute('floating_ip_selector');
  }
  public set floatingIpSelector(value: { [key: string]: string }) {
    this._floatingIpSelector = value;
  }
  public resetFloatingIpSelector() {
    this._floatingIpSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpSelectorInput() {
    return this._floatingIpSelector;
  }

  // hetzner_labels - computed: false, optional: true, required: false
  private _hetznerLabels?: { [key: string]: string }; 
  public get hetznerLabels() {
    return this.getStringMapAttribute('hetzner_labels');
  }
  public set hetznerLabels(value: { [key: string]: string }) {
    this._hetznerLabels = value;
  }
  public resetHetznerLabels() {
    this._hetznerLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hetznerLabelsInput() {
    return this._hetznerLabels;
  }

  // image - computed: true, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // token_secret_link - computed: false, optional: false, required: true
  private _tokenSecretLink?: string; 
  public get tokenSecretLink() {
    return this.getStringAttribute('token_secret_link');
  }
  public set tokenSecretLink(value: string) {
    this._tokenSecretLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretLinkInput() {
    return this._tokenSecretLink;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new Mk8SHetznerProviderAutoscalerList(this, "autoscaler", false);
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: Mk8SHetznerProviderAutoscaler[] | cdktf.IResolvable) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // dedicated_server_node_pool - computed: false, optional: true, required: false
  private _dedicatedServerNodePool = new Mk8SHetznerProviderDedicatedServerNodePoolList(this, "dedicated_server_node_pool", false);
  public get dedicatedServerNodePool() {
    return this._dedicatedServerNodePool;
  }
  public putDedicatedServerNodePool(value: Mk8SHetznerProviderDedicatedServerNodePool[] | cdktf.IResolvable) {
    this._dedicatedServerNodePool.internalValue = value;
  }
  public resetDedicatedServerNodePool() {
    this._dedicatedServerNodePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedServerNodePoolInput() {
    return this._dedicatedServerNodePool.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new Mk8SHetznerProviderNetworkingList(this, "networking", false);
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: Mk8SHetznerProviderNetworking[] | cdktf.IResolvable) {
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
  private _nodePool = new Mk8SHetznerProviderNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8SHetznerProviderNodePool[] | cdktf.IResolvable) {
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

export class Mk8SHetznerProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8SHetznerProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8SHetznerProviderOutputReference {
    return new Mk8SHetznerProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLambdalabsProviderAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#expander Mk8S#expander}
  */
  readonly expander?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unneeded_time Mk8S#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unready_time Mk8S#unready_time}
  */
  readonly unreadyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#utilization_threshold Mk8S#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
}

export function mk8SLambdalabsProviderAutoscalerToTerraform(struct?: Mk8SLambdalabsProviderAutoscaler | cdktf.IResolvable): any {
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


export function mk8SLambdalabsProviderAutoscalerToHclTerraform(struct?: Mk8SLambdalabsProviderAutoscaler | cdktf.IResolvable): any {
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

export class Mk8SLambdalabsProviderAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLambdalabsProviderAutoscaler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SLambdalabsProviderAutoscaler | cdktf.IResolvable | undefined) {
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

export class Mk8SLambdalabsProviderAutoscalerList extends cdktf.ComplexList {
  public internalValue? : Mk8SLambdalabsProviderAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLambdalabsProviderAutoscalerOutputReference {
    return new Mk8SLambdalabsProviderAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLambdalabsProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SLambdalabsProviderNodePoolTaintToTerraform(struct?: Mk8SLambdalabsProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SLambdalabsProviderNodePoolTaintToHclTerraform(struct?: Mk8SLambdalabsProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SLambdalabsProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLambdalabsProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SLambdalabsProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SLambdalabsProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SLambdalabsProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLambdalabsProviderNodePoolTaintOutputReference {
    return new Mk8SLambdalabsProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLambdalabsProviderNodePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#instance_type Mk8S#instance_type}
  */
  readonly instanceType: string;
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_size Mk8S#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_size Mk8S#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SLambdalabsProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SLambdalabsProviderNodePoolToTerraform(struct?: Mk8SLambdalabsProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    taint: cdktf.listMapper(mk8SLambdalabsProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SLambdalabsProviderNodePoolToHclTerraform(struct?: Mk8SLambdalabsProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    taint: {
      value: cdktf.listMapperHcl(mk8SLambdalabsProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SLambdalabsProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SLambdalabsProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLambdalabsProviderNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
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
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SLambdalabsProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
      this._labels = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._taint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
      this._labels = value.labels;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._name = value.name;
      this._taint.internalValue = value.taint;
    }
  }

  // instance_type - computed: false, optional: false, required: true
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
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

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SLambdalabsProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SLambdalabsProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SLambdalabsProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SLambdalabsProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLambdalabsProviderNodePoolOutputReference {
    return new Mk8SLambdalabsProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLambdalabsProviderUnmanagedNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SLambdalabsProviderUnmanagedNodePoolTaintToTerraform(struct?: Mk8SLambdalabsProviderUnmanagedNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SLambdalabsProviderUnmanagedNodePoolTaintToHclTerraform(struct?: Mk8SLambdalabsProviderUnmanagedNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SLambdalabsProviderUnmanagedNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLambdalabsProviderUnmanagedNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SLambdalabsProviderUnmanagedNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SLambdalabsProviderUnmanagedNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SLambdalabsProviderUnmanagedNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLambdalabsProviderUnmanagedNodePoolTaintOutputReference {
    return new Mk8SLambdalabsProviderUnmanagedNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLambdalabsProviderUnmanagedNodePool {
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SLambdalabsProviderUnmanagedNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SLambdalabsProviderUnmanagedNodePoolToTerraform(struct?: Mk8SLambdalabsProviderUnmanagedNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    taint: cdktf.listMapper(mk8SLambdalabsProviderUnmanagedNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SLambdalabsProviderUnmanagedNodePoolToHclTerraform(struct?: Mk8SLambdalabsProviderUnmanagedNodePool | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8SLambdalabsProviderUnmanagedNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SLambdalabsProviderUnmanagedNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SLambdalabsProviderUnmanagedNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLambdalabsProviderUnmanagedNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SLambdalabsProviderUnmanagedNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SLambdalabsProviderUnmanagedNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SLambdalabsProviderUnmanagedNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SLambdalabsProviderUnmanagedNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SLambdalabsProviderUnmanagedNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLambdalabsProviderUnmanagedNodePoolOutputReference {
    return new Mk8SLambdalabsProviderUnmanagedNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLambdalabsProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#file_systems Mk8S#file_systems}
  */
  readonly fileSystems?: string[];
  /**
  * Optional shell script that will be run before K8s is installed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pre_install_script Mk8S#pre_install_script}
  */
  readonly preInstallScript?: string;
  /**
  * Region where the cluster nodes will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#region Mk8S#region}
  */
  readonly region: string;
  /**
  * SSH key name for accessing deployed nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#ssh_key Mk8S#ssh_key}
  */
  readonly sshKey: string;
  /**
  * Link to a secret holding Lambdalabs access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#token_secret_link Mk8S#token_secret_link}
  */
  readonly tokenSecretLink: string;
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#autoscaler Mk8S#autoscaler}
  */
  readonly autoscaler?: Mk8SLambdalabsProviderAutoscaler[] | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8SLambdalabsProviderNodePool[] | cdktf.IResolvable;
  /**
  * unmanaged_node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unmanaged_node_pool Mk8S#unmanaged_node_pool}
  */
  readonly unmanagedNodePool?: Mk8SLambdalabsProviderUnmanagedNodePool[] | cdktf.IResolvable;
}

export function mk8SLambdalabsProviderToTerraform(struct?: Mk8SLambdalabsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_systems: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileSystems),
    pre_install_script: cdktf.stringToTerraform(struct!.preInstallScript),
    region: cdktf.stringToTerraform(struct!.region),
    ssh_key: cdktf.stringToTerraform(struct!.sshKey),
    token_secret_link: cdktf.stringToTerraform(struct!.tokenSecretLink),
    autoscaler: cdktf.listMapper(mk8SLambdalabsProviderAutoscalerToTerraform, true)(struct!.autoscaler),
    node_pool: cdktf.listMapper(mk8SLambdalabsProviderNodePoolToTerraform, true)(struct!.nodePool),
    unmanaged_node_pool: cdktf.listMapper(mk8SLambdalabsProviderUnmanagedNodePoolToTerraform, true)(struct!.unmanagedNodePool),
  }
}


export function mk8SLambdalabsProviderToHclTerraform(struct?: Mk8SLambdalabsProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_systems: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileSystems),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pre_install_script: {
      value: cdktf.stringToHclTerraform(struct!.preInstallScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key: {
      value: cdktf.stringToHclTerraform(struct!.sshKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_secret_link: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecretLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaler: {
      value: cdktf.listMapperHcl(mk8SLambdalabsProviderAutoscalerToHclTerraform, true)(struct!.autoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SLambdalabsProviderAutoscalerList",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8SLambdalabsProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SLambdalabsProviderNodePoolList",
    },
    unmanaged_node_pool: {
      value: cdktf.listMapperHcl(mk8SLambdalabsProviderUnmanagedNodePoolToHclTerraform, true)(struct!.unmanagedNodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SLambdalabsProviderUnmanagedNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SLambdalabsProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLambdalabsProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileSystems !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystems = this._fileSystems;
    }
    if (this._preInstallScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInstallScript = this._preInstallScript;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._sshKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKey = this._sshKey;
    }
    if (this._tokenSecretLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretLink = this._tokenSecretLink;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._nodePool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePool = this._nodePool?.internalValue;
    }
    if (this._unmanagedNodePool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanagedNodePool = this._unmanagedNodePool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SLambdalabsProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileSystems = undefined;
      this._preInstallScript = undefined;
      this._region = undefined;
      this._sshKey = undefined;
      this._tokenSecretLink = undefined;
      this._autoscaler.internalValue = undefined;
      this._nodePool.internalValue = undefined;
      this._unmanagedNodePool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileSystems = value.fileSystems;
      this._preInstallScript = value.preInstallScript;
      this._region = value.region;
      this._sshKey = value.sshKey;
      this._tokenSecretLink = value.tokenSecretLink;
      this._autoscaler.internalValue = value.autoscaler;
      this._nodePool.internalValue = value.nodePool;
      this._unmanagedNodePool.internalValue = value.unmanagedNodePool;
    }
  }

  // file_systems - computed: false, optional: true, required: false
  private _fileSystems?: string[]; 
  public get fileSystems() {
    return cdktf.Fn.tolist(this.getListAttribute('file_systems'));
  }
  public set fileSystems(value: string[]) {
    this._fileSystems = value;
  }
  public resetFileSystems() {
    this._fileSystems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemsInput() {
    return this._fileSystems;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // ssh_key - computed: false, optional: false, required: true
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // token_secret_link - computed: false, optional: false, required: true
  private _tokenSecretLink?: string; 
  public get tokenSecretLink() {
    return this.getStringAttribute('token_secret_link');
  }
  public set tokenSecretLink(value: string) {
    this._tokenSecretLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretLinkInput() {
    return this._tokenSecretLink;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new Mk8SLambdalabsProviderAutoscalerList(this, "autoscaler", false);
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: Mk8SLambdalabsProviderAutoscaler[] | cdktf.IResolvable) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // node_pool - computed: false, optional: true, required: false
  private _nodePool = new Mk8SLambdalabsProviderNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8SLambdalabsProviderNodePool[] | cdktf.IResolvable) {
    this._nodePool.internalValue = value;
  }
  public resetNodePool() {
    this._nodePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool.internalValue;
  }

  // unmanaged_node_pool - computed: false, optional: true, required: false
  private _unmanagedNodePool = new Mk8SLambdalabsProviderUnmanagedNodePoolList(this, "unmanaged_node_pool", false);
  public get unmanagedNodePool() {
    return this._unmanagedNodePool;
  }
  public putUnmanagedNodePool(value: Mk8SLambdalabsProviderUnmanagedNodePool[] | cdktf.IResolvable) {
    this._unmanagedNodePool.internalValue = value;
  }
  public resetUnmanagedNodePool() {
    this._unmanagedNodePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedNodePoolInput() {
    return this._unmanagedNodePool.internalValue;
  }
}

export class Mk8SLambdalabsProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8SLambdalabsProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLambdalabsProviderOutputReference {
    return new Mk8SLambdalabsProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLinodeProviderAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#expander Mk8S#expander}
  */
  readonly expander?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unneeded_time Mk8S#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unready_time Mk8S#unready_time}
  */
  readonly unreadyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#utilization_threshold Mk8S#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
}

export function mk8SLinodeProviderAutoscalerToTerraform(struct?: Mk8SLinodeProviderAutoscaler | cdktf.IResolvable): any {
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


export function mk8SLinodeProviderAutoscalerToHclTerraform(struct?: Mk8SLinodeProviderAutoscaler | cdktf.IResolvable): any {
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

export class Mk8SLinodeProviderAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLinodeProviderAutoscaler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SLinodeProviderAutoscaler | cdktf.IResolvable | undefined) {
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

export class Mk8SLinodeProviderAutoscalerList extends cdktf.ComplexList {
  public internalValue? : Mk8SLinodeProviderAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLinodeProviderAutoscalerOutputReference {
    return new Mk8SLinodeProviderAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLinodeProviderNetworking {
  /**
  * DNS forwarder used by the cluster. Can be a space-delimited list of dns servers. Default is /etc/resolv.conf when not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#dns_forwarder Mk8S#dns_forwarder}
  */
  readonly dnsForwarder?: string;
  /**
  * The CIDR of the pod network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pod_network Mk8S#pod_network}
  */
  readonly podNetwork?: string;
  /**
  * The CIDR of the service network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#service_network Mk8S#service_network}
  */
  readonly serviceNetwork?: string;
}

export function mk8SLinodeProviderNetworkingToTerraform(struct?: Mk8SLinodeProviderNetworking | cdktf.IResolvable): any {
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


export function mk8SLinodeProviderNetworkingToHclTerraform(struct?: Mk8SLinodeProviderNetworking | cdktf.IResolvable): any {
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

export class Mk8SLinodeProviderNetworkingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLinodeProviderNetworking | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SLinodeProviderNetworking | cdktf.IResolvable | undefined) {
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

export class Mk8SLinodeProviderNetworkingList extends cdktf.ComplexList {
  public internalValue? : Mk8SLinodeProviderNetworking[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLinodeProviderNetworkingOutputReference {
    return new Mk8SLinodeProviderNetworkingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLinodeProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SLinodeProviderNodePoolTaintToTerraform(struct?: Mk8SLinodeProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SLinodeProviderNodePoolTaintToHclTerraform(struct?: Mk8SLinodeProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SLinodeProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLinodeProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SLinodeProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SLinodeProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SLinodeProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLinodeProviderNodePoolTaintOutputReference {
    return new Mk8SLinodeProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLinodeProviderNodePool {
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_size Mk8S#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_size Mk8S#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#override_image Mk8S#override_image}
  */
  readonly overrideImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#server_type Mk8S#server_type}
  */
  readonly serverType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#subnet_id Mk8S#subnet_id}
  */
  readonly subnetId: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SLinodeProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SLinodeProviderNodePoolToTerraform(struct?: Mk8SLinodeProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    override_image: cdktf.stringToTerraform(struct!.overrideImage),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    taint: cdktf.listMapper(mk8SLinodeProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SLinodeProviderNodePoolToHclTerraform(struct?: Mk8SLinodeProviderNodePool | cdktf.IResolvable): any {
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
    override_image: {
      value: cdktf.stringToHclTerraform(struct!.overrideImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
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
    taint: {
      value: cdktf.listMapperHcl(mk8SLinodeProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SLinodeProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SLinodeProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLinodeProviderNodePool | cdktf.IResolvable | undefined {
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
    if (this._overrideImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideImage = this._overrideImage;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SLinodeProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._overrideImage = undefined;
      this._serverType = undefined;
      this._subnetId = undefined;
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
      this._overrideImage = value.overrideImage;
      this._serverType = value.serverType;
      this._subnetId = value.subnetId;
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

  // override_image - computed: false, optional: true, required: false
  private _overrideImage?: string; 
  public get overrideImage() {
    return this.getStringAttribute('override_image');
  }
  public set overrideImage(value: string) {
    this._overrideImage = value;
  }
  public resetOverrideImage() {
    this._overrideImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideImageInput() {
    return this._overrideImage;
  }

  // server_type - computed: false, optional: false, required: true
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SLinodeProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SLinodeProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SLinodeProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SLinodeProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLinodeProviderNodePoolOutputReference {
    return new Mk8SLinodeProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SLinodeProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#authorized_keys Mk8S#authorized_keys}
  */
  readonly authorizedKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#authorized_users Mk8S#authorized_users}
  */
  readonly authorizedUsers?: string[];
  /**
  * Optional firewall rule to attach to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#firewall_id Mk8S#firewall_id}
  */
  readonly firewallId?: string;
  /**
  * Default image for all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#image Mk8S#image}
  */
  readonly image: string;
  /**
  * Optional shell script that will be run before K8s is installed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pre_install_script Mk8S#pre_install_script}
  */
  readonly preInstallScript?: string;
  /**
  * Region where the cluster nodes will live.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#region Mk8S#region}
  */
  readonly region: string;
  /**
  * Link to a secret holding Linode access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#token_secret_link Mk8S#token_secret_link}
  */
  readonly tokenSecretLink: string;
  /**
  * The vpc where nodes will be deployed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#vpc_id Mk8S#vpc_id}
  */
  readonly vpcId: string;
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#autoscaler Mk8S#autoscaler}
  */
  readonly autoscaler?: Mk8SLinodeProviderAutoscaler[] | cdktf.IResolvable;
  /**
  * networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#networking Mk8S#networking}
  */
  readonly networking?: Mk8SLinodeProviderNetworking[] | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8SLinodeProviderNodePool[] | cdktf.IResolvable;
}

export function mk8SLinodeProviderToTerraform(struct?: Mk8SLinodeProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedKeys),
    authorized_users: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedUsers),
    firewall_id: cdktf.stringToTerraform(struct!.firewallId),
    image: cdktf.stringToTerraform(struct!.image),
    pre_install_script: cdktf.stringToTerraform(struct!.preInstallScript),
    region: cdktf.stringToTerraform(struct!.region),
    token_secret_link: cdktf.stringToTerraform(struct!.tokenSecretLink),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    autoscaler: cdktf.listMapper(mk8SLinodeProviderAutoscalerToTerraform, true)(struct!.autoscaler),
    networking: cdktf.listMapper(mk8SLinodeProviderNetworkingToTerraform, true)(struct!.networking),
    node_pool: cdktf.listMapper(mk8SLinodeProviderNodePoolToTerraform, true)(struct!.nodePool),
  }
}


export function mk8SLinodeProviderToHclTerraform(struct?: Mk8SLinodeProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    authorized_users: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedUsers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    firewall_id: {
      value: cdktf.stringToHclTerraform(struct!.firewallId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_secret_link: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecretLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaler: {
      value: cdktf.listMapperHcl(mk8SLinodeProviderAutoscalerToHclTerraform, true)(struct!.autoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SLinodeProviderAutoscalerList",
    },
    networking: {
      value: cdktf.listMapperHcl(mk8SLinodeProviderNetworkingToHclTerraform, true)(struct!.networking),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SLinodeProviderNetworkingList",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8SLinodeProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SLinodeProviderNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SLinodeProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SLinodeProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedKeys = this._authorizedKeys;
    }
    if (this._authorizedUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedUsers = this._authorizedUsers;
    }
    if (this._firewallId !== undefined) {
      hasAnyValues = true;
      internalValueResult.firewallId = this._firewallId;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._preInstallScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInstallScript = this._preInstallScript;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._tokenSecretLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretLink = this._tokenSecretLink;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
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

  public set internalValue(value: Mk8SLinodeProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizedKeys = undefined;
      this._authorizedUsers = undefined;
      this._firewallId = undefined;
      this._image = undefined;
      this._preInstallScript = undefined;
      this._region = undefined;
      this._tokenSecretLink = undefined;
      this._vpcId = undefined;
      this._autoscaler.internalValue = undefined;
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
      this._authorizedKeys = value.authorizedKeys;
      this._authorizedUsers = value.authorizedUsers;
      this._firewallId = value.firewallId;
      this._image = value.image;
      this._preInstallScript = value.preInstallScript;
      this._region = value.region;
      this._tokenSecretLink = value.tokenSecretLink;
      this._vpcId = value.vpcId;
      this._autoscaler.internalValue = value.autoscaler;
      this._networking.internalValue = value.networking;
      this._nodePool.internalValue = value.nodePool;
    }
  }

  // authorized_keys - computed: false, optional: true, required: false
  private _authorizedKeys?: string[]; 
  public get authorizedKeys() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_keys'));
  }
  public set authorizedKeys(value: string[]) {
    this._authorizedKeys = value;
  }
  public resetAuthorizedKeys() {
    this._authorizedKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedKeysInput() {
    return this._authorizedKeys;
  }

  // authorized_users - computed: false, optional: true, required: false
  private _authorizedUsers?: string[]; 
  public get authorizedUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_users'));
  }
  public set authorizedUsers(value: string[]) {
    this._authorizedUsers = value;
  }
  public resetAuthorizedUsers() {
    this._authorizedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedUsersInput() {
    return this._authorizedUsers;
  }

  // firewall_id - computed: false, optional: true, required: false
  private _firewallId?: string; 
  public get firewallId() {
    return this.getStringAttribute('firewall_id');
  }
  public set firewallId(value: string) {
    this._firewallId = value;
  }
  public resetFirewallId() {
    this._firewallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firewallIdInput() {
    return this._firewallId;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // token_secret_link - computed: false, optional: false, required: true
  private _tokenSecretLink?: string; 
  public get tokenSecretLink() {
    return this.getStringAttribute('token_secret_link');
  }
  public set tokenSecretLink(value: string) {
    this._tokenSecretLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretLinkInput() {
    return this._tokenSecretLink;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new Mk8SLinodeProviderAutoscalerList(this, "autoscaler", false);
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: Mk8SLinodeProviderAutoscaler[] | cdktf.IResolvable) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // networking - computed: false, optional: true, required: false
  private _networking = new Mk8SLinodeProviderNetworkingList(this, "networking", false);
  public get networking() {
    return this._networking;
  }
  public putNetworking(value: Mk8SLinodeProviderNetworking[] | cdktf.IResolvable) {
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
  private _nodePool = new Mk8SLinodeProviderNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8SLinodeProviderNodePool[] | cdktf.IResolvable) {
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

export class Mk8SLinodeProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8SLinodeProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8SLinodeProviderOutputReference {
    return new Mk8SLinodeProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SOblivusProviderAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#expander Mk8S#expander}
  */
  readonly expander?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unneeded_time Mk8S#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unready_time Mk8S#unready_time}
  */
  readonly unreadyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#utilization_threshold Mk8S#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
}

export function mk8SOblivusProviderAutoscalerToTerraform(struct?: Mk8SOblivusProviderAutoscaler | cdktf.IResolvable): any {
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


export function mk8SOblivusProviderAutoscalerToHclTerraform(struct?: Mk8SOblivusProviderAutoscaler | cdktf.IResolvable): any {
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

export class Mk8SOblivusProviderAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SOblivusProviderAutoscaler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SOblivusProviderAutoscaler | cdktf.IResolvable | undefined) {
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

export class Mk8SOblivusProviderAutoscalerList extends cdktf.ComplexList {
  public internalValue? : Mk8SOblivusProviderAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): Mk8SOblivusProviderAutoscalerOutputReference {
    return new Mk8SOblivusProviderAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SOblivusProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SOblivusProviderNodePoolTaintToTerraform(struct?: Mk8SOblivusProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SOblivusProviderNodePoolTaintToHclTerraform(struct?: Mk8SOblivusProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SOblivusProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SOblivusProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SOblivusProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SOblivusProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SOblivusProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SOblivusProviderNodePoolTaintOutputReference {
    return new Mk8SOblivusProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SOblivusProviderNodePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#flavor Mk8S#flavor}
  */
  readonly flavor: string;
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_size Mk8S#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_size Mk8S#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SOblivusProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SOblivusProviderNodePoolToTerraform(struct?: Mk8SOblivusProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    flavor: cdktf.stringToTerraform(struct!.flavor),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    taint: cdktf.listMapper(mk8SOblivusProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SOblivusProviderNodePoolToHclTerraform(struct?: Mk8SOblivusProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    flavor: {
      value: cdktf.stringToHclTerraform(struct!.flavor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    taint: {
      value: cdktf.listMapperHcl(mk8SOblivusProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SOblivusProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SOblivusProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SOblivusProviderNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._flavor !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavor = this._flavor;
    }
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
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SOblivusProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._flavor = undefined;
      this._labels = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._taint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._flavor = value.flavor;
      this._labels = value.labels;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._name = value.name;
      this._taint.internalValue = value.taint;
    }
  }

  // flavor - computed: false, optional: false, required: true
  private _flavor?: string; 
  public get flavor() {
    return this.getStringAttribute('flavor');
  }
  public set flavor(value: string) {
    this._flavor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorInput() {
    return this._flavor;
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

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SOblivusProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SOblivusProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SOblivusProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SOblivusProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SOblivusProviderNodePoolOutputReference {
    return new Mk8SOblivusProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SOblivusProviderUnmanagedNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SOblivusProviderUnmanagedNodePoolTaintToTerraform(struct?: Mk8SOblivusProviderUnmanagedNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SOblivusProviderUnmanagedNodePoolTaintToHclTerraform(struct?: Mk8SOblivusProviderUnmanagedNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SOblivusProviderUnmanagedNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SOblivusProviderUnmanagedNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SOblivusProviderUnmanagedNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SOblivusProviderUnmanagedNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SOblivusProviderUnmanagedNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SOblivusProviderUnmanagedNodePoolTaintOutputReference {
    return new Mk8SOblivusProviderUnmanagedNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SOblivusProviderUnmanagedNodePool {
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SOblivusProviderUnmanagedNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SOblivusProviderUnmanagedNodePoolToTerraform(struct?: Mk8SOblivusProviderUnmanagedNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    taint: cdktf.listMapper(mk8SOblivusProviderUnmanagedNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SOblivusProviderUnmanagedNodePoolToHclTerraform(struct?: Mk8SOblivusProviderUnmanagedNodePool | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8SOblivusProviderUnmanagedNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SOblivusProviderUnmanagedNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SOblivusProviderUnmanagedNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SOblivusProviderUnmanagedNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SOblivusProviderUnmanagedNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
      this._name = undefined;
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
      this._name = value.name;
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

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SOblivusProviderUnmanagedNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SOblivusProviderUnmanagedNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SOblivusProviderUnmanagedNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SOblivusProviderUnmanagedNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SOblivusProviderUnmanagedNodePoolOutputReference {
    return new Mk8SOblivusProviderUnmanagedNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SOblivusProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#datacenter Mk8S#datacenter}
  */
  readonly datacenter: string;
  /**
  * Optional shell script that will be run before K8s is installed. Supports SSM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#pre_install_script Mk8S#pre_install_script}
  */
  readonly preInstallScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#ssh_keys Mk8S#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Link to a secret holding Oblivus access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#token_secret_link Mk8S#token_secret_link}
  */
  readonly tokenSecretLink: string;
  /**
  * autoscaler block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#autoscaler Mk8S#autoscaler}
  */
  readonly autoscaler?: Mk8SOblivusProviderAutoscaler[] | cdktf.IResolvable;
  /**
  * node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#node_pool Mk8S#node_pool}
  */
  readonly nodePool?: Mk8SOblivusProviderNodePool[] | cdktf.IResolvable;
  /**
  * unmanaged_node_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unmanaged_node_pool Mk8S#unmanaged_node_pool}
  */
  readonly unmanagedNodePool?: Mk8SOblivusProviderUnmanagedNodePool[] | cdktf.IResolvable;
}

export function mk8SOblivusProviderToTerraform(struct?: Mk8SOblivusProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    pre_install_script: cdktf.stringToTerraform(struct!.preInstallScript),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    token_secret_link: cdktf.stringToTerraform(struct!.tokenSecretLink),
    autoscaler: cdktf.listMapper(mk8SOblivusProviderAutoscalerToTerraform, true)(struct!.autoscaler),
    node_pool: cdktf.listMapper(mk8SOblivusProviderNodePoolToTerraform, true)(struct!.nodePool),
    unmanaged_node_pool: cdktf.listMapper(mk8SOblivusProviderUnmanagedNodePoolToTerraform, true)(struct!.unmanagedNodePool),
  }
}


export function mk8SOblivusProviderToHclTerraform(struct?: Mk8SOblivusProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
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
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    token_secret_link: {
      value: cdktf.stringToHclTerraform(struct!.tokenSecretLink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autoscaler: {
      value: cdktf.listMapperHcl(mk8SOblivusProviderAutoscalerToHclTerraform, true)(struct!.autoscaler),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SOblivusProviderAutoscalerList",
    },
    node_pool: {
      value: cdktf.listMapperHcl(mk8SOblivusProviderNodePoolToHclTerraform, true)(struct!.nodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SOblivusProviderNodePoolList",
    },
    unmanaged_node_pool: {
      value: cdktf.listMapperHcl(mk8SOblivusProviderUnmanagedNodePoolToHclTerraform, true)(struct!.unmanagedNodePool),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SOblivusProviderUnmanagedNodePoolList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SOblivusProviderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SOblivusProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._preInstallScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.preInstallScript = this._preInstallScript;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._tokenSecretLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenSecretLink = this._tokenSecretLink;
    }
    if (this._autoscaler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscaler = this._autoscaler?.internalValue;
    }
    if (this._nodePool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePool = this._nodePool?.internalValue;
    }
    if (this._unmanagedNodePool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanagedNodePool = this._unmanagedNodePool?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SOblivusProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenter = undefined;
      this._preInstallScript = undefined;
      this._sshKeys = undefined;
      this._tokenSecretLink = undefined;
      this._autoscaler.internalValue = undefined;
      this._nodePool.internalValue = undefined;
      this._unmanagedNodePool.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenter = value.datacenter;
      this._preInstallScript = value.preInstallScript;
      this._sshKeys = value.sshKeys;
      this._tokenSecretLink = value.tokenSecretLink;
      this._autoscaler.internalValue = value.autoscaler;
      this._nodePool.internalValue = value.nodePool;
      this._unmanagedNodePool.internalValue = value.unmanagedNodePool;
    }
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
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

  // token_secret_link - computed: false, optional: false, required: true
  private _tokenSecretLink?: string; 
  public get tokenSecretLink() {
    return this.getStringAttribute('token_secret_link');
  }
  public set tokenSecretLink(value: string) {
    this._tokenSecretLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenSecretLinkInput() {
    return this._tokenSecretLink;
  }

  // autoscaler - computed: false, optional: true, required: false
  private _autoscaler = new Mk8SOblivusProviderAutoscalerList(this, "autoscaler", false);
  public get autoscaler() {
    return this._autoscaler;
  }
  public putAutoscaler(value: Mk8SOblivusProviderAutoscaler[] | cdktf.IResolvable) {
    this._autoscaler.internalValue = value;
  }
  public resetAutoscaler() {
    this._autoscaler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalerInput() {
    return this._autoscaler.internalValue;
  }

  // node_pool - computed: false, optional: true, required: false
  private _nodePool = new Mk8SOblivusProviderNodePoolList(this, "node_pool", false);
  public get nodePool() {
    return this._nodePool;
  }
  public putNodePool(value: Mk8SOblivusProviderNodePool[] | cdktf.IResolvable) {
    this._nodePool.internalValue = value;
  }
  public resetNodePool() {
    this._nodePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePoolInput() {
    return this._nodePool.internalValue;
  }

  // unmanaged_node_pool - computed: false, optional: true, required: false
  private _unmanagedNodePool = new Mk8SOblivusProviderUnmanagedNodePoolList(this, "unmanaged_node_pool", false);
  public get unmanagedNodePool() {
    return this._unmanagedNodePool;
  }
  public putUnmanagedNodePool(value: Mk8SOblivusProviderUnmanagedNodePool[] | cdktf.IResolvable) {
    this._unmanagedNodePool.internalValue = value;
  }
  public resetUnmanagedNodePool() {
    this._unmanagedNodePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedNodePoolInput() {
    return this._unmanagedNodePool.internalValue;
  }
}

export class Mk8SOblivusProviderList extends cdktf.ComplexList {
  public internalValue? : Mk8SOblivusProvider[] | cdktf.IResolvable

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
  public get(index: number): Mk8SOblivusProviderOutputReference {
    return new Mk8SOblivusProviderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SPaperspaceProviderAutoscaler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#expander Mk8S#expander}
  */
  readonly expander?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unneeded_time Mk8S#unneeded_time}
  */
  readonly unneededTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#unready_time Mk8S#unready_time}
  */
  readonly unreadyTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#utilization_threshold Mk8S#utilization_threshold}
  */
  readonly utilizationThreshold?: number;
}

export function mk8SPaperspaceProviderAutoscalerToTerraform(struct?: Mk8SPaperspaceProviderAutoscaler | cdktf.IResolvable): any {
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


export function mk8SPaperspaceProviderAutoscalerToHclTerraform(struct?: Mk8SPaperspaceProviderAutoscaler | cdktf.IResolvable): any {
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

export class Mk8SPaperspaceProviderAutoscalerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SPaperspaceProviderAutoscaler | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SPaperspaceProviderAutoscaler | cdktf.IResolvable | undefined) {
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

export class Mk8SPaperspaceProviderAutoscalerList extends cdktf.ComplexList {
  public internalValue? : Mk8SPaperspaceProviderAutoscaler[] | cdktf.IResolvable

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
  public get(index: number): Mk8SPaperspaceProviderAutoscalerOutputReference {
    return new Mk8SPaperspaceProviderAutoscalerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SPaperspaceProviderNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SPaperspaceProviderNodePoolTaintToTerraform(struct?: Mk8SPaperspaceProviderNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SPaperspaceProviderNodePoolTaintToHclTerraform(struct?: Mk8SPaperspaceProviderNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SPaperspaceProviderNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SPaperspaceProviderNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SPaperspaceProviderNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SPaperspaceProviderNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SPaperspaceProviderNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SPaperspaceProviderNodePoolTaintOutputReference {
    return new Mk8SPaperspaceProviderNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SPaperspaceProviderNodePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#boot_disk_size Mk8S#boot_disk_size}
  */
  readonly bootDiskSize?: number;
  /**
  * Labels to attach to nodes of a node pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#labels Mk8S#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#machine_type Mk8S#machine_type}
  */
  readonly machineType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#max_size Mk8S#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#min_size Mk8S#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#name Mk8S#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#public_ip_type Mk8S#public_ip_type}
  */
  readonly publicIpType: string;
  /**
  * taint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#taint Mk8S#taint}
  */
  readonly taint?: Mk8SPaperspaceProviderNodePoolTaint[] | cdktf.IResolvable;
}

export function mk8SPaperspaceProviderNodePoolToTerraform(struct?: Mk8SPaperspaceProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_disk_size: cdktf.numberToTerraform(struct!.bootDiskSize),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    machine_type: cdktf.stringToTerraform(struct!.machineType),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    public_ip_type: cdktf.stringToTerraform(struct!.publicIpType),
    taint: cdktf.listMapper(mk8SPaperspaceProviderNodePoolTaintToTerraform, true)(struct!.taint),
  }
}


export function mk8SPaperspaceProviderNodePoolToHclTerraform(struct?: Mk8SPaperspaceProviderNodePool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.bootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    machine_type: {
      value: cdktf.stringToHclTerraform(struct!.machineType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    public_ip_type: {
      value: cdktf.stringToHclTerraform(struct!.publicIpType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    taint: {
      value: cdktf.listMapperHcl(mk8SPaperspaceProviderNodePoolTaintToHclTerraform, true)(struct!.taint),
      isBlock: true,
      type: "list",
      storageClassType: "Mk8SPaperspaceProviderNodePoolTaintList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Mk8SPaperspaceProviderNodePoolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SPaperspaceProviderNodePool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootDiskSize = this._bootDiskSize;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._machineType !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineType = this._machineType;
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
    if (this._publicIpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIpType = this._publicIpType;
    }
    if (this._taint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.taint = this._taint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Mk8SPaperspaceProviderNodePool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootDiskSize = undefined;
      this._labels = undefined;
      this._machineType = undefined;
      this._maxSize = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._publicIpType = undefined;
      this._taint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootDiskSize = value.bootDiskSize;
      this._labels = value.labels;
      this._machineType = value.machineType;
      this._maxSize = value.maxSize;
      this._minSize = value.minSize;
      this._name = value.name;
      this._publicIpType = value.publicIpType;
      this._taint.internalValue = value.taint;
    }
  }

  // boot_disk_size - computed: false, optional: true, required: false
  private _bootDiskSize?: number; 
  public get bootDiskSize() {
    return this.getNumberAttribute('boot_disk_size');
  }
  public set bootDiskSize(value: number) {
    this._bootDiskSize = value;
  }
  public resetBootDiskSize() {
    this._bootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootDiskSizeInput() {
    return this._bootDiskSize;
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

  // machine_type - computed: false, optional: false, required: true
  private _machineType?: string; 
  public get machineType() {
    return this.getStringAttribute('machine_type');
  }
  public set machineType(value: string) {
    this._machineType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineTypeInput() {
    return this._machineType;
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

  // public_ip_type - computed: false, optional: false, required: true
  private _publicIpType?: string; 
  public get publicIpType() {
    return this.getStringAttribute('public_ip_type');
  }
  public set publicIpType(value: string) {
    this._publicIpType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpTypeInput() {
    return this._publicIpType;
  }

  // taint - computed: false, optional: true, required: false
  private _taint = new Mk8SPaperspaceProviderNodePoolTaintList(this, "taint", false);
  public get taint() {
    return this._taint;
  }
  public putTaint(value: Mk8SPaperspaceProviderNodePoolTaint[] | cdktf.IResolvable) {
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

export class Mk8SPaperspaceProviderNodePoolList extends cdktf.ComplexList {
  public internalValue? : Mk8SPaperspaceProviderNodePool[] | cdktf.IResolvable

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
  public get(index: number): Mk8SPaperspaceProviderNodePoolOutputReference {
    return new Mk8SPaperspaceProviderNodePoolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Mk8SPaperspaceProviderUnmanagedNodePoolTaint {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#effect Mk8S#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#key Mk8S#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/controlplane-com/cpln/1.2.19/docs/resources/mk8s#value Mk8S#value}
  */
  readonly value?: string;
}

export function mk8SPaperspaceProviderUnmanagedNodePoolTaintToTerraform(struct?: Mk8SPaperspaceProviderUnmanagedNodePoolTaint | cdktf.IResolvable): any {
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


export function mk8SPaperspaceProviderUnmanagedNodePoolTaintToHclTerraform(struct?: Mk8SPaperspaceProviderUnmanagedNodePoolTaint | cdktf.IResolvable): any {
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

export class Mk8SPaperspaceProviderUnmanagedNodePoolTaintOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Mk8SPaperspaceProviderUnmanagedNodePoolTaint | cdktf.IResolvable | undefined {
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

  public set internalValue(value: Mk8SPaperspaceProviderUnmanagedNodePoolTaint | cdktf.IResolvable | undefined) {
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

export class Mk8SPaperspaceProviderUnmanagedNodePoolTaintList extends cdktf.ComplexList {
  public internalValue? : Mk8SPaperspaceProviderUnmanagedNodePoolTaint[] | cdktf.IResolvable

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
  public get(index: number): Mk8SPaperspaceProviderUnmanagedNodePoolTaintOutputReference {
    return new Mk8SPaperspaceProviderUnmanagedNodePoolTaintOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
