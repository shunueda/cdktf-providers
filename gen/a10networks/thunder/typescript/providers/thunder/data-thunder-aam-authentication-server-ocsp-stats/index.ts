// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationServerOcspStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#id DataThunderAamAuthenticationServerOcspStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#instance_list DataThunderAamAuthenticationServerOcspStats#instance_list}
  */
  readonly instanceList?: DataThunderAamAuthenticationServerOcspStatsInstanceListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stats DataThunderAamAuthenticationServerOcspStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerOcspStatsStats;
}
export interface DataThunderAamAuthenticationServerOcspStatsInstanceListStats {
  /**
  * Good Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#certificate_good DataThunderAamAuthenticationServerOcspStats#certificate_good}
  */
  readonly certificateGood?: number;
  /**
  * Revoked Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#certificate_revoked DataThunderAamAuthenticationServerOcspStats#certificate_revoked}
  */
  readonly certificateRevoked?: number;
  /**
  * Unknown Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#certificate_unknown DataThunderAamAuthenticationServerOcspStats#certificate_unknown}
  */
  readonly certificateUnknown?: number;
  /**
  * Handle OCSP response failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#fail DataThunderAamAuthenticationServerOcspStats#fail}
  */
  readonly fail?: number;
  /**
  * Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#request DataThunderAamAuthenticationServerOcspStats#request}
  */
  readonly request?: number;
  /**
  * OCSP Stapling Good Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_certificate_good DataThunderAamAuthenticationServerOcspStats#stapling_certificate_good}
  */
  readonly staplingCertificateGood?: number;
  /**
  * OCSP Stapling Revoked Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_certificate_revoked DataThunderAamAuthenticationServerOcspStats#stapling_certificate_revoked}
  */
  readonly staplingCertificateRevoked?: number;
  /**
  * OCSP Stapling Unknown Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_certificate_unknown DataThunderAamAuthenticationServerOcspStats#stapling_certificate_unknown}
  */
  readonly staplingCertificateUnknown?: number;
  /**
  * Handle OCSP response failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_fail DataThunderAamAuthenticationServerOcspStats#stapling_fail}
  */
  readonly staplingFail?: number;
  /**
  * OCSP Stapling Request Send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_request DataThunderAamAuthenticationServerOcspStats#stapling_request}
  */
  readonly staplingRequest?: number;
  /**
  * OCSP Stapling Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_timeout DataThunderAamAuthenticationServerOcspStats#stapling_timeout}
  */
  readonly staplingTimeout?: number;
  /**
  * Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#timeout DataThunderAamAuthenticationServerOcspStats#timeout}
  */
  readonly timeout?: number;
}

