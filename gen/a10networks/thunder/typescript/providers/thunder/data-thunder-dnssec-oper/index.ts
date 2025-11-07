// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDnssecOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#id DataThunderDnssecOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#oper DataThunderDnssecOper#oper}
  */
  readonly oper?: DataThunderDnssecOperOper;
}
export interface DataThunderDnssecOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#a_memory DataThunderDnssecOper#a_memory}
  */
  readonly aMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#a_objects DataThunderDnssecOper#a_objects}
  */
  readonly aObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#aaaa_memory DataThunderDnssecOper#aaaa_memory}
  */
  readonly aaaaMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#aaaa_objects DataThunderDnssecOper#aaaa_objects}
  */
  readonly aaaaObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#array_memory DataThunderDnssecOper#array_memory}
  */
  readonly arrayMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#array_objects DataThunderDnssecOper#array_objects}
  */
  readonly arrayObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#cname_memory DataThunderDnssecOper#cname_memory}
  */
  readonly cnameMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#cname_objects DataThunderDnssecOper#cname_objects}
  */
  readonly cnameObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#dnskey_memory DataThunderDnssecOper#dnskey_memory}
  */
  readonly dnskeyMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#dnskey_objects DataThunderDnssecOper#dnskey_objects}
  */
  readonly dnskeyObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#domain_memory DataThunderDnssecOper#domain_memory}
  */
  readonly domainMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#domain_objects DataThunderDnssecOper#domain_objects}
  */
  readonly domainObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#ds_memory DataThunderDnssecOper#ds_memory}
  */
  readonly dsMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#ds_objects DataThunderDnssecOper#ds_objects}
  */
  readonly dsObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#mx_memory DataThunderDnssecOper#mx_memory}
  */
  readonly mxMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#mx_objects DataThunderDnssecOper#mx_objects}
  */
  readonly mxObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#ns_memory DataThunderDnssecOper#ns_memory}
  */
  readonly nsMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#ns_objects DataThunderDnssecOper#ns_objects}
  */
  readonly nsObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#nsec3_memory DataThunderDnssecOper#nsec3_memory}
  */
  readonly nsec3Memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#nsec3_objects DataThunderDnssecOper#nsec3_objects}
  */
  readonly nsec3Objects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#nsec3param_memory DataThunderDnssecOper#nsec3param_memory}
  */
  readonly nsec3ParamMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#nsec3param_objects DataThunderDnssecOper#nsec3param_objects}
  */
  readonly nsec3ParamObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#nsec_memory DataThunderDnssecOper#nsec_memory}
  */
  readonly nsecMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#nsec_objects DataThunderDnssecOper#nsec_objects}
  */
  readonly nsecObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#ptr_memory DataThunderDnssecOper#ptr_memory}
  */
  readonly ptrMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#ptr_objects DataThunderDnssecOper#ptr_objects}
  */
  readonly ptrObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#reference_memory DataThunderDnssecOper#reference_memory}
  */
  readonly referenceMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#reference_objects DataThunderDnssecOper#reference_objects}
  */
  readonly referenceObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#rrsig2_memory DataThunderDnssecOper#rrsig2_memory}
  */
  readonly rrsig2Memory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#rrsig2_objects DataThunderDnssecOper#rrsig2_objects}
  */
  readonly rrsig2Objects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#rrsig_memory DataThunderDnssecOper#rrsig_memory}
  */
  readonly rrsigMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#rrsig_objects DataThunderDnssecOper#rrsig_objects}
  */
  readonly rrsigObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#soa_memory DataThunderDnssecOper#soa_memory}
  */
  readonly soaMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#soa_objects DataThunderDnssecOper#soa_objects}
  */
  readonly soaObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#srv_memory DataThunderDnssecOper#srv_memory}
  */
  readonly srvMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#srv_objects DataThunderDnssecOper#srv_objects}
  */
  readonly srvObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#table_memory DataThunderDnssecOper#table_memory}
  */
  readonly tableMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#table_objects DataThunderDnssecOper#table_objects}
  */
  readonly tableObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#total_memory DataThunderDnssecOper#total_memory}
  */
  readonly totalMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#total_objects DataThunderDnssecOper#total_objects}
  */
  readonly totalObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#txt_memory DataThunderDnssecOper#txt_memory}
  */
  readonly txtMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#txt_objects DataThunderDnssecOper#txt_objects}
  */
  readonly txtObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#zone_memory DataThunderDnssecOper#zone_memory}
  */
  readonly zoneMemory?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#zone_objects DataThunderDnssecOper#zone_objects}
  */
  readonly zoneObjects?: number;
}

