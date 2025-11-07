// https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/data-sources/dynamic_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPatroniDynamicConfigConfig extends cdktf.TerraformMetaArguments {
}
export interface DataPatroniDynamicConfigPostgresql {
  /**
  * Configuration parameters for Postgres. Due to type constraints, boolean parameters will be converted to "true" and "false" string values here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/data-sources/dynamic_config#parameters DataPatroniDynamicConfig#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * List of lines that Patroni will use to generate pg_hba.conf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/data-sources/dynamic_config#pg_hba DataPatroniDynamicConfig#pg_hba}
  */
  readonly pgHba?: string[];
  /**
  * List of lines that Patroni will use to generate pg_ident.conf
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/data-sources/dynamic_config#pg_ident DataPatroniDynamicConfig#pg_ident}
  */
  readonly pgIdent?: string[];
  /**
  * Whether or not to use pg_rewind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/data-sources/dynamic_config#use_pg_rewind DataPatroniDynamicConfig#use_pg_rewind}
  */
  readonly usePgRewind?: boolean | cdktf.IResolvable;
  /**
  * Whether or not to use replication slots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/data-sources/dynamic_config#use_slots DataPatroniDynamicConfig#use_slots}
  */
  readonly useSlots?: boolean | cdktf.IResolvable;
}

export function dataPatroniDynamicConfigPostgresqlToTerraform(struct?: DataPatroniDynamicConfigPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    pg_hba: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pgHba),
    pg_ident: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pgIdent),
    use_pg_rewind: cdktf.booleanToTerraform(struct!.usePgRewind),
    use_slots: cdktf.booleanToTerraform(struct!.useSlots),
  }
}


export function dataPatroniDynamicConfigPostgresqlToHclTerraform(struct?: DataPatroniDynamicConfigPostgresql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pg_hba: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pgHba),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pg_ident: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pgIdent),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    use_pg_rewind: {
      value: cdktf.booleanToHclTerraform(struct!.usePgRewind),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_slots: {
      value: cdktf.booleanToHclTerraform(struct!.useSlots),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataPatroniDynamicConfigPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataPatroniDynamicConfigPostgresql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._pgHba !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgHba = this._pgHba;
    }
    if (this._pgIdent !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgIdent = this._pgIdent;
    }
    if (this._usePgRewind !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePgRewind = this._usePgRewind;
    }
    if (this._useSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSlots = this._useSlots;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataPatroniDynamicConfigPostgresql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._parameters = undefined;
      this._pgHba = undefined;
      this._pgIdent = undefined;
      this._usePgRewind = undefined;
      this._useSlots = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._parameters = value.parameters;
      this._pgHba = value.pgHba;
      this._pgIdent = value.pgIdent;
      this._usePgRewind = value.usePgRewind;
      this._useSlots = value.useSlots;
    }
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // pg_hba - computed: true, optional: true, required: false
  private _pgHba?: string[]; 
  public get pgHba() {
    return this.getListAttribute('pg_hba');
  }
  public set pgHba(value: string[]) {
    this._pgHba = value;
  }
  public resetPgHba() {
    this._pgHba = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgHbaInput() {
    return this._pgHba;
  }

  // pg_ident - computed: true, optional: true, required: false
  private _pgIdent?: string[]; 
  public get pgIdent() {
    return this.getListAttribute('pg_ident');
  }
  public set pgIdent(value: string[]) {
    this._pgIdent = value;
  }
  public resetPgIdent() {
    this._pgIdent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgIdentInput() {
    return this._pgIdent;
  }

  // use_pg_rewind - computed: true, optional: true, required: false
  private _usePgRewind?: boolean | cdktf.IResolvable; 
  public get usePgRewind() {
    return this.getBooleanAttribute('use_pg_rewind');
  }
  public set usePgRewind(value: boolean | cdktf.IResolvable) {
    this._usePgRewind = value;
  }
  public resetUsePgRewind() {
    this._usePgRewind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePgRewindInput() {
    return this._usePgRewind;
  }

  // use_slots - computed: true, optional: true, required: false
  private _useSlots?: boolean | cdktf.IResolvable; 
  public get useSlots() {
    return this.getBooleanAttribute('use_slots');
  }
  public set useSlots(value: boolean | cdktf.IResolvable) {
    this._useSlots = value;
  }
  public resetUseSlots() {
    this._useSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSlotsInput() {
    return this._useSlots;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/data-sources/dynamic_config patroni_dynamic_config}
*/
export class DataPatroniDynamicConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "patroni_dynamic_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPatroniDynamicConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPatroniDynamicConfig to import
  * @param importFromId The id of the existing DataPatroniDynamicConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/data-sources/dynamic_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPatroniDynamicConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "patroni_dynamic_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ferlab-ste-justine/patroni/0.1.1/docs/data-sources/dynamic_config patroni_dynamic_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPatroniDynamicConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataPatroniDynamicConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'patroni_dynamic_config',
      terraformGeneratorMetadata: {
        providerName: 'patroni',
        providerVersion: '0.1.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // failsafe_mode - computed: true, optional: false, required: false
  public get failsafeMode() {
    return this.getBooleanAttribute('failsafe_mode');
  }

  // loop_wait - computed: true, optional: false, required: false
  public get loopWait() {
    return this.getNumberAttribute('loop_wait');
  }

  // max_timelines_history - computed: true, optional: false, required: false
  public get maxTimelinesHistory() {
    return this.getNumberAttribute('max_timelines_history');
  }

  // maximum_lag_on_failover - computed: true, optional: false, required: false
  public get maximumLagOnFailover() {
    return this.getNumberAttribute('maximum_lag_on_failover');
  }

  // maximum_lag_on_syncnode - computed: true, optional: false, required: false
  public get maximumLagOnSyncnode() {
    return this.getNumberAttribute('maximum_lag_on_syncnode');
  }

  // postgresql - computed: true, optional: false, required: false
  private _postgresql = new DataPatroniDynamicConfigPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }

  // primary_start_timeout - computed: true, optional: false, required: false
  public get primaryStartTimeout() {
    return this.getNumberAttribute('primary_start_timeout');
  }

  // primary_stop_timeout - computed: true, optional: false, required: false
  public get primaryStopTimeout() {
    return this.getNumberAttribute('primary_stop_timeout');
  }

  // retry_timeout - computed: true, optional: false, required: false
  public get retryTimeout() {
    return this.getNumberAttribute('retry_timeout');
  }

  // synchronous_mode - computed: true, optional: false, required: false
  public get synchronousMode() {
    return this.getBooleanAttribute('synchronous_mode');
  }

  // synchronous_mode_strict - computed: true, optional: false, required: false
  public get synchronousModeStrict() {
    return this.getBooleanAttribute('synchronous_mode_strict');
  }

  // synchronous_node_count - computed: true, optional: false, required: false
  public get synchronousNodeCount() {
    return this.getNumberAttribute('synchronous_node_count');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
