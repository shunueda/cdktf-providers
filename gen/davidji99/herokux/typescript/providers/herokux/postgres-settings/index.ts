// https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#id PostgresSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#log_connections PostgresSettings#log_connections}
  */
  readonly logConnections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#log_lock_waits PostgresSettings#log_lock_waits}
  */
  readonly logLockWaits?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#log_min_duration_statement PostgresSettings#log_min_duration_statement}
  */
  readonly logMinDurationStatement?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#log_statement PostgresSettings#log_statement}
  */
  readonly logStatement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#postgres_id PostgresSettings#postgres_id}
  */
  readonly postgresId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#timeouts PostgresSettings#timeouts}
  */
  readonly timeouts?: PostgresSettingsTimeouts;
}
export interface PostgresSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#create PostgresSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#default PostgresSettings#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#delete PostgresSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#read PostgresSettings#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#update PostgresSettings#update}
  */
  readonly update?: string;
}

export function postgresSettingsTimeoutsToTerraform(struct?: PostgresSettingsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function postgresSettingsTimeoutsToHclTerraform(struct?: PostgresSettingsTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class PostgresSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PostgresSettingsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PostgresSettingsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings herokux_postgres_settings}
*/
export class PostgresSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "herokux_postgres_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresSettings to import
  * @param importFromId The id of the existing PostgresSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "herokux_postgres_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/davidji99/herokux/1.4.7/docs/resources/postgres_settings herokux_postgres_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'herokux_postgres_settings',
      terraformGeneratorMetadata: {
        providerName: 'herokux',
        providerVersion: '1.4.7',
        providerVersionConstraint: '1.4.7'
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
    this._logConnections = config.logConnections;
    this._logLockWaits = config.logLockWaits;
    this._logMinDurationStatement = config.logMinDurationStatement;
    this._logStatement = config.logStatement;
    this._postgresId = config.postgresId;
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

  // log_connections - computed: true, optional: true, required: false
  private _logConnections?: boolean | cdktf.IResolvable; 
  public get logConnections() {
    return this.getBooleanAttribute('log_connections');
  }
  public set logConnections(value: boolean | cdktf.IResolvable) {
    this._logConnections = value;
  }
  public resetLogConnections() {
    this._logConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logConnectionsInput() {
    return this._logConnections;
  }

  // log_lock_waits - computed: true, optional: true, required: false
  private _logLockWaits?: boolean | cdktf.IResolvable; 
  public get logLockWaits() {
    return this.getBooleanAttribute('log_lock_waits');
  }
  public set logLockWaits(value: boolean | cdktf.IResolvable) {
    this._logLockWaits = value;
  }
  public resetLogLockWaits() {
    this._logLockWaits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLockWaitsInput() {
    return this._logLockWaits;
  }

  // log_min_duration_statement - computed: true, optional: true, required: false
  private _logMinDurationStatement?: number; 
  public get logMinDurationStatement() {
    return this.getNumberAttribute('log_min_duration_statement');
  }
  public set logMinDurationStatement(value: number) {
    this._logMinDurationStatement = value;
  }
  public resetLogMinDurationStatement() {
    this._logMinDurationStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMinDurationStatementInput() {
    return this._logMinDurationStatement;
  }

  // log_statement - computed: true, optional: true, required: false
  private _logStatement?: string; 
  public get logStatement() {
    return this.getStringAttribute('log_statement');
  }
  public set logStatement(value: string) {
    this._logStatement = value;
  }
  public resetLogStatement() {
    this._logStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStatementInput() {
    return this._logStatement;
  }

  // postgres_id - computed: false, optional: false, required: true
  private _postgresId?: string; 
  public get postgresId() {
    return this.getStringAttribute('postgres_id');
  }
  public set postgresId(value: string) {
    this._postgresId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresIdInput() {
    return this._postgresId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PostgresSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PostgresSettingsTimeouts) {
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
      log_connections: cdktf.booleanToTerraform(this._logConnections),
      log_lock_waits: cdktf.booleanToTerraform(this._logLockWaits),
      log_min_duration_statement: cdktf.numberToTerraform(this._logMinDurationStatement),
      log_statement: cdktf.stringToTerraform(this._logStatement),
      postgres_id: cdktf.stringToTerraform(this._postgresId),
      timeouts: postgresSettingsTimeoutsToTerraform(this._timeouts.internalValue),
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
      log_connections: {
        value: cdktf.booleanToHclTerraform(this._logConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_lock_waits: {
        value: cdktf.booleanToHclTerraform(this._logLockWaits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_min_duration_statement: {
        value: cdktf.numberToHclTerraform(this._logMinDurationStatement),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_statement: {
        value: cdktf.stringToHclTerraform(this._logStatement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postgres_id: {
        value: cdktf.stringToHclTerraform(this._postgresId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: postgresSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PostgresSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
