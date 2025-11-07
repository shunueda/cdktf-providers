// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationSamlIdentityProviderOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#id DataThunderAamAuthenticationSamlIdentityProviderOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SAML authentication identity provider name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#name DataThunderAamAuthenticationSamlIdentityProviderOper#name}
  */
  readonly name: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#oper DataThunderAamAuthenticationSamlIdentityProviderOper#oper}
  */
  readonly oper?: DataThunderAamAuthenticationSamlIdentityProviderOperOper;
}
export interface DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#aqs_binding DataThunderAamAuthenticationSamlIdentityProviderOper#aqs_binding}
  */
  readonly aqsBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#aqs_location DataThunderAamAuthenticationSamlIdentityProviderOper#aqs_location}
  */
  readonly aqsLocation?: string;
}

export function dataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStructToTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aqs_binding: cdktf.stringToTerraform(struct!.aqsBinding),
    aqs_location: cdktf.stringToTerraform(struct!.aqsLocation),
  }
}


export function dataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStructToHclTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aqs_binding: {
      value: cdktf.stringToHclTerraform(struct!.aqsBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aqs_location: {
      value: cdktf.stringToHclTerraform(struct!.aqsLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aqsBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.aqsBinding = this._aqsBinding;
    }
    if (this._aqsLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.aqsLocation = this._aqsLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aqsBinding = undefined;
      this._aqsLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aqsBinding = value.aqsBinding;
      this._aqsLocation = value.aqsLocation;
    }
  }

  // aqs_binding - computed: false, optional: true, required: false
  private _aqsBinding?: string; 
  public get aqsBinding() {
    return this.getStringAttribute('aqs_binding');
  }
  public set aqsBinding(value: string) {
    this._aqsBinding = value;
  }
  public resetAqsBinding() {
    this._aqsBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aqsBindingInput() {
    return this._aqsBinding;
  }

  // aqs_location - computed: false, optional: true, required: false
  private _aqsLocation?: string; 
  public get aqsLocation() {
    return this.getStringAttribute('aqs_location');
  }
  public set aqsLocation(value: string) {
    this._aqsLocation = value;
  }
  public resetAqsLocation() {
    this._aqsLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aqsLocationInput() {
    return this._aqsLocation;
  }
}

export class DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStructOutputReference {
    return new DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#ars_binding DataThunderAamAuthenticationSamlIdentityProviderOper#ars_binding}
  */
  readonly arsBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#ars_index DataThunderAamAuthenticationSamlIdentityProviderOper#ars_index}
  */
  readonly arsIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#ars_location DataThunderAamAuthenticationSamlIdentityProviderOper#ars_location}
  */
  readonly arsLocation?: string;
}

export function dataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStructToTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ars_binding: cdktf.stringToTerraform(struct!.arsBinding),
    ars_index: cdktf.numberToTerraform(struct!.arsIndex),
    ars_location: cdktf.stringToTerraform(struct!.arsLocation),
  }
}


export function dataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStructToHclTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ars_binding: {
      value: cdktf.stringToHclTerraform(struct!.arsBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ars_index: {
      value: cdktf.numberToHclTerraform(struct!.arsIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ars_location: {
      value: cdktf.stringToHclTerraform(struct!.arsLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arsBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.arsBinding = this._arsBinding;
    }
    if (this._arsIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.arsIndex = this._arsIndex;
    }
    if (this._arsLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.arsLocation = this._arsLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arsBinding = undefined;
      this._arsIndex = undefined;
      this._arsLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arsBinding = value.arsBinding;
      this._arsIndex = value.arsIndex;
      this._arsLocation = value.arsLocation;
    }
  }

  // ars_binding - computed: false, optional: true, required: false
  private _arsBinding?: string; 
  public get arsBinding() {
    return this.getStringAttribute('ars_binding');
  }
  public set arsBinding(value: string) {
    this._arsBinding = value;
  }
  public resetArsBinding() {
    this._arsBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arsBindingInput() {
    return this._arsBinding;
  }

  // ars_index - computed: false, optional: true, required: false
  private _arsIndex?: number; 
  public get arsIndex() {
    return this.getNumberAttribute('ars_index');
  }
  public set arsIndex(value: number) {
    this._arsIndex = value;
  }
  public resetArsIndex() {
    this._arsIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arsIndexInput() {
    return this._arsIndex;
  }

  // ars_location - computed: false, optional: true, required: false
  private _arsLocation?: string; 
  public get arsLocation() {
    return this.getStringAttribute('ars_location');
  }
  public set arsLocation(value: string) {
    this._arsLocation = value;
  }
  public resetArsLocation() {
    this._arsLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arsLocationInput() {
    return this._arsLocation;
  }
}

export class DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStructOutputReference {
    return new DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#slo_binding DataThunderAamAuthenticationSamlIdentityProviderOper#slo_binding}
  */
  readonly sloBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#slo_location DataThunderAamAuthenticationSamlIdentityProviderOper#slo_location}
  */
  readonly sloLocation?: string;
}

export function dataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStructToTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slo_binding: cdktf.stringToTerraform(struct!.sloBinding),
    slo_location: cdktf.stringToTerraform(struct!.sloLocation),
  }
}


export function dataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStructToHclTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slo_binding: {
      value: cdktf.stringToHclTerraform(struct!.sloBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_location: {
      value: cdktf.stringToHclTerraform(struct!.sloLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sloBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloBinding = this._sloBinding;
    }
    if (this._sloLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloLocation = this._sloLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sloBinding = undefined;
      this._sloLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sloBinding = value.sloBinding;
      this._sloLocation = value.sloLocation;
    }
  }

  // slo_binding - computed: false, optional: true, required: false
  private _sloBinding?: string; 
  public get sloBinding() {
    return this.getStringAttribute('slo_binding');
  }
  public set sloBinding(value: string) {
    this._sloBinding = value;
  }
  public resetSloBinding() {
    this._sloBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloBindingInput() {
    return this._sloBinding;
  }

  // slo_location - computed: false, optional: true, required: false
  private _sloLocation?: string; 
  public get sloLocation() {
    return this.getStringAttribute('slo_location');
  }
  public set sloLocation(value: string) {
    this._sloLocation = value;
  }
  public resetSloLocation() {
    this._sloLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloLocationInput() {
    return this._sloLocation;
  }
}

export class DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStructOutputReference {
    return new DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#sso_binding DataThunderAamAuthenticationSamlIdentityProviderOper#sso_binding}
  */
  readonly ssoBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#sso_location DataThunderAamAuthenticationSamlIdentityProviderOper#sso_location}
  */
  readonly ssoLocation?: string;
}

export function dataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStructToTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sso_binding: cdktf.stringToTerraform(struct!.ssoBinding),
    sso_location: cdktf.stringToTerraform(struct!.ssoLocation),
  }
}


export function dataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStructToHclTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sso_binding: {
      value: cdktf.stringToHclTerraform(struct!.ssoBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_location: {
      value: cdktf.stringToHclTerraform(struct!.ssoLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ssoBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoBinding = this._ssoBinding;
    }
    if (this._ssoLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoLocation = this._ssoLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ssoBinding = undefined;
      this._ssoLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ssoBinding = value.ssoBinding;
      this._ssoLocation = value.ssoLocation;
    }
  }

  // sso_binding - computed: false, optional: true, required: false
  private _ssoBinding?: string; 
  public get ssoBinding() {
    return this.getStringAttribute('sso_binding');
  }
  public set ssoBinding(value: string) {
    this._ssoBinding = value;
  }
  public resetSsoBinding() {
    this._ssoBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoBindingInput() {
    return this._ssoBinding;
  }

  // sso_location - computed: false, optional: true, required: false
  private _ssoLocation?: string; 
  public get ssoLocation() {
    return this.getStringAttribute('sso_location');
  }
  public set ssoLocation(value: string) {
    this._ssoLocation = value;
  }
  public resetSsoLocation() {
    this._ssoLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoLocationInput() {
    return this._ssoLocation;
  }
}

export class DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStructOutputReference {
    return new DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationSamlIdentityProviderOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#cert DataThunderAamAuthenticationSamlIdentityProviderOper#cert}
  */
  readonly cert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#entity_id DataThunderAamAuthenticationSamlIdentityProviderOper#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#md DataThunderAamAuthenticationSamlIdentityProviderOper#md}
  */
  readonly md?: string;
  /**
  * aqs_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#aqs_list DataThunderAamAuthenticationSamlIdentityProviderOper#aqs_list}
  */
  readonly aqsList?: DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStruct[] | cdktf.IResolvable;
  /**
  * ars_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#ars_list DataThunderAamAuthenticationSamlIdentityProviderOper#ars_list}
  */
  readonly arsList?: DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStruct[] | cdktf.IResolvable;
  /**
  * slo_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#slo_list DataThunderAamAuthenticationSamlIdentityProviderOper#slo_list}
  */
  readonly sloList?: DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStruct[] | cdktf.IResolvable;
  /**
  * sso_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#sso_list DataThunderAamAuthenticationSamlIdentityProviderOper#sso_list}
  */
  readonly ssoList?: DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStruct[] | cdktf.IResolvable;
}

export function dataThunderAamAuthenticationSamlIdentityProviderOperOperToTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderOperOperOutputReference | DataThunderAamAuthenticationSamlIdentityProviderOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    md: cdktf.stringToTerraform(struct!.md),
    aqs_list: cdktf.listMapper(dataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStructToTerraform, true)(struct!.aqsList),
    ars_list: cdktf.listMapper(dataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStructToTerraform, true)(struct!.arsList),
    slo_list: cdktf.listMapper(dataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStructToTerraform, true)(struct!.sloList),
    sso_list: cdktf.listMapper(dataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStructToTerraform, true)(struct!.ssoList),
  }
}


export function dataThunderAamAuthenticationSamlIdentityProviderOperOperToHclTerraform(struct?: DataThunderAamAuthenticationSamlIdentityProviderOperOperOutputReference | DataThunderAamAuthenticationSamlIdentityProviderOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md: {
      value: cdktf.stringToHclTerraform(struct!.md),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aqs_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStructToHclTerraform, true)(struct!.aqsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStructList",
    },
    ars_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStructToHclTerraform, true)(struct!.arsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStructList",
    },
    slo_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStructToHclTerraform, true)(struct!.sloList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStructList",
    },
    sso_list: {
      value: cdktf.listMapperHcl(dataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStructToHclTerraform, true)(struct!.ssoList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSamlIdentityProviderOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationSamlIdentityProviderOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._md !== undefined) {
      hasAnyValues = true;
      internalValueResult.md = this._md;
    }
    if (this._aqsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aqsList = this._aqsList?.internalValue;
    }
    if (this._arsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.arsList = this._arsList?.internalValue;
    }
    if (this._sloList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloList = this._sloList?.internalValue;
    }
    if (this._ssoList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoList = this._ssoList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSamlIdentityProviderOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._entityId = undefined;
      this._md = undefined;
      this._aqsList.internalValue = undefined;
      this._arsList.internalValue = undefined;
      this._sloList.internalValue = undefined;
      this._ssoList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._entityId = value.entityId;
      this._md = value.md;
      this._aqsList.internalValue = value.aqsList;
      this._arsList.internalValue = value.arsList;
      this._sloList.internalValue = value.sloList;
      this._ssoList.internalValue = value.ssoList;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // entity_id - computed: false, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // md - computed: false, optional: true, required: false
  private _md?: string; 
  public get md() {
    return this.getStringAttribute('md');
  }
  public set md(value: string) {
    this._md = value;
  }
  public resetMd() {
    this._md = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mdInput() {
    return this._md;
  }

  // aqs_list - computed: false, optional: true, required: false
  private _aqsList = new DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStructList(this, "aqs_list", false);
  public get aqsList() {
    return this._aqsList;
  }
  public putAqsList(value: DataThunderAamAuthenticationSamlIdentityProviderOperOperAqsListStruct[] | cdktf.IResolvable) {
    this._aqsList.internalValue = value;
  }
  public resetAqsList() {
    this._aqsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aqsListInput() {
    return this._aqsList.internalValue;
  }

  // ars_list - computed: false, optional: true, required: false
  private _arsList = new DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStructList(this, "ars_list", false);
  public get arsList() {
    return this._arsList;
  }
  public putArsList(value: DataThunderAamAuthenticationSamlIdentityProviderOperOperArsListStruct[] | cdktf.IResolvable) {
    this._arsList.internalValue = value;
  }
  public resetArsList() {
    this._arsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arsListInput() {
    return this._arsList.internalValue;
  }

  // slo_list - computed: false, optional: true, required: false
  private _sloList = new DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStructList(this, "slo_list", false);
  public get sloList() {
    return this._sloList;
  }
  public putSloList(value: DataThunderAamAuthenticationSamlIdentityProviderOperOperSloListStruct[] | cdktf.IResolvable) {
    this._sloList.internalValue = value;
  }
  public resetSloList() {
    this._sloList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloListInput() {
    return this._sloList.internalValue;
  }

  // sso_list - computed: false, optional: true, required: false
  private _ssoList = new DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStructList(this, "sso_list", false);
  public get ssoList() {
    return this._ssoList;
  }
  public putSsoList(value: DataThunderAamAuthenticationSamlIdentityProviderOperOperSsoListStruct[] | cdktf.IResolvable) {
    this._ssoList.internalValue = value;
  }
  public resetSsoList() {
    this._ssoList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoListInput() {
    return this._ssoList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper thunder_aam_authentication_saml_identity_provider_oper}
*/
export class DataThunderAamAuthenticationSamlIdentityProviderOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_saml_identity_provider_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationSamlIdentityProviderOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationSamlIdentityProviderOper to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationSamlIdentityProviderOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationSamlIdentityProviderOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_saml_identity_provider_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_saml_identity_provider_oper thunder_aam_authentication_saml_identity_provider_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationSamlIdentityProviderOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationSamlIdentityProviderOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_saml_identity_provider_oper',
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderAamAuthenticationSamlIdentityProviderOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderAamAuthenticationSamlIdentityProviderOperOper) {
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
      name: cdktf.stringToTerraform(this._name),
      oper: dataThunderAamAuthenticationSamlIdentityProviderOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderAamAuthenticationSamlIdentityProviderOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationSamlIdentityProviderOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
