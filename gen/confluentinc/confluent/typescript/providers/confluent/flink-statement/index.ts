// https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FlinkStatementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#id FlinkStatement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#properties FlinkStatement#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#properties_sensitive FlinkStatement#properties_sensitive}
  */
  readonly propertiesSensitive?: { [key: string]: string };
  /**
  * The REST endpoint of the Flink Compute Pool cluster, for example, `https://flink.us-east-1.aws.confluent.cloud/sql/v1/organizations/1111aaaa-11aa-11aa-11aa-111111aaaaaa/environments/env-abc123`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#rest_endpoint FlinkStatement#rest_endpoint}
  */
  readonly restEndpoint?: string;
  /**
  * The raw SQL text of the Statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#statement FlinkStatement#statement}
  */
  readonly statement: string;
  /**
  * The unique identifier of the Statement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#statement_name FlinkStatement#statement_name}
  */
  readonly statementName?: string;
  /**
  * Indicates whether the statement should be stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#stopped FlinkStatement#stopped}
  */
  readonly stopped?: boolean | cdktf.IResolvable;
  /**
  * compute_pool block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#compute_pool FlinkStatement#compute_pool}
  */
  readonly computePool?: FlinkStatementComputePool;
  /**
  * credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#credentials FlinkStatement#credentials}
  */
  readonly credentials?: FlinkStatementCredentials;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#environment FlinkStatement#environment}
  */
  readonly environment?: FlinkStatementEnvironment;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#organization FlinkStatement#organization}
  */
  readonly organization?: FlinkStatementOrganization;
  /**
  * principal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#principal FlinkStatement#principal}
  */
  readonly principal?: FlinkStatementPrincipal;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#timeouts FlinkStatement#timeouts}
  */
  readonly timeouts?: FlinkStatementTimeouts;
}
export interface FlinkStatementComputePool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#id FlinkStatement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function flinkStatementComputePoolToTerraform(struct?: FlinkStatementComputePoolOutputReference | FlinkStatementComputePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function flinkStatementComputePoolToHclTerraform(struct?: FlinkStatementComputePoolOutputReference | FlinkStatementComputePool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlinkStatementComputePoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlinkStatementComputePool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlinkStatementComputePool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface FlinkStatementCredentials {
  /**
  * The Cluster API Key for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#key FlinkStatement#key}
  */
  readonly key: string;
  /**
  * The Cluster API Secret for your Confluent Cloud cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#secret FlinkStatement#secret}
  */
  readonly secret: string;
}

export function flinkStatementCredentialsToTerraform(struct?: FlinkStatementCredentialsOutputReference | FlinkStatementCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function flinkStatementCredentialsToHclTerraform(struct?: FlinkStatementCredentialsOutputReference | FlinkStatementCredentials): any {
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
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlinkStatementCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlinkStatementCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlinkStatementCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._secret = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._secret = value.secret;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }
}
export interface FlinkStatementEnvironment {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#id FlinkStatement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function flinkStatementEnvironmentToTerraform(struct?: FlinkStatementEnvironmentOutputReference | FlinkStatementEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function flinkStatementEnvironmentToHclTerraform(struct?: FlinkStatementEnvironmentOutputReference | FlinkStatementEnvironment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlinkStatementEnvironmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlinkStatementEnvironment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlinkStatementEnvironment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface FlinkStatementOrganization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#id FlinkStatement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function flinkStatementOrganizationToTerraform(struct?: FlinkStatementOrganizationOutputReference | FlinkStatementOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function flinkStatementOrganizationToHclTerraform(struct?: FlinkStatementOrganizationOutputReference | FlinkStatementOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlinkStatementOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlinkStatementOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlinkStatementOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface FlinkStatementPrincipal {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#id FlinkStatement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function flinkStatementPrincipalToTerraform(struct?: FlinkStatementPrincipalOutputReference | FlinkStatementPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function flinkStatementPrincipalToHclTerraform(struct?: FlinkStatementPrincipalOutputReference | FlinkStatementPrincipal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlinkStatementPrincipalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FlinkStatementPrincipal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlinkStatementPrincipal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
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
}
export interface FlinkStatementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#create FlinkStatement#create}
  */
  readonly create?: string;
}

