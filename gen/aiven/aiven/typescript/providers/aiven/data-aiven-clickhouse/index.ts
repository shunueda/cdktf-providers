// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/clickhouse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenClickhouseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/clickhouse#id DataAivenClickhouse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/clickhouse#project DataAivenClickhouse#project}
  */
  readonly project: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/clickhouse#service_name DataAivenClickhouse#service_name}
  */
  readonly serviceName: string;
}
export interface DataAivenClickhouseClickhouse {
}

export function dataAivenClickhouseClickhouseToTerraform(struct?: DataAivenClickhouseClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenClickhouseClickhouseToHclTerraform(struct?: DataAivenClickhouseClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenClickhouseClickhouseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenClickhouseClickhouse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenClickhouseClickhouse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uris - computed: true, optional: false, required: false
  public get uris() {
    return this.getListAttribute('uris');
  }
}

export class DataAivenClickhouseClickhouseList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenClickhouseClickhouseOutputReference {
    return new DataAivenClickhouseClickhouseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenClickhouseClickhouseUserConfigIpFilterObject {
}

export function dataAivenClickhouseClickhouseUserConfigIpFilterObjectToTerraform(struct?: DataAivenClickhouseClickhouseUserConfigIpFilterObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenClickhouseClickhouseUserConfigIpFilterObjectToHclTerraform(struct?: DataAivenClickhouseClickhouseUserConfigIpFilterObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenClickhouseClickhouseUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenClickhouseClickhouseUserConfigIpFilterObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenClickhouseClickhouseUserConfigIpFilterObject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }
}

export class DataAivenClickhouseClickhouseUserConfigIpFilterObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenClickhouseClickhouseUserConfigIpFilterObjectOutputReference {
    return new DataAivenClickhouseClickhouseUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenClickhouseClickhouseUserConfigPrivateAccess {
}

export function dataAivenClickhouseClickhouseUserConfigPrivateAccessToTerraform(struct?: DataAivenClickhouseClickhouseUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenClickhouseClickhouseUserConfigPrivateAccessToHclTerraform(struct?: DataAivenClickhouseClickhouseUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenClickhouseClickhouseUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenClickhouseClickhouseUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenClickhouseClickhouseUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clickhouse - computed: true, optional: false, required: false
  public get clickhouse() {
    return this.getBooleanAttribute('clickhouse');
  }

  // clickhouse_https - computed: true, optional: false, required: false
  public get clickhouseHttps() {
    return this.getBooleanAttribute('clickhouse_https');
  }

  // clickhouse_mysql - computed: true, optional: false, required: false
  public get clickhouseMysql() {
    return this.getBooleanAttribute('clickhouse_mysql');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
}

export class DataAivenClickhouseClickhouseUserConfigPrivateAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenClickhouseClickhouseUserConfigPrivateAccessOutputReference {
    return new DataAivenClickhouseClickhouseUserConfigPrivateAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenClickhouseClickhouseUserConfigPrivatelinkAccess {
}

export function dataAivenClickhouseClickhouseUserConfigPrivatelinkAccessToTerraform(struct?: DataAivenClickhouseClickhouseUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenClickhouseClickhouseUserConfigPrivatelinkAccessToHclTerraform(struct?: DataAivenClickhouseClickhouseUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenClickhouseClickhouseUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenClickhouseClickhouseUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenClickhouseClickhouseUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clickhouse - computed: true, optional: false, required: false
  public get clickhouse() {
    return this.getBooleanAttribute('clickhouse');
  }

  // clickhouse_https - computed: true, optional: false, required: false
  public get clickhouseHttps() {
    return this.getBooleanAttribute('clickhouse_https');
  }

  // clickhouse_mysql - computed: true, optional: false, required: false
  public get clickhouseMysql() {
    return this.getBooleanAttribute('clickhouse_mysql');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
}

export class DataAivenClickhouseClickhouseUserConfigPrivatelinkAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenClickhouseClickhouseUserConfigPrivatelinkAccessOutputReference {
    return new DataAivenClickhouseClickhouseUserConfigPrivatelinkAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenClickhouseClickhouseUserConfigPublicAccess {
}

export function dataAivenClickhouseClickhouseUserConfigPublicAccessToTerraform(struct?: DataAivenClickhouseClickhouseUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenClickhouseClickhouseUserConfigPublicAccessToHclTerraform(struct?: DataAivenClickhouseClickhouseUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenClickhouseClickhouseUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenClickhouseClickhouseUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenClickhouseClickhouseUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // clickhouse - computed: true, optional: false, required: false
  public get clickhouse() {
    return this.getBooleanAttribute('clickhouse');
  }

  // clickhouse_https - computed: true, optional: false, required: false
  public get clickhouseHttps() {
    return this.getBooleanAttribute('clickhouse_https');
  }

  // clickhouse_mysql - computed: true, optional: false, required: false
  public get clickhouseMysql() {
    return this.getBooleanAttribute('clickhouse_mysql');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
}

export class DataAivenClickhouseClickhouseUserConfigPublicAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenClickhouseClickhouseUserConfigPublicAccessOutputReference {
    return new DataAivenClickhouseClickhouseUserConfigPublicAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenClickhouseClickhouseUserConfig {
}

export function dataAivenClickhouseClickhouseUserConfigToTerraform(struct?: DataAivenClickhouseClickhouseUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenClickhouseClickhouseUserConfigToHclTerraform(struct?: DataAivenClickhouseClickhouseUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenClickhouseClickhouseUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenClickhouseClickhouseUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenClickhouseClickhouseUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_backup_regions - computed: true, optional: false, required: false
  public get additionalBackupRegions() {
    return this.getListAttribute('additional_backup_regions');
  }

  // backup_hour - computed: true, optional: false, required: false
  public get backupHour() {
    return this.getNumberAttribute('backup_hour');
  }

  // backup_minute - computed: true, optional: false, required: false
  public get backupMinute() {
    return this.getNumberAttribute('backup_minute');
  }

  // enable_ipv6 - computed: true, optional: false, required: false
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }

  // ip_filter - computed: true, optional: false, required: false
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }

  // ip_filter_object - computed: true, optional: false, required: false
  private _ipFilterObject = new DataAivenClickhouseClickhouseUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }

  // ip_filter_string - computed: true, optional: false, required: false
  public get ipFilterString() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_string'));
  }

  // private_access - computed: true, optional: false, required: false
  private _privateAccess = new DataAivenClickhouseClickhouseUserConfigPrivateAccessList(this, "private_access", false);
  public get privateAccess() {
    return this._privateAccess;
  }

  // privatelink_access - computed: true, optional: false, required: false
  private _privatelinkAccess = new DataAivenClickhouseClickhouseUserConfigPrivatelinkAccessList(this, "privatelink_access", false);
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }

  // project_to_fork_from - computed: true, optional: false, required: false
  public get projectToForkFrom() {
    return this.getStringAttribute('project_to_fork_from');
  }

  // public_access - computed: true, optional: false, required: false
  private _publicAccess = new DataAivenClickhouseClickhouseUserConfigPublicAccessList(this, "public_access", false);
  public get publicAccess() {
    return this._publicAccess;
  }

  // recovery_basebackup_name - computed: true, optional: false, required: false
  public get recoveryBasebackupName() {
    return this.getStringAttribute('recovery_basebackup_name');
  }

  // service_log - computed: true, optional: false, required: false
  public get serviceLog() {
    return this.getBooleanAttribute('service_log');
  }

  // service_to_fork_from - computed: true, optional: false, required: false
  public get serviceToForkFrom() {
    return this.getStringAttribute('service_to_fork_from');
  }

  // static_ips - computed: true, optional: false, required: false
  public get staticIps() {
    return this.getBooleanAttribute('static_ips');
  }
}

export class DataAivenClickhouseClickhouseUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenClickhouseClickhouseUserConfigOutputReference {
    return new DataAivenClickhouseClickhouseUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenClickhouseComponents {
}

export function dataAivenClickhouseComponentsToTerraform(struct?: DataAivenClickhouseComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenClickhouseComponentsToHclTerraform(struct?: DataAivenClickhouseComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenClickhouseComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenClickhouseComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenClickhouseComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kafka_authentication_method - computed: true, optional: false, required: false
  public get kafkaAuthenticationMethod() {
    return this.getStringAttribute('kafka_authentication_method');
  }

  // kafka_ssl_ca - computed: true, optional: false, required: false
  public get kafkaSslCa() {
    return this.getStringAttribute('kafka_ssl_ca');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class DataAivenClickhouseComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenClickhouseComponentsOutputReference {
    return new DataAivenClickhouseComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenClickhouseServiceIntegrations {
}

export function dataAivenClickhouseServiceIntegrationsToTerraform(struct?: DataAivenClickhouseServiceIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenClickhouseServiceIntegrationsToHclTerraform(struct?: DataAivenClickhouseServiceIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenClickhouseServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenClickhouseServiceIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenClickhouseServiceIntegrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // integration_type - computed: true, optional: false, required: false
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }

  // source_service_name - computed: true, optional: false, required: false
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }
}

export class DataAivenClickhouseServiceIntegrationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenClickhouseServiceIntegrationsOutputReference {
    return new DataAivenClickhouseServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenClickhouseTag {
}

export function dataAivenClickhouseTagToTerraform(struct?: DataAivenClickhouseTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenClickhouseTagToHclTerraform(struct?: DataAivenClickhouseTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenClickhouseTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenClickhouseTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenClickhouseTag | undefined) {
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

export class DataAivenClickhouseTagList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenClickhouseTagOutputReference {
    return new DataAivenClickhouseTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenClickhouseTechEmails {
}

export function dataAivenClickhouseTechEmailsToTerraform(struct?: DataAivenClickhouseTechEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenClickhouseTechEmailsToHclTerraform(struct?: DataAivenClickhouseTechEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenClickhouseTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenClickhouseTechEmails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenClickhouseTechEmails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }
}

export class DataAivenClickhouseTechEmailsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenClickhouseTechEmailsOutputReference {
    return new DataAivenClickhouseTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/clickhouse aiven_clickhouse}
*/
export class DataAivenClickhouse extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_clickhouse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenClickhouse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenClickhouse to import
  * @param importFromId The id of the existing DataAivenClickhouse that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/clickhouse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenClickhouse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_clickhouse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/data-sources/clickhouse aiven_clickhouse} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenClickhouseConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenClickhouseConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_clickhouse',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._project = config.project;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_disk_space - computed: true, optional: false, required: false
  public get additionalDiskSpace() {
    return this.getStringAttribute('additional_disk_space');
  }

  // clickhouse - computed: true, optional: false, required: false
  private _clickhouse = new DataAivenClickhouseClickhouseList(this, "clickhouse", false);
  public get clickhouse() {
    return this._clickhouse;
  }

  // clickhouse_user_config - computed: true, optional: false, required: false
  private _clickhouseUserConfig = new DataAivenClickhouseClickhouseUserConfigList(this, "clickhouse_user_config", false);
  public get clickhouseUserConfig() {
    return this._clickhouseUserConfig;
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataAivenClickhouseComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // disk_space - computed: true, optional: false, required: false
  public get diskSpace() {
    return this.getStringAttribute('disk_space');
  }

  // disk_space_cap - computed: true, optional: false, required: false
  public get diskSpaceCap() {
    return this.getStringAttribute('disk_space_cap');
  }

  // disk_space_default - computed: true, optional: false, required: false
  public get diskSpaceDefault() {
    return this.getStringAttribute('disk_space_default');
  }

  // disk_space_step - computed: true, optional: false, required: false
  public get diskSpaceStep() {
    return this.getStringAttribute('disk_space_step');
  }

  // disk_space_used - computed: true, optional: false, required: false
  public get diskSpaceUsed() {
    return this.getStringAttribute('disk_space_used');
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

  // maintenance_window_dow - computed: true, optional: false, required: false
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }

  // maintenance_window_enabled - computed: true, optional: false, required: false
  public get maintenanceWindowEnabled() {
    return this.getBooleanAttribute('maintenance_window_enabled');
  }

  // maintenance_window_time - computed: true, optional: false, required: false
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
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

  // project_vpc_id - computed: true, optional: false, required: false
  public get projectVpcId() {
    return this.getStringAttribute('project_vpc_id');
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
  }

  // service_integrations - computed: true, optional: false, required: false
  private _serviceIntegrations = new DataAivenClickhouseServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_password - computed: true, optional: false, required: false
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // service_username - computed: true, optional: false, required: false
  public get serviceUsername() {
    return this.getStringAttribute('service_username');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_ips - computed: true, optional: false, required: false
  public get staticIps() {
    return cdktf.Fn.tolist(this.getListAttribute('static_ips'));
  }

  // tag - computed: true, optional: false, required: false
  private _tag = new DataAivenClickhouseTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }

  // tech_emails - computed: true, optional: false, required: false
  private _techEmails = new DataAivenClickhouseTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }

  // termination_protection - computed: true, optional: false, required: false
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
