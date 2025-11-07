// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#id Postgresql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#labels Postgresql#labels}
  */
  readonly labels?: string[];
  /**
  * Maximum CPU core count. The PostgreSQL instance's CPU core count will be autoscaled based on the workload. The number of cores stays between 1 and `max_core_count`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#max_core_count Postgresql#max_core_count}
  */
  readonly maxCoreCount?: number;
  /**
  * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#name Postgresql#name}
  */
  readonly name: string;
  /**
  * The UUID of the network that the service is attached to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#network_uuid Postgresql#network_uuid}
  */
  readonly networkUuid?: string;
  /**
  * Performance class of PostgreSQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#performance_class Postgresql#performance_class}
  */
  readonly performanceClass: string;
  /**
  * Access key used to authenticate against Object Storage server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#pgaudit_log_access_key Postgresql#pgaudit_log_access_key}
  */
  readonly pgauditLogAccessKey?: string;
  /**
  * Object Storage bucket to upload audit logs to. For pgAudit to be enabled these additional parameters need to be configured: pgaudit_log_server_url, pgaudit_log_access_key, pgaudit_log_secret_key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#pgaudit_log_bucket Postgresql#pgaudit_log_bucket}
  */
  readonly pgauditLogBucket?: string;
  /**
  * Rotation (in minutes) for audit logs. Logs are uploaded to Object Storage once rotated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#pgaudit_log_rotation_frequency Postgresql#pgaudit_log_rotation_frequency}
  */
  readonly pgauditLogRotationFrequency?: number;
  /**
  * Secret key used to authenticate against Object Storage server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#pgaudit_log_secret_key Postgresql#pgaudit_log_secret_key}
  */
  readonly pgauditLogSecretKey?: string;
  /**
  * Object Storage server URL the bucket is located on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#pgaudit_log_server_url Postgresql#pgaudit_log_server_url}
  */
  readonly pgauditLogServerUrl?: string;
  /**
  * The PostgreSQL release of this instance.\n
  * 				For convenience, please use gscloud https://github.com/gridscale/gscloud to get the list of available PostgreSQL service releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#release Postgresql#release}
  */
  readonly release: string;
  /**
  * Security zone UUID linked to PostgreSQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#security_zone_uuid Postgresql#security_zone_uuid}
  */
  readonly securityZoneUuid?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#timeouts Postgresql#timeouts}
  */
  readonly timeouts?: PostgresqlTimeouts;
}
export interface PostgresqlListenPort {
}

