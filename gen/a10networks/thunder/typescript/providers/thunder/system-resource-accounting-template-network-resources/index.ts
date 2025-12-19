// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemResourceAccountingTemplateNetworkResourcesAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#id SystemResourceAccountingTemplateNetworkResourcesA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#template_name SystemResourceAccountingTemplateNetworkResourcesA#template_name}
  */
  readonly templateName: string;
  /**
  * Enter the threshold as a percentage (Threshold in percentage(default is 100%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#threshold SystemResourceAccountingTemplateNetworkResourcesA#threshold}
  */
  readonly threshold?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#uuid SystemResourceAccountingTemplateNetworkResourcesA#uuid}
  */
  readonly uuid?: string;
  /**
  * ipv4_acl_line_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#ipv4_acl_line_cfg SystemResourceAccountingTemplateNetworkResourcesA#ipv4_acl_line_cfg}
  */
  readonly ipv4AclLineCfg?: SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgA;
  /**
  * ipv6_acl_line_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#ipv6_acl_line_cfg SystemResourceAccountingTemplateNetworkResourcesA#ipv6_acl_line_cfg}
  */
  readonly ipv6AclLineCfg?: SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgA;
  /**
  * object_group_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#object_group_cfg SystemResourceAccountingTemplateNetworkResourcesA#object_group_cfg}
  */
  readonly objectGroupCfg?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgA;
  /**
  * object_group_clause_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#object_group_clause_cfg SystemResourceAccountingTemplateNetworkResourcesA#object_group_clause_cfg}
  */
  readonly objectGroupClauseCfg?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgA;
  /**
  * static_arp_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_arp_cfg SystemResourceAccountingTemplateNetworkResourcesA#static_arp_cfg}
  */
  readonly staticArpCfg?: SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgA;
  /**
  * static_ipv4_route_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_ipv4_route_cfg SystemResourceAccountingTemplateNetworkResourcesA#static_ipv4_route_cfg}
  */
  readonly staticIpv4RouteCfg?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgA;
  /**
  * static_ipv6_route_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_ipv6_route_cfg SystemResourceAccountingTemplateNetworkResourcesA#static_ipv6_route_cfg}
  */
  readonly staticIpv6RouteCfg?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgA;
  /**
  * static_mac_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_mac_cfg SystemResourceAccountingTemplateNetworkResourcesA#static_mac_cfg}
  */
  readonly staticMacCfg?: SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgA;
  /**
  * static_neighbor_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_neighbor_cfg SystemResourceAccountingTemplateNetworkResourcesA#static_neighbor_cfg}
  */
  readonly staticNeighborCfg?: SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgA;
}
export interface SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgA {
  /**
  * Enter the number of ACL lines allowed (IPV4 ACL lines (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#ipv4_acl_line_max SystemResourceAccountingTemplateNetworkResourcesA#ipv4_acl_line_max}
  */
  readonly ipv4AclLineMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#ipv4_acl_line_min_guarantee SystemResourceAccountingTemplateNetworkResourcesA#ipv4_acl_line_min_guarantee}
  */
  readonly ipv4AclLineMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgAToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_acl_line_max: cdktf.numberToTerraform(struct!.ipv4AclLineMax),
    ipv4_acl_line_min_guarantee: cdktf.numberToTerraform(struct!.ipv4AclLineMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_acl_line_max: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AclLineMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_acl_line_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.ipv4AclLineMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4AclLineMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AclLineMax = this._ipv4AclLineMax;
    }
    if (this._ipv4AclLineMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AclLineMinGuarantee = this._ipv4AclLineMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv4AclLineMax = undefined;
      this._ipv4AclLineMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv4AclLineMax = value.ipv4AclLineMax;
      this._ipv4AclLineMinGuarantee = value.ipv4AclLineMinGuarantee;
    }
  }

  // ipv4_acl_line_max - computed: false, optional: true, required: false
  private _ipv4AclLineMax?: number; 
  public get ipv4AclLineMax() {
    return this.getNumberAttribute('ipv4_acl_line_max');
  }
  public set ipv4AclLineMax(value: number) {
    this._ipv4AclLineMax = value;
  }
  public resetIpv4AclLineMax() {
    this._ipv4AclLineMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclLineMaxInput() {
    return this._ipv4AclLineMax;
  }

  // ipv4_acl_line_min_guarantee - computed: false, optional: true, required: false
  private _ipv4AclLineMinGuarantee?: number; 
  public get ipv4AclLineMinGuarantee() {
    return this.getNumberAttribute('ipv4_acl_line_min_guarantee');
  }
  public set ipv4AclLineMinGuarantee(value: number) {
    this._ipv4AclLineMinGuarantee = value;
  }
  public resetIpv4AclLineMinGuarantee() {
    this._ipv4AclLineMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclLineMinGuaranteeInput() {
    return this._ipv4AclLineMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgA {
  /**
  * Enter the number of ACL lines allowed (IPV6 ACL lines (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#ipv6_acl_line_max SystemResourceAccountingTemplateNetworkResourcesA#ipv6_acl_line_max}
  */
  readonly ipv6AclLineMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#ipv6_acl_line_min_guarantee SystemResourceAccountingTemplateNetworkResourcesA#ipv6_acl_line_min_guarantee}
  */
  readonly ipv6AclLineMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgAToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_acl_line_max: cdktf.numberToTerraform(struct!.ipv6AclLineMax),
    ipv6_acl_line_min_guarantee: cdktf.numberToTerraform(struct!.ipv6AclLineMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_acl_line_max: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AclLineMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_acl_line_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.ipv6AclLineMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6AclLineMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AclLineMax = this._ipv6AclLineMax;
    }
    if (this._ipv6AclLineMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AclLineMinGuarantee = this._ipv6AclLineMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6AclLineMax = undefined;
      this._ipv6AclLineMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6AclLineMax = value.ipv6AclLineMax;
      this._ipv6AclLineMinGuarantee = value.ipv6AclLineMinGuarantee;
    }
  }

  // ipv6_acl_line_max - computed: false, optional: true, required: false
  private _ipv6AclLineMax?: number; 
  public get ipv6AclLineMax() {
    return this.getNumberAttribute('ipv6_acl_line_max');
  }
  public set ipv6AclLineMax(value: number) {
    this._ipv6AclLineMax = value;
  }
  public resetIpv6AclLineMax() {
    this._ipv6AclLineMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclLineMaxInput() {
    return this._ipv6AclLineMax;
  }

  // ipv6_acl_line_min_guarantee - computed: false, optional: true, required: false
  private _ipv6AclLineMinGuarantee?: number; 
  public get ipv6AclLineMinGuarantee() {
    return this.getNumberAttribute('ipv6_acl_line_min_guarantee');
  }
  public set ipv6AclLineMinGuarantee(value: number) {
    this._ipv6AclLineMinGuarantee = value;
  }
  public resetIpv6AclLineMinGuarantee() {
    this._ipv6AclLineMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclLineMinGuaranteeInput() {
    return this._ipv6AclLineMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgA {
  /**
  * Enter the number of object groups allowed (Object group (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#object_group_max SystemResourceAccountingTemplateNetworkResourcesA#object_group_max}
  */
  readonly objectGroupMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#object_group_min_guarantee SystemResourceAccountingTemplateNetworkResourcesA#object_group_min_guarantee}
  */
  readonly objectGroupMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesObjectGroupCfgAToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_group_max: cdktf.numberToTerraform(struct!.objectGroupMax),
    object_group_min_guarantee: cdktf.numberToTerraform(struct!.objectGroupMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesObjectGroupCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_group_max: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_group_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectGroupMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupMax = this._objectGroupMax;
    }
    if (this._objectGroupMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupMinGuarantee = this._objectGroupMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectGroupMax = undefined;
      this._objectGroupMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectGroupMax = value.objectGroupMax;
      this._objectGroupMinGuarantee = value.objectGroupMinGuarantee;
    }
  }

  // object_group_max - computed: false, optional: true, required: false
  private _objectGroupMax?: number; 
  public get objectGroupMax() {
    return this.getNumberAttribute('object_group_max');
  }
  public set objectGroupMax(value: number) {
    this._objectGroupMax = value;
  }
  public resetObjectGroupMax() {
    this._objectGroupMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupMaxInput() {
    return this._objectGroupMax;
  }

  // object_group_min_guarantee - computed: false, optional: true, required: false
  private _objectGroupMinGuarantee?: number; 
  public get objectGroupMinGuarantee() {
    return this.getNumberAttribute('object_group_min_guarantee');
  }
  public set objectGroupMinGuarantee(value: number) {
    this._objectGroupMinGuarantee = value;
  }
  public resetObjectGroupMinGuarantee() {
    this._objectGroupMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupMinGuaranteeInput() {
    return this._objectGroupMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgA {
  /**
  * Enter the number of object group clauses allowed (Object group clauses (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#object_group_clause_max SystemResourceAccountingTemplateNetworkResourcesA#object_group_clause_max}
  */
  readonly objectGroupClauseMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#object_group_clause_min_guarantee SystemResourceAccountingTemplateNetworkResourcesA#object_group_clause_min_guarantee}
  */
  readonly objectGroupClauseMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgAToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_group_clause_max: cdktf.numberToTerraform(struct!.objectGroupClauseMax),
    object_group_clause_min_guarantee: cdktf.numberToTerraform(struct!.objectGroupClauseMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    object_group_clause_max: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupClauseMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_group_clause_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.objectGroupClauseMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectGroupClauseMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupClauseMax = this._objectGroupClauseMax;
    }
    if (this._objectGroupClauseMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectGroupClauseMinGuarantee = this._objectGroupClauseMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectGroupClauseMax = undefined;
      this._objectGroupClauseMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectGroupClauseMax = value.objectGroupClauseMax;
      this._objectGroupClauseMinGuarantee = value.objectGroupClauseMinGuarantee;
    }
  }

  // object_group_clause_max - computed: false, optional: true, required: false
  private _objectGroupClauseMax?: number; 
  public get objectGroupClauseMax() {
    return this.getNumberAttribute('object_group_clause_max');
  }
  public set objectGroupClauseMax(value: number) {
    this._objectGroupClauseMax = value;
  }
  public resetObjectGroupClauseMax() {
    this._objectGroupClauseMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupClauseMaxInput() {
    return this._objectGroupClauseMax;
  }

  // object_group_clause_min_guarantee - computed: false, optional: true, required: false
  private _objectGroupClauseMinGuarantee?: number; 
  public get objectGroupClauseMinGuarantee() {
    return this.getNumberAttribute('object_group_clause_min_guarantee');
  }
  public set objectGroupClauseMinGuarantee(value: number) {
    this._objectGroupClauseMinGuarantee = value;
  }
  public resetObjectGroupClauseMinGuarantee() {
    this._objectGroupClauseMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupClauseMinGuaranteeInput() {
    return this._objectGroupClauseMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgA {
  /**
  * Enter the number of static arp entries allowed (Static arp (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_arp_max SystemResourceAccountingTemplateNetworkResourcesA#static_arp_max}
  */
  readonly staticArpMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_arp_min_guarantee SystemResourceAccountingTemplateNetworkResourcesA#static_arp_min_guarantee}
  */
  readonly staticArpMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesStaticArpCfgAToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_arp_max: cdktf.numberToTerraform(struct!.staticArpMax),
    static_arp_min_guarantee: cdktf.numberToTerraform(struct!.staticArpMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesStaticArpCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_arp_max: {
      value: cdktf.numberToHclTerraform(struct!.staticArpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_arp_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticArpMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticArpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticArpMax = this._staticArpMax;
    }
    if (this._staticArpMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticArpMinGuarantee = this._staticArpMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticArpMax = undefined;
      this._staticArpMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticArpMax = value.staticArpMax;
      this._staticArpMinGuarantee = value.staticArpMinGuarantee;
    }
  }

  // static_arp_max - computed: false, optional: true, required: false
  private _staticArpMax?: number; 
  public get staticArpMax() {
    return this.getNumberAttribute('static_arp_max');
  }
  public set staticArpMax(value: number) {
    this._staticArpMax = value;
  }
  public resetStaticArpMax() {
    this._staticArpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpMaxInput() {
    return this._staticArpMax;
  }

  // static_arp_min_guarantee - computed: false, optional: true, required: false
  private _staticArpMinGuarantee?: number; 
  public get staticArpMinGuarantee() {
    return this.getNumberAttribute('static_arp_min_guarantee');
  }
  public set staticArpMinGuarantee(value: number) {
    this._staticArpMinGuarantee = value;
  }
  public resetStaticArpMinGuarantee() {
    this._staticArpMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpMinGuaranteeInput() {
    return this._staticArpMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgA {
  /**
  * Enter the number of static ipv4 routes allowed (Static ipv4 routes (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_ipv4_route_max SystemResourceAccountingTemplateNetworkResourcesA#static_ipv4_route_max}
  */
  readonly staticIpv4RouteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_ipv4_route_min_guarantee SystemResourceAccountingTemplateNetworkResourcesA#static_ipv4_route_min_guarantee}
  */
  readonly staticIpv4RouteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgAToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_ipv4_route_max: cdktf.numberToTerraform(struct!.staticIpv4RouteMax),
    static_ipv4_route_min_guarantee: cdktf.numberToTerraform(struct!.staticIpv4RouteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_ipv4_route_max: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv4RouteMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ipv4_route_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv4RouteMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticIpv4RouteMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4RouteMax = this._staticIpv4RouteMax;
    }
    if (this._staticIpv4RouteMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv4RouteMinGuarantee = this._staticIpv4RouteMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticIpv4RouteMax = undefined;
      this._staticIpv4RouteMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticIpv4RouteMax = value.staticIpv4RouteMax;
      this._staticIpv4RouteMinGuarantee = value.staticIpv4RouteMinGuarantee;
    }
  }

  // static_ipv4_route_max - computed: false, optional: true, required: false
  private _staticIpv4RouteMax?: number; 
  public get staticIpv4RouteMax() {
    return this.getNumberAttribute('static_ipv4_route_max');
  }
  public set staticIpv4RouteMax(value: number) {
    this._staticIpv4RouteMax = value;
  }
  public resetStaticIpv4RouteMax() {
    this._staticIpv4RouteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4RouteMaxInput() {
    return this._staticIpv4RouteMax;
  }

  // static_ipv4_route_min_guarantee - computed: false, optional: true, required: false
  private _staticIpv4RouteMinGuarantee?: number; 
  public get staticIpv4RouteMinGuarantee() {
    return this.getNumberAttribute('static_ipv4_route_min_guarantee');
  }
  public set staticIpv4RouteMinGuarantee(value: number) {
    this._staticIpv4RouteMinGuarantee = value;
  }
  public resetStaticIpv4RouteMinGuarantee() {
    this._staticIpv4RouteMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4RouteMinGuaranteeInput() {
    return this._staticIpv4RouteMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgA {
  /**
  * Enter the number of static ipv6 routes allowed (Static ipv6 routes (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_ipv6_route_max SystemResourceAccountingTemplateNetworkResourcesA#static_ipv6_route_max}
  */
  readonly staticIpv6RouteMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_ipv6_route_min_guarantee SystemResourceAccountingTemplateNetworkResourcesA#static_ipv6_route_min_guarantee}
  */
  readonly staticIpv6RouteMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgAToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_ipv6_route_max: cdktf.numberToTerraform(struct!.staticIpv6RouteMax),
    static_ipv6_route_min_guarantee: cdktf.numberToTerraform(struct!.staticIpv6RouteMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_ipv6_route_max: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv6RouteMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ipv6_route_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticIpv6RouteMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticIpv6RouteMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6RouteMax = this._staticIpv6RouteMax;
    }
    if (this._staticIpv6RouteMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIpv6RouteMinGuarantee = this._staticIpv6RouteMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticIpv6RouteMax = undefined;
      this._staticIpv6RouteMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticIpv6RouteMax = value.staticIpv6RouteMax;
      this._staticIpv6RouteMinGuarantee = value.staticIpv6RouteMinGuarantee;
    }
  }

  // static_ipv6_route_max - computed: false, optional: true, required: false
  private _staticIpv6RouteMax?: number; 
  public get staticIpv6RouteMax() {
    return this.getNumberAttribute('static_ipv6_route_max');
  }
  public set staticIpv6RouteMax(value: number) {
    this._staticIpv6RouteMax = value;
  }
  public resetStaticIpv6RouteMax() {
    this._staticIpv6RouteMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6RouteMaxInput() {
    return this._staticIpv6RouteMax;
  }

  // static_ipv6_route_min_guarantee - computed: false, optional: true, required: false
  private _staticIpv6RouteMinGuarantee?: number; 
  public get staticIpv6RouteMinGuarantee() {
    return this.getNumberAttribute('static_ipv6_route_min_guarantee');
  }
  public set staticIpv6RouteMinGuarantee(value: number) {
    this._staticIpv6RouteMinGuarantee = value;
  }
  public resetStaticIpv6RouteMinGuarantee() {
    this._staticIpv6RouteMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6RouteMinGuaranteeInput() {
    return this._staticIpv6RouteMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgA {
  /**
  * Enter the number of static MAC entries allowed (Static MACs (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_mac_max SystemResourceAccountingTemplateNetworkResourcesA#static_mac_max}
  */
  readonly staticMacMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_mac_min_guarantee SystemResourceAccountingTemplateNetworkResourcesA#static_mac_min_guarantee}
  */
  readonly staticMacMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesStaticMacCfgAToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_mac_max: cdktf.numberToTerraform(struct!.staticMacMax),
    static_mac_min_guarantee: cdktf.numberToTerraform(struct!.staticMacMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesStaticMacCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_mac_max: {
      value: cdktf.numberToHclTerraform(struct!.staticMacMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_mac_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticMacMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticMacMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticMacMax = this._staticMacMax;
    }
    if (this._staticMacMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticMacMinGuarantee = this._staticMacMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticMacMax = undefined;
      this._staticMacMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticMacMax = value.staticMacMax;
      this._staticMacMinGuarantee = value.staticMacMinGuarantee;
    }
  }

  // static_mac_max - computed: false, optional: true, required: false
  private _staticMacMax?: number; 
  public get staticMacMax() {
    return this.getNumberAttribute('static_mac_max');
  }
  public set staticMacMax(value: number) {
    this._staticMacMax = value;
  }
  public resetStaticMacMax() {
    this._staticMacMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacMaxInput() {
    return this._staticMacMax;
  }

  // static_mac_min_guarantee - computed: false, optional: true, required: false
  private _staticMacMinGuarantee?: number; 
  public get staticMacMinGuarantee() {
    return this.getNumberAttribute('static_mac_min_guarantee');
  }
  public set staticMacMinGuarantee(value: number) {
    this._staticMacMinGuarantee = value;
  }
  public resetStaticMacMinGuarantee() {
    this._staticMacMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacMinGuaranteeInput() {
    return this._staticMacMinGuarantee;
  }
}
export interface SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgA {
  /**
  * Enter the number of static neighbor entries allowed (Static neighbors (default is max-value))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_neighbor_max SystemResourceAccountingTemplateNetworkResourcesA#static_neighbor_max}
  */
  readonly staticNeighborMax?: number;
  /**
  * Minimum guaranteed value ( Minimum guaranteed value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#static_neighbor_min_guarantee SystemResourceAccountingTemplateNetworkResourcesA#static_neighbor_min_guarantee}
  */
  readonly staticNeighborMinGuarantee?: number;
}

export function systemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgAToTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_neighbor_max: cdktf.numberToTerraform(struct!.staticNeighborMax),
    static_neighbor_min_guarantee: cdktf.numberToTerraform(struct!.staticNeighborMinGuarantee),
  }
}


export function systemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgAToHclTerraform(struct?: SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgAOutputReference | SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_neighbor_max: {
      value: cdktf.numberToHclTerraform(struct!.staticNeighborMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_neighbor_min_guarantee: {
      value: cdktf.numberToHclTerraform(struct!.staticNeighborMinGuarantee),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticNeighborMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNeighborMax = this._staticNeighborMax;
    }
    if (this._staticNeighborMinGuarantee !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNeighborMinGuarantee = this._staticNeighborMinGuarantee;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticNeighborMax = undefined;
      this._staticNeighborMinGuarantee = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticNeighborMax = value.staticNeighborMax;
      this._staticNeighborMinGuarantee = value.staticNeighborMinGuarantee;
    }
  }

  // static_neighbor_max - computed: false, optional: true, required: false
  private _staticNeighborMax?: number; 
  public get staticNeighborMax() {
    return this.getNumberAttribute('static_neighbor_max');
  }
  public set staticNeighborMax(value: number) {
    this._staticNeighborMax = value;
  }
  public resetStaticNeighborMax() {
    this._staticNeighborMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNeighborMaxInput() {
    return this._staticNeighborMax;
  }

  // static_neighbor_min_guarantee - computed: false, optional: true, required: false
  private _staticNeighborMinGuarantee?: number; 
  public get staticNeighborMinGuarantee() {
    return this.getNumberAttribute('static_neighbor_min_guarantee');
  }
  public set staticNeighborMinGuarantee(value: number) {
    this._staticNeighborMinGuarantee = value;
  }
  public resetStaticNeighborMinGuarantee() {
    this._staticNeighborMinGuarantee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNeighborMinGuaranteeInput() {
    return this._staticNeighborMinGuarantee;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources thunder_system_resource_accounting_template_network_resources}
*/
export class SystemResourceAccountingTemplateNetworkResourcesA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_resource_accounting_template_network_resources";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemResourceAccountingTemplateNetworkResourcesA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemResourceAccountingTemplateNetworkResourcesA to import
  * @param importFromId The id of the existing SystemResourceAccountingTemplateNetworkResourcesA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemResourceAccountingTemplateNetworkResourcesA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_resource_accounting_template_network_resources", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_resource_accounting_template_network_resources thunder_system_resource_accounting_template_network_resources} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemResourceAccountingTemplateNetworkResourcesAConfig
  */
  public constructor(scope: Construct, id: string, config: SystemResourceAccountingTemplateNetworkResourcesAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_resource_accounting_template_network_resources',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._templateName = config.templateName;
    this._threshold = config.threshold;
    this._uuid = config.uuid;
    this._ipv4AclLineCfg.internalValue = config.ipv4AclLineCfg;
    this._ipv6AclLineCfg.internalValue = config.ipv6AclLineCfg;
    this._objectGroupCfg.internalValue = config.objectGroupCfg;
    this._objectGroupClauseCfg.internalValue = config.objectGroupClauseCfg;
    this._staticArpCfg.internalValue = config.staticArpCfg;
    this._staticIpv4RouteCfg.internalValue = config.staticIpv4RouteCfg;
    this._staticIpv6RouteCfg.internalValue = config.staticIpv6RouteCfg;
    this._staticMacCfg.internalValue = config.staticMacCfg;
    this._staticNeighborCfg.internalValue = config.staticNeighborCfg;
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

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ipv4_acl_line_cfg - computed: false, optional: true, required: false
  private _ipv4AclLineCfg = new SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgAOutputReference(this, "ipv4_acl_line_cfg");
  public get ipv4AclLineCfg() {
    return this._ipv4AclLineCfg;
  }
  public putIpv4AclLineCfg(value: SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgA) {
    this._ipv4AclLineCfg.internalValue = value;
  }
  public resetIpv4AclLineCfg() {
    this._ipv4AclLineCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AclLineCfgInput() {
    return this._ipv4AclLineCfg.internalValue;
  }

  // ipv6_acl_line_cfg - computed: false, optional: true, required: false
  private _ipv6AclLineCfg = new SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgAOutputReference(this, "ipv6_acl_line_cfg");
  public get ipv6AclLineCfg() {
    return this._ipv6AclLineCfg;
  }
  public putIpv6AclLineCfg(value: SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgA) {
    this._ipv6AclLineCfg.internalValue = value;
  }
  public resetIpv6AclLineCfg() {
    this._ipv6AclLineCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AclLineCfgInput() {
    return this._ipv6AclLineCfg.internalValue;
  }

  // object_group_cfg - computed: false, optional: true, required: false
  private _objectGroupCfg = new SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgAOutputReference(this, "object_group_cfg");
  public get objectGroupCfg() {
    return this._objectGroupCfg;
  }
  public putObjectGroupCfg(value: SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgA) {
    this._objectGroupCfg.internalValue = value;
  }
  public resetObjectGroupCfg() {
    this._objectGroupCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupCfgInput() {
    return this._objectGroupCfg.internalValue;
  }

  // object_group_clause_cfg - computed: false, optional: true, required: false
  private _objectGroupClauseCfg = new SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgAOutputReference(this, "object_group_clause_cfg");
  public get objectGroupClauseCfg() {
    return this._objectGroupClauseCfg;
  }
  public putObjectGroupClauseCfg(value: SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgA) {
    this._objectGroupClauseCfg.internalValue = value;
  }
  public resetObjectGroupClauseCfg() {
    this._objectGroupClauseCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectGroupClauseCfgInput() {
    return this._objectGroupClauseCfg.internalValue;
  }

  // static_arp_cfg - computed: false, optional: true, required: false
  private _staticArpCfg = new SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgAOutputReference(this, "static_arp_cfg");
  public get staticArpCfg() {
    return this._staticArpCfg;
  }
  public putStaticArpCfg(value: SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgA) {
    this._staticArpCfg.internalValue = value;
  }
  public resetStaticArpCfg() {
    this._staticArpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticArpCfgInput() {
    return this._staticArpCfg.internalValue;
  }

  // static_ipv4_route_cfg - computed: false, optional: true, required: false
  private _staticIpv4RouteCfg = new SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgAOutputReference(this, "static_ipv4_route_cfg");
  public get staticIpv4RouteCfg() {
    return this._staticIpv4RouteCfg;
  }
  public putStaticIpv4RouteCfg(value: SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgA) {
    this._staticIpv4RouteCfg.internalValue = value;
  }
  public resetStaticIpv4RouteCfg() {
    this._staticIpv4RouteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv4RouteCfgInput() {
    return this._staticIpv4RouteCfg.internalValue;
  }

  // static_ipv6_route_cfg - computed: false, optional: true, required: false
  private _staticIpv6RouteCfg = new SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgAOutputReference(this, "static_ipv6_route_cfg");
  public get staticIpv6RouteCfg() {
    return this._staticIpv6RouteCfg;
  }
  public putStaticIpv6RouteCfg(value: SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgA) {
    this._staticIpv6RouteCfg.internalValue = value;
  }
  public resetStaticIpv6RouteCfg() {
    this._staticIpv6RouteCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpv6RouteCfgInput() {
    return this._staticIpv6RouteCfg.internalValue;
  }

  // static_mac_cfg - computed: false, optional: true, required: false
  private _staticMacCfg = new SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgAOutputReference(this, "static_mac_cfg");
  public get staticMacCfg() {
    return this._staticMacCfg;
  }
  public putStaticMacCfg(value: SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgA) {
    this._staticMacCfg.internalValue = value;
  }
  public resetStaticMacCfg() {
    this._staticMacCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticMacCfgInput() {
    return this._staticMacCfg.internalValue;
  }

  // static_neighbor_cfg - computed: false, optional: true, required: false
  private _staticNeighborCfg = new SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgAOutputReference(this, "static_neighbor_cfg");
  public get staticNeighborCfg() {
    return this._staticNeighborCfg;
  }
  public putStaticNeighborCfg(value: SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgA) {
    this._staticNeighborCfg.internalValue = value;
  }
  public resetStaticNeighborCfg() {
    this._staticNeighborCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNeighborCfgInput() {
    return this._staticNeighborCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      template_name: cdktf.stringToTerraform(this._templateName),
      threshold: cdktf.numberToTerraform(this._threshold),
      uuid: cdktf.stringToTerraform(this._uuid),
      ipv4_acl_line_cfg: systemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgAToTerraform(this._ipv4AclLineCfg.internalValue),
      ipv6_acl_line_cfg: systemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgAToTerraform(this._ipv6AclLineCfg.internalValue),
      object_group_cfg: systemResourceAccountingTemplateNetworkResourcesObjectGroupCfgAToTerraform(this._objectGroupCfg.internalValue),
      object_group_clause_cfg: systemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgAToTerraform(this._objectGroupClauseCfg.internalValue),
      static_arp_cfg: systemResourceAccountingTemplateNetworkResourcesStaticArpCfgAToTerraform(this._staticArpCfg.internalValue),
      static_ipv4_route_cfg: systemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgAToTerraform(this._staticIpv4RouteCfg.internalValue),
      static_ipv6_route_cfg: systemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgAToTerraform(this._staticIpv6RouteCfg.internalValue),
      static_mac_cfg: systemResourceAccountingTemplateNetworkResourcesStaticMacCfgAToTerraform(this._staticMacCfg.internalValue),
      static_neighbor_cfg: systemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgAToTerraform(this._staticNeighborCfg.internalValue),
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
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_acl_line_cfg: {
        value: systemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgAToHclTerraform(this._ipv4AclLineCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateNetworkResourcesIpv4AclLineCfgAList",
      },
      ipv6_acl_line_cfg: {
        value: systemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgAToHclTerraform(this._ipv6AclLineCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateNetworkResourcesIpv6AclLineCfgAList",
      },
      object_group_cfg: {
        value: systemResourceAccountingTemplateNetworkResourcesObjectGroupCfgAToHclTerraform(this._objectGroupCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateNetworkResourcesObjectGroupCfgAList",
      },
      object_group_clause_cfg: {
        value: systemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgAToHclTerraform(this._objectGroupClauseCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateNetworkResourcesObjectGroupClauseCfgAList",
      },
      static_arp_cfg: {
        value: systemResourceAccountingTemplateNetworkResourcesStaticArpCfgAToHclTerraform(this._staticArpCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateNetworkResourcesStaticArpCfgAList",
      },
      static_ipv4_route_cfg: {
        value: systemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgAToHclTerraform(this._staticIpv4RouteCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateNetworkResourcesStaticIpv4RouteCfgAList",
      },
      static_ipv6_route_cfg: {
        value: systemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgAToHclTerraform(this._staticIpv6RouteCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateNetworkResourcesStaticIpv6RouteCfgAList",
      },
      static_mac_cfg: {
        value: systemResourceAccountingTemplateNetworkResourcesStaticMacCfgAToHclTerraform(this._staticMacCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateNetworkResourcesStaticMacCfgAList",
      },
      static_neighbor_cfg: {
        value: systemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgAToHclTerraform(this._staticNeighborCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemResourceAccountingTemplateNetworkResourcesStaticNeighborCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