export function dataThunderAamAuthenticationServerOcspStatsInstanceListStatsToTerraform(struct?: DataThunderAamAuthenticationServerOcspStatsInstanceListStatsOutputReference | DataThunderAamAuthenticationServerOcspStatsInstanceListStats): any {
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


export function dataThunderAamAuthenticationServerOcspStatsInstanceListStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerOcspStatsInstanceListStatsOutputReference | DataThunderAamAuthenticationServerOcspStatsInstanceListStats): any {
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

export class DataThunderAamAuthenticationServerOcspStatsInstanceListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOcspStatsInstanceListStats | undefined {
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

  public set internalValue(value: DataThunderAamAuthenticationServerOcspStatsInstanceListStats | undefined) {
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
export interface DataThunderAamAuthenticationServerOcspStatsInstanceListStruct {
  /**
  * Specify OCSP authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#name DataThunderAamAuthenticationServerOcspStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stats DataThunderAamAuthenticationServerOcspStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerOcspStatsInstanceListStats;
}

export function dataThunderAamAuthenticationServerOcspStatsInstanceListStructToTerraform(struct?: DataThunderAamAuthenticationServerOcspStatsInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats: dataThunderAamAuthenticationServerOcspStatsInstanceListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderAamAuthenticationServerOcspStatsInstanceListStructToHclTerraform(struct?: DataThunderAamAuthenticationServerOcspStatsInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderAamAuthenticationServerOcspStatsInstanceListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerOcspStatsInstanceListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOcspStatsInstanceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOcspStatsInstanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOcspStatsInstanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._stats.internalValue = value.stats;
    }
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
  private _stats = new DataThunderAamAuthenticationServerOcspStatsInstanceListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerOcspStatsInstanceListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderAamAuthenticationServerOcspStatsInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationServerOcspStatsInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationServerOcspStatsInstanceListStructOutputReference {
    return new DataThunderAamAuthenticationServerOcspStatsInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationServerOcspStatsStats {
  /**
  * Total OCSP Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#job_start_error DataThunderAamAuthenticationServerOcspStats#job_start_error}
  */
  readonly jobStartError?: number;
  /**
  * Total OCSP Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#polling_control_error DataThunderAamAuthenticationServerOcspStats#polling_control_error}
  */
  readonly pollingControlError?: number;
  /**
  * Total OCSP Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#request_dropped DataThunderAamAuthenticationServerOcspStats#request_dropped}
  */
  readonly requestDropped?: number;
  /**
  * Total OSCP Normal Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#request_normal DataThunderAamAuthenticationServerOcspStats#request_normal}
  */
  readonly requestNormal?: number;
  /**
  * Total OCSP Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#response_error DataThunderAamAuthenticationServerOcspStats#response_error}
  */
  readonly responseError?: number;
  /**
  * Total OCSP Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#response_failure DataThunderAamAuthenticationServerOcspStats#response_failure}
  */
  readonly responseFailure?: number;
  /**
  * Total OCSP Other Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#response_other DataThunderAamAuthenticationServerOcspStats#response_other}
  */
  readonly responseOther?: number;
  /**
  * Total OCSP Success Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#response_success DataThunderAamAuthenticationServerOcspStats#response_success}
  */
  readonly responseSuccess?: number;
  /**
  * Total OCSP Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#response_timeout DataThunderAamAuthenticationServerOcspStats#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Total OCSP Stapling Good Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_certificate_good DataThunderAamAuthenticationServerOcspStats#stapling_certificate_good}
  */
  readonly staplingCertificateGood?: number;
  /**
  * Total OCSP Stapling Revoked Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_certificate_revoked DataThunderAamAuthenticationServerOcspStats#stapling_certificate_revoked}
  */
  readonly staplingCertificateRevoked?: number;
  /**
  * Total OCSP Stapling Unknown Certificate Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_certificate_unknown DataThunderAamAuthenticationServerOcspStats#stapling_certificate_unknown}
  */
  readonly staplingCertificateUnknown?: number;
  /**
  * Total OCSP Stapling Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_request_dropped DataThunderAamAuthenticationServerOcspStats#stapling_request_dropped}
  */
  readonly staplingRequestDropped?: number;
  /**
  * Total OSCP Stapling Normal Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_request_normal DataThunderAamAuthenticationServerOcspStats#stapling_request_normal}
  */
  readonly staplingRequestNormal?: number;
  /**
  * Total OCSP Stapling Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_response_error DataThunderAamAuthenticationServerOcspStats#stapling_response_error}
  */
  readonly staplingResponseError?: number;
  /**
  * Total OCSP Stapling Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_response_failure DataThunderAamAuthenticationServerOcspStats#stapling_response_failure}
  */
  readonly staplingResponseFailure?: number;
  /**
  * Total OCSP Stapling Other Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_response_other DataThunderAamAuthenticationServerOcspStats#stapling_response_other}
  */
  readonly staplingResponseOther?: number;
  /**
  * Total OCSP Stapling Success Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_response_success DataThunderAamAuthenticationServerOcspStats#stapling_response_success}
  */
  readonly staplingResponseSuccess?: number;
  /**
  * Total OCSP Stapling Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#stapling_response_timeout DataThunderAamAuthenticationServerOcspStats#stapling_response_timeout}
  */
  readonly staplingResponseTimeout?: number;
}

export function dataThunderAamAuthenticationServerOcspStatsStatsToTerraform(struct?: DataThunderAamAuthenticationServerOcspStatsStatsOutputReference | DataThunderAamAuthenticationServerOcspStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_start_error: cdktf.numberToTerraform(struct!.jobStartError),
    polling_control_error: cdktf.numberToTerraform(struct!.pollingControlError),
    request_dropped: cdktf.numberToTerraform(struct!.requestDropped),
    request_normal: cdktf.numberToTerraform(struct!.requestNormal),
    response_error: cdktf.numberToTerraform(struct!.responseError),
    response_failure: cdktf.numberToTerraform(struct!.responseFailure),
    response_other: cdktf.numberToTerraform(struct!.responseOther),
    response_success: cdktf.numberToTerraform(struct!.responseSuccess),
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
    stapling_certificate_good: cdktf.numberToTerraform(struct!.staplingCertificateGood),
    stapling_certificate_revoked: cdktf.numberToTerraform(struct!.staplingCertificateRevoked),
    stapling_certificate_unknown: cdktf.numberToTerraform(struct!.staplingCertificateUnknown),
    stapling_request_dropped: cdktf.numberToTerraform(struct!.staplingRequestDropped),
    stapling_request_normal: cdktf.numberToTerraform(struct!.staplingRequestNormal),
    stapling_response_error: cdktf.numberToTerraform(struct!.staplingResponseError),
    stapling_response_failure: cdktf.numberToTerraform(struct!.staplingResponseFailure),
    stapling_response_other: cdktf.numberToTerraform(struct!.staplingResponseOther),
    stapling_response_success: cdktf.numberToTerraform(struct!.staplingResponseSuccess),
    stapling_response_timeout: cdktf.numberToTerraform(struct!.staplingResponseTimeout),
  }
}


export function dataThunderAamAuthenticationServerOcspStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerOcspStatsStatsOutputReference | DataThunderAamAuthenticationServerOcspStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    job_start_error: {
      value: cdktf.numberToHclTerraform(struct!.jobStartError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    polling_control_error: {
      value: cdktf.numberToHclTerraform(struct!.pollingControlError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_normal: {
      value: cdktf.numberToHclTerraform(struct!.requestNormal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_error: {
      value: cdktf.numberToHclTerraform(struct!.responseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_failure: {
      value: cdktf.numberToHclTerraform(struct!.responseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_other: {
      value: cdktf.numberToHclTerraform(struct!.responseOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_success: {
      value: cdktf.numberToHclTerraform(struct!.responseSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.responseTimeout),
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
    stapling_request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.staplingRequestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_request_normal: {
      value: cdktf.numberToHclTerraform(struct!.staplingRequestNormal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_error: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_failure: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_other: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_success: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stapling_response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.staplingResponseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerOcspStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerOcspStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jobStartError !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobStartError = this._jobStartError;
    }
    if (this._pollingControlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingControlError = this._pollingControlError;
    }
    if (this._requestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDropped = this._requestDropped;
    }
    if (this._requestNormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNormal = this._requestNormal;
    }
    if (this._responseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseError = this._responseError;
    }
    if (this._responseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFailure = this._responseFailure;
    }
    if (this._responseOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseOther = this._responseOther;
    }
    if (this._responseSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSuccess = this._responseSuccess;
    }
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
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
    if (this._staplingRequestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingRequestDropped = this._staplingRequestDropped;
    }
    if (this._staplingRequestNormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingRequestNormal = this._staplingRequestNormal;
    }
    if (this._staplingResponseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseError = this._staplingResponseError;
    }
    if (this._staplingResponseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseFailure = this._staplingResponseFailure;
    }
    if (this._staplingResponseOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseOther = this._staplingResponseOther;
    }
    if (this._staplingResponseSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseSuccess = this._staplingResponseSuccess;
    }
    if (this._staplingResponseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.staplingResponseTimeout = this._staplingResponseTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerOcspStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobStartError = undefined;
      this._pollingControlError = undefined;
      this._requestDropped = undefined;
      this._requestNormal = undefined;
      this._responseError = undefined;
      this._responseFailure = undefined;
      this._responseOther = undefined;
      this._responseSuccess = undefined;
      this._responseTimeout = undefined;
      this._staplingCertificateGood = undefined;
      this._staplingCertificateRevoked = undefined;
      this._staplingCertificateUnknown = undefined;
      this._staplingRequestDropped = undefined;
      this._staplingRequestNormal = undefined;
      this._staplingResponseError = undefined;
      this._staplingResponseFailure = undefined;
      this._staplingResponseOther = undefined;
      this._staplingResponseSuccess = undefined;
      this._staplingResponseTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobStartError = value.jobStartError;
      this._pollingControlError = value.pollingControlError;
      this._requestDropped = value.requestDropped;
      this._requestNormal = value.requestNormal;
      this._responseError = value.responseError;
      this._responseFailure = value.responseFailure;
      this._responseOther = value.responseOther;
      this._responseSuccess = value.responseSuccess;
      this._responseTimeout = value.responseTimeout;
      this._staplingCertificateGood = value.staplingCertificateGood;
      this._staplingCertificateRevoked = value.staplingCertificateRevoked;
      this._staplingCertificateUnknown = value.staplingCertificateUnknown;
      this._staplingRequestDropped = value.staplingRequestDropped;
      this._staplingRequestNormal = value.staplingRequestNormal;
      this._staplingResponseError = value.staplingResponseError;
      this._staplingResponseFailure = value.staplingResponseFailure;
      this._staplingResponseOther = value.staplingResponseOther;
      this._staplingResponseSuccess = value.staplingResponseSuccess;
      this._staplingResponseTimeout = value.staplingResponseTimeout;
    }
  }

  // job_start_error - computed: false, optional: true, required: false
  private _jobStartError?: number; 
  public get jobStartError() {
    return this.getNumberAttribute('job_start_error');
  }
  public set jobStartError(value: number) {
    this._jobStartError = value;
  }
  public resetJobStartError() {
    this._jobStartError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStartErrorInput() {
    return this._jobStartError;
  }

  // polling_control_error - computed: false, optional: true, required: false
  private _pollingControlError?: number; 
  public get pollingControlError() {
    return this.getNumberAttribute('polling_control_error');
  }
  public set pollingControlError(value: number) {
    this._pollingControlError = value;
  }
  public resetPollingControlError() {
    this._pollingControlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingControlErrorInput() {
    return this._pollingControlError;
  }

  // request_dropped - computed: false, optional: true, required: false
  private _requestDropped?: number; 
  public get requestDropped() {
    return this.getNumberAttribute('request_dropped');
  }
  public set requestDropped(value: number) {
    this._requestDropped = value;
  }
  public resetRequestDropped() {
    this._requestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDroppedInput() {
    return this._requestDropped;
  }

  // request_normal - computed: false, optional: true, required: false
  private _requestNormal?: number; 
  public get requestNormal() {
    return this.getNumberAttribute('request_normal');
  }
  public set requestNormal(value: number) {
    this._requestNormal = value;
  }
  public resetRequestNormal() {
    this._requestNormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNormalInput() {
    return this._requestNormal;
  }

  // response_error - computed: false, optional: true, required: false
  private _responseError?: number; 
  public get responseError() {
    return this.getNumberAttribute('response_error');
  }
  public set responseError(value: number) {
    this._responseError = value;
  }
  public resetResponseError() {
    this._responseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseErrorInput() {
    return this._responseError;
  }

  // response_failure - computed: false, optional: true, required: false
  private _responseFailure?: number; 
  public get responseFailure() {
    return this.getNumberAttribute('response_failure');
  }
  public set responseFailure(value: number) {
    this._responseFailure = value;
  }
  public resetResponseFailure() {
    this._responseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFailureInput() {
    return this._responseFailure;
  }

  // response_other - computed: false, optional: true, required: false
  private _responseOther?: number; 
  public get responseOther() {
    return this.getNumberAttribute('response_other');
  }
  public set responseOther(value: number) {
    this._responseOther = value;
  }
  public resetResponseOther() {
    this._responseOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseOtherInput() {
    return this._responseOther;
  }

  // response_success - computed: false, optional: true, required: false
  private _responseSuccess?: number; 
  public get responseSuccess() {
    return this.getNumberAttribute('response_success');
  }
  public set responseSuccess(value: number) {
    this._responseSuccess = value;
  }
  public resetResponseSuccess() {
    this._responseSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSuccessInput() {
    return this._responseSuccess;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
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

  // stapling_request_dropped - computed: false, optional: true, required: false
  private _staplingRequestDropped?: number; 
  public get staplingRequestDropped() {
    return this.getNumberAttribute('stapling_request_dropped');
  }
  public set staplingRequestDropped(value: number) {
    this._staplingRequestDropped = value;
  }
  public resetStaplingRequestDropped() {
    this._staplingRequestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingRequestDroppedInput() {
    return this._staplingRequestDropped;
  }

  // stapling_request_normal - computed: false, optional: true, required: false
  private _staplingRequestNormal?: number; 
  public get staplingRequestNormal() {
    return this.getNumberAttribute('stapling_request_normal');
  }
  public set staplingRequestNormal(value: number) {
    this._staplingRequestNormal = value;
  }
  public resetStaplingRequestNormal() {
    this._staplingRequestNormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingRequestNormalInput() {
    return this._staplingRequestNormal;
  }

  // stapling_response_error - computed: false, optional: true, required: false
  private _staplingResponseError?: number; 
  public get staplingResponseError() {
    return this.getNumberAttribute('stapling_response_error');
  }
  public set staplingResponseError(value: number) {
    this._staplingResponseError = value;
  }
  public resetStaplingResponseError() {
    this._staplingResponseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseErrorInput() {
    return this._staplingResponseError;
  }

  // stapling_response_failure - computed: false, optional: true, required: false
  private _staplingResponseFailure?: number; 
  public get staplingResponseFailure() {
    return this.getNumberAttribute('stapling_response_failure');
  }
  public set staplingResponseFailure(value: number) {
    this._staplingResponseFailure = value;
  }
  public resetStaplingResponseFailure() {
    this._staplingResponseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseFailureInput() {
    return this._staplingResponseFailure;
  }

  // stapling_response_other - computed: false, optional: true, required: false
  private _staplingResponseOther?: number; 
  public get staplingResponseOther() {
    return this.getNumberAttribute('stapling_response_other');
  }
  public set staplingResponseOther(value: number) {
    this._staplingResponseOther = value;
  }
  public resetStaplingResponseOther() {
    this._staplingResponseOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseOtherInput() {
    return this._staplingResponseOther;
  }

  // stapling_response_success - computed: false, optional: true, required: false
  private _staplingResponseSuccess?: number; 
  public get staplingResponseSuccess() {
    return this.getNumberAttribute('stapling_response_success');
  }
  public set staplingResponseSuccess(value: number) {
    this._staplingResponseSuccess = value;
  }
  public resetStaplingResponseSuccess() {
    this._staplingResponseSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseSuccessInput() {
    return this._staplingResponseSuccess;
  }

  // stapling_response_timeout - computed: false, optional: true, required: false
  private _staplingResponseTimeout?: number; 
  public get staplingResponseTimeout() {
    return this.getNumberAttribute('stapling_response_timeout');
  }
  public set staplingResponseTimeout(value: number) {
    this._staplingResponseTimeout = value;
  }
  public resetStaplingResponseTimeout() {
    this._staplingResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staplingResponseTimeoutInput() {
    return this._staplingResponseTimeout;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats thunder_aam_authentication_server_ocsp_stats}
*/
export class DataThunderAamAuthenticationServerOcspStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_ocsp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationServerOcspStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationServerOcspStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationServerOcspStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationServerOcspStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_ocsp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ocsp_stats thunder_aam_authentication_server_ocsp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationServerOcspStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationServerOcspStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_ocsp_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._instanceList.internalValue = config.instanceList;
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

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new DataThunderAamAuthenticationServerOcspStatsInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: DataThunderAamAuthenticationServerOcspStatsInstanceListStruct[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAuthenticationServerOcspStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerOcspStatsStats) {
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
      instance_list: cdktf.listMapper(dataThunderAamAuthenticationServerOcspStatsInstanceListStructToTerraform, true)(this._instanceList.internalValue),
      stats: dataThunderAamAuthenticationServerOcspStatsStatsToTerraform(this._stats.internalValue),
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
      instance_list: {
        value: cdktf.listMapperHcl(dataThunderAamAuthenticationServerOcspStatsInstanceListStructToHclTerraform, true)(this._instanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerOcspStatsInstanceListStructList",
      },
      stats: {
        value: dataThunderAamAuthenticationServerOcspStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerOcspStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
