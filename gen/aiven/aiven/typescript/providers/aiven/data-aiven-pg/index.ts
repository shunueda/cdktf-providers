// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/pg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAivenPgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/pg#id DataAivenPg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/pg#project DataAivenPg#project}
  */
  readonly project: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/pg#service_name DataAivenPg#service_name}
  */
  readonly serviceName: string;
}
export interface DataAivenPgComponents {
}

export function dataAivenPgComponentsToTerraform(struct?: DataAivenPgComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgComponentsToHclTerraform(struct?: DataAivenPgComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgComponents | undefined) {
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

export class DataAivenPgComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgComponentsOutputReference {
    return new DataAivenPgComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgParams {
}

export function dataAivenPgPgParamsToTerraform(struct?: DataAivenPgPgParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgParamsToHclTerraform(struct?: DataAivenPgPgParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // sslmode - computed: true, optional: false, required: false
  public get sslmode() {
    return this.getStringAttribute('sslmode');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataAivenPgPgParamsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgParamsOutputReference {
    return new DataAivenPgPgParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPg {
}

export function dataAivenPgPgToTerraform(struct?: DataAivenPgPg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgToHclTerraform(struct?: DataAivenPgPg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bouncer - computed: true, optional: false, required: false
  public get bouncer() {
    return this.getStringAttribute('bouncer');
  }

  // dbname - computed: true, optional: false, required: false
  public get dbname() {
    return this.getStringAttribute('dbname');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // params - computed: true, optional: false, required: false
  private _params = new DataAivenPgPgParamsList(this, "params", false);
  public get params() {
    return this._params;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // replica_uri - computed: true, optional: false, required: false
  public get replicaUri() {
    return this.getStringAttribute('replica_uri');
  }

  // sslmode - computed: true, optional: false, required: false
  public get sslmode() {
    return this.getStringAttribute('sslmode');
  }

  // standby_uris - computed: true, optional: false, required: false
  public get standbyUris() {
    return this.getListAttribute('standby_uris');
  }

  // syncing_uris - computed: true, optional: false, required: false
  public get syncingUris() {
    return this.getListAttribute('syncing_uris');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // uris - computed: true, optional: false, required: false
  public get uris() {
    return this.getListAttribute('uris');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class DataAivenPgPgList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgOutputReference {
    return new DataAivenPgPgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigIpFilterObject {
}

export function dataAivenPgPgUserConfigIpFilterObjectToTerraform(struct?: DataAivenPgPgUserConfigIpFilterObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigIpFilterObjectToHclTerraform(struct?: DataAivenPgPgUserConfigIpFilterObject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigIpFilterObject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigIpFilterObject | undefined) {
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

export class DataAivenPgPgUserConfigIpFilterObjectList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigIpFilterObjectOutputReference {
    return new DataAivenPgPgUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigMigration {
}

export function dataAivenPgPgUserConfigMigrationToTerraform(struct?: DataAivenPgPgUserConfigMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigMigrationToHclTerraform(struct?: DataAivenPgPgUserConfigMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigMigrationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigMigration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dbname - computed: true, optional: false, required: false
  public get dbname() {
    return this.getStringAttribute('dbname');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // ignore_dbs - computed: true, optional: false, required: false
  public get ignoreDbs() {
    return this.getStringAttribute('ignore_dbs');
  }

  // ignore_roles - computed: true, optional: false, required: false
  public get ignoreRoles() {
    return this.getStringAttribute('ignore_roles');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataAivenPgPgUserConfigMigrationList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigMigrationOutputReference {
    return new DataAivenPgPgUserConfigMigrationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigPg {
}

export function dataAivenPgPgUserConfigPgToTerraform(struct?: DataAivenPgPgUserConfigPg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigPgToHclTerraform(struct?: DataAivenPgPgUserConfigPg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigPgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigPg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigPg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autovacuum_analyze_scale_factor - computed: true, optional: false, required: false
  public get autovacuumAnalyzeScaleFactor() {
    return this.getNumberAttribute('autovacuum_analyze_scale_factor');
  }

  // autovacuum_analyze_threshold - computed: true, optional: false, required: false
  public get autovacuumAnalyzeThreshold() {
    return this.getNumberAttribute('autovacuum_analyze_threshold');
  }

  // autovacuum_freeze_max_age - computed: true, optional: false, required: false
  public get autovacuumFreezeMaxAge() {
    return this.getNumberAttribute('autovacuum_freeze_max_age');
  }

  // autovacuum_max_workers - computed: true, optional: false, required: false
  public get autovacuumMaxWorkers() {
    return this.getNumberAttribute('autovacuum_max_workers');
  }

  // autovacuum_naptime - computed: true, optional: false, required: false
  public get autovacuumNaptime() {
    return this.getNumberAttribute('autovacuum_naptime');
  }

  // autovacuum_vacuum_cost_delay - computed: true, optional: false, required: false
  public get autovacuumVacuumCostDelay() {
    return this.getNumberAttribute('autovacuum_vacuum_cost_delay');
  }

  // autovacuum_vacuum_cost_limit - computed: true, optional: false, required: false
  public get autovacuumVacuumCostLimit() {
    return this.getNumberAttribute('autovacuum_vacuum_cost_limit');
  }

  // autovacuum_vacuum_scale_factor - computed: true, optional: false, required: false
  public get autovacuumVacuumScaleFactor() {
    return this.getNumberAttribute('autovacuum_vacuum_scale_factor');
  }

  // autovacuum_vacuum_threshold - computed: true, optional: false, required: false
  public get autovacuumVacuumThreshold() {
    return this.getNumberAttribute('autovacuum_vacuum_threshold');
  }

  // bgwriter_delay - computed: true, optional: false, required: false
  public get bgwriterDelay() {
    return this.getNumberAttribute('bgwriter_delay');
  }

  // bgwriter_flush_after - computed: true, optional: false, required: false
  public get bgwriterFlushAfter() {
    return this.getNumberAttribute('bgwriter_flush_after');
  }

  // bgwriter_lru_maxpages - computed: true, optional: false, required: false
  public get bgwriterLruMaxpages() {
    return this.getNumberAttribute('bgwriter_lru_maxpages');
  }

  // bgwriter_lru_multiplier - computed: true, optional: false, required: false
  public get bgwriterLruMultiplier() {
    return this.getNumberAttribute('bgwriter_lru_multiplier');
  }

  // deadlock_timeout - computed: true, optional: false, required: false
  public get deadlockTimeout() {
    return this.getNumberAttribute('deadlock_timeout');
  }

  // default_toast_compression - computed: true, optional: false, required: false
  public get defaultToastCompression() {
    return this.getStringAttribute('default_toast_compression');
  }

  // idle_in_transaction_session_timeout - computed: true, optional: false, required: false
  public get idleInTransactionSessionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_session_timeout');
  }

  // jit - computed: true, optional: false, required: false
  public get jit() {
    return this.getBooleanAttribute('jit');
  }

  // log_autovacuum_min_duration - computed: true, optional: false, required: false
  public get logAutovacuumMinDuration() {
    return this.getNumberAttribute('log_autovacuum_min_duration');
  }

  // log_error_verbosity - computed: true, optional: false, required: false
  public get logErrorVerbosity() {
    return this.getStringAttribute('log_error_verbosity');
  }

  // log_line_prefix - computed: true, optional: false, required: false
  public get logLinePrefix() {
    return this.getStringAttribute('log_line_prefix');
  }

  // log_min_duration_statement - computed: true, optional: false, required: false
  public get logMinDurationStatement() {
    return this.getNumberAttribute('log_min_duration_statement');
  }

  // log_temp_files - computed: true, optional: false, required: false
  public get logTempFiles() {
    return this.getNumberAttribute('log_temp_files');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // max_files_per_process - computed: true, optional: false, required: false
  public get maxFilesPerProcess() {
    return this.getNumberAttribute('max_files_per_process');
  }

  // max_locks_per_transaction - computed: true, optional: false, required: false
  public get maxLocksPerTransaction() {
    return this.getNumberAttribute('max_locks_per_transaction');
  }

  // max_logical_replication_workers - computed: true, optional: false, required: false
  public get maxLogicalReplicationWorkers() {
    return this.getNumberAttribute('max_logical_replication_workers');
  }

  // max_parallel_workers - computed: true, optional: false, required: false
  public get maxParallelWorkers() {
    return this.getNumberAttribute('max_parallel_workers');
  }

  // max_parallel_workers_per_gather - computed: true, optional: false, required: false
  public get maxParallelWorkersPerGather() {
    return this.getNumberAttribute('max_parallel_workers_per_gather');
  }

  // max_pred_locks_per_transaction - computed: true, optional: false, required: false
  public get maxPredLocksPerTransaction() {
    return this.getNumberAttribute('max_pred_locks_per_transaction');
  }

  // max_prepared_transactions - computed: true, optional: false, required: false
  public get maxPreparedTransactions() {
    return this.getNumberAttribute('max_prepared_transactions');
  }

  // max_replication_slots - computed: true, optional: false, required: false
  public get maxReplicationSlots() {
    return this.getNumberAttribute('max_replication_slots');
  }

  // max_slot_wal_keep_size - computed: true, optional: false, required: false
  public get maxSlotWalKeepSize() {
    return this.getNumberAttribute('max_slot_wal_keep_size');
  }

  // max_stack_depth - computed: true, optional: false, required: false
  public get maxStackDepth() {
    return this.getNumberAttribute('max_stack_depth');
  }

  // max_standby_archive_delay - computed: true, optional: false, required: false
  public get maxStandbyArchiveDelay() {
    return this.getNumberAttribute('max_standby_archive_delay');
  }

  // max_standby_streaming_delay - computed: true, optional: false, required: false
  public get maxStandbyStreamingDelay() {
    return this.getNumberAttribute('max_standby_streaming_delay');
  }

  // max_sync_workers_per_subscription - computed: true, optional: false, required: false
  public get maxSyncWorkersPerSubscription() {
    return this.getNumberAttribute('max_sync_workers_per_subscription');
  }

  // max_wal_senders - computed: true, optional: false, required: false
  public get maxWalSenders() {
    return this.getNumberAttribute('max_wal_senders');
  }

  // max_worker_processes - computed: true, optional: false, required: false
  public get maxWorkerProcesses() {
    return this.getNumberAttribute('max_worker_processes');
  }

  // password_encryption - computed: true, optional: false, required: false
  public get passwordEncryption() {
    return this.getStringAttribute('password_encryption');
  }

  // pg_partman_bgw__dot__interval - computed: true, optional: false, required: false
  public get pgPartmanBgwDotInterval() {
    return this.getNumberAttribute('pg_partman_bgw__dot__interval');
  }

  // pg_partman_bgw__dot__role - computed: true, optional: false, required: false
  public get pgPartmanBgwDotRole() {
    return this.getStringAttribute('pg_partman_bgw__dot__role');
  }

  // pg_stat_monitor__dot__pgsm_enable_query_plan - computed: true, optional: false, required: false
  public get pgStatMonitorDotPgsmEnableQueryPlan() {
    return this.getBooleanAttribute('pg_stat_monitor__dot__pgsm_enable_query_plan');
  }

  // pg_stat_monitor__dot__pgsm_max_buckets - computed: true, optional: false, required: false
  public get pgStatMonitorDotPgsmMaxBuckets() {
    return this.getNumberAttribute('pg_stat_monitor__dot__pgsm_max_buckets');
  }

  // pg_stat_statements__dot__track - computed: true, optional: false, required: false
  public get pgStatStatementsDotTrack() {
    return this.getStringAttribute('pg_stat_statements__dot__track');
  }

  // temp_file_limit - computed: true, optional: false, required: false
  public get tempFileLimit() {
    return this.getNumberAttribute('temp_file_limit');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // track_activity_query_size - computed: true, optional: false, required: false
  public get trackActivityQuerySize() {
    return this.getNumberAttribute('track_activity_query_size');
  }

  // track_commit_timestamp - computed: true, optional: false, required: false
  public get trackCommitTimestamp() {
    return this.getStringAttribute('track_commit_timestamp');
  }

  // track_functions - computed: true, optional: false, required: false
  public get trackFunctions() {
    return this.getStringAttribute('track_functions');
  }

  // track_io_timing - computed: true, optional: false, required: false
  public get trackIoTiming() {
    return this.getStringAttribute('track_io_timing');
  }

  // wal_sender_timeout - computed: true, optional: false, required: false
  public get walSenderTimeout() {
    return this.getNumberAttribute('wal_sender_timeout');
  }

  // wal_writer_delay - computed: true, optional: false, required: false
  public get walWriterDelay() {
    return this.getNumberAttribute('wal_writer_delay');
  }
}

export class DataAivenPgPgUserConfigPgList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigPgOutputReference {
    return new DataAivenPgPgUserConfigPgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigPgQualstats {
}

export function dataAivenPgPgUserConfigPgQualstatsToTerraform(struct?: DataAivenPgPgUserConfigPgQualstats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigPgQualstatsToHclTerraform(struct?: DataAivenPgPgUserConfigPgQualstats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigPgQualstatsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigPgQualstats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigPgQualstats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // min_err_estimate_num - computed: true, optional: false, required: false
  public get minErrEstimateNum() {
    return this.getNumberAttribute('min_err_estimate_num');
  }

  // min_err_estimate_ratio - computed: true, optional: false, required: false
  public get minErrEstimateRatio() {
    return this.getNumberAttribute('min_err_estimate_ratio');
  }

  // track_constants - computed: true, optional: false, required: false
  public get trackConstants() {
    return this.getBooleanAttribute('track_constants');
  }

  // track_pg_catalog - computed: true, optional: false, required: false
  public get trackPgCatalog() {
    return this.getBooleanAttribute('track_pg_catalog');
  }
}

export class DataAivenPgPgUserConfigPgQualstatsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigPgQualstatsOutputReference {
    return new DataAivenPgPgUserConfigPgQualstatsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigPgaudit {
}

export function dataAivenPgPgUserConfigPgauditToTerraform(struct?: DataAivenPgPgUserConfigPgaudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigPgauditToHclTerraform(struct?: DataAivenPgPgUserConfigPgaudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigPgauditOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigPgaudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigPgaudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // feature_enabled - computed: true, optional: false, required: false
  public get featureEnabled() {
    return this.getBooleanAttribute('feature_enabled');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getListAttribute('log');
  }

  // log_catalog - computed: true, optional: false, required: false
  public get logCatalog() {
    return this.getBooleanAttribute('log_catalog');
  }

  // log_client - computed: true, optional: false, required: false
  public get logClient() {
    return this.getBooleanAttribute('log_client');
  }

  // log_level - computed: true, optional: false, required: false
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }

  // log_max_string_length - computed: true, optional: false, required: false
  public get logMaxStringLength() {
    return this.getNumberAttribute('log_max_string_length');
  }

  // log_nested_statements - computed: true, optional: false, required: false
  public get logNestedStatements() {
    return this.getBooleanAttribute('log_nested_statements');
  }

  // log_parameter - computed: true, optional: false, required: false
  public get logParameter() {
    return this.getBooleanAttribute('log_parameter');
  }

  // log_parameter_max_size - computed: true, optional: false, required: false
  public get logParameterMaxSize() {
    return this.getNumberAttribute('log_parameter_max_size');
  }

  // log_relation - computed: true, optional: false, required: false
  public get logRelation() {
    return this.getBooleanAttribute('log_relation');
  }

  // log_rows - computed: true, optional: false, required: false
  public get logRows() {
    return this.getBooleanAttribute('log_rows');
  }

  // log_statement - computed: true, optional: false, required: false
  public get logStatement() {
    return this.getBooleanAttribute('log_statement');
  }

  // log_statement_once - computed: true, optional: false, required: false
  public get logStatementOnce() {
    return this.getBooleanAttribute('log_statement_once');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataAivenPgPgUserConfigPgauditList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigPgauditOutputReference {
    return new DataAivenPgPgUserConfigPgauditOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigPgbouncer {
}

export function dataAivenPgPgUserConfigPgbouncerToTerraform(struct?: DataAivenPgPgUserConfigPgbouncer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigPgbouncerToHclTerraform(struct?: DataAivenPgPgUserConfigPgbouncer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigPgbouncerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigPgbouncer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigPgbouncer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // autodb_idle_timeout - computed: true, optional: false, required: false
  public get autodbIdleTimeout() {
    return this.getNumberAttribute('autodb_idle_timeout');
  }

  // autodb_max_db_connections - computed: true, optional: false, required: false
  public get autodbMaxDbConnections() {
    return this.getNumberAttribute('autodb_max_db_connections');
  }

  // autodb_pool_mode - computed: true, optional: false, required: false
  public get autodbPoolMode() {
    return this.getStringAttribute('autodb_pool_mode');
  }

  // autodb_pool_size - computed: true, optional: false, required: false
  public get autodbPoolSize() {
    return this.getNumberAttribute('autodb_pool_size');
  }

  // ignore_startup_parameters - computed: true, optional: false, required: false
  public get ignoreStartupParameters() {
    return this.getListAttribute('ignore_startup_parameters');
  }

  // max_prepared_statements - computed: true, optional: false, required: false
  public get maxPreparedStatements() {
    return this.getNumberAttribute('max_prepared_statements');
  }

  // min_pool_size - computed: true, optional: false, required: false
  public get minPoolSize() {
    return this.getNumberAttribute('min_pool_size');
  }

  // server_idle_timeout - computed: true, optional: false, required: false
  public get serverIdleTimeout() {
    return this.getNumberAttribute('server_idle_timeout');
  }

  // server_lifetime - computed: true, optional: false, required: false
  public get serverLifetime() {
    return this.getNumberAttribute('server_lifetime');
  }

  // server_reset_query_always - computed: true, optional: false, required: false
  public get serverResetQueryAlways() {
    return this.getBooleanAttribute('server_reset_query_always');
  }
}

export class DataAivenPgPgUserConfigPgbouncerList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigPgbouncerOutputReference {
    return new DataAivenPgPgUserConfigPgbouncerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigPglookout {
}

export function dataAivenPgPgUserConfigPglookoutToTerraform(struct?: DataAivenPgPgUserConfigPglookout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigPglookoutToHclTerraform(struct?: DataAivenPgPgUserConfigPglookout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigPglookoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigPglookout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigPglookout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_failover_replication_time_lag - computed: true, optional: false, required: false
  public get maxFailoverReplicationTimeLag() {
    return this.getNumberAttribute('max_failover_replication_time_lag');
  }
}

export class DataAivenPgPgUserConfigPglookoutList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigPglookoutOutputReference {
    return new DataAivenPgPgUserConfigPglookoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigPrivateAccess {
}

export function dataAivenPgPgUserConfigPrivateAccessToTerraform(struct?: DataAivenPgPgUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigPrivateAccessToHclTerraform(struct?: DataAivenPgPgUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pg - computed: true, optional: false, required: false
  public get pg() {
    return this.getBooleanAttribute('pg');
  }

  // pgbouncer - computed: true, optional: false, required: false
  public get pgbouncer() {
    return this.getBooleanAttribute('pgbouncer');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
}

export class DataAivenPgPgUserConfigPrivateAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigPrivateAccessOutputReference {
    return new DataAivenPgPgUserConfigPrivateAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigPrivatelinkAccess {
}

export function dataAivenPgPgUserConfigPrivatelinkAccessToTerraform(struct?: DataAivenPgPgUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigPrivatelinkAccessToHclTerraform(struct?: DataAivenPgPgUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pg - computed: true, optional: false, required: false
  public get pg() {
    return this.getBooleanAttribute('pg');
  }

  // pgbouncer - computed: true, optional: false, required: false
  public get pgbouncer() {
    return this.getBooleanAttribute('pgbouncer');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
}

export class DataAivenPgPgUserConfigPrivatelinkAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigPrivatelinkAccessOutputReference {
    return new DataAivenPgPgUserConfigPrivatelinkAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigPublicAccess {
}

export function dataAivenPgPgUserConfigPublicAccessToTerraform(struct?: DataAivenPgPgUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigPublicAccessToHclTerraform(struct?: DataAivenPgPgUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pg - computed: true, optional: false, required: false
  public get pg() {
    return this.getBooleanAttribute('pg');
  }

  // pgbouncer - computed: true, optional: false, required: false
  public get pgbouncer() {
    return this.getBooleanAttribute('pgbouncer');
  }

  // prometheus - computed: true, optional: false, required: false
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
}

export class DataAivenPgPgUserConfigPublicAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigPublicAccessOutputReference {
    return new DataAivenPgPgUserConfigPublicAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfigTimescaledb {
}

export function dataAivenPgPgUserConfigTimescaledbToTerraform(struct?: DataAivenPgPgUserConfigTimescaledb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigTimescaledbToHclTerraform(struct?: DataAivenPgPgUserConfigTimescaledb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigTimescaledbOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfigTimescaledb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfigTimescaledb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_background_workers - computed: true, optional: false, required: false
  public get maxBackgroundWorkers() {
    return this.getNumberAttribute('max_background_workers');
  }
}

export class DataAivenPgPgUserConfigTimescaledbList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigTimescaledbOutputReference {
    return new DataAivenPgPgUserConfigTimescaledbOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgPgUserConfig {
}

export function dataAivenPgPgUserConfigToTerraform(struct?: DataAivenPgPgUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgPgUserConfigToHclTerraform(struct?: DataAivenPgPgUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgPgUserConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgPgUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgPgUserConfig | undefined) {
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

  // admin_password - computed: true, optional: false, required: false
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }

  // admin_username - computed: true, optional: false, required: false
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
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
  private _ipFilterObject = new DataAivenPgPgUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }

  // ip_filter_string - computed: true, optional: false, required: false
  public get ipFilterString() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_string'));
  }

  // migration - computed: true, optional: false, required: false
  private _migration = new DataAivenPgPgUserConfigMigrationList(this, "migration", false);
  public get migration() {
    return this._migration;
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // pg - computed: true, optional: false, required: false
  private _pg = new DataAivenPgPgUserConfigPgList(this, "pg", false);
  public get pg() {
    return this._pg;
  }

  // pg_qualstats - computed: true, optional: false, required: false
  private _pgQualstats = new DataAivenPgPgUserConfigPgQualstatsList(this, "pg_qualstats", false);
  public get pgQualstats() {
    return this._pgQualstats;
  }

  // pg_read_replica - computed: true, optional: false, required: false
  public get pgReadReplica() {
    return this.getBooleanAttribute('pg_read_replica');
  }

  // pg_service_to_fork_from - computed: true, optional: false, required: false
  public get pgServiceToForkFrom() {
    return this.getStringAttribute('pg_service_to_fork_from');
  }

  // pg_stat_monitor_enable - computed: true, optional: false, required: false
  public get pgStatMonitorEnable() {
    return this.getBooleanAttribute('pg_stat_monitor_enable');
  }

  // pg_version - computed: true, optional: false, required: false
  public get pgVersion() {
    return this.getStringAttribute('pg_version');
  }

  // pgaudit - computed: true, optional: false, required: false
  private _pgaudit = new DataAivenPgPgUserConfigPgauditList(this, "pgaudit", false);
  public get pgaudit() {
    return this._pgaudit;
  }

  // pgbouncer - computed: true, optional: false, required: false
  private _pgbouncer = new DataAivenPgPgUserConfigPgbouncerList(this, "pgbouncer", false);
  public get pgbouncer() {
    return this._pgbouncer;
  }

  // pglookout - computed: true, optional: false, required: false
  private _pglookout = new DataAivenPgPgUserConfigPglookoutList(this, "pglookout", false);
  public get pglookout() {
    return this._pglookout;
  }

  // private_access - computed: true, optional: false, required: false
  private _privateAccess = new DataAivenPgPgUserConfigPrivateAccessList(this, "private_access", false);
  public get privateAccess() {
    return this._privateAccess;
  }

  // privatelink_access - computed: true, optional: false, required: false
  private _privatelinkAccess = new DataAivenPgPgUserConfigPrivatelinkAccessList(this, "privatelink_access", false);
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }

  // project_to_fork_from - computed: true, optional: false, required: false
  public get projectToForkFrom() {
    return this.getStringAttribute('project_to_fork_from');
  }

  // public_access - computed: true, optional: false, required: false
  private _publicAccess = new DataAivenPgPgUserConfigPublicAccessList(this, "public_access", false);
  public get publicAccess() {
    return this._publicAccess;
  }

  // recovery_target_time - computed: true, optional: false, required: false
  public get recoveryTargetTime() {
    return this.getStringAttribute('recovery_target_time');
  }

  // service_log - computed: true, optional: false, required: false
  public get serviceLog() {
    return this.getBooleanAttribute('service_log');
  }

  // service_to_fork_from - computed: true, optional: false, required: false
  public get serviceToForkFrom() {
    return this.getStringAttribute('service_to_fork_from');
  }

  // shared_buffers_percentage - computed: true, optional: false, required: false
  public get sharedBuffersPercentage() {
    return this.getNumberAttribute('shared_buffers_percentage');
  }

  // static_ips - computed: true, optional: false, required: false
  public get staticIps() {
    return this.getBooleanAttribute('static_ips');
  }

  // synchronous_replication - computed: true, optional: false, required: false
  public get synchronousReplication() {
    return this.getStringAttribute('synchronous_replication');
  }

  // timescaledb - computed: true, optional: false, required: false
  private _timescaledb = new DataAivenPgPgUserConfigTimescaledbList(this, "timescaledb", false);
  public get timescaledb() {
    return this._timescaledb;
  }

  // variant - computed: true, optional: false, required: false
  public get variant() {
    return this.getStringAttribute('variant');
  }

  // work_mem - computed: true, optional: false, required: false
  public get workMem() {
    return this.getNumberAttribute('work_mem');
  }
}

export class DataAivenPgPgUserConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgPgUserConfigOutputReference {
    return new DataAivenPgPgUserConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgServiceIntegrations {
}

export function dataAivenPgServiceIntegrationsToTerraform(struct?: DataAivenPgServiceIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgServiceIntegrationsToHclTerraform(struct?: DataAivenPgServiceIntegrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgServiceIntegrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgServiceIntegrations | undefined) {
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

export class DataAivenPgServiceIntegrationsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgServiceIntegrationsOutputReference {
    return new DataAivenPgServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgTag {
}

export function dataAivenPgTagToTerraform(struct?: DataAivenPgTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgTagToHclTerraform(struct?: DataAivenPgTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgTag | undefined) {
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

export class DataAivenPgTagList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgTagOutputReference {
    return new DataAivenPgTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAivenPgTechEmails {
}

export function dataAivenPgTechEmailsToTerraform(struct?: DataAivenPgTechEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAivenPgTechEmailsToHclTerraform(struct?: DataAivenPgTechEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAivenPgTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAivenPgTechEmails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAivenPgTechEmails | undefined) {
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

export class DataAivenPgTechEmailsList extends cdktf.ComplexList {

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
  public get(index: number): DataAivenPgTechEmailsOutputReference {
    return new DataAivenPgTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/pg aiven_pg}
*/
export class DataAivenPg extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_pg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAivenPg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAivenPg to import
  * @param importFromId The id of the existing DataAivenPg that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/pg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAivenPg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_pg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/data-sources/pg aiven_pg} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAivenPgConfig
  */
  public constructor(scope: Construct, id: string, config: DataAivenPgConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_pg',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1'
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

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // components - computed: true, optional: false, required: false
  private _components = new DataAivenPgComponentsList(this, "components", false);
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

  // pg - computed: true, optional: false, required: false
  private _pg = new DataAivenPgPgList(this, "pg", false);
  public get pg() {
    return this._pg;
  }

  // pg_user_config - computed: true, optional: false, required: false
  private _pgUserConfig = new DataAivenPgPgUserConfigList(this, "pg_user_config", false);
  public get pgUserConfig() {
    return this._pgUserConfig;
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
  private _serviceIntegrations = new DataAivenPgServiceIntegrationsList(this, "service_integrations", true);
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
  private _tag = new DataAivenPgTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }

  // tech_emails - computed: true, optional: false, required: false
  private _techEmails = new DataAivenPgTechEmailsList(this, "tech_emails", true);
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