export function postgresqlListenPortToTerraform(struct?: PostgresqlListenPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function postgresqlListenPortToHclTerraform(struct?: PostgresqlListenPort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PostgresqlListenPortOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PostgresqlListenPort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlListenPort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}

export class PostgresqlListenPortList extends cdktf.ComplexList {

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
  public get(index: number): PostgresqlListenPortOutputReference {
    return new PostgresqlListenPortOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PostgresqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#create Postgresql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#delete Postgresql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#update Postgresql#update}
  */
  readonly update?: string;
}

export function postgresqlTimeoutsToTerraform(struct?: PostgresqlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function postgresqlTimeoutsToHclTerraform(struct?: PostgresqlTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PostgresqlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresqlTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresqlTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql gridscale_postgresql}
*/
export class Postgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale_postgresql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Postgresql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Postgresql to import
  * @param importFromId The id of the existing Postgresql that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Postgresql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale_postgresql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs/resources/postgresql gridscale_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'gridscale_postgresql',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3'
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
    this._labels = config.labels;
    this._maxCoreCount = config.maxCoreCount;
    this._name = config.name;
    this._networkUuid = config.networkUuid;
    this._performanceClass = config.performanceClass;
    this._pgauditLogAccessKey = config.pgauditLogAccessKey;
    this._pgauditLogBucket = config.pgauditLogBucket;
    this._pgauditLogRotationFrequency = config.pgauditLogRotationFrequency;
    this._pgauditLogSecretKey = config.pgauditLogSecretKey;
    this._pgauditLogServerUrl = config.pgauditLogServerUrl;
    this._release = config.release;
    this._securityZoneUuid = config.securityZoneUuid;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_time - computed: true, optional: false, required: false
  public get changeTime() {
    return this.getStringAttribute('change_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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
  private _labels?: string[]; 
  public get labels() {
    return cdktf.Fn.tolist(this.getListAttribute('labels'));
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // listen_port - computed: true, optional: false, required: false
  private _listenPort = new PostgresqlListenPortList(this, "listen_port", true);
  public get listenPort() {
    return this._listenPort;
  }

  // max_core_count - computed: true, optional: true, required: false
  private _maxCoreCount?: number; 
  public get maxCoreCount() {
    return this.getNumberAttribute('max_core_count');
  }
  public set maxCoreCount(value: number) {
    this._maxCoreCount = value;
  }
  public resetMaxCoreCount() {
    this._maxCoreCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCoreCountInput() {
    return this._maxCoreCount;
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

  // network_uuid - computed: true, optional: true, required: false
  private _networkUuid?: string; 
  public get networkUuid() {
    return this.getStringAttribute('network_uuid');
  }
  public set networkUuid(value: string) {
    this._networkUuid = value;
  }
  public resetNetworkUuid() {
    this._networkUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkUuidInput() {
    return this._networkUuid;
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // performance_class - computed: false, optional: false, required: true
  private _performanceClass?: string; 
  public get performanceClass() {
    return this.getStringAttribute('performance_class');
  }
  public set performanceClass(value: string) {
    this._performanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get performanceClassInput() {
    return this._performanceClass;
  }

  // pgaudit_log_access_key - computed: true, optional: true, required: false
  private _pgauditLogAccessKey?: string; 
  public get pgauditLogAccessKey() {
    return this.getStringAttribute('pgaudit_log_access_key');
  }
  public set pgauditLogAccessKey(value: string) {
    this._pgauditLogAccessKey = value;
  }
  public resetPgauditLogAccessKey() {
    this._pgauditLogAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgauditLogAccessKeyInput() {
    return this._pgauditLogAccessKey;
  }

  // pgaudit_log_bucket - computed: true, optional: true, required: false
  private _pgauditLogBucket?: string; 
  public get pgauditLogBucket() {
    return this.getStringAttribute('pgaudit_log_bucket');
  }
  public set pgauditLogBucket(value: string) {
    this._pgauditLogBucket = value;
  }
  public resetPgauditLogBucket() {
    this._pgauditLogBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgauditLogBucketInput() {
    return this._pgauditLogBucket;
  }

  // pgaudit_log_rotation_frequency - computed: true, optional: true, required: false
  private _pgauditLogRotationFrequency?: number; 
  public get pgauditLogRotationFrequency() {
    return this.getNumberAttribute('pgaudit_log_rotation_frequency');
  }
  public set pgauditLogRotationFrequency(value: number) {
    this._pgauditLogRotationFrequency = value;
  }
  public resetPgauditLogRotationFrequency() {
    this._pgauditLogRotationFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgauditLogRotationFrequencyInput() {
    return this._pgauditLogRotationFrequency;
  }

  // pgaudit_log_secret_key - computed: true, optional: true, required: false
  private _pgauditLogSecretKey?: string; 
  public get pgauditLogSecretKey() {
    return this.getStringAttribute('pgaudit_log_secret_key');
  }
  public set pgauditLogSecretKey(value: string) {
    this._pgauditLogSecretKey = value;
  }
  public resetPgauditLogSecretKey() {
    this._pgauditLogSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgauditLogSecretKeyInput() {
    return this._pgauditLogSecretKey;
  }

  // pgaudit_log_server_url - computed: true, optional: true, required: false
  private _pgauditLogServerUrl?: string; 
  public get pgauditLogServerUrl() {
    return this.getStringAttribute('pgaudit_log_server_url');
  }
  public set pgauditLogServerUrl(value: string) {
    this._pgauditLogServerUrl = value;
  }
  public resetPgauditLogServerUrl() {
    this._pgauditLogServerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgauditLogServerUrlInput() {
    return this._pgauditLogServerUrl;
  }

  // release - computed: false, optional: false, required: true
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // security_zone_uuid - computed: true, optional: true, required: false
  private _securityZoneUuid?: string; 
  public get securityZoneUuid() {
    return this.getStringAttribute('security_zone_uuid');
  }
  public set securityZoneUuid(value: string) {
    this._securityZoneUuid = value;
  }
  public resetSecurityZoneUuid() {
    this._securityZoneUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityZoneUuidInput() {
    return this._securityZoneUuid;
  }

  // service_template_category - computed: true, optional: false, required: false
  public get serviceTemplateCategory() {
    return this.getStringAttribute('service_template_category');
  }

  // service_template_uuid - computed: true, optional: false, required: false
  public get serviceTemplateUuid() {
    return this.getStringAttribute('service_template_uuid');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // usage_in_minutes - computed: true, optional: false, required: false
  public get usageInMinutes() {
    return this.getNumberAttribute('usage_in_minutes');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PostgresqlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PostgresqlTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      max_core_count: cdktf.numberToTerraform(this._maxCoreCount),
      name: cdktf.stringToTerraform(this._name),
      network_uuid: cdktf.stringToTerraform(this._networkUuid),
      performance_class: cdktf.stringToTerraform(this._performanceClass),
      pgaudit_log_access_key: cdktf.stringToTerraform(this._pgauditLogAccessKey),
      pgaudit_log_bucket: cdktf.stringToTerraform(this._pgauditLogBucket),
      pgaudit_log_rotation_frequency: cdktf.numberToTerraform(this._pgauditLogRotationFrequency),
      pgaudit_log_secret_key: cdktf.stringToTerraform(this._pgauditLogSecretKey),
      pgaudit_log_server_url: cdktf.stringToTerraform(this._pgauditLogServerUrl),
      release: cdktf.stringToTerraform(this._release),
      security_zone_uuid: cdktf.stringToTerraform(this._securityZoneUuid),
      timeouts: postgresqlTimeoutsToTerraform(this._timeouts.internalValue),
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
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      max_core_count: {
        value: cdktf.numberToHclTerraform(this._maxCoreCount),
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
      network_uuid: {
        value: cdktf.stringToHclTerraform(this._networkUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      performance_class: {
        value: cdktf.stringToHclTerraform(this._performanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pgaudit_log_access_key: {
        value: cdktf.stringToHclTerraform(this._pgauditLogAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pgaudit_log_bucket: {
        value: cdktf.stringToHclTerraform(this._pgauditLogBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pgaudit_log_rotation_frequency: {
        value: cdktf.numberToHclTerraform(this._pgauditLogRotationFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pgaudit_log_secret_key: {
        value: cdktf.stringToHclTerraform(this._pgauditLogSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pgaudit_log_server_url: {
        value: cdktf.stringToHclTerraform(this._pgauditLogServerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release: {
        value: cdktf.stringToHclTerraform(this._release),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_zone_uuid: {
        value: cdktf.stringToHclTerraform(this._securityZoneUuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: postgresqlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresqlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
