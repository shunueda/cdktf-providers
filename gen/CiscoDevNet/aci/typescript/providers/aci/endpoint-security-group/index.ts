// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointSecurityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Withdraw the ESG configuration from all nodes in the fabric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#admin_state EndpointSecurityGroup#admin_state}
  */
  readonly adminState?: string;
  /**
  * The annotation of the Endpoint Security Group object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotation EndpointSecurityGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotations EndpointSecurityGroup#annotations}
  */
  readonly annotations?: EndpointSecurityGroupAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#application_profile_dn EndpointSecurityGroup#application_profile_dn}
  */
  readonly applicationProfileDn?: string;
  /**
  * The description of the Endpoint Security Group object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#description EndpointSecurityGroup#description}
  */
  readonly description?: string;
  /**
  * Contract Exception Tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#exception_tag EndpointSecurityGroup#exception_tag}
  */
  readonly exceptionTag?: string;
  /**
  * Parameter used to determine whether communication between endpoints within the ESG is blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#intra_esg_isolation EndpointSecurityGroup#intra_esg_isolation}
  */
  readonly intraEsgIsolation?: string;
  /**
  * The provider label match criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#match_criteria EndpointSecurityGroup#match_criteria}
  */
  readonly matchCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#match_t EndpointSecurityGroup#match_t}
  */
  readonly matchT?: string;
  /**
  * The name of the Endpoint Security Group object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#name EndpointSecurityGroup#name}
  */
  readonly name?: string;
  /**
  * The name alias of the Endpoint Security Group object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#name_alias EndpointSecurityGroup#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * The distinguished name (DN) of the parent object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#parent_dn EndpointSecurityGroup#parent_dn}
  */
  readonly parentDn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#pc_enf_pref EndpointSecurityGroup#pc_enf_pref}
  */
  readonly pcEnfPref?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#pref_gr_memb EndpointSecurityGroup#pref_gr_memb}
  */
  readonly prefGrMemb?: string;
  /**
  * Parameter used to determine whether the ESG is part of the preferred group. Members of this group are allowed to communicate without contracts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#preferred_group_member EndpointSecurityGroup#preferred_group_member}
  */
  readonly preferredGroupMember?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_fv_rs_cust_qos_pol EndpointSecurityGroup#relation_fv_rs_cust_qos_pol}
  */
  readonly relationFvRsCustQosPol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_fv_rs_intra_epg EndpointSecurityGroup#relation_fv_rs_intra_epg}
  */
  readonly relationFvRsIntraEpg?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_fv_rs_prot_by EndpointSecurityGroup#relation_fv_rs_prot_by}
  */
  readonly relationFvRsProtBy?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_fv_rs_scope EndpointSecurityGroup#relation_fv_rs_scope}
  */
  readonly relationFvRsScope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_fv_rs_sec_inherited EndpointSecurityGroup#relation_fv_rs_sec_inherited}
  */
  readonly relationFvRsSecInherited?: string[];
  /**
  * The Consumer contract profile information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_to_consumed_contracts EndpointSecurityGroup#relation_to_consumed_contracts}
  */
  readonly relationToConsumedContracts?: EndpointSecurityGroupRelationToConsumedContracts[] | cdktf.IResolvable;
  /**
  * Represents that the EPg is inheriting security configuration from another EPg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_to_contract_masters EndpointSecurityGroup#relation_to_contract_masters}
  */
  readonly relationToContractMasters?: EndpointSecurityGroupRelationToContractMasters[] | cdktf.IResolvable;
  /**
  * A contract for which the EPG will be a consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_to_imported_contracts EndpointSecurityGroup#relation_to_imported_contracts}
  */
  readonly relationToImportedContracts?: EndpointSecurityGroupRelationToImportedContracts[] | cdktf.IResolvable;
  /**
  * Intra EPg contract:
  *                       Represents that the EPg is moving from "allow all within epg" mode
  *                       to a "deny all within epg" mode.
  *                       The only type of traffic allowed between EPs in this EPg is the one
  *                       specified by contracts EPg associates to with this relation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_to_intra_epg_contracts EndpointSecurityGroup#relation_to_intra_epg_contracts}
  */
  readonly relationToIntraEpgContracts?: EndpointSecurityGroupRelationToIntraEpgContracts[] | cdktf.IResolvable;
  /**
  * A contract for which the EPG will be a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_to_provided_contracts EndpointSecurityGroup#relation_to_provided_contracts}
  */
  readonly relationToProvidedContracts?: EndpointSecurityGroupRelationToProvidedContracts[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_to_vrf EndpointSecurityGroup#relation_to_vrf}
  */
  readonly relationToVrf?: EndpointSecurityGroupRelationToVrf;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#tags EndpointSecurityGroup#tags}
  */
  readonly tags?: EndpointSecurityGroupTags[] | cdktf.IResolvable;
  /**
  * relation_fv_rs_cons block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_fv_rs_cons EndpointSecurityGroup#relation_fv_rs_cons}
  */
  readonly relationFvRsCons?: EndpointSecurityGroupRelationFvRsCons[] | cdktf.IResolvable;
  /**
  * relation_fv_rs_cons_if block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_fv_rs_cons_if EndpointSecurityGroup#relation_fv_rs_cons_if}
  */
  readonly relationFvRsConsIf?: EndpointSecurityGroupRelationFvRsConsIf[] | cdktf.IResolvable;
  /**
  * relation_fv_rs_prov block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#relation_fv_rs_prov EndpointSecurityGroup#relation_fv_rs_prov}
  */
  readonly relationFvRsProv?: EndpointSecurityGroupRelationFvRsProv[] | cdktf.IResolvable;
}
export interface EndpointSecurityGroupAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupAnnotationsToTerraform(struct?: EndpointSecurityGroupAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupAnnotationsToHclTerraform(struct?: EndpointSecurityGroupAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupAnnotationsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupAnnotations[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupAnnotationsOutputReference {
    return new EndpointSecurityGroupAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToConsumedContractsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToConsumedContractsAnnotationsToTerraform(struct?: EndpointSecurityGroupRelationToConsumedContractsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToConsumedContractsAnnotationsToHclTerraform(struct?: EndpointSecurityGroupRelationToConsumedContractsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToConsumedContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToConsumedContractsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToConsumedContractsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToConsumedContractsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToConsumedContractsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToConsumedContractsAnnotationsOutputReference {
    return new EndpointSecurityGroupRelationToConsumedContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToConsumedContractsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToConsumedContractsTagsToTerraform(struct?: EndpointSecurityGroupRelationToConsumedContractsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToConsumedContractsTagsToHclTerraform(struct?: EndpointSecurityGroupRelationToConsumedContractsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToConsumedContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToConsumedContractsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToConsumedContractsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToConsumedContractsTagsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToConsumedContractsTags[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToConsumedContractsTagsOutputReference {
    return new EndpointSecurityGroupRelationToConsumedContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToConsumedContracts {
  /**
  * The annotation of the Relation To Consumed Contract object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotation EndpointSecurityGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotations EndpointSecurityGroup#annotations}
  */
  readonly annotations?: EndpointSecurityGroupRelationToConsumedContractsAnnotations[] | cdktf.IResolvable;
  /**
  * The consumer contract name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#contract_name EndpointSecurityGroup#contract_name}
  */
  readonly contractName?: string;
  /**
  * The Quality of Service (QoS) priority class ID. QoS refers to the capability of a network to provide better service to selected network traffic over various technologies. The primary goal of QoS is to provide priority including dedicated bandwidth, controlled jitter and latency (required by some real-time and interactive traffic), and improved loss characteristics. You can configure the bandwidth of each QoS level using QoS profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#priority EndpointSecurityGroup#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#tags EndpointSecurityGroup#tags}
  */
  readonly tags?: EndpointSecurityGroupRelationToConsumedContractsTags[] | cdktf.IResolvable;
}

export function endpointSecurityGroupRelationToConsumedContractsToTerraform(struct?: EndpointSecurityGroupRelationToConsumedContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(endpointSecurityGroupRelationToConsumedContractsAnnotationsToTerraform, false)(struct!.annotations),
    contract_name: cdktf.stringToTerraform(struct!.contractName),
    priority: cdktf.stringToTerraform(struct!.priority),
    tags: cdktf.listMapper(endpointSecurityGroupRelationToConsumedContractsTagsToTerraform, false)(struct!.tags),
  }
}


export function endpointSecurityGroupRelationToConsumedContractsToHclTerraform(struct?: EndpointSecurityGroupRelationToConsumedContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToConsumedContractsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToConsumedContractsAnnotationsList",
    },
    contract_name: {
      value: cdktf.stringToHclTerraform(struct!.contractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToConsumedContractsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToConsumedContractsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToConsumedContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToConsumedContracts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._contractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractName = this._contractName;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToConsumedContracts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._contractName = undefined;
      this._priority = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._contractName = value.contractName;
      this._priority = value.priority;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new EndpointSecurityGroupRelationToConsumedContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: EndpointSecurityGroupRelationToConsumedContractsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // contract_name - computed: true, optional: true, required: false
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  public resetContractName() {
    this._contractName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EndpointSecurityGroupRelationToConsumedContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EndpointSecurityGroupRelationToConsumedContractsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class EndpointSecurityGroupRelationToConsumedContractsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToConsumedContracts[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToConsumedContractsOutputReference {
    return new EndpointSecurityGroupRelationToConsumedContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToContractMastersAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToContractMastersAnnotationsToTerraform(struct?: EndpointSecurityGroupRelationToContractMastersAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToContractMastersAnnotationsToHclTerraform(struct?: EndpointSecurityGroupRelationToContractMastersAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToContractMastersAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToContractMastersAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToContractMastersAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToContractMastersAnnotationsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToContractMastersAnnotations[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToContractMastersAnnotationsOutputReference {
    return new EndpointSecurityGroupRelationToContractMastersAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToContractMastersTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToContractMastersTagsToTerraform(struct?: EndpointSecurityGroupRelationToContractMastersTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToContractMastersTagsToHclTerraform(struct?: EndpointSecurityGroupRelationToContractMastersTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToContractMastersTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToContractMastersTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToContractMastersTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToContractMastersTagsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToContractMastersTags[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToContractMastersTagsOutputReference {
    return new EndpointSecurityGroupRelationToContractMastersTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToContractMasters {
  /**
  * The annotation of the Relation To Contract Master object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotation EndpointSecurityGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotations EndpointSecurityGroup#annotations}
  */
  readonly annotations?: EndpointSecurityGroupRelationToContractMastersAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#tags EndpointSecurityGroup#tags}
  */
  readonly tags?: EndpointSecurityGroupRelationToContractMastersTags[] | cdktf.IResolvable;
  /**
  * The distinguished name of the target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#target_dn EndpointSecurityGroup#target_dn}
  */
  readonly targetDn?: string;
}

export function endpointSecurityGroupRelationToContractMastersToTerraform(struct?: EndpointSecurityGroupRelationToContractMasters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(endpointSecurityGroupRelationToContractMastersAnnotationsToTerraform, false)(struct!.annotations),
    tags: cdktf.listMapper(endpointSecurityGroupRelationToContractMastersTagsToTerraform, false)(struct!.tags),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function endpointSecurityGroupRelationToContractMastersToHclTerraform(struct?: EndpointSecurityGroupRelationToContractMasters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToContractMastersAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToContractMastersAnnotationsList",
    },
    tags: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToContractMastersTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToContractMastersTagsList",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToContractMastersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToContractMasters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToContractMasters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._tags.internalValue = value.tags;
      this._targetDn = value.targetDn;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new EndpointSecurityGroupRelationToContractMastersAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: EndpointSecurityGroupRelationToContractMastersAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EndpointSecurityGroupRelationToContractMastersTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EndpointSecurityGroupRelationToContractMastersTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}

export class EndpointSecurityGroupRelationToContractMastersList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToContractMasters[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToContractMastersOutputReference {
    return new EndpointSecurityGroupRelationToContractMastersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToImportedContractsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToImportedContractsAnnotationsToTerraform(struct?: EndpointSecurityGroupRelationToImportedContractsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToImportedContractsAnnotationsToHclTerraform(struct?: EndpointSecurityGroupRelationToImportedContractsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToImportedContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToImportedContractsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToImportedContractsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToImportedContractsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToImportedContractsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToImportedContractsAnnotationsOutputReference {
    return new EndpointSecurityGroupRelationToImportedContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToImportedContractsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToImportedContractsTagsToTerraform(struct?: EndpointSecurityGroupRelationToImportedContractsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToImportedContractsTagsToHclTerraform(struct?: EndpointSecurityGroupRelationToImportedContractsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToImportedContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToImportedContractsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToImportedContractsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToImportedContractsTagsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToImportedContractsTags[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToImportedContractsTagsOutputReference {
    return new EndpointSecurityGroupRelationToImportedContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToImportedContracts {
  /**
  * The annotation of the Relation To Imported Contract object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotation EndpointSecurityGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotations EndpointSecurityGroup#annotations}
  */
  readonly annotations?: EndpointSecurityGroupRelationToImportedContractsAnnotations[] | cdktf.IResolvable;
  /**
  * The contract interface name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#imported_contract_name EndpointSecurityGroup#imported_contract_name}
  */
  readonly importedContractName?: string;
  /**
  * The Quality of Service (QoS) priority class ID. QoS refers to the capability of a network to provide better service to selected network traffic over various technologies. The primary goal of QoS is to provide priority including dedicated bandwidth, controlled jitter and latency (required by some real-time and interactive traffic), and improved loss characteristics. You can configure the bandwidth of each QoS level using QoS profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#priority EndpointSecurityGroup#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#tags EndpointSecurityGroup#tags}
  */
  readonly tags?: EndpointSecurityGroupRelationToImportedContractsTags[] | cdktf.IResolvable;
}

export function endpointSecurityGroupRelationToImportedContractsToTerraform(struct?: EndpointSecurityGroupRelationToImportedContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(endpointSecurityGroupRelationToImportedContractsAnnotationsToTerraform, false)(struct!.annotations),
    imported_contract_name: cdktf.stringToTerraform(struct!.importedContractName),
    priority: cdktf.stringToTerraform(struct!.priority),
    tags: cdktf.listMapper(endpointSecurityGroupRelationToImportedContractsTagsToTerraform, false)(struct!.tags),
  }
}


export function endpointSecurityGroupRelationToImportedContractsToHclTerraform(struct?: EndpointSecurityGroupRelationToImportedContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToImportedContractsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToImportedContractsAnnotationsList",
    },
    imported_contract_name: {
      value: cdktf.stringToHclTerraform(struct!.importedContractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToImportedContractsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToImportedContractsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToImportedContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToImportedContracts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._importedContractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.importedContractName = this._importedContractName;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToImportedContracts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._importedContractName = undefined;
      this._priority = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._importedContractName = value.importedContractName;
      this._priority = value.priority;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new EndpointSecurityGroupRelationToImportedContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: EndpointSecurityGroupRelationToImportedContractsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // imported_contract_name - computed: true, optional: true, required: false
  private _importedContractName?: string; 
  public get importedContractName() {
    return this.getStringAttribute('imported_contract_name');
  }
  public set importedContractName(value: string) {
    this._importedContractName = value;
  }
  public resetImportedContractName() {
    this._importedContractName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importedContractNameInput() {
    return this._importedContractName;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EndpointSecurityGroupRelationToImportedContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EndpointSecurityGroupRelationToImportedContractsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class EndpointSecurityGroupRelationToImportedContractsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToImportedContracts[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToImportedContractsOutputReference {
    return new EndpointSecurityGroupRelationToImportedContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToIntraEpgContractsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToIntraEpgContractsAnnotationsToTerraform(struct?: EndpointSecurityGroupRelationToIntraEpgContractsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToIntraEpgContractsAnnotationsToHclTerraform(struct?: EndpointSecurityGroupRelationToIntraEpgContractsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToIntraEpgContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToIntraEpgContractsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToIntraEpgContractsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToIntraEpgContractsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToIntraEpgContractsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToIntraEpgContractsAnnotationsOutputReference {
    return new EndpointSecurityGroupRelationToIntraEpgContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToIntraEpgContractsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToIntraEpgContractsTagsToTerraform(struct?: EndpointSecurityGroupRelationToIntraEpgContractsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToIntraEpgContractsTagsToHclTerraform(struct?: EndpointSecurityGroupRelationToIntraEpgContractsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToIntraEpgContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToIntraEpgContractsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToIntraEpgContractsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToIntraEpgContractsTagsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToIntraEpgContractsTags[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToIntraEpgContractsTagsOutputReference {
    return new EndpointSecurityGroupRelationToIntraEpgContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToIntraEpgContracts {
  /**
  * The annotation of the Relation To Intra EPG Contract object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotation EndpointSecurityGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotations EndpointSecurityGroup#annotations}
  */
  readonly annotations?: EndpointSecurityGroupRelationToIntraEpgContractsAnnotations[] | cdktf.IResolvable;
  /**
  * The contract name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#contract_name EndpointSecurityGroup#contract_name}
  */
  readonly contractName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#tags EndpointSecurityGroup#tags}
  */
  readonly tags?: EndpointSecurityGroupRelationToIntraEpgContractsTags[] | cdktf.IResolvable;
}

export function endpointSecurityGroupRelationToIntraEpgContractsToTerraform(struct?: EndpointSecurityGroupRelationToIntraEpgContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(endpointSecurityGroupRelationToIntraEpgContractsAnnotationsToTerraform, false)(struct!.annotations),
    contract_name: cdktf.stringToTerraform(struct!.contractName),
    tags: cdktf.listMapper(endpointSecurityGroupRelationToIntraEpgContractsTagsToTerraform, false)(struct!.tags),
  }
}


export function endpointSecurityGroupRelationToIntraEpgContractsToHclTerraform(struct?: EndpointSecurityGroupRelationToIntraEpgContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToIntraEpgContractsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToIntraEpgContractsAnnotationsList",
    },
    contract_name: {
      value: cdktf.stringToHclTerraform(struct!.contractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToIntraEpgContractsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToIntraEpgContractsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToIntraEpgContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToIntraEpgContracts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._contractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractName = this._contractName;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToIntraEpgContracts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._contractName = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._contractName = value.contractName;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new EndpointSecurityGroupRelationToIntraEpgContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: EndpointSecurityGroupRelationToIntraEpgContractsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // contract_name - computed: true, optional: true, required: false
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  public resetContractName() {
    this._contractName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EndpointSecurityGroupRelationToIntraEpgContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EndpointSecurityGroupRelationToIntraEpgContractsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class EndpointSecurityGroupRelationToIntraEpgContractsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToIntraEpgContracts[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToIntraEpgContractsOutputReference {
    return new EndpointSecurityGroupRelationToIntraEpgContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToProvidedContractsAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToProvidedContractsAnnotationsToTerraform(struct?: EndpointSecurityGroupRelationToProvidedContractsAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToProvidedContractsAnnotationsToHclTerraform(struct?: EndpointSecurityGroupRelationToProvidedContractsAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToProvidedContractsAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToProvidedContractsAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToProvidedContractsAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToProvidedContractsAnnotationsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToProvidedContractsAnnotations[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToProvidedContractsAnnotationsOutputReference {
    return new EndpointSecurityGroupRelationToProvidedContractsAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToProvidedContractsTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToProvidedContractsTagsToTerraform(struct?: EndpointSecurityGroupRelationToProvidedContractsTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToProvidedContractsTagsToHclTerraform(struct?: EndpointSecurityGroupRelationToProvidedContractsTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToProvidedContractsTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToProvidedContractsTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToProvidedContractsTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToProvidedContractsTagsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToProvidedContractsTags[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToProvidedContractsTagsOutputReference {
    return new EndpointSecurityGroupRelationToProvidedContractsTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToProvidedContracts {
  /**
  * The annotation of the Relation To Provided Contract object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotation EndpointSecurityGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotations EndpointSecurityGroup#annotations}
  */
  readonly annotations?: EndpointSecurityGroupRelationToProvidedContractsAnnotations[] | cdktf.IResolvable;
  /**
  * The provider contract name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#contract_name EndpointSecurityGroup#contract_name}
  */
  readonly contractName?: string;
  /**
  * The provider label match criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#match_criteria EndpointSecurityGroup#match_criteria}
  */
  readonly matchCriteria?: string;
  /**
  * The Quality of Service (QoS) priority class ID. QoS refers to the capability of a network to provide better service to selected network traffic over various technologies. The primary goal of QoS is to provide priority including dedicated bandwidth, controlled jitter and latency (required by some real-time and interactive traffic), and improved loss characteristics. You can configure the bandwidth of each QoS level using QoS profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#priority EndpointSecurityGroup#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#tags EndpointSecurityGroup#tags}
  */
  readonly tags?: EndpointSecurityGroupRelationToProvidedContractsTags[] | cdktf.IResolvable;
}

export function endpointSecurityGroupRelationToProvidedContractsToTerraform(struct?: EndpointSecurityGroupRelationToProvidedContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(endpointSecurityGroupRelationToProvidedContractsAnnotationsToTerraform, false)(struct!.annotations),
    contract_name: cdktf.stringToTerraform(struct!.contractName),
    match_criteria: cdktf.stringToTerraform(struct!.matchCriteria),
    priority: cdktf.stringToTerraform(struct!.priority),
    tags: cdktf.listMapper(endpointSecurityGroupRelationToProvidedContractsTagsToTerraform, false)(struct!.tags),
  }
}


export function endpointSecurityGroupRelationToProvidedContractsToHclTerraform(struct?: EndpointSecurityGroupRelationToProvidedContracts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToProvidedContractsAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToProvidedContractsAnnotationsList",
    },
    contract_name: {
      value: cdktf.stringToHclTerraform(struct!.contractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_criteria: {
      value: cdktf.stringToHclTerraform(struct!.matchCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.stringToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToProvidedContractsTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToProvidedContractsTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToProvidedContractsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToProvidedContracts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._contractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractName = this._contractName;
    }
    if (this._matchCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchCriteria = this._matchCriteria;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToProvidedContracts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._contractName = undefined;
      this._matchCriteria = undefined;
      this._priority = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._contractName = value.contractName;
      this._matchCriteria = value.matchCriteria;
      this._priority = value.priority;
      this._tags.internalValue = value.tags;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new EndpointSecurityGroupRelationToProvidedContractsAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: EndpointSecurityGroupRelationToProvidedContractsAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // contract_name - computed: true, optional: true, required: false
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  public resetContractName() {
    this._contractName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // match_criteria - computed: true, optional: true, required: false
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  public resetMatchCriteria() {
    this._matchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EndpointSecurityGroupRelationToProvidedContractsTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EndpointSecurityGroupRelationToProvidedContractsTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class EndpointSecurityGroupRelationToProvidedContractsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToProvidedContracts[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToProvidedContractsOutputReference {
    return new EndpointSecurityGroupRelationToProvidedContractsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToVrfAnnotations {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToVrfAnnotationsToTerraform(struct?: EndpointSecurityGroupRelationToVrfAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToVrfAnnotationsToHclTerraform(struct?: EndpointSecurityGroupRelationToVrfAnnotations | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToVrfAnnotationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToVrfAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToVrfAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToVrfAnnotationsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToVrfAnnotations[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToVrfAnnotationsOutputReference {
    return new EndpointSecurityGroupRelationToVrfAnnotationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToVrfTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupRelationToVrfTagsToTerraform(struct?: EndpointSecurityGroupRelationToVrfTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupRelationToVrfTagsToHclTerraform(struct?: EndpointSecurityGroupRelationToVrfTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToVrfTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationToVrfTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToVrfTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupRelationToVrfTagsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationToVrfTags[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationToVrfTagsOutputReference {
    return new EndpointSecurityGroupRelationToVrfTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationToVrf {
  /**
  * The annotation of the Relation To VRF object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotation EndpointSecurityGroup#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#annotations EndpointSecurityGroup#annotations}
  */
  readonly annotations?: EndpointSecurityGroupRelationToVrfAnnotations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#tags EndpointSecurityGroup#tags}
  */
  readonly tags?: EndpointSecurityGroupRelationToVrfTags[] | cdktf.IResolvable;
  /**
  * The name of the VRF object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#vrf_name EndpointSecurityGroup#vrf_name}
  */
  readonly vrfName?: string;
}

export function endpointSecurityGroupRelationToVrfToTerraform(struct?: EndpointSecurityGroupRelationToVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation: cdktf.stringToTerraform(struct!.annotation),
    annotations: cdktf.listMapper(endpointSecurityGroupRelationToVrfAnnotationsToTerraform, false)(struct!.annotations),
    tags: cdktf.listMapper(endpointSecurityGroupRelationToVrfTagsToTerraform, false)(struct!.tags),
    vrf_name: cdktf.stringToTerraform(struct!.vrfName),
  }
}


export function endpointSecurityGroupRelationToVrfToHclTerraform(struct?: EndpointSecurityGroupRelationToVrf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation: {
      value: cdktf.stringToHclTerraform(struct!.annotation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    annotations: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToVrfAnnotationsToHclTerraform, false)(struct!.annotations),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToVrfAnnotationsList",
    },
    tags: {
      value: cdktf.listMapperHcl(endpointSecurityGroupRelationToVrfTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "set",
      storageClassType: "EndpointSecurityGroupRelationToVrfTagsList",
    },
    vrf_name: {
      value: cdktf.stringToHclTerraform(struct!.vrfName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationToVrfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EndpointSecurityGroupRelationToVrf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotation = this._annotation;
    }
    if (this._annotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._vrfName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrfName = this._vrfName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationToVrf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotation = undefined;
      this._annotations.internalValue = undefined;
      this._tags.internalValue = undefined;
      this._vrfName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotation = value.annotation;
      this._annotations.internalValue = value.annotations;
      this._tags.internalValue = value.tags;
      this._vrfName = value.vrfName;
    }
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new EndpointSecurityGroupRelationToVrfAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: EndpointSecurityGroupRelationToVrfAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EndpointSecurityGroupRelationToVrfTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EndpointSecurityGroupRelationToVrfTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // vrf_name - computed: true, optional: true, required: false
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  public resetVrfName() {
    this._vrfName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }
}
export interface EndpointSecurityGroupTags {
  /**
  * The key used to uniquely identify this configuration object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#key EndpointSecurityGroup#key}
  */
  readonly key?: string;
  /**
  * The value of the property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#value EndpointSecurityGroup#value}
  */
  readonly value?: string;
}

export function endpointSecurityGroupTagsToTerraform(struct?: EndpointSecurityGroupTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function endpointSecurityGroupTagsToHclTerraform(struct?: EndpointSecurityGroupTags | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EndpointSecurityGroupTagsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupTags[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupTagsOutputReference {
    return new EndpointSecurityGroupTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationFvRsCons {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#prio EndpointSecurityGroup#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#target_dn EndpointSecurityGroup#target_dn}
  */
  readonly targetDn?: string;
}

export function endpointSecurityGroupRelationFvRsConsToTerraform(struct?: EndpointSecurityGroupRelationFvRsCons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prio: cdktf.stringToTerraform(struct!.prio),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function endpointSecurityGroupRelationFvRsConsToHclTerraform(struct?: EndpointSecurityGroupRelationFvRsCons | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prio: {
      value: cdktf.stringToHclTerraform(struct!.prio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationFvRsConsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationFvRsCons | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prio !== undefined) {
      hasAnyValues = true;
      internalValueResult.prio = this._prio;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationFvRsCons | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prio = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prio = value.prio;
      this._targetDn = value.targetDn;
    }
  }

  // prio - computed: true, optional: true, required: false
  private _prio?: string; 
  public get prio() {
    return this.getStringAttribute('prio');
  }
  public set prio(value: string) {
    this._prio = value;
  }
  public resetPrio() {
    this._prio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioInput() {
    return this._prio;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}

export class EndpointSecurityGroupRelationFvRsConsList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationFvRsCons[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationFvRsConsOutputReference {
    return new EndpointSecurityGroupRelationFvRsConsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationFvRsConsIf {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#prio EndpointSecurityGroup#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#target_dn EndpointSecurityGroup#target_dn}
  */
  readonly targetDn?: string;
}

export function endpointSecurityGroupRelationFvRsConsIfToTerraform(struct?: EndpointSecurityGroupRelationFvRsConsIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prio: cdktf.stringToTerraform(struct!.prio),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function endpointSecurityGroupRelationFvRsConsIfToHclTerraform(struct?: EndpointSecurityGroupRelationFvRsConsIf | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prio: {
      value: cdktf.stringToHclTerraform(struct!.prio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationFvRsConsIfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationFvRsConsIf | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prio !== undefined) {
      hasAnyValues = true;
      internalValueResult.prio = this._prio;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationFvRsConsIf | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._prio = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._prio = value.prio;
      this._targetDn = value.targetDn;
    }
  }

  // prio - computed: true, optional: true, required: false
  private _prio?: string; 
  public get prio() {
    return this.getStringAttribute('prio');
  }
  public set prio(value: string) {
    this._prio = value;
  }
  public resetPrio() {
    this._prio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioInput() {
    return this._prio;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}

export class EndpointSecurityGroupRelationFvRsConsIfList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationFvRsConsIf[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationFvRsConsIfOutputReference {
    return new EndpointSecurityGroupRelationFvRsConsIfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EndpointSecurityGroupRelationFvRsProv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#match_t EndpointSecurityGroup#match_t}
  */
  readonly matchT?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#prio EndpointSecurityGroup#prio}
  */
  readonly prio?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#target_dn EndpointSecurityGroup#target_dn}
  */
  readonly targetDn?: string;
}

export function endpointSecurityGroupRelationFvRsProvToTerraform(struct?: EndpointSecurityGroupRelationFvRsProv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_t: cdktf.stringToTerraform(struct!.matchT),
    prio: cdktf.stringToTerraform(struct!.prio),
    target_dn: cdktf.stringToTerraform(struct!.targetDn),
  }
}


export function endpointSecurityGroupRelationFvRsProvToHclTerraform(struct?: EndpointSecurityGroupRelationFvRsProv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_t: {
      value: cdktf.stringToHclTerraform(struct!.matchT),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prio: {
      value: cdktf.stringToHclTerraform(struct!.prio),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_dn: {
      value: cdktf.stringToHclTerraform(struct!.targetDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EndpointSecurityGroupRelationFvRsProvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EndpointSecurityGroupRelationFvRsProv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchT !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchT = this._matchT;
    }
    if (this._prio !== undefined) {
      hasAnyValues = true;
      internalValueResult.prio = this._prio;
    }
    if (this._targetDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetDn = this._targetDn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EndpointSecurityGroupRelationFvRsProv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchT = undefined;
      this._prio = undefined;
      this._targetDn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchT = value.matchT;
      this._prio = value.prio;
      this._targetDn = value.targetDn;
    }
  }

  // match_t - computed: true, optional: true, required: false
  private _matchT?: string; 
  public get matchT() {
    return this.getStringAttribute('match_t');
  }
  public set matchT(value: string) {
    this._matchT = value;
  }
  public resetMatchT() {
    this._matchT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTInput() {
    return this._matchT;
  }

  // prio - computed: true, optional: true, required: false
  private _prio?: string; 
  public get prio() {
    return this.getStringAttribute('prio');
  }
  public set prio(value: string) {
    this._prio = value;
  }
  public resetPrio() {
    this._prio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prioInput() {
    return this._prio;
  }

  // target_dn - computed: true, optional: true, required: false
  private _targetDn?: string; 
  public get targetDn() {
    return this.getStringAttribute('target_dn');
  }
  public set targetDn(value: string) {
    this._targetDn = value;
  }
  public resetTargetDn() {
    this._targetDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetDnInput() {
    return this._targetDn;
  }
}

export class EndpointSecurityGroupRelationFvRsProvList extends cdktf.ComplexList {
  public internalValue? : EndpointSecurityGroupRelationFvRsProv[] | cdktf.IResolvable

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
  public get(index: number): EndpointSecurityGroupRelationFvRsProvOutputReference {
    return new EndpointSecurityGroupRelationFvRsProvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group aci_endpoint_security_group}
*/
export class EndpointSecurityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_endpoint_security_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointSecurityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointSecurityGroup to import
  * @param importFromId The id of the existing EndpointSecurityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointSecurityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_endpoint_security_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/endpoint_security_group aci_endpoint_security_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointSecurityGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: EndpointSecurityGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_endpoint_security_group',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adminState = config.adminState;
    this._annotation = config.annotation;
    this._annotations.internalValue = config.annotations;
    this._applicationProfileDn = config.applicationProfileDn;
    this._description = config.description;
    this._exceptionTag = config.exceptionTag;
    this._intraEsgIsolation = config.intraEsgIsolation;
    this._matchCriteria = config.matchCriteria;
    this._matchT = config.matchT;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._parentDn = config.parentDn;
    this._pcEnfPref = config.pcEnfPref;
    this._prefGrMemb = config.prefGrMemb;
    this._preferredGroupMember = config.preferredGroupMember;
    this._relationFvRsCustQosPol = config.relationFvRsCustQosPol;
    this._relationFvRsIntraEpg = config.relationFvRsIntraEpg;
    this._relationFvRsProtBy = config.relationFvRsProtBy;
    this._relationFvRsScope = config.relationFvRsScope;
    this._relationFvRsSecInherited = config.relationFvRsSecInherited;
    this._relationToConsumedContracts.internalValue = config.relationToConsumedContracts;
    this._relationToContractMasters.internalValue = config.relationToContractMasters;
    this._relationToImportedContracts.internalValue = config.relationToImportedContracts;
    this._relationToIntraEpgContracts.internalValue = config.relationToIntraEpgContracts;
    this._relationToProvidedContracts.internalValue = config.relationToProvidedContracts;
    this._relationToVrf.internalValue = config.relationToVrf;
    this._tags.internalValue = config.tags;
    this._relationFvRsCons.internalValue = config.relationFvRsCons;
    this._relationFvRsConsIf.internalValue = config.relationFvRsConsIf;
    this._relationFvRsProv.internalValue = config.relationFvRsProv;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_state - computed: true, optional: true, required: false
  private _adminState?: string; 
  public get adminState() {
    return this.getStringAttribute('admin_state');
  }
  public set adminState(value: string) {
    this._adminState = value;
  }
  public resetAdminState() {
    this._adminState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStateInput() {
    return this._adminState;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // annotations - computed: true, optional: true, required: false
  private _annotations = new EndpointSecurityGroupAnnotationsList(this, "annotations", true);
  public get annotations() {
    return this._annotations;
  }
  public putAnnotations(value: EndpointSecurityGroupAnnotations[] | cdktf.IResolvable) {
    this._annotations.internalValue = value;
  }
  public resetAnnotations() {
    this._annotations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations.internalValue;
  }

  // application_profile_dn - computed: true, optional: true, required: false
  private _applicationProfileDn?: string; 
  public get applicationProfileDn() {
    return this.getStringAttribute('application_profile_dn');
  }
  public set applicationProfileDn(value: string) {
    this._applicationProfileDn = value;
  }
  public resetApplicationProfileDn() {
    this._applicationProfileDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProfileDnInput() {
    return this._applicationProfileDn;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // exception_tag - computed: true, optional: true, required: false
  private _exceptionTag?: string; 
  public get exceptionTag() {
    return this.getStringAttribute('exception_tag');
  }
  public set exceptionTag(value: string) {
    this._exceptionTag = value;
  }
  public resetExceptionTag() {
    this._exceptionTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionTagInput() {
    return this._exceptionTag;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // intra_esg_isolation - computed: true, optional: true, required: false
  private _intraEsgIsolation?: string; 
  public get intraEsgIsolation() {
    return this.getStringAttribute('intra_esg_isolation');
  }
  public set intraEsgIsolation(value: string) {
    this._intraEsgIsolation = value;
  }
  public resetIntraEsgIsolation() {
    this._intraEsgIsolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intraEsgIsolationInput() {
    return this._intraEsgIsolation;
  }

  // match_criteria - computed: true, optional: true, required: false
  private _matchCriteria?: string; 
  public get matchCriteria() {
    return this.getStringAttribute('match_criteria');
  }
  public set matchCriteria(value: string) {
    this._matchCriteria = value;
  }
  public resetMatchCriteria() {
    this._matchCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchCriteriaInput() {
    return this._matchCriteria;
  }

  // match_t - computed: true, optional: true, required: false
  private _matchT?: string; 
  public get matchT() {
    return this.getStringAttribute('match_t');
  }
  public set matchT(value: string) {
    this._matchT = value;
  }
  public resetMatchT() {
    this._matchT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTInput() {
    return this._matchT;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // parent_dn - computed: true, optional: true, required: false
  private _parentDn?: string; 
  public get parentDn() {
    return this.getStringAttribute('parent_dn');
  }
  public set parentDn(value: string) {
    this._parentDn = value;
  }
  public resetParentDn() {
    this._parentDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDnInput() {
    return this._parentDn;
  }

  // pc_enf_pref - computed: true, optional: true, required: false
  private _pcEnfPref?: string; 
  public get pcEnfPref() {
    return this.getStringAttribute('pc_enf_pref');
  }
  public set pcEnfPref(value: string) {
    this._pcEnfPref = value;
  }
  public resetPcEnfPref() {
    this._pcEnfPref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcEnfPrefInput() {
    return this._pcEnfPref;
  }

  // pc_tag - computed: true, optional: false, required: false
  public get pcTag() {
    return this.getStringAttribute('pc_tag');
  }

  // pref_gr_memb - computed: true, optional: true, required: false
  private _prefGrMemb?: string; 
  public get prefGrMemb() {
    return this.getStringAttribute('pref_gr_memb');
  }
  public set prefGrMemb(value: string) {
    this._prefGrMemb = value;
  }
  public resetPrefGrMemb() {
    this._prefGrMemb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefGrMembInput() {
    return this._prefGrMemb;
  }

  // preferred_group_member - computed: true, optional: true, required: false
  private _preferredGroupMember?: string; 
  public get preferredGroupMember() {
    return this.getStringAttribute('preferred_group_member');
  }
  public set preferredGroupMember(value: string) {
    this._preferredGroupMember = value;
  }
  public resetPreferredGroupMember() {
    this._preferredGroupMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredGroupMemberInput() {
    return this._preferredGroupMember;
  }

  // relation_fv_rs_cust_qos_pol - computed: true, optional: true, required: false
  private _relationFvRsCustQosPol?: string; 
  public get relationFvRsCustQosPol() {
    return this.getStringAttribute('relation_fv_rs_cust_qos_pol');
  }
  public set relationFvRsCustQosPol(value: string) {
    this._relationFvRsCustQosPol = value;
  }
  public resetRelationFvRsCustQosPol() {
    this._relationFvRsCustQosPol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsCustQosPolInput() {
    return this._relationFvRsCustQosPol;
  }

  // relation_fv_rs_intra_epg - computed: true, optional: true, required: false
  private _relationFvRsIntraEpg?: string[]; 
  public get relationFvRsIntraEpg() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_intra_epg'));
  }
  public set relationFvRsIntraEpg(value: string[]) {
    this._relationFvRsIntraEpg = value;
  }
  public resetRelationFvRsIntraEpg() {
    this._relationFvRsIntraEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsIntraEpgInput() {
    return this._relationFvRsIntraEpg;
  }

  // relation_fv_rs_prot_by - computed: true, optional: true, required: false
  private _relationFvRsProtBy?: string[]; 
  public get relationFvRsProtBy() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_prot_by'));
  }
  public set relationFvRsProtBy(value: string[]) {
    this._relationFvRsProtBy = value;
  }
  public resetRelationFvRsProtBy() {
    this._relationFvRsProtBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProtByInput() {
    return this._relationFvRsProtBy;
  }

  // relation_fv_rs_scope - computed: true, optional: true, required: false
  private _relationFvRsScope?: string; 
  public get relationFvRsScope() {
    return this.getStringAttribute('relation_fv_rs_scope');
  }
  public set relationFvRsScope(value: string) {
    this._relationFvRsScope = value;
  }
  public resetRelationFvRsScope() {
    this._relationFvRsScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsScopeInput() {
    return this._relationFvRsScope;
  }

  // relation_fv_rs_sec_inherited - computed: true, optional: true, required: false
  private _relationFvRsSecInherited?: string[]; 
  public get relationFvRsSecInherited() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_fv_rs_sec_inherited'));
  }
  public set relationFvRsSecInherited(value: string[]) {
    this._relationFvRsSecInherited = value;
  }
  public resetRelationFvRsSecInherited() {
    this._relationFvRsSecInherited = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsSecInheritedInput() {
    return this._relationFvRsSecInherited;
  }

  // relation_to_consumed_contracts - computed: true, optional: true, required: false
  private _relationToConsumedContracts = new EndpointSecurityGroupRelationToConsumedContractsList(this, "relation_to_consumed_contracts", true);
  public get relationToConsumedContracts() {
    return this._relationToConsumedContracts;
  }
  public putRelationToConsumedContracts(value: EndpointSecurityGroupRelationToConsumedContracts[] | cdktf.IResolvable) {
    this._relationToConsumedContracts.internalValue = value;
  }
  public resetRelationToConsumedContracts() {
    this._relationToConsumedContracts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToConsumedContractsInput() {
    return this._relationToConsumedContracts.internalValue;
  }

  // relation_to_contract_masters - computed: true, optional: true, required: false
  private _relationToContractMasters = new EndpointSecurityGroupRelationToContractMastersList(this, "relation_to_contract_masters", true);
  public get relationToContractMasters() {
    return this._relationToContractMasters;
  }
  public putRelationToContractMasters(value: EndpointSecurityGroupRelationToContractMasters[] | cdktf.IResolvable) {
    this._relationToContractMasters.internalValue = value;
  }
  public resetRelationToContractMasters() {
    this._relationToContractMasters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToContractMastersInput() {
    return this._relationToContractMasters.internalValue;
  }

  // relation_to_imported_contracts - computed: true, optional: true, required: false
  private _relationToImportedContracts = new EndpointSecurityGroupRelationToImportedContractsList(this, "relation_to_imported_contracts", true);
  public get relationToImportedContracts() {
    return this._relationToImportedContracts;
  }
  public putRelationToImportedContracts(value: EndpointSecurityGroupRelationToImportedContracts[] | cdktf.IResolvable) {
    this._relationToImportedContracts.internalValue = value;
  }
  public resetRelationToImportedContracts() {
    this._relationToImportedContracts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToImportedContractsInput() {
    return this._relationToImportedContracts.internalValue;
  }

  // relation_to_intra_epg_contracts - computed: true, optional: true, required: false
  private _relationToIntraEpgContracts = new EndpointSecurityGroupRelationToIntraEpgContractsList(this, "relation_to_intra_epg_contracts", true);
  public get relationToIntraEpgContracts() {
    return this._relationToIntraEpgContracts;
  }
  public putRelationToIntraEpgContracts(value: EndpointSecurityGroupRelationToIntraEpgContracts[] | cdktf.IResolvable) {
    this._relationToIntraEpgContracts.internalValue = value;
  }
  public resetRelationToIntraEpgContracts() {
    this._relationToIntraEpgContracts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToIntraEpgContractsInput() {
    return this._relationToIntraEpgContracts.internalValue;
  }

  // relation_to_provided_contracts - computed: true, optional: true, required: false
  private _relationToProvidedContracts = new EndpointSecurityGroupRelationToProvidedContractsList(this, "relation_to_provided_contracts", true);
  public get relationToProvidedContracts() {
    return this._relationToProvidedContracts;
  }
  public putRelationToProvidedContracts(value: EndpointSecurityGroupRelationToProvidedContracts[] | cdktf.IResolvable) {
    this._relationToProvidedContracts.internalValue = value;
  }
  public resetRelationToProvidedContracts() {
    this._relationToProvidedContracts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToProvidedContractsInput() {
    return this._relationToProvidedContracts.internalValue;
  }

  // relation_to_vrf - computed: true, optional: true, required: false
  private _relationToVrf = new EndpointSecurityGroupRelationToVrfOutputReference(this, "relation_to_vrf");
  public get relationToVrf() {
    return this._relationToVrf;
  }
  public putRelationToVrf(value: EndpointSecurityGroupRelationToVrf) {
    this._relationToVrf.internalValue = value;
  }
  public resetRelationToVrf() {
    this._relationToVrf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationToVrfInput() {
    return this._relationToVrf.internalValue;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // tags - computed: true, optional: true, required: false
  private _tags = new EndpointSecurityGroupTagsList(this, "tags", true);
  public get tags() {
    return this._tags;
  }
  public putTags(value: EndpointSecurityGroupTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // relation_fv_rs_cons - computed: false, optional: true, required: false
  private _relationFvRsCons = new EndpointSecurityGroupRelationFvRsConsList(this, "relation_fv_rs_cons", true);
  public get relationFvRsCons() {
    return this._relationFvRsCons;
  }
  public putRelationFvRsCons(value: EndpointSecurityGroupRelationFvRsCons[] | cdktf.IResolvable) {
    this._relationFvRsCons.internalValue = value;
  }
  public resetRelationFvRsCons() {
    this._relationFvRsCons.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsConsInput() {
    return this._relationFvRsCons.internalValue;
  }

  // relation_fv_rs_cons_if - computed: false, optional: true, required: false
  private _relationFvRsConsIf = new EndpointSecurityGroupRelationFvRsConsIfList(this, "relation_fv_rs_cons_if", true);
  public get relationFvRsConsIf() {
    return this._relationFvRsConsIf;
  }
  public putRelationFvRsConsIf(value: EndpointSecurityGroupRelationFvRsConsIf[] | cdktf.IResolvable) {
    this._relationFvRsConsIf.internalValue = value;
  }
  public resetRelationFvRsConsIf() {
    this._relationFvRsConsIf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsConsIfInput() {
    return this._relationFvRsConsIf.internalValue;
  }

  // relation_fv_rs_prov - computed: false, optional: true, required: false
  private _relationFvRsProv = new EndpointSecurityGroupRelationFvRsProvList(this, "relation_fv_rs_prov", true);
  public get relationFvRsProv() {
    return this._relationFvRsProv;
  }
  public putRelationFvRsProv(value: EndpointSecurityGroupRelationFvRsProv[] | cdktf.IResolvable) {
    this._relationFvRsProv.internalValue = value;
  }
  public resetRelationFvRsProv() {
    this._relationFvRsProv.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFvRsProvInput() {
    return this._relationFvRsProv.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_state: cdktf.stringToTerraform(this._adminState),
      annotation: cdktf.stringToTerraform(this._annotation),
      annotations: cdktf.listMapper(endpointSecurityGroupAnnotationsToTerraform, false)(this._annotations.internalValue),
      application_profile_dn: cdktf.stringToTerraform(this._applicationProfileDn),
      description: cdktf.stringToTerraform(this._description),
      exception_tag: cdktf.stringToTerraform(this._exceptionTag),
      intra_esg_isolation: cdktf.stringToTerraform(this._intraEsgIsolation),
      match_criteria: cdktf.stringToTerraform(this._matchCriteria),
      match_t: cdktf.stringToTerraform(this._matchT),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      parent_dn: cdktf.stringToTerraform(this._parentDn),
      pc_enf_pref: cdktf.stringToTerraform(this._pcEnfPref),
      pref_gr_memb: cdktf.stringToTerraform(this._prefGrMemb),
      preferred_group_member: cdktf.stringToTerraform(this._preferredGroupMember),
      relation_fv_rs_cust_qos_pol: cdktf.stringToTerraform(this._relationFvRsCustQosPol),
      relation_fv_rs_intra_epg: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsIntraEpg),
      relation_fv_rs_prot_by: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsProtBy),
      relation_fv_rs_scope: cdktf.stringToTerraform(this._relationFvRsScope),
      relation_fv_rs_sec_inherited: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationFvRsSecInherited),
      relation_to_consumed_contracts: cdktf.listMapper(endpointSecurityGroupRelationToConsumedContractsToTerraform, false)(this._relationToConsumedContracts.internalValue),
      relation_to_contract_masters: cdktf.listMapper(endpointSecurityGroupRelationToContractMastersToTerraform, false)(this._relationToContractMasters.internalValue),
      relation_to_imported_contracts: cdktf.listMapper(endpointSecurityGroupRelationToImportedContractsToTerraform, false)(this._relationToImportedContracts.internalValue),
      relation_to_intra_epg_contracts: cdktf.listMapper(endpointSecurityGroupRelationToIntraEpgContractsToTerraform, false)(this._relationToIntraEpgContracts.internalValue),
      relation_to_provided_contracts: cdktf.listMapper(endpointSecurityGroupRelationToProvidedContractsToTerraform, false)(this._relationToProvidedContracts.internalValue),
      relation_to_vrf: endpointSecurityGroupRelationToVrfToTerraform(this._relationToVrf.internalValue),
      tags: cdktf.listMapper(endpointSecurityGroupTagsToTerraform, false)(this._tags.internalValue),
      relation_fv_rs_cons: cdktf.listMapper(endpointSecurityGroupRelationFvRsConsToTerraform, true)(this._relationFvRsCons.internalValue),
      relation_fv_rs_cons_if: cdktf.listMapper(endpointSecurityGroupRelationFvRsConsIfToTerraform, true)(this._relationFvRsConsIf.internalValue),
      relation_fv_rs_prov: cdktf.listMapper(endpointSecurityGroupRelationFvRsProvToTerraform, true)(this._relationFvRsProv.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin_state: {
        value: cdktf.stringToHclTerraform(this._adminState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotations: {
        value: cdktf.listMapperHcl(endpointSecurityGroupAnnotationsToHclTerraform, false)(this._annotations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EndpointSecurityGroupAnnotationsList",
      },
      application_profile_dn: {
        value: cdktf.stringToHclTerraform(this._applicationProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      exception_tag: {
        value: cdktf.stringToHclTerraform(this._exceptionTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intra_esg_isolation: {
        value: cdktf.stringToHclTerraform(this._intraEsgIsolation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_criteria: {
        value: cdktf.stringToHclTerraform(this._matchCriteria),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_t: {
        value: cdktf.stringToHclTerraform(this._matchT),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_dn: {
        value: cdktf.stringToHclTerraform(this._parentDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pc_enf_pref: {
        value: cdktf.stringToHclTerraform(this._pcEnfPref),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pref_gr_memb: {
        value: cdktf.stringToHclTerraform(this._prefGrMemb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_group_member: {
        value: cdktf.stringToHclTerraform(this._preferredGroupMember),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_cust_qos_pol: {
        value: cdktf.stringToHclTerraform(this._relationFvRsCustQosPol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_intra_epg: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsIntraEpg),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_prot_by: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsProtBy),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_fv_rs_scope: {
        value: cdktf.stringToHclTerraform(this._relationFvRsScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_fv_rs_sec_inherited: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationFvRsSecInherited),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_to_consumed_contracts: {
        value: cdktf.listMapperHcl(endpointSecurityGroupRelationToConsumedContractsToHclTerraform, false)(this._relationToConsumedContracts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EndpointSecurityGroupRelationToConsumedContractsList",
      },
      relation_to_contract_masters: {
        value: cdktf.listMapperHcl(endpointSecurityGroupRelationToContractMastersToHclTerraform, false)(this._relationToContractMasters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EndpointSecurityGroupRelationToContractMastersList",
      },
      relation_to_imported_contracts: {
        value: cdktf.listMapperHcl(endpointSecurityGroupRelationToImportedContractsToHclTerraform, false)(this._relationToImportedContracts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EndpointSecurityGroupRelationToImportedContractsList",
      },
      relation_to_intra_epg_contracts: {
        value: cdktf.listMapperHcl(endpointSecurityGroupRelationToIntraEpgContractsToHclTerraform, false)(this._relationToIntraEpgContracts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EndpointSecurityGroupRelationToIntraEpgContractsList",
      },
      relation_to_provided_contracts: {
        value: cdktf.listMapperHcl(endpointSecurityGroupRelationToProvidedContractsToHclTerraform, false)(this._relationToProvidedContracts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EndpointSecurityGroupRelationToProvidedContractsList",
      },
      relation_to_vrf: {
        value: endpointSecurityGroupRelationToVrfToHclTerraform(this._relationToVrf.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EndpointSecurityGroupRelationToVrf",
      },
      tags: {
        value: cdktf.listMapperHcl(endpointSecurityGroupTagsToHclTerraform, false)(this._tags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EndpointSecurityGroupTagsList",
      },
      relation_fv_rs_cons: {
        value: cdktf.listMapperHcl(endpointSecurityGroupRelationFvRsConsToHclTerraform, true)(this._relationFvRsCons.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EndpointSecurityGroupRelationFvRsConsList",
      },
      relation_fv_rs_cons_if: {
        value: cdktf.listMapperHcl(endpointSecurityGroupRelationFvRsConsIfToHclTerraform, true)(this._relationFvRsConsIf.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EndpointSecurityGroupRelationFvRsConsIfList",
      },
      relation_fv_rs_prov: {
        value: cdktf.listMapperHcl(endpointSecurityGroupRelationFvRsProvToHclTerraform, true)(this._relationFvRsProv.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "EndpointSecurityGroupRelationFvRsProvList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
