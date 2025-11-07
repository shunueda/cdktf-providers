// https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/archive_metrics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCoralogixArchiveMetricsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataCoralogixArchiveMetricsIbm {
}

export function dataCoralogixArchiveMetricsIbmToTerraform(struct?: DataCoralogixArchiveMetricsIbm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixArchiveMetricsIbmToHclTerraform(struct?: DataCoralogixArchiveMetricsIbm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixArchiveMetricsIbmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixArchiveMetricsIbm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixArchiveMetricsIbm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // crn - computed: true, optional: false, required: false
  public get crn() {
    return this.getStringAttribute('crn');
  }

  // endpoint - computed: true, optional: false, required: false
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
}
export interface DataCoralogixArchiveMetricsRetentionPolicy {
}

export function dataCoralogixArchiveMetricsRetentionPolicyToTerraform(struct?: DataCoralogixArchiveMetricsRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixArchiveMetricsRetentionPolicyToHclTerraform(struct?: DataCoralogixArchiveMetricsRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixArchiveMetricsRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixArchiveMetricsRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixArchiveMetricsRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // five_minutes_resolution - computed: true, optional: false, required: false
  public get fiveMinutesResolution() {
    return this.getNumberAttribute('five_minutes_resolution');
  }

  // one_hour_resolution - computed: true, optional: false, required: false
  public get oneHourResolution() {
    return this.getNumberAttribute('one_hour_resolution');
  }

  // raw_resolution - computed: true, optional: false, required: false
  public get rawResolution() {
    return this.getNumberAttribute('raw_resolution');
  }
}
export interface DataCoralogixArchiveMetricsS3 {
}

export function dataCoralogixArchiveMetricsS3ToTerraform(struct?: DataCoralogixArchiveMetricsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCoralogixArchiveMetricsS3ToHclTerraform(struct?: DataCoralogixArchiveMetricsS3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCoralogixArchiveMetricsS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataCoralogixArchiveMetricsS3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCoralogixArchiveMetricsS3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bucket - computed: true, optional: false, required: false
  public get bucket() {
    return this.getStringAttribute('bucket');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/archive_metrics coralogix_archive_metrics}
*/
export class DataCoralogixArchiveMetrics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_archive_metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCoralogixArchiveMetrics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCoralogixArchiveMetrics to import
  * @param importFromId The id of the existing DataCoralogixArchiveMetrics that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/archive_metrics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCoralogixArchiveMetrics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_archive_metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/data-sources/archive_metrics coralogix_archive_metrics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCoralogixArchiveMetricsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCoralogixArchiveMetricsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'coralogix_archive_metrics',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ibm - computed: true, optional: false, required: false
  private _ibm = new DataCoralogixArchiveMetricsIbmOutputReference(this, "ibm");
  public get ibm() {
    return this._ibm;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // retention_policy - computed: true, optional: false, required: false
  private _retentionPolicy = new DataCoralogixArchiveMetricsRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }

  // s3 - computed: true, optional: false, required: false
  private _s3 = new DataCoralogixArchiveMetricsS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getNumberAttribute('tenant_id');
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
