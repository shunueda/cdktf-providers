// https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgNacruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * enum: `allow`, `block`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#action OrgNacrule#action}
  */
  readonly action: string;
  /**
  * All optional, this goes into Access-Accept
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#apply_tags OrgNacrule#apply_tags}
  */
  readonly applyTags?: string[];
  /**
  * Enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#enabled OrgNacrule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Guest portal authorization state. enum: `authorized`, `unknown`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#guest_auth_state OrgNacrule#guest_auth_state}
  */
  readonly guestAuthState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#matching OrgNacrule#matching}
  */
  readonly matching?: OrgNacruleMatching;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#name OrgNacrule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#not_matching OrgNacrule#not_matching}
  */
  readonly notMatching?: OrgNacruleNotMatching;
  /**
  * Order of the rule, lower value implies higher priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#order OrgNacrule#order}
  */
  readonly order: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#org_id OrgNacrule#org_id}
  */
  readonly orgId: string;
}
export interface OrgNacruleMatching {
  /**
  * enum: `cert`, `device-auth`, `eap-teap`, `eap-tls`, `eap-ttls`, `idp`, `mab`, `eap-peap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#auth_type OrgNacrule#auth_type}
  */
  readonly authType?: string;
  /**
  * List of client device families to match. Refer to [List Fingerprint Types]]($e/Constants%20Definitions/listFingerprintTypes) for allowed family values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#family OrgNacrule#family}
  */
  readonly family?: string[];
  /**
  * List of client device models to match. Refer to [List Fingerprint Types]]($e/Constants%20Definitions/listFingerprintTypes) for allowed model values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#mfg OrgNacrule#mfg}
  */
  readonly mfg?: string[];
  /**
  * List of client device manufacturers to match. Refer to [List Fingerprint Types]]($e/Constants%20Definitions/listFingerprintTypes) for allowed mfg values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#model OrgNacrule#model}
  */
  readonly model?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#nactags OrgNacrule#nactags}
  */
  readonly nactags?: string[];
  /**
  * List of client device os types to match. Refer to [List Fingerprint Types]]($e/Constants%20Definitions/listFingerprintTypes) for allowed os_type values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#os_type OrgNacrule#os_type}
  */
  readonly osType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#port_types OrgNacrule#port_types}
  */
  readonly portTypes?: string[];
  /**
  * List of site ids to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#site_ids OrgNacrule#site_ids}
  */
  readonly siteIds?: string[];
  /**
  * List of sitegroup ids to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#sitegroup_ids OrgNacrule#sitegroup_ids}
  */
  readonly sitegroupIds?: string[];
  /**
  * List of vendors to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#vendor OrgNacrule#vendor}
  */
  readonly vendor?: string[];
}

export function orgNacruleMatchingToTerraform(struct?: OrgNacruleMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    family: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.family),
    mfg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mfg),
    model: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.model),
    nactags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nactags),
    os_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.osType),
    port_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portTypes),
    site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteIds),
    sitegroup_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sitegroupIds),
    vendor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vendor),
  }
}