export function flinkStatementTimeoutsToTerraform(struct?: FlinkStatementTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function flinkStatementTimeoutsToHclTerraform(struct?: FlinkStatementTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FlinkStatementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): FlinkStatementTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FlinkStatementTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement confluent_flink_statement}
*/
export class FlinkStatement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "confluent_flink_statement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FlinkStatement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FlinkStatement to import
  * @param importFromId The id of the existing FlinkStatement that should be imported. Refer to the {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FlinkStatement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "confluent_flink_statement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/confluentinc/confluent/2.57.0/docs/resources/flink_statement confluent_flink_statement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FlinkStatementConfig
  */
  public constructor(scope: Construct, id: string, config: FlinkStatementConfig) {
    super(scope, id, {
      terraformResourceType: 'confluent_flink_statement',
      terraformGeneratorMetadata: {
        providerName: 'confluent',
        providerVersion: '2.57.0',
        providerVersionConstraint: '2.57.0'
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
    this._properties = config.properties;
    this._propertiesSensitive = config.propertiesSensitive;
    this._restEndpoint = config.restEndpoint;
    this._statement = config.statement;
    this._statementName = config.statementName;
    this._stopped = config.stopped;
    this._computePool.internalValue = config.computePool;
    this._credentials.internalValue = config.credentials;
    this._environment.internalValue = config.environment;
    this._organization.internalValue = config.organization;
    this._principal.internalValue = config.principal;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // latest_offsets - computed: true, optional: false, required: false
  private _latestOffsets = new cdktf.StringMap(this, "latest_offsets");
  public get latestOffsets() {
    return this._latestOffsets;
  }

  // latest_offsets_timestamp - computed: true, optional: false, required: false
  public get latestOffsetsTimestamp() {
    return this.getStringAttribute('latest_offsets_timestamp');
  }

  // properties - computed: true, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // properties_sensitive - computed: true, optional: true, required: false
  private _propertiesSensitive?: { [key: string]: string }; 
  public get propertiesSensitive() {
    return this.getStringMapAttribute('properties_sensitive');
  }
  public set propertiesSensitive(value: { [key: string]: string }) {
    this._propertiesSensitive = value;
  }
  public resetPropertiesSensitive() {
    this._propertiesSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesSensitiveInput() {
    return this._propertiesSensitive;
  }

  // rest_endpoint - computed: false, optional: true, required: false
  private _restEndpoint?: string; 
  public get restEndpoint() {
    return this.getStringAttribute('rest_endpoint');
  }
  public set restEndpoint(value: string) {
    this._restEndpoint = value;
  }
  public resetRestEndpoint() {
    this._restEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restEndpointInput() {
    return this._restEndpoint;
  }

  // statement - computed: false, optional: false, required: true
  private _statement?: string; 
  public get statement() {
    return this.getStringAttribute('statement');
  }
  public set statement(value: string) {
    this._statement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statementInput() {
    return this._statement;
  }

  // statement_name - computed: true, optional: true, required: false
  private _statementName?: string; 
  public get statementName() {
    return this.getStringAttribute('statement_name');
  }
  public set statementName(value: string) {
    this._statementName = value;
  }
  public resetStatementName() {
    this._statementName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementNameInput() {
    return this._statementName;
  }

  // stopped - computed: true, optional: true, required: false
  private _stopped?: boolean | cdktf.IResolvable; 
  public get stopped() {
    return this.getBooleanAttribute('stopped');
  }
  public set stopped(value: boolean | cdktf.IResolvable) {
    this._stopped = value;
  }
  public resetStopped() {
    this._stopped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stoppedInput() {
    return this._stopped;
  }

  // compute_pool - computed: false, optional: true, required: false
  private _computePool = new FlinkStatementComputePoolOutputReference(this, "compute_pool");
  public get computePool() {
    return this._computePool;
  }
  public putComputePool(value: FlinkStatementComputePool) {
    this._computePool.internalValue = value;
  }
  public resetComputePool() {
    this._computePool.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computePoolInput() {
    return this._computePool.internalValue;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new FlinkStatementCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: FlinkStatementCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new FlinkStatementEnvironmentOutputReference(this, "environment");
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: FlinkStatementEnvironment) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // organization - computed: false, optional: true, required: false
  private _organization = new FlinkStatementOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: FlinkStatementOrganization) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // principal - computed: false, optional: true, required: false
  private _principal = new FlinkStatementPrincipalOutputReference(this, "principal");
  public get principal() {
    return this._principal;
  }
  public putPrincipal(value: FlinkStatementPrincipal) {
    this._principal.internalValue = value;
  }
  public resetPrincipal() {
    this._principal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalInput() {
    return this._principal.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new FlinkStatementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: FlinkStatementTimeouts) {
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
      properties: cdktf.hashMapper(cdktf.stringToTerraform)(this._properties),
      properties_sensitive: cdktf.hashMapper(cdktf.stringToTerraform)(this._propertiesSensitive),
      rest_endpoint: cdktf.stringToTerraform(this._restEndpoint),
      statement: cdktf.stringToTerraform(this._statement),
      statement_name: cdktf.stringToTerraform(this._statementName),
      stopped: cdktf.booleanToTerraform(this._stopped),
      compute_pool: flinkStatementComputePoolToTerraform(this._computePool.internalValue),
      credentials: flinkStatementCredentialsToTerraform(this._credentials.internalValue),
      environment: flinkStatementEnvironmentToTerraform(this._environment.internalValue),
      organization: flinkStatementOrganizationToTerraform(this._organization.internalValue),
      principal: flinkStatementPrincipalToTerraform(this._principal.internalValue),
      timeouts: flinkStatementTimeoutsToTerraform(this._timeouts.internalValue),
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
      properties: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._properties),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      properties_sensitive: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._propertiesSensitive),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rest_endpoint: {
        value: cdktf.stringToHclTerraform(this._restEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement: {
        value: cdktf.stringToHclTerraform(this._statement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      statement_name: {
        value: cdktf.stringToHclTerraform(this._statementName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stopped: {
        value: cdktf.booleanToHclTerraform(this._stopped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compute_pool: {
        value: flinkStatementComputePoolToHclTerraform(this._computePool.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlinkStatementComputePoolList",
      },
      credentials: {
        value: flinkStatementCredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlinkStatementCredentialsList",
      },
      environment: {
        value: flinkStatementEnvironmentToHclTerraform(this._environment.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlinkStatementEnvironmentList",
      },
      organization: {
        value: flinkStatementOrganizationToHclTerraform(this._organization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlinkStatementOrganizationList",
      },
      principal: {
        value: flinkStatementPrincipalToHclTerraform(this._principal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FlinkStatementPrincipalList",
      },
      timeouts: {
        value: flinkStatementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "FlinkStatementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
