// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_log_server_port_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAcosEventsLogServerPortStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_log_server_port_stats#id DataThunderAcosEventsLogServerPortStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_log_server_port_stats#name DataThunderAcosEventsLogServerPortStats#name}
  */
  readonly name: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_log_server_port_stats#port_number DataThunderAcosEventsLogServerPortStats#port_number}
  */
  readonly portNumber: number;
  /**
  * 'tcp': TCP Port; 'udp': UDP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_log_server_port_stats#protocol DataThunderAcosEventsLogServerPortStats#protocol}
  */
  readonly protocol: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_log_server_port_stats#stats DataThunderAcosEventsLogServerPortStats#stats}
  */
  readonly stats?: DataThunderAcosEventsLogServerPortStatsStats;
}
export interface DataThunderAcosEventsLogServerPortStatsStats {
}

export function dataThunderAcosEventsLogServerPortStatsStatsToTerraform(struct?: DataThunderAcosEventsLogServerPortStatsStatsOutputReference | DataThunderAcosEventsLogServerPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataThunderAcosEventsLogServerPortStatsStatsToHclTerraform(struct?: DataThunderAcosEventsLogServerPortStatsStatsOutputReference | DataThunderAcosEventsLogServerPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataThunderAcosEventsLogServerPortStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAcosEventsLogServerPortStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAcosEventsLogServerPortStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_log_server_port_stats thunder_acos_events_log_server_port_stats}
*/
export class DataThunderAcosEventsLogServerPortStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_acos_events_log_server_port_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAcosEventsLogServerPortStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAcosEventsLogServerPortStats to import
  * @param importFromId The id of the existing DataThunderAcosEventsLogServerPortStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_log_server_port_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAcosEventsLogServerPortStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_acos_events_log_server_port_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/acos_events_log_server_port_stats thunder_acos_events_log_server_port_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAcosEventsLogServerPortStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAcosEventsLogServerPortStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_acos_events_log_server_port_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._name = config.name;
    this._portNumber = config.portNumber;
    this._protocol = config.protocol;
    this._stats.internalValue = config.stats;
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

  // port_number - computed: false, optional: false, required: true
  private _portNumber?: number; 
  public get portNumber() {
    return this.getNumberAttribute('port_number');
  }
  public set portNumber(value: number) {
    this._portNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumberInput() {
    return this._portNumber;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAcosEventsLogServerPortStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAcosEventsLogServerPortStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port_number: cdktf.numberToTerraform(this._portNumber),
      protocol: cdktf.stringToTerraform(this._protocol),
      stats: dataThunderAcosEventsLogServerPortStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_number: {
        value: cdktf.numberToHclTerraform(this._portNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderAcosEventsLogServerPortStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAcosEventsLogServerPortStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