export function orgNacruleMatchingToHclTerraform(struct?: OrgNacruleMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.family),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mfg: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mfg),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    model: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.model),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nactags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nactags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    os_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.osType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sitegroup_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sitegroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vendor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vendor),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNacruleMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgNacruleMatching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._mfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfg = this._mfg;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._nactags !== undefined) {
      hasAnyValues = true;
      internalValueResult.nactags = this._nactags;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._portTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.portTypes = this._portTypes;
    }
    if (this._siteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteIds = this._siteIds;
    }
    if (this._sitegroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sitegroupIds = this._sitegroupIds;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNacruleMatching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._family = undefined;
      this._mfg = undefined;
      this._model = undefined;
      this._nactags = undefined;
      this._osType = undefined;
      this._portTypes = undefined;
      this._siteIds = undefined;
      this._sitegroupIds = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._family = value.family;
      this._mfg = value.mfg;
      this._model = value.model;
      this._nactags = value.nactags;
      this._osType = value.osType;
      this._portTypes = value.portTypes;
      this._siteIds = value.siteIds;
      this._sitegroupIds = value.sitegroupIds;
      this._vendor = value.vendor;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // family - computed: true, optional: true, required: false
  private _family?: string[]; 
  public get family() {
    return this.getListAttribute('family');
  }
  public set family(value: string[]) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // mfg - computed: true, optional: true, required: false
  private _mfg?: string[]; 
  public get mfg() {
    return this.getListAttribute('mfg');
  }
  public set mfg(value: string[]) {
    this._mfg = value;
  }
  public resetMfg() {
    this._mfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfgInput() {
    return this._mfg;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string[]; 
  public get model() {
    return this.getListAttribute('model');
  }
  public set model(value: string[]) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // nactags - computed: true, optional: true, required: false
  private _nactags?: string[]; 
  public get nactags() {
    return this.getListAttribute('nactags');
  }
  public set nactags(value: string[]) {
    this._nactags = value;
  }
  public resetNactags() {
    this._nactags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nactagsInput() {
    return this._nactags;
  }

  // os_type - computed: true, optional: true, required: false
  private _osType?: string[]; 
  public get osType() {
    return this.getListAttribute('os_type');
  }
  public set osType(value: string[]) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // port_types - computed: true, optional: true, required: false
  private _portTypes?: string[]; 
  public get portTypes() {
    return this.getListAttribute('port_types');
  }
  public set portTypes(value: string[]) {
    this._portTypes = value;
  }
  public resetPortTypes() {
    this._portTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypesInput() {
    return this._portTypes;
  }

  // site_ids - computed: true, optional: true, required: false
  private _siteIds?: string[]; 
  public get siteIds() {
    return this.getListAttribute('site_ids');
  }
  public set siteIds(value: string[]) {
    this._siteIds = value;
  }
  public resetSiteIds() {
    this._siteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdsInput() {
    return this._siteIds;
  }

  // sitegroup_ids - computed: true, optional: true, required: false
  private _sitegroupIds?: string[]; 
  public get sitegroupIds() {
    return this.getListAttribute('sitegroup_ids');
  }
  public set sitegroupIds(value: string[]) {
    this._sitegroupIds = value;
  }
  public resetSitegroupIds() {
    this._sitegroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitegroupIdsInput() {
    return this._sitegroupIds;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string[]; 
  public get vendor() {
    return this.getListAttribute('vendor');
  }
  public set vendor(value: string[]) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}
export interface OrgNacruleNotMatching {
  /**
  * enum: `cert`, `device-auth`, `eap-teap`, `eap-tls`, `eap-ttls`, `idp`, `mab`, `eap-peap`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#auth_type OrgNacrule#auth_type}
  */
  readonly authType?: string;
  /**
  * List of client device families to match. Refer to [List Fingerprint Types]]($e/Constants%20Definitions/listFingerprintTypes) for allowed family values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#family OrgNacrule#family}
  */
  readonly family?: string[];
  /**
  * List of client device models to match. Refer to [List Fingerprint Types]]($e/Constants%20Definitions/listFingerprintTypes) for allowed model values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#mfg OrgNacrule#mfg}
  */
  readonly mfg?: string[];
  /**
  * List of client device manufacturers to match. Refer to [List Fingerprint Types]]($e/Constants%20Definitions/listFingerprintTypes) for allowed mfg values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#model OrgNacrule#model}
  */
  readonly model?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#nactags OrgNacrule#nactags}
  */
  readonly nactags?: string[];
  /**
  * List of client device os types to match. Refer to [List Fingerprint Types]]($e/Constants%20Definitions/listFingerprintTypes) for allowed os_type values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#os_type OrgNacrule#os_type}
  */
  readonly osType?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#port_types OrgNacrule#port_types}
  */
  readonly portTypes?: string[];
  /**
  * List of site ids to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#site_ids OrgNacrule#site_ids}
  */
  readonly siteIds?: string[];
  /**
  * List of sitegroup ids to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#sitegroup_ids OrgNacrule#sitegroup_ids}
  */
  readonly sitegroupIds?: string[];
  /**
  * List of vendors to match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#vendor OrgNacrule#vendor}
  */
  readonly vendor?: string[];
}

export function orgNacruleNotMatchingToTerraform(struct?: OrgNacruleNotMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    family: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.family),
    mfg: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mfg),
    model: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.model),
    nactags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nactags),
    os_type: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.osType),
    port_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portTypes),
    site_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.siteIds),
    sitegroup_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sitegroupIds),
    vendor: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vendor),
  }
}