export function dataThunderDnssecOperOperToTerraform(struct?: DataThunderDnssecOperOperOutputReference | DataThunderDnssecOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a_memory: cdktf.numberToTerraform(struct!.aMemory),
    a_objects: cdktf.numberToTerraform(struct!.aObjects),
    aaaa_memory: cdktf.numberToTerraform(struct!.aaaaMemory),
    aaaa_objects: cdktf.numberToTerraform(struct!.aaaaObjects),
    array_memory: cdktf.numberToTerraform(struct!.arrayMemory),
    array_objects: cdktf.numberToTerraform(struct!.arrayObjects),
    cname_memory: cdktf.numberToTerraform(struct!.cnameMemory),
    cname_objects: cdktf.numberToTerraform(struct!.cnameObjects),
    dnskey_memory: cdktf.numberToTerraform(struct!.dnskeyMemory),
    dnskey_objects: cdktf.numberToTerraform(struct!.dnskeyObjects),
    domain_memory: cdktf.numberToTerraform(struct!.domainMemory),
    domain_objects: cdktf.numberToTerraform(struct!.domainObjects),
    ds_memory: cdktf.numberToTerraform(struct!.dsMemory),
    ds_objects: cdktf.numberToTerraform(struct!.dsObjects),
    mx_memory: cdktf.numberToTerraform(struct!.mxMemory),
    mx_objects: cdktf.numberToTerraform(struct!.mxObjects),
    ns_memory: cdktf.numberToTerraform(struct!.nsMemory),
    ns_objects: cdktf.numberToTerraform(struct!.nsObjects),
    nsec3_memory: cdktf.numberToTerraform(struct!.nsec3Memory),
    nsec3_objects: cdktf.numberToTerraform(struct!.nsec3Objects),
    nsec3param_memory: cdktf.numberToTerraform(struct!.nsec3ParamMemory),
    nsec3param_objects: cdktf.numberToTerraform(struct!.nsec3ParamObjects),
    nsec_memory: cdktf.numberToTerraform(struct!.nsecMemory),
    nsec_objects: cdktf.numberToTerraform(struct!.nsecObjects),
    ptr_memory: cdktf.numberToTerraform(struct!.ptrMemory),
    ptr_objects: cdktf.numberToTerraform(struct!.ptrObjects),
    reference_memory: cdktf.numberToTerraform(struct!.referenceMemory),
    reference_objects: cdktf.numberToTerraform(struct!.referenceObjects),
    rrsig2_memory: cdktf.numberToTerraform(struct!.rrsig2Memory),
    rrsig2_objects: cdktf.numberToTerraform(struct!.rrsig2Objects),
    rrsig_memory: cdktf.numberToTerraform(struct!.rrsigMemory),
    rrsig_objects: cdktf.numberToTerraform(struct!.rrsigObjects),
    soa_memory: cdktf.numberToTerraform(struct!.soaMemory),
    soa_objects: cdktf.numberToTerraform(struct!.soaObjects),
    srv_memory: cdktf.numberToTerraform(struct!.srvMemory),
    srv_objects: cdktf.numberToTerraform(struct!.srvObjects),
    table_memory: cdktf.numberToTerraform(struct!.tableMemory),
    table_objects: cdktf.numberToTerraform(struct!.tableObjects),
    total_memory: cdktf.numberToTerraform(struct!.totalMemory),
    total_objects: cdktf.numberToTerraform(struct!.totalObjects),
    txt_memory: cdktf.numberToTerraform(struct!.txtMemory),
    txt_objects: cdktf.numberToTerraform(struct!.txtObjects),
    zone_memory: cdktf.numberToTerraform(struct!.zoneMemory),
    zone_objects: cdktf.numberToTerraform(struct!.zoneObjects),
  }
}


