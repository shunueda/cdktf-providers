// https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/appscope_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCriblioAppscopeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * The consumer group to which this instance belongs. Defaults to 'Cribl'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/appscope_config#group_id DataCriblioAppscopeConfig#group_id}
  */
  readonly groupId: string;
  /**
  * Unique ID to GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/appscope_config#id DataCriblioAppscopeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataCriblioAppscopeConfigConfigCriblTransportTls {
}

export function dataCriblioAppscopeConfigConfigCriblTransportTlsToTerraform(struct?: DataCriblioAppscopeConfigConfigCriblTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCriblTransportTlsToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCriblTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCriblTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCriblTransportTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCriblTransportTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cacertpath - computed: true, optional: false, required: false
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // validateserver - computed: true, optional: false, required: false
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
}
export interface DataCriblioAppscopeConfigConfigCriblTransport {
}

export function dataCriblioAppscopeConfigConfigCriblTransportToTerraform(struct?: DataCriblioAppscopeConfigConfigCriblTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCriblTransportToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCriblTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCriblTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCriblTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCriblTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer - computed: true, optional: false, required: false
  public get buffer() {
    return this.getStringAttribute('buffer');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioAppscopeConfigConfigCriblTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioAppscopeConfigConfigCribl {
}

export function dataCriblioAppscopeConfigConfigCriblToTerraform(struct?: DataCriblioAppscopeConfigConfigCribl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCriblToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCribl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCriblOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCribl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCribl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authtoken - computed: true, optional: false, required: false
  public get authtoken() {
    return this.getStringAttribute('authtoken');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // transport - computed: true, optional: false, required: false
  private _transport = new DataCriblioAppscopeConfigConfigCriblTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }

  // use_scope_source_transport - computed: true, optional: false, required: false
  public get useScopeSourceTransport() {
    return this.getBooleanAttribute('use_scope_source_transport');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigCriblTransportTls {
}

export function dataCriblioAppscopeConfigConfigCustomConfigCriblTransportTlsToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigCriblTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigCriblTransportTlsToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigCriblTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigCriblTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigCriblTransportTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigCriblTransportTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cacertpath - computed: true, optional: false, required: false
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // validateserver - computed: true, optional: false, required: false
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigCriblTransport {
}

export function dataCriblioAppscopeConfigConfigCustomConfigCriblTransportToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigCriblTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigCriblTransportToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigCriblTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigCriblTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigCriblTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigCriblTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer - computed: true, optional: false, required: false
  public get buffer() {
    return this.getStringAttribute('buffer');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioAppscopeConfigConfigCustomConfigCriblTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigCribl {
}

export function dataCriblioAppscopeConfigConfigCustomConfigCriblToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigCribl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigCriblToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigCribl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigCriblOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigCribl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigCribl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authtoken - computed: true, optional: false, required: false
  public get authtoken() {
    return this.getStringAttribute('authtoken');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // transport - computed: true, optional: false, required: false
  private _transport = new DataCriblioAppscopeConfigConfigCustomConfigCriblTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }

  // use_scope_source_transport - computed: true, optional: false, required: false
  public get useScopeSourceTransport() {
    return this.getBooleanAttribute('use_scope_source_transport');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigEventFormat {
}

export function dataCriblioAppscopeConfigConfigCustomConfigEventFormatToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigEventFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigEventFormatToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigEventFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigEventFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigEventFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigEventFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enhancefs - computed: true, optional: false, required: false
  public get enhancefs() {
    return this.getBooleanAttribute('enhancefs');
  }

  // maxeventpersec - computed: true, optional: false, required: false
  public get maxeventpersec() {
    return this.getNumberAttribute('maxeventpersec');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigEventTransportTls {
}

export function dataCriblioAppscopeConfigConfigCustomConfigEventTransportTlsToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigEventTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigEventTransportTlsToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigEventTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigEventTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigEventTransportTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigEventTransportTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cacertpath - computed: true, optional: false, required: false
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // validateserver - computed: true, optional: false, required: false
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigEventTransport {
}

export function dataCriblioAppscopeConfigConfigCustomConfigEventTransportToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigEventTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigEventTransportToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigEventTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigEventTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigEventTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigEventTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer - computed: true, optional: false, required: false
  public get buffer() {
    return this.getStringAttribute('buffer');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioAppscopeConfigConfigCustomConfigEventTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigEventWatch {
}

export function dataCriblioAppscopeConfigConfigCustomConfigEventWatchToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigEventWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigEventWatchToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigEventWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigEventWatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigEventWatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigEventWatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowbinary - computed: true, optional: false, required: false
  public get allowbinary() {
    return this.getBooleanAttribute('allowbinary');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCriblioAppscopeConfigConfigCustomConfigEventWatchList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioAppscopeConfigConfigCustomConfigEventWatchOutputReference {
    return new DataCriblioAppscopeConfigConfigCustomConfigEventWatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigEvent {
}

export function dataCriblioAppscopeConfigConfigCustomConfigEventToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigEventToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // format - computed: true, optional: false, required: false
  private _format = new DataCriblioAppscopeConfigConfigCustomConfigEventFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }

  // transport - computed: true, optional: false, required: false
  private _transport = new DataCriblioAppscopeConfigConfigCustomConfigEventTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // watch - computed: true, optional: false, required: false
  private _watch = new DataCriblioAppscopeConfigConfigCustomConfigEventWatchList(this, "watch", false);
  public get watch() {
    return this._watch;
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportTls {
}

export function dataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportTlsToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportTlsToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cacertpath - computed: true, optional: false, required: false
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // validateserver - computed: true, optional: false, required: false
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransport {
}

export function dataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer - computed: true, optional: false, required: false
  public get buffer() {
    return this.getStringAttribute('buffer');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigLibscopeLog {
}

export function dataCriblioAppscopeConfigConfigCustomConfigLibscopeLogToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigLibscopeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigLibscopeLogToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigLibscopeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigLibscopeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigLibscopeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // transport - computed: true, optional: false, required: false
  private _transport = new DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigLibscope {
}

export function dataCriblioAppscopeConfigConfigCustomConfigLibscopeToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigLibscope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigLibscopeToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigLibscope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigLibscopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigLibscope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigLibscope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commanddir - computed: true, optional: false, required: false
  public get commanddir() {
    return this.getStringAttribute('commanddir');
  }

  // configevent - computed: true, optional: false, required: false
  public get configevent() {
    return this.getBooleanAttribute('configevent');
  }

  // log - computed: true, optional: false, required: false
  private _log = new DataCriblioAppscopeConfigConfigCustomConfigLibscopeLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }

  // summaryperiod - computed: true, optional: false, required: false
  public get summaryperiod() {
    return this.getNumberAttribute('summaryperiod');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigMetricFormat {
}

export function dataCriblioAppscopeConfigConfigCustomConfigMetricFormatToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigMetricFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigMetricFormatToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigMetricFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigMetricFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigMetricFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigMetricFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // statsdmaxlen - computed: true, optional: false, required: false
  public get statsdmaxlen() {
    return this.getNumberAttribute('statsdmaxlen');
  }

  // statsdprefix - computed: true, optional: false, required: false
  public get statsdprefix() {
    return this.getStringAttribute('statsdprefix');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // verbosity - computed: true, optional: false, required: false
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigMetricTransportTls {
}

export function dataCriblioAppscopeConfigConfigCustomConfigMetricTransportTlsToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigMetricTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigMetricTransportTlsToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigMetricTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigMetricTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigMetricTransportTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigMetricTransportTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cacertpath - computed: true, optional: false, required: false
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // validateserver - computed: true, optional: false, required: false
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigMetricTransport {
}

export function dataCriblioAppscopeConfigConfigCustomConfigMetricTransportToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigMetricTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigMetricTransportToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigMetricTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigMetricTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigMetricTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigMetricTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer - computed: true, optional: false, required: false
  public get buffer() {
    return this.getStringAttribute('buffer');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioAppscopeConfigConfigCustomConfigMetricTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigMetricWatch {
}

export function dataCriblioAppscopeConfigConfigCustomConfigMetricWatchToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigMetricWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigMetricWatchToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigMetricWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigMetricWatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigMetricWatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigMetricWatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataCriblioAppscopeConfigConfigCustomConfigMetricWatchList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioAppscopeConfigConfigCustomConfigMetricWatchOutputReference {
    return new DataCriblioAppscopeConfigConfigCustomConfigMetricWatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigMetric {
}

export function dataCriblioAppscopeConfigConfigCustomConfigMetricToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigMetricToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // format - computed: true, optional: false, required: false
  private _format = new DataCriblioAppscopeConfigConfigCustomConfigMetricFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }

  // transport - computed: true, optional: false, required: false
  private _transport = new DataCriblioAppscopeConfigConfigCustomConfigMetricTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }

  // watch - computed: true, optional: false, required: false
  private _watch = new DataCriblioAppscopeConfigConfigCustomConfigMetricWatchList(this, "watch", false);
  public get watch() {
    return this._watch;
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigPayload {
}

export function dataCriblioAppscopeConfigConfigCustomConfigPayloadToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigPayloadToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dir - computed: true, optional: false, required: false
  public get dir() {
    return this.getStringAttribute('dir');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigProtocol {
}

export function dataCriblioAppscopeConfigConfigCustomConfigProtocolToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigProtocolToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary - computed: true, optional: false, required: false
  public get binary() {
    return this.getBooleanAttribute('binary');
  }

  // detect - computed: true, optional: false, required: false
  public get detect() {
    return this.getBooleanAttribute('detect');
  }

  // len - computed: true, optional: false, required: false
  public get len() {
    return this.getNumberAttribute('len');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getBooleanAttribute('payload');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class DataCriblioAppscopeConfigConfigCustomConfigProtocolList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioAppscopeConfigConfigCustomConfigProtocolOutputReference {
    return new DataCriblioAppscopeConfigConfigCustomConfigProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfigTags {
}

export function dataCriblioAppscopeConfigConfigCustomConfigTagsToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigTagsToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfigTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfigTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfigTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCriblioAppscopeConfigConfigCustomConfigTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioAppscopeConfigConfigCustomConfigTagsOutputReference {
    return new DataCriblioAppscopeConfigConfigCustomConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioAppscopeConfigConfigCustomConfig {
}

export function dataCriblioAppscopeConfigConfigCustomConfigToTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomConfigToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustomConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigCustomConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustomConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cribl - computed: true, optional: false, required: false
  private _cribl = new DataCriblioAppscopeConfigConfigCustomConfigCriblOutputReference(this, "cribl");
  public get cribl() {
    return this._cribl;
  }

  // event - computed: true, optional: false, required: false
  private _event = new DataCriblioAppscopeConfigConfigCustomConfigEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }

  // libscope - computed: true, optional: false, required: false
  private _libscope = new DataCriblioAppscopeConfigConfigCustomConfigLibscopeOutputReference(this, "libscope");
  public get libscope() {
    return this._libscope;
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataCriblioAppscopeConfigConfigCustomConfigMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new DataCriblioAppscopeConfigConfigCustomConfigPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataCriblioAppscopeConfigConfigCustomConfigProtocolList(this, "protocol", false);
  public get protocol() {
    return this._protocol;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataCriblioAppscopeConfigConfigCustomConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}
export interface DataCriblioAppscopeConfigConfigCustom {
}

export function dataCriblioAppscopeConfigConfigCustomToTerraform(struct?: DataCriblioAppscopeConfigConfigCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigCustomToHclTerraform(struct?: DataCriblioAppscopeConfigConfigCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigCustomOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioAppscopeConfigConfigCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ancestor - computed: true, optional: false, required: false
  public get ancestor() {
    return this.getStringAttribute('ancestor');
  }

  // arg - computed: true, optional: false, required: false
  public get arg() {
    return this.getStringAttribute('arg');
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataCriblioAppscopeConfigConfigCustomConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // env - computed: true, optional: false, required: false
  public get env() {
    return this.getStringAttribute('env');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // procname - computed: true, optional: false, required: false
  public get procname() {
    return this.getStringAttribute('procname');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataCriblioAppscopeConfigConfigCustomList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioAppscopeConfigConfigCustomOutputReference {
    return new DataCriblioAppscopeConfigConfigCustomOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioAppscopeConfigConfigEventFormat {
}

export function dataCriblioAppscopeConfigConfigEventFormatToTerraform(struct?: DataCriblioAppscopeConfigConfigEventFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigEventFormatToHclTerraform(struct?: DataCriblioAppscopeConfigConfigEventFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigEventFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigEventFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigEventFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enhancefs - computed: true, optional: false, required: false
  public get enhancefs() {
    return this.getBooleanAttribute('enhancefs');
  }

  // maxeventpersec - computed: true, optional: false, required: false
  public get maxeventpersec() {
    return this.getNumberAttribute('maxeventpersec');
  }
}
export interface DataCriblioAppscopeConfigConfigEventTransportTls {
}

export function dataCriblioAppscopeConfigConfigEventTransportTlsToTerraform(struct?: DataCriblioAppscopeConfigConfigEventTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigEventTransportTlsToHclTerraform(struct?: DataCriblioAppscopeConfigConfigEventTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigEventTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigEventTransportTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigEventTransportTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cacertpath - computed: true, optional: false, required: false
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // validateserver - computed: true, optional: false, required: false
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
}
export interface DataCriblioAppscopeConfigConfigEventTransport {
}

export function dataCriblioAppscopeConfigConfigEventTransportToTerraform(struct?: DataCriblioAppscopeConfigConfigEventTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigEventTransportToHclTerraform(struct?: DataCriblioAppscopeConfigConfigEventTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigEventTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigEventTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigEventTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer - computed: true, optional: false, required: false
  public get buffer() {
    return this.getStringAttribute('buffer');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioAppscopeConfigConfigEventTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioAppscopeConfigConfigEventWatch {
}

export function dataCriblioAppscopeConfigConfigEventWatchToTerraform(struct?: DataCriblioAppscopeConfigConfigEventWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigEventWatchToHclTerraform(struct?: DataCriblioAppscopeConfigConfigEventWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigEventWatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioAppscopeConfigConfigEventWatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigEventWatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowbinary - computed: true, optional: false, required: false
  public get allowbinary() {
    return this.getBooleanAttribute('allowbinary');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // headers - computed: true, optional: false, required: false
  public get headers() {
    return this.getListAttribute('headers');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCriblioAppscopeConfigConfigEventWatchList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioAppscopeConfigConfigEventWatchOutputReference {
    return new DataCriblioAppscopeConfigConfigEventWatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioAppscopeConfigConfigEvent {
}

export function dataCriblioAppscopeConfigConfigEventToTerraform(struct?: DataCriblioAppscopeConfigConfigEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigEventToHclTerraform(struct?: DataCriblioAppscopeConfigConfigEvent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigEventOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigEvent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigEvent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // format - computed: true, optional: false, required: false
  private _format = new DataCriblioAppscopeConfigConfigEventFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }

  // transport - computed: true, optional: false, required: false
  private _transport = new DataCriblioAppscopeConfigConfigEventTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // watch - computed: true, optional: false, required: false
  private _watch = new DataCriblioAppscopeConfigConfigEventWatchList(this, "watch", false);
  public get watch() {
    return this._watch;
  }
}
export interface DataCriblioAppscopeConfigConfigLibscopeLogTransportTls {
}

export function dataCriblioAppscopeConfigConfigLibscopeLogTransportTlsToTerraform(struct?: DataCriblioAppscopeConfigConfigLibscopeLogTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigLibscopeLogTransportTlsToHclTerraform(struct?: DataCriblioAppscopeConfigConfigLibscopeLogTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigLibscopeLogTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigLibscopeLogTransportTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigLibscopeLogTransportTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cacertpath - computed: true, optional: false, required: false
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // validateserver - computed: true, optional: false, required: false
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
}
export interface DataCriblioAppscopeConfigConfigLibscopeLogTransport {
}

export function dataCriblioAppscopeConfigConfigLibscopeLogTransportToTerraform(struct?: DataCriblioAppscopeConfigConfigLibscopeLogTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigLibscopeLogTransportToHclTerraform(struct?: DataCriblioAppscopeConfigConfigLibscopeLogTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigLibscopeLogTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigLibscopeLogTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigLibscopeLogTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer - computed: true, optional: false, required: false
  public get buffer() {
    return this.getStringAttribute('buffer');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioAppscopeConfigConfigLibscopeLogTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioAppscopeConfigConfigLibscopeLog {
}

export function dataCriblioAppscopeConfigConfigLibscopeLogToTerraform(struct?: DataCriblioAppscopeConfigConfigLibscopeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigLibscopeLogToHclTerraform(struct?: DataCriblioAppscopeConfigConfigLibscopeLog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigLibscopeLogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigLibscopeLog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigLibscopeLog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // transport - computed: true, optional: false, required: false
  private _transport = new DataCriblioAppscopeConfigConfigLibscopeLogTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }
}
export interface DataCriblioAppscopeConfigConfigLibscope {
}

export function dataCriblioAppscopeConfigConfigLibscopeToTerraform(struct?: DataCriblioAppscopeConfigConfigLibscope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigLibscopeToHclTerraform(struct?: DataCriblioAppscopeConfigConfigLibscope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigLibscopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigLibscope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigLibscope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // commanddir - computed: true, optional: false, required: false
  public get commanddir() {
    return this.getStringAttribute('commanddir');
  }

  // configevent - computed: true, optional: false, required: false
  public get configevent() {
    return this.getBooleanAttribute('configevent');
  }

  // log - computed: true, optional: false, required: false
  private _log = new DataCriblioAppscopeConfigConfigLibscopeLogOutputReference(this, "log");
  public get log() {
    return this._log;
  }

  // summaryperiod - computed: true, optional: false, required: false
  public get summaryperiod() {
    return this.getNumberAttribute('summaryperiod');
  }
}
export interface DataCriblioAppscopeConfigConfigMetricFormat {
}

export function dataCriblioAppscopeConfigConfigMetricFormatToTerraform(struct?: DataCriblioAppscopeConfigConfigMetricFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigMetricFormatToHclTerraform(struct?: DataCriblioAppscopeConfigConfigMetricFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigMetricFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigMetricFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigMetricFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // statsdmaxlen - computed: true, optional: false, required: false
  public get statsdmaxlen() {
    return this.getNumberAttribute('statsdmaxlen');
  }

  // statsdprefix - computed: true, optional: false, required: false
  public get statsdprefix() {
    return this.getStringAttribute('statsdprefix');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // verbosity - computed: true, optional: false, required: false
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
}
export interface DataCriblioAppscopeConfigConfigMetricTransportTls {
}

export function dataCriblioAppscopeConfigConfigMetricTransportTlsToTerraform(struct?: DataCriblioAppscopeConfigConfigMetricTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigMetricTransportTlsToHclTerraform(struct?: DataCriblioAppscopeConfigConfigMetricTransportTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigMetricTransportTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigMetricTransportTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigMetricTransportTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cacertpath - computed: true, optional: false, required: false
  public get cacertpath() {
    return this.getStringAttribute('cacertpath');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // validateserver - computed: true, optional: false, required: false
  public get validateserver() {
    return this.getBooleanAttribute('validateserver');
  }
}
export interface DataCriblioAppscopeConfigConfigMetricTransport {
}

export function dataCriblioAppscopeConfigConfigMetricTransportToTerraform(struct?: DataCriblioAppscopeConfigConfigMetricTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigMetricTransportToHclTerraform(struct?: DataCriblioAppscopeConfigConfigMetricTransport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigMetricTransportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigMetricTransport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigMetricTransport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // buffer - computed: true, optional: false, required: false
  public get buffer() {
    return this.getStringAttribute('buffer');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // tls - computed: true, optional: false, required: false
  private _tls = new DataCriblioAppscopeConfigConfigMetricTransportTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface DataCriblioAppscopeConfigConfigMetricWatch {
}

export function dataCriblioAppscopeConfigConfigMetricWatchToTerraform(struct?: DataCriblioAppscopeConfigConfigMetricWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigMetricWatchToHclTerraform(struct?: DataCriblioAppscopeConfigConfigMetricWatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigMetricWatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioAppscopeConfigConfigMetricWatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigMetricWatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataCriblioAppscopeConfigConfigMetricWatchList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioAppscopeConfigConfigMetricWatchOutputReference {
    return new DataCriblioAppscopeConfigConfigMetricWatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioAppscopeConfigConfigMetric {
}

export function dataCriblioAppscopeConfigConfigMetricToTerraform(struct?: DataCriblioAppscopeConfigConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigMetricToHclTerraform(struct?: DataCriblioAppscopeConfigConfigMetric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigMetric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigMetric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }

  // format - computed: true, optional: false, required: false
  private _format = new DataCriblioAppscopeConfigConfigMetricFormatOutputReference(this, "format");
  public get format() {
    return this._format;
  }

  // transport - computed: true, optional: false, required: false
  private _transport = new DataCriblioAppscopeConfigConfigMetricTransportOutputReference(this, "transport");
  public get transport() {
    return this._transport;
  }

  // watch - computed: true, optional: false, required: false
  private _watch = new DataCriblioAppscopeConfigConfigMetricWatchList(this, "watch", false);
  public get watch() {
    return this._watch;
  }
}
export interface DataCriblioAppscopeConfigConfigPayload {
}

export function dataCriblioAppscopeConfigConfigPayloadToTerraform(struct?: DataCriblioAppscopeConfigConfigPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigPayloadToHclTerraform(struct?: DataCriblioAppscopeConfigConfigPayload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigPayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigPayload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigPayload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dir - computed: true, optional: false, required: false
  public get dir() {
    return this.getStringAttribute('dir');
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
}
export interface DataCriblioAppscopeConfigConfigProtocol {
}

export function dataCriblioAppscopeConfigConfigProtocolToTerraform(struct?: DataCriblioAppscopeConfigConfigProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigProtocolToHclTerraform(struct?: DataCriblioAppscopeConfigConfigProtocol): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigProtocolOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioAppscopeConfigConfigProtocol | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigProtocol | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // binary - computed: true, optional: false, required: false
  public get binary() {
    return this.getBooleanAttribute('binary');
  }

  // detect - computed: true, optional: false, required: false
  public get detect() {
    return this.getBooleanAttribute('detect');
  }

  // len - computed: true, optional: false, required: false
  public get len() {
    return this.getNumberAttribute('len');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // payload - computed: true, optional: false, required: false
  public get payload() {
    return this.getBooleanAttribute('payload');
  }

  // regex - computed: true, optional: false, required: false
  public get regex() {
    return this.getStringAttribute('regex');
  }
}

export class DataCriblioAppscopeConfigConfigProtocolList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioAppscopeConfigConfigProtocolOutputReference {
    return new DataCriblioAppscopeConfigConfigProtocolOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioAppscopeConfigConfigTags {
}

export function dataCriblioAppscopeConfigConfigTagsToTerraform(struct?: DataCriblioAppscopeConfigConfigTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigTagsToHclTerraform(struct?: DataCriblioAppscopeConfigConfigTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCriblioAppscopeConfigConfigTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataCriblioAppscopeConfigConfigTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataCriblioAppscopeConfigConfigTagsOutputReference {
    return new DataCriblioAppscopeConfigConfigTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCriblioAppscopeConfigConfigA {
}

export function dataCriblioAppscopeConfigConfigAToTerraform(struct?: DataCriblioAppscopeConfigConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCriblioAppscopeConfigConfigAToHclTerraform(struct?: DataCriblioAppscopeConfigConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCriblioAppscopeConfigConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCriblioAppscopeConfigConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCriblioAppscopeConfigConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cribl - computed: true, optional: false, required: false
  private _cribl = new DataCriblioAppscopeConfigConfigCriblOutputReference(this, "cribl");
  public get cribl() {
    return this._cribl;
  }

  // custom - computed: true, optional: false, required: false
  private _custom = new DataCriblioAppscopeConfigConfigCustomList(this, "custom", false);
  public get custom() {
    return this._custom;
  }

  // event - computed: true, optional: false, required: false
  private _event = new DataCriblioAppscopeConfigConfigEventOutputReference(this, "event");
  public get event() {
    return this._event;
  }

  // libscope - computed: true, optional: false, required: false
  private _libscope = new DataCriblioAppscopeConfigConfigLibscopeOutputReference(this, "libscope");
  public get libscope() {
    return this._libscope;
  }

  // metric - computed: true, optional: false, required: false
  private _metric = new DataCriblioAppscopeConfigConfigMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }

  // payload - computed: true, optional: false, required: false
  private _payload = new DataCriblioAppscopeConfigConfigPayloadOutputReference(this, "payload");
  public get payload() {
    return this._payload;
  }

  // protocol - computed: true, optional: false, required: false
  private _protocol = new DataCriblioAppscopeConfigConfigProtocolList(this, "protocol", false);
  public get protocol() {
    return this._protocol;
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataCriblioAppscopeConfigConfigTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/appscope_config criblio_appscope_config}
*/
export class DataCriblioAppscopeConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "criblio_appscope_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCriblioAppscopeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCriblioAppscopeConfig to import
  * @param importFromId The id of the existing DataCriblioAppscopeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/appscope_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCriblioAppscopeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "criblio_appscope_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/criblio/criblio/1.20.64/docs/data-sources/appscope_config criblio_appscope_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCriblioAppscopeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataCriblioAppscopeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'criblio_appscope_config',
      terraformGeneratorMetadata: {
        providerName: 'criblio',
        providerVersion: '1.20.64',
        providerVersionConstraint: '1.20.64'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._groupId = config.groupId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  private _config = new DataCriblioAppscopeConfigConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lib - computed: true, optional: false, required: false
  public get lib() {
    return this.getStringAttribute('lib');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getStringAttribute('tags');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