export function orgNacruleNotMatchingToHclTerraform(struct?: OrgNacruleNotMatching | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    family: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.family),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mfg: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mfg),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    model: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.model),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    nactags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nactags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    os_type: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.osType),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    port_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    site_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.siteIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sitegroup_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sitegroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vendor: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vendor),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNacruleNotMatchingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgNacruleNotMatching | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._family !== undefined) {
      hasAnyValues = true;
      internalValueResult.family = this._family;
    }
    if (this._mfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfg = this._mfg;
    }
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._nactags !== undefined) {
      hasAnyValues = true;
      internalValueResult.nactags = this._nactags;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._portTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.portTypes = this._portTypes;
    }
    if (this._siteIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteIds = this._siteIds;
    }
    if (this._sitegroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.sitegroupIds = this._sitegroupIds;
    }
    if (this._vendor !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendor = this._vendor;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNacruleNotMatching | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authType = undefined;
      this._family = undefined;
      this._mfg = undefined;
      this._model = undefined;
      this._nactags = undefined;
      this._osType = undefined;
      this._portTypes = undefined;
      this._siteIds = undefined;
      this._sitegroupIds = undefined;
      this._vendor = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authType = value.authType;
      this._family = value.family;
      this._mfg = value.mfg;
      this._model = value.model;
      this._nactags = value.nactags;
      this._osType = value.osType;
      this._portTypes = value.portTypes;
      this._siteIds = value.siteIds;
      this._sitegroupIds = value.sitegroupIds;
      this._vendor = value.vendor;
    }
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // family - computed: true, optional: true, required: false
  private _family?: string[]; 
  public get family() {
    return this.getListAttribute('family');
  }
  public set family(value: string[]) {
    this._family = value;
  }
  public resetFamily() {
    this._family = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyInput() {
    return this._family;
  }

  // mfg - computed: true, optional: true, required: false
  private _mfg?: string[]; 
  public get mfg() {
    return this.getListAttribute('mfg');
  }
  public set mfg(value: string[]) {
    this._mfg = value;
  }
  public resetMfg() {
    this._mfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfgInput() {
    return this._mfg;
  }

  // model - computed: true, optional: true, required: false
  private _model?: string[]; 
  public get model() {
    return this.getListAttribute('model');
  }
  public set model(value: string[]) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // nactags - computed: true, optional: true, required: false
  private _nactags?: string[]; 
  public get nactags() {
    return this.getListAttribute('nactags');
  }
  public set nactags(value: string[]) {
    this._nactags = value;
  }
  public resetNactags() {
    this._nactags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nactagsInput() {
    return this._nactags;
  }

  // os_type - computed: true, optional: true, required: false
  private _osType?: string[]; 
  public get osType() {
    return this.getListAttribute('os_type');
  }
  public set osType(value: string[]) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // port_types - computed: true, optional: true, required: false
  private _portTypes?: string[]; 
  public get portTypes() {
    return this.getListAttribute('port_types');
  }
  public set portTypes(value: string[]) {
    this._portTypes = value;
  }
  public resetPortTypes() {
    this._portTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portTypesInput() {
    return this._portTypes;
  }

  // site_ids - computed: true, optional: true, required: false
  private _siteIds?: string[]; 
  public get siteIds() {
    return this.getListAttribute('site_ids');
  }
  public set siteIds(value: string[]) {
    this._siteIds = value;
  }
  public resetSiteIds() {
    this._siteIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdsInput() {
    return this._siteIds;
  }

  // sitegroup_ids - computed: true, optional: true, required: false
  private _sitegroupIds?: string[]; 
  public get sitegroupIds() {
    return this.getListAttribute('sitegroup_ids');
  }
  public set sitegroupIds(value: string[]) {
    this._sitegroupIds = value;
  }
  public resetSitegroupIds() {
    this._sitegroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sitegroupIdsInput() {
    return this._sitegroupIds;
  }

  // vendor - computed: true, optional: true, required: false
  private _vendor?: string[]; 
  public get vendor() {
    return this.getListAttribute('vendor');
  }
  public set vendor(value: string[]) {
    this._vendor = value;
  }
  public resetVendor() {
    this._vendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorInput() {
    return this._vendor;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule mist_org_nacrule}
*/
export class OrgNacrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_nacrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgNacrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgNacrule to import
  * @param importFromId The id of the existing OrgNacrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgNacrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_nacrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.0/docs/resources/org_nacrule mist_org_nacrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgNacruleConfig
  */
  public constructor(scope: Construct, id: string, config: OrgNacruleConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_nacrule',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._applyTags = config.applyTags;
    this._enabled = config.enabled;
    this._guestAuthState = config.guestAuthState;
    this._matching.internalValue = config.matching;
    this._name = config.name;
    this._notMatching.internalValue = config.notMatching;
    this._order = config.order;
    this._orgId = config.orgId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // apply_tags - computed: true, optional: true, required: false
  private _applyTags?: string[]; 
  public get applyTags() {
    return this.getListAttribute('apply_tags');
  }
  public set applyTags(value: string[]) {
    this._applyTags = value;
  }
  public resetApplyTags() {
    this._applyTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyTagsInput() {
    return this._applyTags;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // guest_auth_state - computed: false, optional: true, required: false
  private _guestAuthState?: string; 
  public get guestAuthState() {
    return this.getStringAttribute('guest_auth_state');
  }
  public set guestAuthState(value: string) {
    this._guestAuthState = value;
  }
  public resetGuestAuthState() {
    this._guestAuthState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guestAuthStateInput() {
    return this._guestAuthState;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // matching - computed: false, optional: true, required: false
  private _matching = new OrgNacruleMatchingOutputReference(this, "matching");
  public get matching() {
    return this._matching;
  }
  public putMatching(value: OrgNacruleMatching) {
    this._matching.internalValue = value;
  }
  public resetMatching() {
    this._matching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingInput() {
    return this._matching.internalValue;
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

  // not_matching - computed: false, optional: true, required: false
  private _notMatching = new OrgNacruleNotMatchingOutputReference(this, "not_matching");
  public get notMatching() {
    return this._notMatching;
  }
  public putNotMatching(value: OrgNacruleNotMatching) {
    this._notMatching.internalValue = value;
  }
  public resetNotMatching() {
    this._notMatching.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notMatchingInput() {
    return this._notMatching.internalValue;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      apply_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applyTags),
      enabled: cdktf.booleanToTerraform(this._enabled),
      guest_auth_state: cdktf.stringToTerraform(this._guestAuthState),
      matching: orgNacruleMatchingToTerraform(this._matching.internalValue),
      name: cdktf.stringToTerraform(this._name),
      not_matching: orgNacruleNotMatchingToTerraform(this._notMatching.internalValue),
      order: cdktf.numberToTerraform(this._order),
      org_id: cdktf.stringToTerraform(this._orgId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apply_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applyTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      guest_auth_state: {
        value: cdktf.stringToHclTerraform(this._guestAuthState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      matching: {
        value: orgNacruleMatchingToHclTerraform(this._matching.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgNacruleMatching",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      not_matching: {
        value: orgNacruleNotMatchingToHclTerraform(this._notMatching.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgNacruleNotMatching",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