export function dataThunderDnssecOperOperToHclTerraform(struct?: DataThunderDnssecOperOperOutputReference | DataThunderDnssecOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a_memory: {
      value: cdktf.numberToHclTerraform(struct!.aMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    a_objects: {
      value: cdktf.numberToHclTerraform(struct!.aObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aaaa_memory: {
      value: cdktf.numberToHclTerraform(struct!.aaaaMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aaaa_objects: {
      value: cdktf.numberToHclTerraform(struct!.aaaaObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    array_memory: {
      value: cdktf.numberToHclTerraform(struct!.arrayMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    array_objects: {
      value: cdktf.numberToHclTerraform(struct!.arrayObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cname_memory: {
      value: cdktf.numberToHclTerraform(struct!.cnameMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cname_objects: {
      value: cdktf.numberToHclTerraform(struct!.cnameObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnskey_memory: {
      value: cdktf.numberToHclTerraform(struct!.dnskeyMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dnskey_objects: {
      value: cdktf.numberToHclTerraform(struct!.dnskeyObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_memory: {
      value: cdktf.numberToHclTerraform(struct!.domainMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_objects: {
      value: cdktf.numberToHclTerraform(struct!.domainObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ds_memory: {
      value: cdktf.numberToHclTerraform(struct!.dsMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ds_objects: {
      value: cdktf.numberToHclTerraform(struct!.dsObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mx_memory: {
      value: cdktf.numberToHclTerraform(struct!.mxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mx_objects: {
      value: cdktf.numberToHclTerraform(struct!.mxObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ns_memory: {
      value: cdktf.numberToHclTerraform(struct!.nsMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ns_objects: {
      value: cdktf.numberToHclTerraform(struct!.nsObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec3_memory: {
      value: cdktf.numberToHclTerraform(struct!.nsec3Memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec3_objects: {
      value: cdktf.numberToHclTerraform(struct!.nsec3Objects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec3param_memory: {
      value: cdktf.numberToHclTerraform(struct!.nsec3ParamMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec3param_objects: {
      value: cdktf.numberToHclTerraform(struct!.nsec3ParamObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec_memory: {
      value: cdktf.numberToHclTerraform(struct!.nsecMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nsec_objects: {
      value: cdktf.numberToHclTerraform(struct!.nsecObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ptr_memory: {
      value: cdktf.numberToHclTerraform(struct!.ptrMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ptr_objects: {
      value: cdktf.numberToHclTerraform(struct!.ptrObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reference_memory: {
      value: cdktf.numberToHclTerraform(struct!.referenceMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reference_objects: {
      value: cdktf.numberToHclTerraform(struct!.referenceObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rrsig2_memory: {
      value: cdktf.numberToHclTerraform(struct!.rrsig2Memory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rrsig2_objects: {
      value: cdktf.numberToHclTerraform(struct!.rrsig2Objects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rrsig_memory: {
      value: cdktf.numberToHclTerraform(struct!.rrsigMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rrsig_objects: {
      value: cdktf.numberToHclTerraform(struct!.rrsigObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soa_memory: {
      value: cdktf.numberToHclTerraform(struct!.soaMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    soa_objects: {
      value: cdktf.numberToHclTerraform(struct!.soaObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srv_memory: {
      value: cdktf.numberToHclTerraform(struct!.srvMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    srv_objects: {
      value: cdktf.numberToHclTerraform(struct!.srvObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_memory: {
      value: cdktf.numberToHclTerraform(struct!.tableMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_objects: {
      value: cdktf.numberToHclTerraform(struct!.tableObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_memory: {
      value: cdktf.numberToHclTerraform(struct!.totalMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_objects: {
      value: cdktf.numberToHclTerraform(struct!.totalObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txt_memory: {
      value: cdktf.numberToHclTerraform(struct!.txtMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    txt_objects: {
      value: cdktf.numberToHclTerraform(struct!.txtObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_memory: {
      value: cdktf.numberToHclTerraform(struct!.zoneMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_objects: {
      value: cdktf.numberToHclTerraform(struct!.zoneObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDnssecOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDnssecOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.aMemory = this._aMemory;
    }
    if (this._aObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.aObjects = this._aObjects;
    }
    if (this._aaaaMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaaMemory = this._aaaaMemory;
    }
    if (this._aaaaObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.aaaaObjects = this._aaaaObjects;
    }
    if (this._arrayMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayMemory = this._arrayMemory;
    }
    if (this._arrayObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.arrayObjects = this._arrayObjects;
    }
    if (this._cnameMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameMemory = this._cnameMemory;
    }
    if (this._cnameObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.cnameObjects = this._cnameObjects;
    }
    if (this._dnskeyMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnskeyMemory = this._dnskeyMemory;
    }
    if (this._dnskeyObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnskeyObjects = this._dnskeyObjects;
    }
    if (this._domainMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMemory = this._domainMemory;
    }
    if (this._domainObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainObjects = this._domainObjects;
    }
    if (this._dsMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsMemory = this._dsMemory;
    }
    if (this._dsObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsObjects = this._dsObjects;
    }
    if (this._mxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxMemory = this._mxMemory;
    }
    if (this._mxObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.mxObjects = this._mxObjects;
    }
    if (this._nsMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsMemory = this._nsMemory;
    }
    if (this._nsObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsObjects = this._nsObjects;
    }
    if (this._nsec3Memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec3Memory = this._nsec3Memory;
    }
    if (this._nsec3Objects !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec3Objects = this._nsec3Objects;
    }
    if (this._nsec3ParamMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec3ParamMemory = this._nsec3ParamMemory;
    }
    if (this._nsec3ParamObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsec3ParamObjects = this._nsec3ParamObjects;
    }
    if (this._nsecMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsecMemory = this._nsecMemory;
    }
    if (this._nsecObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsecObjects = this._nsecObjects;
    }
    if (this._ptrMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptrMemory = this._ptrMemory;
    }
    if (this._ptrObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.ptrObjects = this._ptrObjects;
    }
    if (this._referenceMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceMemory = this._referenceMemory;
    }
    if (this._referenceObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceObjects = this._referenceObjects;
    }
    if (this._rrsig2Memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrsig2Memory = this._rrsig2Memory;
    }
    if (this._rrsig2Objects !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrsig2Objects = this._rrsig2Objects;
    }
    if (this._rrsigMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrsigMemory = this._rrsigMemory;
    }
    if (this._rrsigObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.rrsigObjects = this._rrsigObjects;
    }
    if (this._soaMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaMemory = this._soaMemory;
    }
    if (this._soaObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.soaObjects = this._soaObjects;
    }
    if (this._srvMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvMemory = this._srvMemory;
    }
    if (this._srvObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.srvObjects = this._srvObjects;
    }
    if (this._tableMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableMemory = this._tableMemory;
    }
    if (this._tableObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableObjects = this._tableObjects;
    }
    if (this._totalMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalMemory = this._totalMemory;
    }
    if (this._totalObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalObjects = this._totalObjects;
    }
    if (this._txtMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtMemory = this._txtMemory;
    }
    if (this._txtObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.txtObjects = this._txtObjects;
    }
    if (this._zoneMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneMemory = this._zoneMemory;
    }
    if (this._zoneObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneObjects = this._zoneObjects;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDnssecOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aMemory = undefined;
      this._aObjects = undefined;
      this._aaaaMemory = undefined;
      this._aaaaObjects = undefined;
      this._arrayMemory = undefined;
      this._arrayObjects = undefined;
      this._cnameMemory = undefined;
      this._cnameObjects = undefined;
      this._dnskeyMemory = undefined;
      this._dnskeyObjects = undefined;
      this._domainMemory = undefined;
      this._domainObjects = undefined;
      this._dsMemory = undefined;
      this._dsObjects = undefined;
      this._mxMemory = undefined;
      this._mxObjects = undefined;
      this._nsMemory = undefined;
      this._nsObjects = undefined;
      this._nsec3Memory = undefined;
      this._nsec3Objects = undefined;
      this._nsec3ParamMemory = undefined;
      this._nsec3ParamObjects = undefined;
      this._nsecMemory = undefined;
      this._nsecObjects = undefined;
      this._ptrMemory = undefined;
      this._ptrObjects = undefined;
      this._referenceMemory = undefined;
      this._referenceObjects = undefined;
      this._rrsig2Memory = undefined;
      this._rrsig2Objects = undefined;
      this._rrsigMemory = undefined;
      this._rrsigObjects = undefined;
      this._soaMemory = undefined;
      this._soaObjects = undefined;
      this._srvMemory = undefined;
      this._srvObjects = undefined;
      this._tableMemory = undefined;
      this._tableObjects = undefined;
      this._totalMemory = undefined;
      this._totalObjects = undefined;
      this._txtMemory = undefined;
      this._txtObjects = undefined;
      this._zoneMemory = undefined;
      this._zoneObjects = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aMemory = value.aMemory;
      this._aObjects = value.aObjects;
      this._aaaaMemory = value.aaaaMemory;
      this._aaaaObjects = value.aaaaObjects;
      this._arrayMemory = value.arrayMemory;
      this._arrayObjects = value.arrayObjects;
      this._cnameMemory = value.cnameMemory;
      this._cnameObjects = value.cnameObjects;
      this._dnskeyMemory = value.dnskeyMemory;
      this._dnskeyObjects = value.dnskeyObjects;
      this._domainMemory = value.domainMemory;
      this._domainObjects = value.domainObjects;
      this._dsMemory = value.dsMemory;
      this._dsObjects = value.dsObjects;
      this._mxMemory = value.mxMemory;
      this._mxObjects = value.mxObjects;
      this._nsMemory = value.nsMemory;
      this._nsObjects = value.nsObjects;
      this._nsec3Memory = value.nsec3Memory;
      this._nsec3Objects = value.nsec3Objects;
      this._nsec3ParamMemory = value.nsec3ParamMemory;
      this._nsec3ParamObjects = value.nsec3ParamObjects;
      this._nsecMemory = value.nsecMemory;
      this._nsecObjects = value.nsecObjects;
      this._ptrMemory = value.ptrMemory;
      this._ptrObjects = value.ptrObjects;
      this._referenceMemory = value.referenceMemory;
      this._referenceObjects = value.referenceObjects;
      this._rrsig2Memory = value.rrsig2Memory;
      this._rrsig2Objects = value.rrsig2Objects;
      this._rrsigMemory = value.rrsigMemory;
      this._rrsigObjects = value.rrsigObjects;
      this._soaMemory = value.soaMemory;
      this._soaObjects = value.soaObjects;
      this._srvMemory = value.srvMemory;
      this._srvObjects = value.srvObjects;
      this._tableMemory = value.tableMemory;
      this._tableObjects = value.tableObjects;
      this._totalMemory = value.totalMemory;
      this._totalObjects = value.totalObjects;
      this._txtMemory = value.txtMemory;
      this._txtObjects = value.txtObjects;
      this._zoneMemory = value.zoneMemory;
      this._zoneObjects = value.zoneObjects;
    }
  }

  // a_memory - computed: false, optional: true, required: false
  private _aMemory?: number; 
  public get aMemory() {
    return this.getNumberAttribute('a_memory');
  }
  public set aMemory(value: number) {
    this._aMemory = value;
  }
  public resetAMemory() {
    this._aMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aMemoryInput() {
    return this._aMemory;
  }

  // a_objects - computed: false, optional: true, required: false
  private _aObjects?: number; 
  public get aObjects() {
    return this.getNumberAttribute('a_objects');
  }
  public set aObjects(value: number) {
    this._aObjects = value;
  }
  public resetAObjects() {
    this._aObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aObjectsInput() {
    return this._aObjects;
  }

  // aaaa_memory - computed: false, optional: true, required: false
  private _aaaaMemory?: number; 
  public get aaaaMemory() {
    return this.getNumberAttribute('aaaa_memory');
  }
  public set aaaaMemory(value: number) {
    this._aaaaMemory = value;
  }
  public resetAaaaMemory() {
    this._aaaaMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaMemoryInput() {
    return this._aaaaMemory;
  }

  // aaaa_objects - computed: false, optional: true, required: false
  private _aaaaObjects?: number; 
  public get aaaaObjects() {
    return this.getNumberAttribute('aaaa_objects');
  }
  public set aaaaObjects(value: number) {
    this._aaaaObjects = value;
  }
  public resetAaaaObjects() {
    this._aaaaObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aaaaObjectsInput() {
    return this._aaaaObjects;
  }

  // array_memory - computed: false, optional: true, required: false
  private _arrayMemory?: number; 
  public get arrayMemory() {
    return this.getNumberAttribute('array_memory');
  }
  public set arrayMemory(value: number) {
    this._arrayMemory = value;
  }
  public resetArrayMemory() {
    this._arrayMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayMemoryInput() {
    return this._arrayMemory;
  }

  // array_objects - computed: false, optional: true, required: false
  private _arrayObjects?: number; 
  public get arrayObjects() {
    return this.getNumberAttribute('array_objects');
  }
  public set arrayObjects(value: number) {
    this._arrayObjects = value;
  }
  public resetArrayObjects() {
    this._arrayObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayObjectsInput() {
    return this._arrayObjects;
  }

  // cname_memory - computed: false, optional: true, required: false
  private _cnameMemory?: number; 
  public get cnameMemory() {
    return this.getNumberAttribute('cname_memory');
  }
  public set cnameMemory(value: number) {
    this._cnameMemory = value;
  }
  public resetCnameMemory() {
    this._cnameMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameMemoryInput() {
    return this._cnameMemory;
  }

  // cname_objects - computed: false, optional: true, required: false
  private _cnameObjects?: number; 
  public get cnameObjects() {
    return this.getNumberAttribute('cname_objects');
  }
  public set cnameObjects(value: number) {
    this._cnameObjects = value;
  }
  public resetCnameObjects() {
    this._cnameObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameObjectsInput() {
    return this._cnameObjects;
  }

  // dnskey_memory - computed: false, optional: true, required: false
  private _dnskeyMemory?: number; 
  public get dnskeyMemory() {
    return this.getNumberAttribute('dnskey_memory');
  }
  public set dnskeyMemory(value: number) {
    this._dnskeyMemory = value;
  }
  public resetDnskeyMemory() {
    this._dnskeyMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnskeyMemoryInput() {
    return this._dnskeyMemory;
  }

  // dnskey_objects - computed: false, optional: true, required: false
  private _dnskeyObjects?: number; 
  public get dnskeyObjects() {
    return this.getNumberAttribute('dnskey_objects');
  }
  public set dnskeyObjects(value: number) {
    this._dnskeyObjects = value;
  }
  public resetDnskeyObjects() {
    this._dnskeyObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnskeyObjectsInput() {
    return this._dnskeyObjects;
  }

  // domain_memory - computed: false, optional: true, required: false
  private _domainMemory?: number; 
  public get domainMemory() {
    return this.getNumberAttribute('domain_memory');
  }
  public set domainMemory(value: number) {
    this._domainMemory = value;
  }
  public resetDomainMemory() {
    this._domainMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMemoryInput() {
    return this._domainMemory;
  }

  // domain_objects - computed: false, optional: true, required: false
  private _domainObjects?: number; 
  public get domainObjects() {
    return this.getNumberAttribute('domain_objects');
  }
  public set domainObjects(value: number) {
    this._domainObjects = value;
  }
  public resetDomainObjects() {
    this._domainObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainObjectsInput() {
    return this._domainObjects;
  }

  // ds_memory - computed: false, optional: true, required: false
  private _dsMemory?: number; 
  public get dsMemory() {
    return this.getNumberAttribute('ds_memory');
  }
  public set dsMemory(value: number) {
    this._dsMemory = value;
  }
  public resetDsMemory() {
    this._dsMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsMemoryInput() {
    return this._dsMemory;
  }

  // ds_objects - computed: false, optional: true, required: false
  private _dsObjects?: number; 
  public get dsObjects() {
    return this.getNumberAttribute('ds_objects');
  }
  public set dsObjects(value: number) {
    this._dsObjects = value;
  }
  public resetDsObjects() {
    this._dsObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsObjectsInput() {
    return this._dsObjects;
  }

  // mx_memory - computed: false, optional: true, required: false
  private _mxMemory?: number; 
  public get mxMemory() {
    return this.getNumberAttribute('mx_memory');
  }
  public set mxMemory(value: number) {
    this._mxMemory = value;
  }
  public resetMxMemory() {
    this._mxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxMemoryInput() {
    return this._mxMemory;
  }

  // mx_objects - computed: false, optional: true, required: false
  private _mxObjects?: number; 
  public get mxObjects() {
    return this.getNumberAttribute('mx_objects');
  }
  public set mxObjects(value: number) {
    this._mxObjects = value;
  }
  public resetMxObjects() {
    this._mxObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mxObjectsInput() {
    return this._mxObjects;
  }

  // ns_memory - computed: false, optional: true, required: false
  private _nsMemory?: number; 
  public get nsMemory() {
    return this.getNumberAttribute('ns_memory');
  }
  public set nsMemory(value: number) {
    this._nsMemory = value;
  }
  public resetNsMemory() {
    this._nsMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsMemoryInput() {
    return this._nsMemory;
  }

  // ns_objects - computed: false, optional: true, required: false
  private _nsObjects?: number; 
  public get nsObjects() {
    return this.getNumberAttribute('ns_objects');
  }
  public set nsObjects(value: number) {
    this._nsObjects = value;
  }
  public resetNsObjects() {
    this._nsObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsObjectsInput() {
    return this._nsObjects;
  }

  // nsec3_memory - computed: false, optional: true, required: false
  private _nsec3Memory?: number; 
  public get nsec3Memory() {
    return this.getNumberAttribute('nsec3_memory');
  }
  public set nsec3Memory(value: number) {
    this._nsec3Memory = value;
  }
  public resetNsec3Memory() {
    this._nsec3Memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsec3MemoryInput() {
    return this._nsec3Memory;
  }

  // nsec3_objects - computed: false, optional: true, required: false
  private _nsec3Objects?: number; 
  public get nsec3Objects() {
    return this.getNumberAttribute('nsec3_objects');
  }
  public set nsec3Objects(value: number) {
    this._nsec3Objects = value;
  }
  public resetNsec3Objects() {
    this._nsec3Objects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsec3ObjectsInput() {
    return this._nsec3Objects;
  }

  // nsec3param_memory - computed: false, optional: true, required: false
  private _nsec3ParamMemory?: number; 
  public get nsec3ParamMemory() {
    return this.getNumberAttribute('nsec3param_memory');
  }
  public set nsec3ParamMemory(value: number) {
    this._nsec3ParamMemory = value;
  }
  public resetNsec3ParamMemory() {
    this._nsec3ParamMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsec3ParamMemoryInput() {
    return this._nsec3ParamMemory;
  }

  // nsec3param_objects - computed: false, optional: true, required: false
  private _nsec3ParamObjects?: number; 
  public get nsec3ParamObjects() {
    return this.getNumberAttribute('nsec3param_objects');
  }
  public set nsec3ParamObjects(value: number) {
    this._nsec3ParamObjects = value;
  }
  public resetNsec3ParamObjects() {
    this._nsec3ParamObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsec3ParamObjectsInput() {
    return this._nsec3ParamObjects;
  }

  // nsec_memory - computed: false, optional: true, required: false
  private _nsecMemory?: number; 
  public get nsecMemory() {
    return this.getNumberAttribute('nsec_memory');
  }
  public set nsecMemory(value: number) {
    this._nsecMemory = value;
  }
  public resetNsecMemory() {
    this._nsecMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsecMemoryInput() {
    return this._nsecMemory;
  }

  // nsec_objects - computed: false, optional: true, required: false
  private _nsecObjects?: number; 
  public get nsecObjects() {
    return this.getNumberAttribute('nsec_objects');
  }
  public set nsecObjects(value: number) {
    this._nsecObjects = value;
  }
  public resetNsecObjects() {
    this._nsecObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsecObjectsInput() {
    return this._nsecObjects;
  }

  // ptr_memory - computed: false, optional: true, required: false
  private _ptrMemory?: number; 
  public get ptrMemory() {
    return this.getNumberAttribute('ptr_memory');
  }
  public set ptrMemory(value: number) {
    this._ptrMemory = value;
  }
  public resetPtrMemory() {
    this._ptrMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrMemoryInput() {
    return this._ptrMemory;
  }

  // ptr_objects - computed: false, optional: true, required: false
  private _ptrObjects?: number; 
  public get ptrObjects() {
    return this.getNumberAttribute('ptr_objects');
  }
  public set ptrObjects(value: number) {
    this._ptrObjects = value;
  }
  public resetPtrObjects() {
    this._ptrObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ptrObjectsInput() {
    return this._ptrObjects;
  }

  // reference_memory - computed: false, optional: true, required: false
  private _referenceMemory?: number; 
  public get referenceMemory() {
    return this.getNumberAttribute('reference_memory');
  }
  public set referenceMemory(value: number) {
    this._referenceMemory = value;
  }
  public resetReferenceMemory() {
    this._referenceMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceMemoryInput() {
    return this._referenceMemory;
  }

  // reference_objects - computed: false, optional: true, required: false
  private _referenceObjects?: number; 
  public get referenceObjects() {
    return this.getNumberAttribute('reference_objects');
  }
  public set referenceObjects(value: number) {
    this._referenceObjects = value;
  }
  public resetReferenceObjects() {
    this._referenceObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceObjectsInput() {
    return this._referenceObjects;
  }

  // rrsig2_memory - computed: false, optional: true, required: false
  private _rrsig2Memory?: number; 
  public get rrsig2Memory() {
    return this.getNumberAttribute('rrsig2_memory');
  }
  public set rrsig2Memory(value: number) {
    this._rrsig2Memory = value;
  }
  public resetRrsig2Memory() {
    this._rrsig2Memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrsig2MemoryInput() {
    return this._rrsig2Memory;
  }

  // rrsig2_objects - computed: false, optional: true, required: false
  private _rrsig2Objects?: number; 
  public get rrsig2Objects() {
    return this.getNumberAttribute('rrsig2_objects');
  }
  public set rrsig2Objects(value: number) {
    this._rrsig2Objects = value;
  }
  public resetRrsig2Objects() {
    this._rrsig2Objects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrsig2ObjectsInput() {
    return this._rrsig2Objects;
  }

  // rrsig_memory - computed: false, optional: true, required: false
  private _rrsigMemory?: number; 
  public get rrsigMemory() {
    return this.getNumberAttribute('rrsig_memory');
  }
  public set rrsigMemory(value: number) {
    this._rrsigMemory = value;
  }
  public resetRrsigMemory() {
    this._rrsigMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrsigMemoryInput() {
    return this._rrsigMemory;
  }

  // rrsig_objects - computed: false, optional: true, required: false
  private _rrsigObjects?: number; 
  public get rrsigObjects() {
    return this.getNumberAttribute('rrsig_objects');
  }
  public set rrsigObjects(value: number) {
    this._rrsigObjects = value;
  }
  public resetRrsigObjects() {
    this._rrsigObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rrsigObjectsInput() {
    return this._rrsigObjects;
  }

  // soa_memory - computed: false, optional: true, required: false
  private _soaMemory?: number; 
  public get soaMemory() {
    return this.getNumberAttribute('soa_memory');
  }
  public set soaMemory(value: number) {
    this._soaMemory = value;
  }
  public resetSoaMemory() {
    this._soaMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaMemoryInput() {
    return this._soaMemory;
  }

  // soa_objects - computed: false, optional: true, required: false
  private _soaObjects?: number; 
  public get soaObjects() {
    return this.getNumberAttribute('soa_objects');
  }
  public set soaObjects(value: number) {
    this._soaObjects = value;
  }
  public resetSoaObjects() {
    this._soaObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soaObjectsInput() {
    return this._soaObjects;
  }

  // srv_memory - computed: false, optional: true, required: false
  private _srvMemory?: number; 
  public get srvMemory() {
    return this.getNumberAttribute('srv_memory');
  }
  public set srvMemory(value: number) {
    this._srvMemory = value;
  }
  public resetSrvMemory() {
    this._srvMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvMemoryInput() {
    return this._srvMemory;
  }

  // srv_objects - computed: false, optional: true, required: false
  private _srvObjects?: number; 
  public get srvObjects() {
    return this.getNumberAttribute('srv_objects');
  }
  public set srvObjects(value: number) {
    this._srvObjects = value;
  }
  public resetSrvObjects() {
    this._srvObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srvObjectsInput() {
    return this._srvObjects;
  }

  // table_memory - computed: false, optional: true, required: false
  private _tableMemory?: number; 
  public get tableMemory() {
    return this.getNumberAttribute('table_memory');
  }
  public set tableMemory(value: number) {
    this._tableMemory = value;
  }
  public resetTableMemory() {
    this._tableMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMemoryInput() {
    return this._tableMemory;
  }

  // table_objects - computed: false, optional: true, required: false
  private _tableObjects?: number; 
  public get tableObjects() {
    return this.getNumberAttribute('table_objects');
  }
  public set tableObjects(value: number) {
    this._tableObjects = value;
  }
  public resetTableObjects() {
    this._tableObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableObjectsInput() {
    return this._tableObjects;
  }

  // total_memory - computed: false, optional: true, required: false
  private _totalMemory?: number; 
  public get totalMemory() {
    return this.getNumberAttribute('total_memory');
  }
  public set totalMemory(value: number) {
    this._totalMemory = value;
  }
  public resetTotalMemory() {
    this._totalMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalMemoryInput() {
    return this._totalMemory;
  }

  // total_objects - computed: false, optional: true, required: false
  private _totalObjects?: number; 
  public get totalObjects() {
    return this.getNumberAttribute('total_objects');
  }
  public set totalObjects(value: number) {
    this._totalObjects = value;
  }
  public resetTotalObjects() {
    this._totalObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalObjectsInput() {
    return this._totalObjects;
  }

  // txt_memory - computed: false, optional: true, required: false
  private _txtMemory?: number; 
  public get txtMemory() {
    return this.getNumberAttribute('txt_memory');
  }
  public set txtMemory(value: number) {
    this._txtMemory = value;
  }
  public resetTxtMemory() {
    this._txtMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtMemoryInput() {
    return this._txtMemory;
  }

  // txt_objects - computed: false, optional: true, required: false
  private _txtObjects?: number; 
  public get txtObjects() {
    return this.getNumberAttribute('txt_objects');
  }
  public set txtObjects(value: number) {
    this._txtObjects = value;
  }
  public resetTxtObjects() {
    this._txtObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txtObjectsInput() {
    return this._txtObjects;
  }

  // zone_memory - computed: false, optional: true, required: false
  private _zoneMemory?: number; 
  public get zoneMemory() {
    return this.getNumberAttribute('zone_memory');
  }
  public set zoneMemory(value: number) {
    this._zoneMemory = value;
  }
  public resetZoneMemory() {
    this._zoneMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMemoryInput() {
    return this._zoneMemory;
  }

  // zone_objects - computed: false, optional: true, required: false
  private _zoneObjects?: number; 
  public get zoneObjects() {
    return this.getNumberAttribute('zone_objects');
  }
  public set zoneObjects(value: number) {
    this._zoneObjects = value;
  }
  public resetZoneObjects() {
    this._zoneObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneObjectsInput() {
    return this._zoneObjects;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper thunder_dnssec_oper}
*/
export class DataThunderDnssecOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_dnssec_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDnssecOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDnssecOper to import
  * @param importFromId The id of the existing DataThunderDnssecOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDnssecOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_dnssec_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/dnssec_oper thunder_dnssec_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDnssecOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDnssecOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_dnssec_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderDnssecOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDnssecOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderDnssecOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderDnssecOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDnssecOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
