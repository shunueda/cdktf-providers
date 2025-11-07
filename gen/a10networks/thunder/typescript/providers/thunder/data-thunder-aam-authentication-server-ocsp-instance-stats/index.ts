// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationServerOcspInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#id DataThunderAamAuthenticationServerOcspInstanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify OCSP authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#name DataThunderAamAuthenticationServerOcspInstanceStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#stats DataThunderAamAuthenticationServerOcspInstanceStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerOcspInstanceStatsStats;
}
export interface DataThunderAamAuthenticationServerOcspInstanceStatsStats {
  /**
  * Good Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#certificate_good DataThunderAamAuthenticationServerOcspInstanceStats#certificate_good}
  */
  readonly certificateGood?: number;
  /**
  * Revoked Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#certificate_revoked DataThunderAamAuthenticationServerOcspInstanceStats#certificate_revoked}
  */
  readonly certificateRevoked?: number;
  /**
  * Unknown Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#certificate_unknown DataThunderAamAuthenticationServerOcspInstanceStats#certificate_unknown}
  */
  readonly certificateUnknown?: number;
  /**
  * Handle OCSP response failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#fail DataThunderAamAuthenticationServerOcspInstanceStats#fail}
  */
  readonly fail?: number;
  /**
  * Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#request DataThunderAamAuthenticationServerOcspInstanceStats#request}
  */
  readonly request?: number;
  /**
  * OCSP Stapling Good Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#stapling_certificate_good DataThunderAamAuthenticationServerOcspInstanceStats#stapling_certificate_good}
  */
  readonly staplingCertificateGood?: number;
  /**
  * OCSP Stapling Revoked Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#stapling_certificate_revoked DataThunderAamAuthenticationServerOcspInstanceStats#stapling_certificate_revoked}
  */
  readonly staplingCertificateRevoked?: number;
  /**
  * OCSP Stapling Unknown Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#stapling_certificate_unknown DataThunderAamAuthenticationServerOcspInstanceStats#stapling_certificate_unknown}
  */
  readonly staplingCertificateUnknown?: number;
  /**
  * Handle OCSP response failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#stapling_fail DataThunderAamAuthenticationServerOcspInstanceStats#stapling_fail}
  */
  readonly staplingFail?: number;
  /**
  * OCSP Stapling Request Send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#stapling_request DataThunderAamAuthenticationServerOcspInstanceStats#stapling_request}
  */
  readonly staplingRequest?: number;
  /**
  * OCSP Stapling Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#stapling_timeout DataThunderAamAuthenticationServerOcspInstanceStats#stapling_timeout}
  */
  readonly staplingTimeout?: number;
  /**
  * Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#timeout DataThunderAamAuthenticationServerOcspInstanceStats#timeout}
  */
  readonly timeout?: number;
}

