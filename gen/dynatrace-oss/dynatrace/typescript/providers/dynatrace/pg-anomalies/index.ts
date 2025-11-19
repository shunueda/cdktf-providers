// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/pg_anomalies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PgAnomaliesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/pg_anomalies#id PgAnomalies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the process group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/pg_anomalies#pg_id PgAnomalies#pg_id}
  */
  readonly pgId: string;
  /**
  * availability block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/pg_anomalies#availability PgAnomalies#availability}
  */
  readonly availability?: PgAnomaliesAvailability;
}
export interface PgAnomaliesAvailability {
  /**
  * How to monitor the availability of the process group:  * `PROCESS_IMPACT`: Alert if any process of the group becomes unavailable.  * `MINIMUM_THRESHOLD`: Alert if the number of active processes in the group falls below the specified threshold.  * `OFF`: Availability monitoring is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/pg_anomalies#method PgAnomalies#method}
  */
  readonly method: string;
  /**
  * Alert if the number of active processes in the group is lower than this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/pg_anomalies#minimum_threshold PgAnomalies#minimum_threshold}
  */
  readonly minimumThreshold?: number;
}

export function pgAnomaliesAvailabilityToTerraform(struct?: PgAnomaliesAvailabilityOutputReference | PgAnomaliesAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    method: cdktf.stringToTerraform(struct!.method),
    minimum_threshold: cdktf.numberToTerraform(struct!.minimumThreshold),
  }
}


export function pgAnomaliesAvailabilityToHclTerraform(struct?: PgAnomaliesAvailabilityOutputReference | PgAnomaliesAvailability): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    minimum_threshold: {
      value: cdktf.numberToHclTerraform(struct!.minimumThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgAnomaliesAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgAnomaliesAvailability | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._minimumThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumThreshold = this._minimumThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgAnomaliesAvailability | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._method = undefined;
      this._minimumThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._method = value.method;
      this._minimumThreshold = value.minimumThreshold;
    }
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // minimum_threshold - computed: false, optional: true, required: false
  private _minimumThreshold?: number; 
  public get minimumThreshold() {
    return this.getNumberAttribute('minimum_threshold');
  }
  public set minimumThreshold(value: number) {
    this._minimumThreshold = value;
  }
  public resetMinimumThreshold() {
    this._minimumThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumThresholdInput() {
    return this._minimumThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/pg_anomalies dynatrace_pg_anomalies}
*/
export class PgAnomalies extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_pg_anomalies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PgAnomalies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PgAnomalies to import
  * @param importFromId The id of the existing PgAnomalies that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/pg_anomalies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PgAnomalies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_pg_anomalies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/pg_anomalies dynatrace_pg_anomalies} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PgAnomaliesConfig
  */
  public constructor(scope: Construct, id: string, config: PgAnomaliesConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_pg_anomalies',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
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
    this._pgId = config.pgId;
    this._availability.internalValue = config.availability;
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

  // pg_id - computed: false, optional: false, required: true
  private _pgId?: string; 
  public get pgId() {
    return this.getStringAttribute('pg_id');
  }
  public set pgId(value: string) {
    this._pgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pgIdInput() {
    return this._pgId;
  }

  // availability - computed: false, optional: true, required: false
  private _availability = new PgAnomaliesAvailabilityOutputReference(this, "availability");
  public get availability() {
    return this._availability;
  }
  public putAvailability(value: PgAnomaliesAvailability) {
    this._availability.internalValue = value;
  }
  public resetAvailability() {
    this._availability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityInput() {
    return this._availability.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      pg_id: cdktf.stringToTerraform(this._pgId),
      availability: pgAnomaliesAvailabilityToTerraform(this._availability.internalValue),
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
      pg_id: {
        value: cdktf.stringToHclTerraform(this._pgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability: {
        value: pgAnomaliesAvailabilityToHclTerraform(this._availability.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PgAnomaliesAvailabilityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