export function dataThunderAamAuthenticationServerOcspInstanceStatsStatsToTerraform(struct?: DataThunderAamAuthenticationServerOcspInstanceStatsStatsOutputReference | DataThunderAamAuthenticationServerOcspInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_good: cdktf.numberToTerraform(struct!.certificateGood),
    certificate_revoked: cdktf.numberToTerraform(struct!.certificateRevoked),
    certificate_unknown: cdktf.numberToTerraform(struct!.certificateUnknown),
    fail: cdktf.numberToTerraform(struct!.fail),
    request: cdktf.numberToTerraform(struct!.request),
    stapling_certificate_good: cdktf.numberToTerraform(struct!.staplingCertificateGood),
    stapling_certificate_revoked: cdktf.numberToTerraform(struct!.staplingCertificateRevoked),
    stapling_certificate_unknown: cdktf.numberToTerraform(struct!.staplingCertificateUnknown),
    stapling_fail: cdktf.numberToTerraform(struct!.staplingFail),
    stapling_request: cdktf.numberToTerraform(struct!.staplingRequest),
    stapling_timeout: cdktf.numberToTerraform(struct!.staplingTimeout),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function dataThunderAamAuthenticationServerOcspInstanceStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerOcspInstanceStatsStatsOutputReference | DataThunderAamAuthenticationServerOcspInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_good: {
      value: cdktf.numberToHclTerraform(struct!.certificateGood),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    certificate_revoked: {
      value: cdktf.numberToHclTerraform(struct!.certificateRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    certificate_unknown: {
      value: cdktf.numberToHclTerraform(struct!.certificateUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail: {
      value: cdktf.numberToHclTerraform(struct!.fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request: {
      value: cdktf.numberToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_certificate_good: {
      value: cdktf.numberToHclTerraform(struct!.staplingCertificateGood),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_certificate_revoked: {
      value: cdktf.numberToHclTerraform(struct!.staplingCertificateRevoked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_certificate_unknown: {
      value: cdktf.numberToHclTerraform(struct!.staplingCertificateUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_fail: {
      value: cdktf.numberToHclTerraform(struct!.staplingFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_request: {
      value: cdktf.numberToHclTerraform(struct!.staplingRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.staplingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOcspInstanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOcspInstanceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateGood !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateGood = this._certificateGood;
    }
    if (this._certificateRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateRevoked = this._certificateRevoked;
    }
    if (this._certificateUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUnknown = this._certificateUnknown;
    }
    if (this._fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fail = this._fail;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._staplingCertificateGood !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingCertificateGood = this._staplingCertificateGood;
    }
    if (this._staplingCertificateRevoked !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingCertificateRevoked = this._staplingCertificateRevoked;
    }
    if (this._staplingCertificateUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingCertificateUnknown = this._staplingCertificateUnknown;
    }
    if (this._staplingFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingFail = this._staplingFail;
    }
    if (this._staplingRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingRequest = this._staplingRequest;
    }
    if (this._staplingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingTimeout = this._staplingTimeout;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOcspInstanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateGood = undefined;
      this._certificateRevoked = undefined;
      this._certificateUnknown = undefined;
      this._fail = undefined;
      this._request = undefined;
      this._staplingCertificateGood = undefined;
      this._staplingCertificateRevoked = undefined;
      this._staplingCertificateUnknown = undefined;
      this._staplingFail = undefined;
      this._staplingRequest = undefined;
      this._staplingTimeout = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateGood = value.certificateGood;
      this._certificateRevoked = value.certificateRevoked;
      this._certificateUnknown = value.certificateUnknown;
      this._fail = value.fail;
      this._request = value.request;
      this._staplingCertificateGood = value.staplingCertificateGood;
      this._staplingCertificateRevoked = value.staplingCertificateRevoked;
      this._staplingCertificateUnknown = value.staplingCertificateUnknown;
      this._staplingFail = value.staplingFail;
      this._staplingRequest = value.staplingRequest;
      this._staplingTimeout = value.staplingTimeout;
      this._timeout = value.timeout;
    }
  }

  // certificate_good - computed: false, optional: true, required: false
  private _certificateGood?: number; 
  public get certificateGood() {
    return this.getNumberAttribute('certificate_good');
  }
  public set certificateGood(value: number) {
    this._certificateGood = value;
  }
  public resetCertificateGood() {
    this._certificateGood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateGoodInput() {
    return this._certificateGood;
  }

  // certificate_revoked - computed: false, optional: true, required: false
  private _certificateRevoked?: number; 
  public get certificateRevoked() {
    return this.getNumberAttribute('certificate_revoked');
  }
  public set certificateRevoked(value: number) {
    this._certificateRevoked = value;
  }
  public resetCertificateRevoked() {
    this._certificateRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateRevokedInput() {
    return this._certificateRevoked;
  }

  // certificate_unknown - computed: false, optional: true, required: false
  private _certificateUnknown?: number; 
  public get certificateUnknown() {
    return this.getNumberAttribute('certificate_unknown');
  }
  public set certificateUnknown(value: number) {
    this._certificateUnknown = value;
  }
  public resetCertificateUnknown() {
    this._certificateUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUnknownInput() {
    return this._certificateUnknown;
  }

  // fail - computed: false, optional: true, required: false
  private _fail?: number; 
  public get fail() {
    return this.getNumberAttribute('fail');
  }
  public set fail(value: number) {
    this._fail = value;
  }
  public resetFail() {
    this._fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInput() {
    return this._fail;
  }

  // request - computed: false, optional: true, required: false
  private _request?: number; 
  public get request() {
    return this.getNumberAttribute('request');
  }
  public set request(value: number) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // stapling_certificate_good - computed: false, optional: true, required: false
  private _staplingCertificateGood?: number; 
  public get staplingCertificateGood() {
    return this.getNumberAttribute('stapling_certificate_good');
  }
  public set staplingCertificateGood(value: number) {
    this._staplingCertificateGood = value;
  }
  public resetStaplingCertificateGood() {
    this._staplingCertificateGood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingCertificateGoodInput() {
    return this._staplingCertificateGood;
  }

  // stapling_certificate_revoked - computed: false, optional: true, required: false
  private _staplingCertificateRevoked?: number; 
  public get staplingCertificateRevoked() {
    return this.getNumberAttribute('stapling_certificate_revoked');
  }
  public set staplingCertificateRevoked(value: number) {
    this._staplingCertificateRevoked = value;
  }
  public resetStaplingCertificateRevoked() {
    this._staplingCertificateRevoked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingCertificateRevokedInput() {
    return this._staplingCertificateRevoked;
  }

  // stapling_certificate_unknown - computed: false, optional: true, required: false
  private _staplingCertificateUnknown?: number; 
  public get staplingCertificateUnknown() {
    return this.getNumberAttribute('stapling_certificate_unknown');
  }
  public set staplingCertificateUnknown(value: number) {
    this._staplingCertificateUnknown = value;
  }
  public resetStaplingCertificateUnknown() {
    this._staplingCertificateUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingCertificateUnknownInput() {
    return this._staplingCertificateUnknown;
  }

  // stapling_fail - computed: false, optional: true, required: false
  private _staplingFail?: number; 
  public get staplingFail() {
    return this.getNumberAttribute('stapling_fail');
  }
  public set staplingFail(value: number) {
    this._staplingFail = value;
  }
  public resetStaplingFail() {
    this._staplingFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingFailInput() {
    return this._staplingFail;
  }

  // stapling_request - computed: false, optional: true, required: false
  private _staplingRequest?: number; 
  public get staplingRequest() {
    return this.getNumberAttribute('stapling_request');
  }
  public set staplingRequest(value: number) {
    this._staplingRequest = value;
  }
  public resetStaplingRequest() {
    this._staplingRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingRequestInput() {
    return this._staplingRequest;
  }

  // stapling_timeout - computed: false, optional: true, required: false
  private _staplingTimeout?: number; 
  public get staplingTimeout() {
    return this.getNumberAttribute('stapling_timeout');
  }
  public set staplingTimeout(value: number) {
    this._staplingTimeout = value;
  }
  public resetStaplingTimeout() {
    this._staplingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingTimeoutInput() {
    return this._staplingTimeout;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats thunder_aam_authentication_server_ocsp_instance_stats}
*/
export class DataThunderAamAuthenticationServerOcspInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_ocsp_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationServerOcspInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationServerOcspInstanceStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationServerOcspInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationServerOcspInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_ocsp_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_instance_stats thunder_aam_authentication_server_ocsp_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationServerOcspInstanceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationServerOcspInstanceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_ocsp_instance_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAuthenticationServerOcspInstanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerOcspInstanceStatsStats) {
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
      stats: dataThunderAamAuthenticationServerOcspInstanceStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderAamAuthenticationServerOcspInstanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerOcspInstanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
