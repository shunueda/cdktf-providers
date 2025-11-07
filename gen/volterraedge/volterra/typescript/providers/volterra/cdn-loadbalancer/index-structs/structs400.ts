import * as cdktf from 'cdktf';
import { CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity,
cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityToTerraform,
cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityToHclTerraform,
CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityOutputReference,
CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates,
cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesToTerraform,
cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesToHclTerraform,
CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesList,
CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams,
cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsToTerraform,
cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsToHclTerraform,
CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsOutputReference } from './structs0'
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#default_security CdnLoadbalancer#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#low_security CdnLoadbalancer#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#medium_security CdnLoadbalancer#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_security CdnLoadbalancer#custom_security}
  */
  readonly customSecurity?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#xfcc_header_elements CdnLoadbalancer#xfcc_header_elements}
  */
  readonly xfccHeaderElements: string[];
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xfcc_header_elements: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xfccHeaderElements),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xfcc_header_elements: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xfccHeaderElements),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xfccHeaderElements !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccHeaderElements = this._xfccHeaderElements;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._xfccHeaderElements = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._xfccHeaderElements = value.xfccHeaderElements;
    }
  }

  // xfcc_header_elements - computed: false, optional: false, required: true
  private _xfccHeaderElements?: string[]; 
  public get xfccHeaderElements() {
    return this.getListAttribute('xfcc_header_elements');
  }
  public set xfccHeaderElements(value: string[]) {
    this._xfccHeaderElements = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccHeaderElementsInput() {
    return this._xfccHeaderElements;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#client_certificate_optional CdnLoadbalancer#client_certificate_optional}
  */
  readonly clientCertificateOptional?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#no_crl CdnLoadbalancer#no_crl}
  */
  readonly noCrl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#trusted_ca_url CdnLoadbalancer#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#xfcc_disabled CdnLoadbalancer#xfcc_disabled}
  */
  readonly xfccDisabled?: boolean | cdktf.IResolvable;
  /**
  * crl block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#crl CdnLoadbalancer#crl}
  */
  readonly crl?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#trusted_ca CdnLoadbalancer#trusted_ca}
  */
  readonly trustedCa?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa;
  /**
  * xfcc_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#xfcc_options CdnLoadbalancer#xfcc_options}
  */
  readonly xfccOptions?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_certificate_optional: cdktf.booleanToTerraform(struct!.clientCertificateOptional),
    no_crl: cdktf.booleanToTerraform(struct!.noCrl),
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    xfcc_disabled: cdktf.booleanToTerraform(struct!.xfccDisabled),
    crl: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlToTerraform(struct!.crl),
    trusted_ca: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaToTerraform(struct!.trustedCa),
    xfcc_options: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsToTerraform(struct!.xfccOptions),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_certificate_optional: {
      value: cdktf.booleanToHclTerraform(struct!.clientCertificateOptional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_crl: {
      value: cdktf.booleanToHclTerraform(struct!.noCrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xfcc_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.xfccDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    crl: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlToHclTerraform(struct!.crl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlList",
    },
    trusted_ca: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaList",
    },
    xfcc_options: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsToHclTerraform(struct!.xfccOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertificateOptional !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertificateOptional = this._clientCertificateOptional;
    }
    if (this._noCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCrl = this._noCrl;
    }
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._xfccDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccDisabled = this._xfccDisabled;
    }
    if (this._crl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.crl = this._crl?.internalValue;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    if (this._xfccOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xfccOptions = this._xfccOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCertificateOptional = undefined;
      this._noCrl = undefined;
      this._trustedCaUrl = undefined;
      this._xfccDisabled = undefined;
      this._crl.internalValue = undefined;
      this._trustedCa.internalValue = undefined;
      this._xfccOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCertificateOptional = value.clientCertificateOptional;
      this._noCrl = value.noCrl;
      this._trustedCaUrl = value.trustedCaUrl;
      this._xfccDisabled = value.xfccDisabled;
      this._crl.internalValue = value.crl;
      this._trustedCa.internalValue = value.trustedCa;
      this._xfccOptions.internalValue = value.xfccOptions;
    }
  }

  // client_certificate_optional - computed: false, optional: true, required: false
  private _clientCertificateOptional?: boolean | cdktf.IResolvable; 
  public get clientCertificateOptional() {
    return this.getBooleanAttribute('client_certificate_optional');
  }
  public set clientCertificateOptional(value: boolean | cdktf.IResolvable) {
    this._clientCertificateOptional = value;
  }
  public resetClientCertificateOptional() {
    this._clientCertificateOptional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateOptionalInput() {
    return this._clientCertificateOptional;
  }

  // no_crl - computed: false, optional: true, required: false
  private _noCrl?: boolean | cdktf.IResolvable; 
  public get noCrl() {
    return this.getBooleanAttribute('no_crl');
  }
  public set noCrl(value: boolean | cdktf.IResolvable) {
    this._noCrl = value;
  }
  public resetNoCrl() {
    this._noCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCrlInput() {
    return this._noCrl;
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // xfcc_disabled - computed: false, optional: true, required: false
  private _xfccDisabled?: boolean | cdktf.IResolvable; 
  public get xfccDisabled() {
    return this.getBooleanAttribute('xfcc_disabled');
  }
  public set xfccDisabled(value: boolean | cdktf.IResolvable) {
    this._xfccDisabled = value;
  }
  public resetXfccDisabled() {
    this._xfccDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccDisabledInput() {
    return this._xfccDisabled;
  }

  // crl - computed: false, optional: true, required: false
  private _crl = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrlOutputReference(this, "crl");
  public get crl() {
    return this._crl;
  }
  public putCrl(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsCrl) {
    this._crl.internalValue = value;
  }
  public resetCrl() {
    this._crl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlInput() {
    return this._crl.internalValue;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }

  // xfcc_options - computed: false, optional: true, required: false
  private _xfccOptions = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptionsOutputReference(this, "xfcc_options");
  public get xfccOptions() {
    return this._xfccOptions;
  }
  public putXfccOptions(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsXfccOptions) {
    this._xfccOptions.internalValue = value;
  }
  public resetXfccOptions() {
    this._xfccOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xfccOptionsInput() {
    return this._xfccOptions.internalValue;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#no_mtls CdnLoadbalancer#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_certificates CdnLoadbalancer#tls_certificates}
  */
  readonly tlsCertificates: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates[] | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_config CdnLoadbalancer#tls_config}
  */
  readonly tlsConfig?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_mtls CdnLoadbalancer#use_mtls}
  */
  readonly useMtls?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls;
}

export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    tls_certificates: cdktf.listMapper(cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
    tls_config: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsToTerraform(struct!.useMtls),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsOutputReference | CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_certificates: {
      value: cdktf.listMapperHcl(cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesList",
    },
    tls_config: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigList",
    },
    use_mtls: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noMtls = undefined;
      this._tlsCertificates.internalValue = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noMtls = value.noMtls;
      this._tlsCertificates.internalValue = value.tlsCertificates;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
    }
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }
}
export interface CdnLoadbalancerHttpsTlsCertOptions {
  /**
  * tls_cert_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_cert_params CdnLoadbalancer#tls_cert_params}
  */
  readonly tlsCertParams?: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams;
  /**
  * tls_inline_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_inline_params CdnLoadbalancer#tls_inline_params}
  */
  readonly tlsInlineParams?: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams;
}

export function cdnLoadbalancerHttpsTlsCertOptionsToTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_cert_params: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsToTerraform(struct!.tlsCertParams),
    tls_inline_params: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsToTerraform(struct!.tlsInlineParams),
  }
}


export function cdnLoadbalancerHttpsTlsCertOptionsToHclTerraform(struct?: CdnLoadbalancerHttpsTlsCertOptionsOutputReference | CdnLoadbalancerHttpsTlsCertOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_cert_params: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsToHclTerraform(struct!.tlsCertParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsList",
    },
    tls_inline_params: {
      value: cdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsToHclTerraform(struct!.tlsInlineParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsTlsCertOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsTlsCertOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsCertParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertParams = this._tlsCertParams?.internalValue;
    }
    if (this._tlsInlineParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsInlineParams = this._tlsInlineParams?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsTlsCertOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tlsCertParams.internalValue = undefined;
      this._tlsInlineParams.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tlsCertParams.internalValue = value.tlsCertParams;
      this._tlsInlineParams.internalValue = value.tlsInlineParams;
    }
  }

  // tls_cert_params - computed: false, optional: true, required: false
  private _tlsCertParams = new CdnLoadbalancerHttpsTlsCertOptionsTlsCertParamsOutputReference(this, "tls_cert_params");
  public get tlsCertParams() {
    return this._tlsCertParams;
  }
  public putTlsCertParams(value: CdnLoadbalancerHttpsTlsCertOptionsTlsCertParams) {
    this._tlsCertParams.internalValue = value;
  }
  public resetTlsCertParams() {
    this._tlsCertParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertParamsInput() {
    return this._tlsCertParams.internalValue;
  }

  // tls_inline_params - computed: false, optional: true, required: false
  private _tlsInlineParams = new CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParamsOutputReference(this, "tls_inline_params");
  public get tlsInlineParams() {
    return this._tlsInlineParams;
  }
  public putTlsInlineParams(value: CdnLoadbalancerHttpsTlsCertOptionsTlsInlineParams) {
    this._tlsInlineParams.internalValue = value;
  }
  public resetTlsInlineParams() {
    this._tlsInlineParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInlineParamsInput() {
    return this._tlsInlineParams.internalValue;
  }
}
export interface CdnLoadbalancerHttps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#add_hsts CdnLoadbalancer#add_hsts}
  */
  readonly addHsts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#http_redirect CdnLoadbalancer#http_redirect}
  */
  readonly httpRedirect?: boolean | cdktf.IResolvable;
  /**
  * tls_cert_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_cert_options CdnLoadbalancer#tls_cert_options}
  */
  readonly tlsCertOptions?: CdnLoadbalancerHttpsTlsCertOptions;
}

export function cdnLoadbalancerHttpsToTerraform(struct?: CdnLoadbalancerHttpsOutputReference | CdnLoadbalancerHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_hsts: cdktf.booleanToTerraform(struct!.addHsts),
    http_redirect: cdktf.booleanToTerraform(struct!.httpRedirect),
    tls_cert_options: cdnLoadbalancerHttpsTlsCertOptionsToTerraform(struct!.tlsCertOptions),
  }
}


export function cdnLoadbalancerHttpsToHclTerraform(struct?: CdnLoadbalancerHttpsOutputReference | CdnLoadbalancerHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_hsts: {
      value: cdktf.booleanToHclTerraform(struct!.addHsts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_cert_options: {
      value: cdnLoadbalancerHttpsTlsCertOptionsToHclTerraform(struct!.tlsCertOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsTlsCertOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHsts !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHsts = this._addHsts;
    }
    if (this._httpRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirect = this._httpRedirect;
    }
    if (this._tlsCertOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertOptions = this._tlsCertOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHsts = undefined;
      this._httpRedirect = undefined;
      this._tlsCertOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHsts = value.addHsts;
      this._httpRedirect = value.httpRedirect;
      this._tlsCertOptions.internalValue = value.tlsCertOptions;
    }
  }

  // add_hsts - computed: false, optional: true, required: false
  private _addHsts?: boolean | cdktf.IResolvable; 
  public get addHsts() {
    return this.getBooleanAttribute('add_hsts');
  }
  public set addHsts(value: boolean | cdktf.IResolvable) {
    this._addHsts = value;
  }
  public resetAddHsts() {
    this._addHsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHstsInput() {
    return this._addHsts;
  }

  // http_redirect - computed: false, optional: true, required: false
  private _httpRedirect?: boolean | cdktf.IResolvable; 
  public get httpRedirect() {
    return this.getBooleanAttribute('http_redirect');
  }
  public set httpRedirect(value: boolean | cdktf.IResolvable) {
    this._httpRedirect = value;
  }
  public resetHttpRedirect() {
    this._httpRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectInput() {
    return this._httpRedirect;
  }

  // tls_cert_options - computed: false, optional: true, required: false
  private _tlsCertOptions = new CdnLoadbalancerHttpsTlsCertOptionsOutputReference(this, "tls_cert_options");
  public get tlsCertOptions() {
    return this._tlsCertOptions;
  }
  public putTlsCertOptions(value: CdnLoadbalancerHttpsTlsCertOptions) {
    this._tlsCertOptions.internalValue = value;
  }
  public resetTlsCertOptions() {
    this._tlsCertOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertOptionsInput() {
    return this._tlsCertOptions.internalValue;
  }
}
export interface CdnLoadbalancerHttpsAutoCertTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_11_plus CdnLoadbalancer#tls_11_plus}
  */
  readonly tls11Plus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_12_plus CdnLoadbalancer#tls_12_plus}
  */
  readonly tls12Plus?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerHttpsAutoCertTlsConfigToTerraform(struct?: CdnLoadbalancerHttpsAutoCertTlsConfigOutputReference | CdnLoadbalancerHttpsAutoCertTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_11_plus: cdktf.booleanToTerraform(struct!.tls11Plus),
    tls_12_plus: cdktf.booleanToTerraform(struct!.tls12Plus),
  }
}


export function cdnLoadbalancerHttpsAutoCertTlsConfigToHclTerraform(struct?: CdnLoadbalancerHttpsAutoCertTlsConfigOutputReference | CdnLoadbalancerHttpsAutoCertTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_11_plus: {
      value: cdktf.booleanToHclTerraform(struct!.tls11Plus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_12_plus: {
      value: cdktf.booleanToHclTerraform(struct!.tls12Plus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsAutoCertTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsAutoCertTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tls11Plus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls11Plus = this._tls11Plus;
    }
    if (this._tls12Plus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12Plus = this._tls12Plus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsAutoCertTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tls11Plus = undefined;
      this._tls12Plus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tls11Plus = value.tls11Plus;
      this._tls12Plus = value.tls12Plus;
    }
  }

  // tls_11_plus - computed: false, optional: true, required: false
  private _tls11Plus?: boolean | cdktf.IResolvable; 
  public get tls11Plus() {
    return this.getBooleanAttribute('tls_11_plus');
  }
  public set tls11Plus(value: boolean | cdktf.IResolvable) {
    this._tls11Plus = value;
  }
  public resetTls11Plus() {
    this._tls11Plus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls11PlusInput() {
    return this._tls11Plus;
  }

  // tls_12_plus - computed: false, optional: true, required: false
  private _tls12Plus?: boolean | cdktf.IResolvable; 
  public get tls12Plus() {
    return this.getBooleanAttribute('tls_12_plus');
  }
  public set tls12Plus(value: boolean | cdktf.IResolvable) {
    this._tls12Plus = value;
  }
  public resetTls12Plus() {
    this._tls12Plus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12PlusInput() {
    return this._tls12Plus;
  }
}
export interface CdnLoadbalancerHttpsAutoCert {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#add_hsts CdnLoadbalancer#add_hsts}
  */
  readonly addHsts?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#http_redirect CdnLoadbalancer#http_redirect}
  */
  readonly httpRedirect?: boolean | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_config CdnLoadbalancer#tls_config}
  */
  readonly tlsConfig?: CdnLoadbalancerHttpsAutoCertTlsConfig;
}

export function cdnLoadbalancerHttpsAutoCertToTerraform(struct?: CdnLoadbalancerHttpsAutoCertOutputReference | CdnLoadbalancerHttpsAutoCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_hsts: cdktf.booleanToTerraform(struct!.addHsts),
    http_redirect: cdktf.booleanToTerraform(struct!.httpRedirect),
    tls_config: cdnLoadbalancerHttpsAutoCertTlsConfigToTerraform(struct!.tlsConfig),
  }
}


export function cdnLoadbalancerHttpsAutoCertToHclTerraform(struct?: CdnLoadbalancerHttpsAutoCertOutputReference | CdnLoadbalancerHttpsAutoCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_hsts: {
      value: cdktf.booleanToHclTerraform(struct!.addHsts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_redirect: {
      value: cdktf.booleanToHclTerraform(struct!.httpRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_config: {
      value: cdnLoadbalancerHttpsAutoCertTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerHttpsAutoCertTlsConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerHttpsAutoCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerHttpsAutoCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHsts !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHsts = this._addHsts;
    }
    if (this._httpRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRedirect = this._httpRedirect;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerHttpsAutoCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addHsts = undefined;
      this._httpRedirect = undefined;
      this._tlsConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addHsts = value.addHsts;
      this._httpRedirect = value.httpRedirect;
      this._tlsConfig.internalValue = value.tlsConfig;
    }
  }

  // add_hsts - computed: false, optional: true, required: false
  private _addHsts?: boolean | cdktf.IResolvable; 
  public get addHsts() {
    return this.getBooleanAttribute('add_hsts');
  }
  public set addHsts(value: boolean | cdktf.IResolvable) {
    this._addHsts = value;
  }
  public resetAddHsts() {
    this._addHsts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHstsInput() {
    return this._addHsts;
  }

  // http_redirect - computed: false, optional: true, required: false
  private _httpRedirect?: boolean | cdktf.IResolvable; 
  public get httpRedirect() {
    return this.getBooleanAttribute('http_redirect');
  }
  public set httpRedirect(value: boolean | cdktf.IResolvable) {
    this._httpRedirect = value;
  }
  public resetHttpRedirect() {
    this._httpRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRedirectInput() {
    return this._httpRedirect;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig = new CdnLoadbalancerHttpsAutoCertTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: CdnLoadbalancerHttpsAutoCertTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  public resetTlsConfig() {
    this._tlsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }
}
export interface CdnLoadbalancerJsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#js_script_delay CdnLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function cdnLoadbalancerJsChallengeToTerraform(struct?: CdnLoadbalancerJsChallengeOutputReference | CdnLoadbalancerJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function cdnLoadbalancerJsChallengeToHclTerraform(struct?: CdnLoadbalancerJsChallengeOutputReference | CdnLoadbalancerJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJsChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface CdnLoadbalancerJwtValidationAction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#block CdnLoadbalancer#block}
  */
  readonly block?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#report CdnLoadbalancer#report}
  */
  readonly report?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerJwtValidationActionToTerraform(struct?: CdnLoadbalancerJwtValidationActionOutputReference | CdnLoadbalancerJwtValidationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block: cdktf.booleanToTerraform(struct!.block),
    report: cdktf.booleanToTerraform(struct!.report),
  }
}


export function cdnLoadbalancerJwtValidationActionToHclTerraform(struct?: CdnLoadbalancerJwtValidationActionOutputReference | CdnLoadbalancerJwtValidationAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block: {
      value: cdktf.booleanToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    report: {
      value: cdktf.booleanToHclTerraform(struct!.report),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._report !== undefined) {
      hasAnyValues = true;
      internalValueResult.report = this._report;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._block = undefined;
      this._report = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._block = value.block;
      this._report = value.report;
    }
  }

  // block - computed: false, optional: true, required: false
  private _block?: boolean | cdktf.IResolvable; 
  public get block() {
    return this.getBooleanAttribute('block');
  }
  public set block(value: boolean | cdktf.IResolvable) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // report - computed: false, optional: true, required: false
  private _report?: boolean | cdktf.IResolvable; 
  public get report() {
    return this.getBooleanAttribute('report');
  }
  public set report(value: boolean | cdktf.IResolvable) {
    this._report = value;
  }
  public resetReport() {
    this._report = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportInput() {
    return this._report;
  }
}
export interface CdnLoadbalancerJwtValidationJwksConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cleartext CdnLoadbalancer#cleartext}
  */
  readonly cleartext?: string;
}

export function cdnLoadbalancerJwtValidationJwksConfigToTerraform(struct?: CdnLoadbalancerJwtValidationJwksConfigOutputReference | CdnLoadbalancerJwtValidationJwksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cleartext: cdktf.stringToTerraform(struct!.cleartext),
  }
}


export function cdnLoadbalancerJwtValidationJwksConfigToHclTerraform(struct?: CdnLoadbalancerJwtValidationJwksConfigOutputReference | CdnLoadbalancerJwtValidationJwksConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cleartext: {
      value: cdktf.stringToHclTerraform(struct!.cleartext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationJwksConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationJwksConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cleartext !== undefined) {
      hasAnyValues = true;
      internalValueResult.cleartext = this._cleartext;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationJwksConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cleartext = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cleartext = value.cleartext;
    }
  }

  // cleartext - computed: false, optional: true, required: false
  private _cleartext?: string; 
  public get cleartext() {
    return this.getStringAttribute('cleartext');
  }
  public set cleartext(value: string) {
    this._cleartext = value;
  }
  public resetCleartext() {
    this._cleartext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleartextInput() {
    return this._cleartext;
  }
}
export interface CdnLoadbalancerJwtValidationMandatoryClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#claim_names CdnLoadbalancer#claim_names}
  */
  readonly claimNames?: string[];
}

export function cdnLoadbalancerJwtValidationMandatoryClaimsToTerraform(struct?: CdnLoadbalancerJwtValidationMandatoryClaimsOutputReference | CdnLoadbalancerJwtValidationMandatoryClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.claimNames),
  }
}


export function cdnLoadbalancerJwtValidationMandatoryClaimsToHclTerraform(struct?: CdnLoadbalancerJwtValidationMandatoryClaimsOutputReference | CdnLoadbalancerJwtValidationMandatoryClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.claimNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationMandatoryClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationMandatoryClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimNames = this._claimNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationMandatoryClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._claimNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._claimNames = value.claimNames;
    }
  }

  // claim_names - computed: false, optional: true, required: false
  private _claimNames?: string[]; 
  public get claimNames() {
    return this.getListAttribute('claim_names');
  }
  public set claimNames(value: string[]) {
    this._claimNames = value;
  }
  public resetClaimNames() {
    this._claimNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNamesInput() {
    return this._claimNames;
  }
}
export interface CdnLoadbalancerJwtValidationReservedClaimsAudience {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#audiences CdnLoadbalancer#audiences}
  */
  readonly audiences: string[];
}

export function cdnLoadbalancerJwtValidationReservedClaimsAudienceToTerraform(struct?: CdnLoadbalancerJwtValidationReservedClaimsAudienceOutputReference | CdnLoadbalancerJwtValidationReservedClaimsAudience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audiences),
  }
}


export function cdnLoadbalancerJwtValidationReservedClaimsAudienceToHclTerraform(struct?: CdnLoadbalancerJwtValidationReservedClaimsAudienceOutputReference | CdnLoadbalancerJwtValidationReservedClaimsAudience): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audiences: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audiences),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationReservedClaimsAudienceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationReservedClaimsAudience | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audiences !== undefined) {
      hasAnyValues = true;
      internalValueResult.audiences = this._audiences;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationReservedClaimsAudience | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audiences = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audiences = value.audiences;
    }
  }

  // audiences - computed: false, optional: false, required: true
  private _audiences?: string[]; 
  public get audiences() {
    return this.getListAttribute('audiences');
  }
  public set audiences(value: string[]) {
    this._audiences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get audiencesInput() {
    return this._audiences;
  }
}
export interface CdnLoadbalancerJwtValidationReservedClaims {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#audience_disable CdnLoadbalancer#audience_disable}
  */
  readonly audienceDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#issuer CdnLoadbalancer#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#issuer_disable CdnLoadbalancer#issuer_disable}
  */
  readonly issuerDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#validate_period_disable CdnLoadbalancer#validate_period_disable}
  */
  readonly validatePeriodDisable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#validate_period_enable CdnLoadbalancer#validate_period_enable}
  */
  readonly validatePeriodEnable?: boolean | cdktf.IResolvable;
  /**
  * audience block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#audience CdnLoadbalancer#audience}
  */
  readonly audience?: CdnLoadbalancerJwtValidationReservedClaimsAudience;
}

export function cdnLoadbalancerJwtValidationReservedClaimsToTerraform(struct?: CdnLoadbalancerJwtValidationReservedClaimsOutputReference | CdnLoadbalancerJwtValidationReservedClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience_disable: cdktf.booleanToTerraform(struct!.audienceDisable),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    issuer_disable: cdktf.booleanToTerraform(struct!.issuerDisable),
    validate_period_disable: cdktf.booleanToTerraform(struct!.validatePeriodDisable),
    validate_period_enable: cdktf.booleanToTerraform(struct!.validatePeriodEnable),
    audience: cdnLoadbalancerJwtValidationReservedClaimsAudienceToTerraform(struct!.audience),
  }
}


export function cdnLoadbalancerJwtValidationReservedClaimsToHclTerraform(struct?: CdnLoadbalancerJwtValidationReservedClaimsOutputReference | CdnLoadbalancerJwtValidationReservedClaims): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience_disable: {
      value: cdktf.booleanToHclTerraform(struct!.audienceDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_disable: {
      value: cdktf.booleanToHclTerraform(struct!.issuerDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_period_disable: {
      value: cdktf.booleanToHclTerraform(struct!.validatePeriodDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_period_enable: {
      value: cdktf.booleanToHclTerraform(struct!.validatePeriodEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    audience: {
      value: cdnLoadbalancerJwtValidationReservedClaimsAudienceToHclTerraform(struct!.audience),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationReservedClaimsAudienceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationReservedClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationReservedClaims | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audienceDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.audienceDisable = this._audienceDisable;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._issuerDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerDisable = this._issuerDisable;
    }
    if (this._validatePeriodDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatePeriodDisable = this._validatePeriodDisable;
    }
    if (this._validatePeriodEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatePeriodEnable = this._validatePeriodEnable;
    }
    if (this._audience?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationReservedClaims | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audienceDisable = undefined;
      this._issuer = undefined;
      this._issuerDisable = undefined;
      this._validatePeriodDisable = undefined;
      this._validatePeriodEnable = undefined;
      this._audience.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audienceDisable = value.audienceDisable;
      this._issuer = value.issuer;
      this._issuerDisable = value.issuerDisable;
      this._validatePeriodDisable = value.validatePeriodDisable;
      this._validatePeriodEnable = value.validatePeriodEnable;
      this._audience.internalValue = value.audience;
    }
  }

  // audience_disable - computed: false, optional: true, required: false
  private _audienceDisable?: boolean | cdktf.IResolvable; 
  public get audienceDisable() {
    return this.getBooleanAttribute('audience_disable');
  }
  public set audienceDisable(value: boolean | cdktf.IResolvable) {
    this._audienceDisable = value;
  }
  public resetAudienceDisable() {
    this._audienceDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceDisableInput() {
    return this._audienceDisable;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // issuer_disable - computed: false, optional: true, required: false
  private _issuerDisable?: boolean | cdktf.IResolvable; 
  public get issuerDisable() {
    return this.getBooleanAttribute('issuer_disable');
  }
  public set issuerDisable(value: boolean | cdktf.IResolvable) {
    this._issuerDisable = value;
  }
  public resetIssuerDisable() {
    this._issuerDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerDisableInput() {
    return this._issuerDisable;
  }

  // validate_period_disable - computed: false, optional: true, required: false
  private _validatePeriodDisable?: boolean | cdktf.IResolvable; 
  public get validatePeriodDisable() {
    return this.getBooleanAttribute('validate_period_disable');
  }
  public set validatePeriodDisable(value: boolean | cdktf.IResolvable) {
    this._validatePeriodDisable = value;
  }
  public resetValidatePeriodDisable() {
    this._validatePeriodDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePeriodDisableInput() {
    return this._validatePeriodDisable;
  }

  // validate_period_enable - computed: false, optional: true, required: false
  private _validatePeriodEnable?: boolean | cdktf.IResolvable; 
  public get validatePeriodEnable() {
    return this.getBooleanAttribute('validate_period_enable');
  }
  public set validatePeriodEnable(value: boolean | cdktf.IResolvable) {
    this._validatePeriodEnable = value;
  }
  public resetValidatePeriodEnable() {
    this._validatePeriodEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validatePeriodEnableInput() {
    return this._validatePeriodEnable;
  }

  // audience - computed: false, optional: true, required: false
  private _audience = new CdnLoadbalancerJwtValidationReservedClaimsAudienceOutputReference(this, "audience");
  public get audience() {
    return this._audience;
  }
  public putAudience(value: CdnLoadbalancerJwtValidationReservedClaimsAudience) {
    this._audience.internalValue = value;
  }
  public resetAudience() {
    this._audience.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience.internalValue;
  }
}
export interface CdnLoadbalancerJwtValidationTargetApiGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups: string[];
}

export function cdnLoadbalancerJwtValidationTargetApiGroupsToTerraform(struct?: CdnLoadbalancerJwtValidationTargetApiGroupsOutputReference | CdnLoadbalancerJwtValidationTargetApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.apiGroups),
  }
}


export function cdnLoadbalancerJwtValidationTargetApiGroupsToHclTerraform(struct?: CdnLoadbalancerJwtValidationTargetApiGroupsOutputReference | CdnLoadbalancerJwtValidationTargetApiGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.apiGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationTargetApiGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationTargetApiGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationTargetApiGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiGroups = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiGroups = value.apiGroups;
    }
  }

  // api_groups - computed: false, optional: false, required: true
  private _apiGroups?: string[]; 
  public get apiGroups() {
    return this.getListAttribute('api_groups');
  }
  public set apiGroups(value: string[]) {
    this._apiGroups = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups;
  }
}
export interface CdnLoadbalancerJwtValidationTargetBasePaths {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#base_paths CdnLoadbalancer#base_paths}
  */
  readonly basePaths: string[];
}

export function cdnLoadbalancerJwtValidationTargetBasePathsToTerraform(struct?: CdnLoadbalancerJwtValidationTargetBasePathsOutputReference | CdnLoadbalancerJwtValidationTargetBasePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_paths: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.basePaths),
  }
}


export function cdnLoadbalancerJwtValidationTargetBasePathsToHclTerraform(struct?: CdnLoadbalancerJwtValidationTargetBasePathsOutputReference | CdnLoadbalancerJwtValidationTargetBasePaths): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_paths: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.basePaths),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationTargetBasePathsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationTargetBasePaths | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basePaths !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePaths = this._basePaths;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationTargetBasePaths | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basePaths = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basePaths = value.basePaths;
    }
  }

  // base_paths - computed: false, optional: false, required: true
  private _basePaths?: string[]; 
  public get basePaths() {
    return this.getListAttribute('base_paths');
  }
  public set basePaths(value: string[]) {
    this._basePaths = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathsInput() {
    return this._basePaths;
  }
}
export interface CdnLoadbalancerJwtValidationTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#all_endpoint CdnLoadbalancer#all_endpoint}
  */
  readonly allEndpoint?: boolean | cdktf.IResolvable;
  /**
  * api_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#api_groups CdnLoadbalancer#api_groups}
  */
  readonly apiGroups?: CdnLoadbalancerJwtValidationTargetApiGroups;
  /**
  * base_paths block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#base_paths CdnLoadbalancer#base_paths}
  */
  readonly basePaths?: CdnLoadbalancerJwtValidationTargetBasePaths;
}

export function cdnLoadbalancerJwtValidationTargetToTerraform(struct?: CdnLoadbalancerJwtValidationTargetOutputReference | CdnLoadbalancerJwtValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_endpoint: cdktf.booleanToTerraform(struct!.allEndpoint),
    api_groups: cdnLoadbalancerJwtValidationTargetApiGroupsToTerraform(struct!.apiGroups),
    base_paths: cdnLoadbalancerJwtValidationTargetBasePathsToTerraform(struct!.basePaths),
  }
}


export function cdnLoadbalancerJwtValidationTargetToHclTerraform(struct?: CdnLoadbalancerJwtValidationTargetOutputReference | CdnLoadbalancerJwtValidationTarget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.allEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_groups: {
      value: cdnLoadbalancerJwtValidationTargetApiGroupsToHclTerraform(struct!.apiGroups),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationTargetApiGroupsList",
    },
    base_paths: {
      value: cdnLoadbalancerJwtValidationTargetBasePathsToHclTerraform(struct!.basePaths),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationTargetBasePathsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationTarget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.allEndpoint = this._allEndpoint;
    }
    if (this._apiGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroups = this._apiGroups?.internalValue;
    }
    if (this._basePaths?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basePaths = this._basePaths?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationTarget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allEndpoint = undefined;
      this._apiGroups.internalValue = undefined;
      this._basePaths.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allEndpoint = value.allEndpoint;
      this._apiGroups.internalValue = value.apiGroups;
      this._basePaths.internalValue = value.basePaths;
    }
  }

  // all_endpoint - computed: false, optional: true, required: false
  private _allEndpoint?: boolean | cdktf.IResolvable; 
  public get allEndpoint() {
    return this.getBooleanAttribute('all_endpoint');
  }
  public set allEndpoint(value: boolean | cdktf.IResolvable) {
    this._allEndpoint = value;
  }
  public resetAllEndpoint() {
    this._allEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEndpointInput() {
    return this._allEndpoint;
  }

  // api_groups - computed: false, optional: true, required: false
  private _apiGroups = new CdnLoadbalancerJwtValidationTargetApiGroupsOutputReference(this, "api_groups");
  public get apiGroups() {
    return this._apiGroups;
  }
  public putApiGroups(value: CdnLoadbalancerJwtValidationTargetApiGroups) {
    this._apiGroups.internalValue = value;
  }
  public resetApiGroups() {
    this._apiGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupsInput() {
    return this._apiGroups.internalValue;
  }

  // base_paths - computed: false, optional: true, required: false
  private _basePaths = new CdnLoadbalancerJwtValidationTargetBasePathsOutputReference(this, "base_paths");
  public get basePaths() {
    return this._basePaths;
  }
  public putBasePaths(value: CdnLoadbalancerJwtValidationTargetBasePaths) {
    this._basePaths.internalValue = value;
  }
  public resetBasePaths() {
    this._basePaths.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathsInput() {
    return this._basePaths.internalValue;
  }
}
export interface CdnLoadbalancerJwtValidationTokenLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#bearer_token CdnLoadbalancer#bearer_token}
  */
  readonly bearerToken?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerJwtValidationTokenLocationToTerraform(struct?: CdnLoadbalancerJwtValidationTokenLocationOutputReference | CdnLoadbalancerJwtValidationTokenLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bearer_token: cdktf.booleanToTerraform(struct!.bearerToken),
  }
}


export function cdnLoadbalancerJwtValidationTokenLocationToHclTerraform(struct?: CdnLoadbalancerJwtValidationTokenLocationOutputReference | CdnLoadbalancerJwtValidationTokenLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bearer_token: {
      value: cdktf.booleanToHclTerraform(struct!.bearerToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationTokenLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidationTokenLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bearerToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.bearerToken = this._bearerToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidationTokenLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bearerToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bearerToken = value.bearerToken;
    }
  }

  // bearer_token - computed: false, optional: true, required: false
  private _bearerToken?: boolean | cdktf.IResolvable; 
  public get bearerToken() {
    return this.getBooleanAttribute('bearer_token');
  }
  public set bearerToken(value: boolean | cdktf.IResolvable) {
    this._bearerToken = value;
  }
  public resetBearerToken() {
    this._bearerToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bearerTokenInput() {
    return this._bearerToken;
  }
}
export interface CdnLoadbalancerJwtValidation {
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#action CdnLoadbalancer#action}
  */
  readonly action: CdnLoadbalancerJwtValidationAction;
  /**
  * jwks_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#jwks_config CdnLoadbalancer#jwks_config}
  */
  readonly jwksConfig?: CdnLoadbalancerJwtValidationJwksConfig;
  /**
  * mandatory_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#mandatory_claims CdnLoadbalancer#mandatory_claims}
  */
  readonly mandatoryClaims?: CdnLoadbalancerJwtValidationMandatoryClaims;
  /**
  * reserved_claims block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#reserved_claims CdnLoadbalancer#reserved_claims}
  */
  readonly reservedClaims?: CdnLoadbalancerJwtValidationReservedClaims;
  /**
  * target block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#target CdnLoadbalancer#target}
  */
  readonly target: CdnLoadbalancerJwtValidationTarget;
  /**
  * token_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#token_location CdnLoadbalancer#token_location}
  */
  readonly tokenLocation: CdnLoadbalancerJwtValidationTokenLocation;
}

export function cdnLoadbalancerJwtValidationToTerraform(struct?: CdnLoadbalancerJwtValidationOutputReference | CdnLoadbalancerJwtValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdnLoadbalancerJwtValidationActionToTerraform(struct!.action),
    jwks_config: cdnLoadbalancerJwtValidationJwksConfigToTerraform(struct!.jwksConfig),
    mandatory_claims: cdnLoadbalancerJwtValidationMandatoryClaimsToTerraform(struct!.mandatoryClaims),
    reserved_claims: cdnLoadbalancerJwtValidationReservedClaimsToTerraform(struct!.reservedClaims),
    target: cdnLoadbalancerJwtValidationTargetToTerraform(struct!.target),
    token_location: cdnLoadbalancerJwtValidationTokenLocationToTerraform(struct!.tokenLocation),
  }
}


export function cdnLoadbalancerJwtValidationToHclTerraform(struct?: CdnLoadbalancerJwtValidationOutputReference | CdnLoadbalancerJwtValidation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdnLoadbalancerJwtValidationActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationActionList",
    },
    jwks_config: {
      value: cdnLoadbalancerJwtValidationJwksConfigToHclTerraform(struct!.jwksConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationJwksConfigList",
    },
    mandatory_claims: {
      value: cdnLoadbalancerJwtValidationMandatoryClaimsToHclTerraform(struct!.mandatoryClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationMandatoryClaimsList",
    },
    reserved_claims: {
      value: cdnLoadbalancerJwtValidationReservedClaimsToHclTerraform(struct!.reservedClaims),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationReservedClaimsList",
    },
    target: {
      value: cdnLoadbalancerJwtValidationTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationTargetList",
    },
    token_location: {
      value: cdnLoadbalancerJwtValidationTokenLocationToHclTerraform(struct!.tokenLocation),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerJwtValidationTokenLocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerJwtValidationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerJwtValidation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._jwksConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksConfig = this._jwksConfig?.internalValue;
    }
    if (this._mandatoryClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mandatoryClaims = this._mandatoryClaims?.internalValue;
    }
    if (this._reservedClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedClaims = this._reservedClaims?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    if (this._tokenLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenLocation = this._tokenLocation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerJwtValidation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action.internalValue = undefined;
      this._jwksConfig.internalValue = undefined;
      this._mandatoryClaims.internalValue = undefined;
      this._reservedClaims.internalValue = undefined;
      this._target.internalValue = undefined;
      this._tokenLocation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action.internalValue = value.action;
      this._jwksConfig.internalValue = value.jwksConfig;
      this._mandatoryClaims.internalValue = value.mandatoryClaims;
      this._reservedClaims.internalValue = value.reservedClaims;
      this._target.internalValue = value.target;
      this._tokenLocation.internalValue = value.tokenLocation;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new CdnLoadbalancerJwtValidationActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: CdnLoadbalancerJwtValidationAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // jwks_config - computed: false, optional: true, required: false
  private _jwksConfig = new CdnLoadbalancerJwtValidationJwksConfigOutputReference(this, "jwks_config");
  public get jwksConfig() {
    return this._jwksConfig;
  }
  public putJwksConfig(value: CdnLoadbalancerJwtValidationJwksConfig) {
    this._jwksConfig.internalValue = value;
  }
  public resetJwksConfig() {
    this._jwksConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksConfigInput() {
    return this._jwksConfig.internalValue;
  }

  // mandatory_claims - computed: false, optional: true, required: false
  private _mandatoryClaims = new CdnLoadbalancerJwtValidationMandatoryClaimsOutputReference(this, "mandatory_claims");
  public get mandatoryClaims() {
    return this._mandatoryClaims;
  }
  public putMandatoryClaims(value: CdnLoadbalancerJwtValidationMandatoryClaims) {
    this._mandatoryClaims.internalValue = value;
  }
  public resetMandatoryClaims() {
    this._mandatoryClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryClaimsInput() {
    return this._mandatoryClaims.internalValue;
  }

  // reserved_claims - computed: false, optional: true, required: false
  private _reservedClaims = new CdnLoadbalancerJwtValidationReservedClaimsOutputReference(this, "reserved_claims");
  public get reservedClaims() {
    return this._reservedClaims;
  }
  public putReservedClaims(value: CdnLoadbalancerJwtValidationReservedClaims) {
    this._reservedClaims.internalValue = value;
  }
  public resetReservedClaims() {
    this._reservedClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedClaimsInput() {
    return this._reservedClaims.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new CdnLoadbalancerJwtValidationTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: CdnLoadbalancerJwtValidationTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }

  // token_location - computed: false, optional: false, required: true
  private _tokenLocation = new CdnLoadbalancerJwtValidationTokenLocationOutputReference(this, "token_location");
  public get tokenLocation() {
    return this._tokenLocation;
  }
  public putTokenLocation(value: CdnLoadbalancerJwtValidationTokenLocation) {
    this._tokenLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenLocationInput() {
    return this._tokenLocation.internalValue;
  }
}
export interface CdnLoadbalancerL7DdosActionJsChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#js_script_delay CdnLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function cdnLoadbalancerL7DdosActionJsChallengeToTerraform(struct?: CdnLoadbalancerL7DdosActionJsChallengeOutputReference | CdnLoadbalancerL7DdosActionJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function cdnLoadbalancerL7DdosActionJsChallengeToHclTerraform(struct?: CdnLoadbalancerL7DdosActionJsChallengeOutputReference | CdnLoadbalancerL7DdosActionJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerL7DdosActionJsChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerL7DdosActionJsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerL7DdosActionJsChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface CdnLoadbalancerOriginPoolMoreOriginOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disable_byte_range_request CdnLoadbalancer#disable_byte_range_request}
  */
  readonly disableByteRangeRequest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#websocket_proxy CdnLoadbalancer#websocket_proxy}
  */
  readonly websocketProxy?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerOriginPoolMoreOriginOptionsToTerraform(struct?: CdnLoadbalancerOriginPoolMoreOriginOptionsOutputReference | CdnLoadbalancerOriginPoolMoreOriginOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_byte_range_request: cdktf.booleanToTerraform(struct!.disableByteRangeRequest),
    websocket_proxy: cdktf.booleanToTerraform(struct!.websocketProxy),
  }
}


export function cdnLoadbalancerOriginPoolMoreOriginOptionsToHclTerraform(struct?: CdnLoadbalancerOriginPoolMoreOriginOptionsOutputReference | CdnLoadbalancerOriginPoolMoreOriginOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_byte_range_request: {
      value: cdktf.booleanToHclTerraform(struct!.disableByteRangeRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    websocket_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.websocketProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolMoreOriginOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolMoreOriginOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableByteRangeRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableByteRangeRequest = this._disableByteRangeRequest;
    }
    if (this._websocketProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.websocketProxy = this._websocketProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolMoreOriginOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableByteRangeRequest = undefined;
      this._websocketProxy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableByteRangeRequest = value.disableByteRangeRequest;
      this._websocketProxy = value.websocketProxy;
    }
  }

  // disable_byte_range_request - computed: false, optional: true, required: false
  private _disableByteRangeRequest?: boolean | cdktf.IResolvable; 
  public get disableByteRangeRequest() {
    return this.getBooleanAttribute('disable_byte_range_request');
  }
  public set disableByteRangeRequest(value: boolean | cdktf.IResolvable) {
    this._disableByteRangeRequest = value;
  }
  public resetDisableByteRangeRequest() {
    this._disableByteRangeRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableByteRangeRequestInput() {
    return this._disableByteRangeRequest;
  }

  // websocket_proxy - computed: false, optional: true, required: false
  private _websocketProxy?: boolean | cdktf.IResolvable; 
  public get websocketProxy() {
    return this.getBooleanAttribute('websocket_proxy');
  }
  public set websocketProxy(value: boolean | cdktf.IResolvable) {
    this._websocketProxy = value;
  }
  public resetWebsocketProxy() {
    this._websocketProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get websocketProxyInput() {
    return this._websocketProxy;
  }
}
export interface CdnLoadbalancerOriginPoolOriginServersPublicIp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip CdnLoadbalancer#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ipv6 CdnLoadbalancer#ipv6}
  */
  readonly ipv6?: string;
}

export function cdnLoadbalancerOriginPoolOriginServersPublicIpToTerraform(struct?: CdnLoadbalancerOriginPoolOriginServersPublicIpOutputReference | CdnLoadbalancerOriginPoolOriginServersPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
  }
}


export function cdnLoadbalancerOriginPoolOriginServersPublicIpToHclTerraform(struct?: CdnLoadbalancerOriginPoolOriginServersPublicIpOutputReference | CdnLoadbalancerOriginPoolOriginServersPublicIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolOriginServersPublicIpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolOriginServersPublicIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolOriginServersPublicIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._ipv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }
}
export interface CdnLoadbalancerOriginPoolOriginServersPublicName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#dns_name CdnLoadbalancer#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#refresh_interval CdnLoadbalancer#refresh_interval}
  */
  readonly refreshInterval?: number;
}

export function cdnLoadbalancerOriginPoolOriginServersPublicNameToTerraform(struct?: CdnLoadbalancerOriginPoolOriginServersPublicNameOutputReference | CdnLoadbalancerOriginPoolOriginServersPublicName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
  }
}


export function cdnLoadbalancerOriginPoolOriginServersPublicNameToHclTerraform(struct?: CdnLoadbalancerOriginPoolOriginServersPublicNameOutputReference | CdnLoadbalancerOriginPoolOriginServersPublicName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolOriginServersPublicNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolOriginServersPublicName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolOriginServersPublicName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._refreshInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._refreshInterval = value.refreshInterval;
    }
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }
}
export interface CdnLoadbalancerOriginPoolOriginServers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#port CdnLoadbalancer#port}
  */
  readonly port?: number;
  /**
  * public_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#public_ip CdnLoadbalancer#public_ip}
  */
  readonly publicIp?: CdnLoadbalancerOriginPoolOriginServersPublicIp;
  /**
  * public_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#public_name CdnLoadbalancer#public_name}
  */
  readonly publicName?: CdnLoadbalancerOriginPoolOriginServersPublicName;
}

export function cdnLoadbalancerOriginPoolOriginServersToTerraform(struct?: CdnLoadbalancerOriginPoolOriginServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    public_ip: cdnLoadbalancerOriginPoolOriginServersPublicIpToTerraform(struct!.publicIp),
    public_name: cdnLoadbalancerOriginPoolOriginServersPublicNameToTerraform(struct!.publicName),
  }
}


export function cdnLoadbalancerOriginPoolOriginServersToHclTerraform(struct?: CdnLoadbalancerOriginPoolOriginServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    public_ip: {
      value: cdnLoadbalancerOriginPoolOriginServersPublicIpToHclTerraform(struct!.publicIp),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolOriginServersPublicIpList",
    },
    public_name: {
      value: cdnLoadbalancerOriginPoolOriginServersPublicNameToHclTerraform(struct!.publicName),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolOriginServersPublicNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolOriginServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerOriginPoolOriginServers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._publicIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp?.internalValue;
    }
    if (this._publicName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicName = this._publicName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolOriginServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._publicIp.internalValue = undefined;
      this._publicName.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._publicIp.internalValue = value.publicIp;
      this._publicName.internalValue = value.publicName;
    }
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // public_ip - computed: false, optional: true, required: false
  private _publicIp = new CdnLoadbalancerOriginPoolOriginServersPublicIpOutputReference(this, "public_ip");
  public get publicIp() {
    return this._publicIp;
  }
  public putPublicIp(value: CdnLoadbalancerOriginPoolOriginServersPublicIp) {
    this._publicIp.internalValue = value;
  }
  public resetPublicIp() {
    this._publicIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp.internalValue;
  }

  // public_name - computed: false, optional: true, required: false
  private _publicName = new CdnLoadbalancerOriginPoolOriginServersPublicNameOutputReference(this, "public_name");
  public get publicName() {
    return this._publicName;
  }
  public putPublicName(value: CdnLoadbalancerOriginPoolOriginServersPublicName) {
    this._publicName.internalValue = value;
  }
  public resetPublicName() {
    this._publicName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNameInput() {
    return this._publicName.internalValue;
  }
}

export class CdnLoadbalancerOriginPoolOriginServersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerOriginPoolOriginServers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerOriginPoolOriginServersOutputReference {
    return new CdnLoadbalancerOriginPoolOriginServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerOriginPoolPublicName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#dns_name CdnLoadbalancer#dns_name}
  */
  readonly dnsName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#refresh_interval CdnLoadbalancer#refresh_interval}
  */
  readonly refreshInterval?: number;
}

export function cdnLoadbalancerOriginPoolPublicNameToTerraform(struct?: CdnLoadbalancerOriginPoolPublicNameOutputReference | CdnLoadbalancerOriginPoolPublicName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_name: cdktf.stringToTerraform(struct!.dnsName),
    refresh_interval: cdktf.numberToTerraform(struct!.refreshInterval),
  }
}


export function cdnLoadbalancerOriginPoolPublicNameToHclTerraform(struct?: CdnLoadbalancerOriginPoolPublicNameOutputReference | CdnLoadbalancerOriginPoolPublicName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_name: {
      value: cdktf.stringToHclTerraform(struct!.dnsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval: {
      value: cdktf.numberToHclTerraform(struct!.refreshInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolPublicNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolPublicName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsName = this._dnsName;
    }
    if (this._refreshInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshInterval = this._refreshInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolPublicName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsName = undefined;
      this._refreshInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsName = value.dnsName;
      this._refreshInterval = value.refreshInterval;
    }
  }

  // dns_name - computed: false, optional: false, required: true
  private _dnsName?: string; 
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }
  public set dnsName(value: string) {
    this._dnsName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameInput() {
    return this._dnsName;
  }

  // refresh_interval - computed: false, optional: true, required: false
  private _refreshInterval?: number; 
  public get refreshInterval() {
    return this.getNumberAttribute('refresh_interval');
  }
  public set refreshInterval(value: number) {
    this._refreshInterval = value;
  }
  public resetRefreshInterval() {
    this._refreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalInput() {
    return this._refreshInterval;
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cipher_suites CdnLoadbalancer#cipher_suites}
  */
  readonly cipherSuites: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#max_version CdnLoadbalancer#max_version}
  */
  readonly maxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#min_version CdnLoadbalancer#min_version}
  */
  readonly minVersion?: string;
}

export function cdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurityToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurityOutputReference | CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cipher_suites: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cipherSuites),
    max_version: cdktf.stringToTerraform(struct!.maxVersion),
    min_version: cdktf.stringToTerraform(struct!.minVersion),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurityToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurityOutputReference | CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cipher_suites: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cipherSuites),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_version: {
      value: cdktf.stringToHclTerraform(struct!.maxVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_version: {
      value: cdktf.stringToHclTerraform(struct!.minVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cipherSuites !== undefined) {
      hasAnyValues = true;
      internalValueResult.cipherSuites = this._cipherSuites;
    }
    if (this._maxVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxVersion = this._maxVersion;
    }
    if (this._minVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minVersion = this._minVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cipherSuites = undefined;
      this._maxVersion = undefined;
      this._minVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cipherSuites = value.cipherSuites;
      this._maxVersion = value.maxVersion;
      this._minVersion = value.minVersion;
    }
  }

  // cipher_suites - computed: false, optional: false, required: true
  private _cipherSuites?: string[]; 
  public get cipherSuites() {
    return this.getListAttribute('cipher_suites');
  }
  public set cipherSuites(value: string[]) {
    this._cipherSuites = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cipherSuitesInput() {
    return this._cipherSuites;
  }

  // max_version - computed: false, optional: true, required: false
  private _maxVersion?: string; 
  public get maxVersion() {
    return this.getStringAttribute('max_version');
  }
  public set maxVersion(value: string) {
    this._maxVersion = value;
  }
  public resetMaxVersion() {
    this._maxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxVersionInput() {
    return this._maxVersion;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsTlsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#default_security CdnLoadbalancer#default_security}
  */
  readonly defaultSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#low_security CdnLoadbalancer#low_security}
  */
  readonly lowSecurity?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#medium_security CdnLoadbalancer#medium_security}
  */
  readonly mediumSecurity?: boolean | cdktf.IResolvable;
  /**
  * custom_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_security CdnLoadbalancer#custom_security}
  */
  readonly customSecurity?: CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurity;
}

export function cdnLoadbalancerOriginPoolUseTlsTlsConfigToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsTlsConfigOutputReference | CdnLoadbalancerOriginPoolUseTlsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_security: cdktf.booleanToTerraform(struct!.defaultSecurity),
    low_security: cdktf.booleanToTerraform(struct!.lowSecurity),
    medium_security: cdktf.booleanToTerraform(struct!.mediumSecurity),
    custom_security: cdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurityToTerraform(struct!.customSecurity),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsTlsConfigToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsTlsConfigOutputReference | CdnLoadbalancerOriginPoolUseTlsTlsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_security: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    low_security: {
      value: cdktf.booleanToHclTerraform(struct!.lowSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    medium_security: {
      value: cdktf.booleanToHclTerraform(struct!.mediumSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_security: {
      value: cdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurityToHclTerraform(struct!.customSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsTlsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsTlsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSecurity = this._defaultSecurity;
    }
    if (this._lowSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowSecurity = this._lowSecurity;
    }
    if (this._mediumSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.mediumSecurity = this._mediumSecurity;
    }
    if (this._customSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSecurity = this._customSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsTlsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSecurity = undefined;
      this._lowSecurity = undefined;
      this._mediumSecurity = undefined;
      this._customSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSecurity = value.defaultSecurity;
      this._lowSecurity = value.lowSecurity;
      this._mediumSecurity = value.mediumSecurity;
      this._customSecurity.internalValue = value.customSecurity;
    }
  }

  // default_security - computed: false, optional: true, required: false
  private _defaultSecurity?: boolean | cdktf.IResolvable; 
  public get defaultSecurity() {
    return this.getBooleanAttribute('default_security');
  }
  public set defaultSecurity(value: boolean | cdktf.IResolvable) {
    this._defaultSecurity = value;
  }
  public resetDefaultSecurity() {
    this._defaultSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecurityInput() {
    return this._defaultSecurity;
  }

  // low_security - computed: false, optional: true, required: false
  private _lowSecurity?: boolean | cdktf.IResolvable; 
  public get lowSecurity() {
    return this.getBooleanAttribute('low_security');
  }
  public set lowSecurity(value: boolean | cdktf.IResolvable) {
    this._lowSecurity = value;
  }
  public resetLowSecurity() {
    this._lowSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowSecurityInput() {
    return this._lowSecurity;
  }

  // medium_security - computed: false, optional: true, required: false
  private _mediumSecurity?: boolean | cdktf.IResolvable; 
  public get mediumSecurity() {
    return this.getBooleanAttribute('medium_security');
  }
  public set mediumSecurity(value: boolean | cdktf.IResolvable) {
    this._mediumSecurity = value;
  }
  public resetMediumSecurity() {
    this._mediumSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumSecurityInput() {
    return this._mediumSecurity;
  }

  // custom_security - computed: false, optional: true, required: false
  private _customSecurity = new CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurityOutputReference(this, "custom_security");
  public get customSecurity() {
    return this._customSecurity;
  }
  public putCustomSecurity(value: CdnLoadbalancerOriginPoolUseTlsTlsConfigCustomSecurity) {
    this._customSecurity.internalValue = value;
  }
  public resetCustomSecurity() {
    this._customSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSecurityInput() {
    return this._customSecurity.internalValue;
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#hash_algorithms CdnLoadbalancer#hash_algorithms}
  */
  readonly hashAlgorithms: string[];
}

export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hash_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.hashAlgorithms),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hash_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.hashAlgorithms),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hashAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashAlgorithms = this._hashAlgorithms;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hashAlgorithms = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hashAlgorithms = value.hashAlgorithms;
    }
  }

  // hash_algorithms - computed: false, optional: false, required: true
  private _hashAlgorithms?: string[]; 
  public get hashAlgorithms() {
    return this.getListAttribute('hash_algorithms');
  }
  public set hashAlgorithms(value: string[]) {
    this._hashAlgorithms = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashAlgorithmsInput() {
    return this._hashAlgorithms;
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling {
}

export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo;
}

export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults {
}

export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#certificate_url CdnLoadbalancer#certificate_url}
  */
  readonly certificateUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * custom_hash_algorithms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_hash_algorithms CdnLoadbalancer#custom_hash_algorithms}
  */
  readonly customHashAlgorithms?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms;
  /**
  * disable_ocsp_stapling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disable_ocsp_stapling CdnLoadbalancer#disable_ocsp_stapling}
  */
  readonly disableOcspStapling?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling;
  /**
  * private_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#private_key CdnLoadbalancer#private_key}
  */
  readonly privateKey: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey;
  /**
  * use_system_defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_system_defaults CdnLoadbalancer#use_system_defaults}
  */
  readonly useSystemDefaults?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults;
}

export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_url: cdktf.stringToTerraform(struct!.certificateUrl),
    description: cdktf.stringToTerraform(struct!.description),
    custom_hash_algorithms: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToTerraform(struct!.customHashAlgorithms),
    disable_ocsp_stapling: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToTerraform(struct!.disableOcspStapling),
    private_key: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToTerraform(struct!.privateKey),
    use_system_defaults: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToTerraform(struct!.useSystemDefaults),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_url: {
      value: cdktf.stringToHclTerraform(struct!.certificateUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_hash_algorithms: {
      value: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsToHclTerraform(struct!.customHashAlgorithms),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsList",
    },
    disable_ocsp_stapling: {
      value: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingToHclTerraform(struct!.disableOcspStapling),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingList",
    },
    private_key: {
      value: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyToHclTerraform(struct!.privateKey),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyList",
    },
    use_system_defaults: {
      value: cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsToHclTerraform(struct!.useSystemDefaults),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateUrl = this._certificateUrl;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._customHashAlgorithms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHashAlgorithms = this._customHashAlgorithms?.internalValue;
    }
    if (this._disableOcspStapling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableOcspStapling = this._disableOcspStapling?.internalValue;
    }
    if (this._privateKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey?.internalValue;
    }
    if (this._useSystemDefaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSystemDefaults = this._useSystemDefaults?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateUrl = undefined;
      this._description = undefined;
      this._customHashAlgorithms.internalValue = undefined;
      this._disableOcspStapling.internalValue = undefined;
      this._privateKey.internalValue = undefined;
      this._useSystemDefaults.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateUrl = value.certificateUrl;
      this._description = value.description;
      this._customHashAlgorithms.internalValue = value.customHashAlgorithms;
      this._disableOcspStapling.internalValue = value.disableOcspStapling;
      this._privateKey.internalValue = value.privateKey;
      this._useSystemDefaults.internalValue = value.useSystemDefaults;
    }
  }

  // certificate_url - computed: false, optional: false, required: true
  private _certificateUrl?: string; 
  public get certificateUrl() {
    return this.getStringAttribute('certificate_url');
  }
  public set certificateUrl(value: string) {
    this._certificateUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlInput() {
    return this._certificateUrl;
  }

  // description - computed: false, optional: true, required: false
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

  // custom_hash_algorithms - computed: false, optional: true, required: false
  private _customHashAlgorithms = new CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithmsOutputReference(this, "custom_hash_algorithms");
  public get customHashAlgorithms() {
    return this._customHashAlgorithms;
  }
  public putCustomHashAlgorithms(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesCustomHashAlgorithms) {
    this._customHashAlgorithms.internalValue = value;
  }
  public resetCustomHashAlgorithms() {
    this._customHashAlgorithms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHashAlgorithmsInput() {
    return this._customHashAlgorithms.internalValue;
  }

  // disable_ocsp_stapling - computed: false, optional: true, required: false
  private _disableOcspStapling = new CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStaplingOutputReference(this, "disable_ocsp_stapling");
  public get disableOcspStapling() {
    return this._disableOcspStapling;
  }
  public putDisableOcspStapling(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesDisableOcspStapling) {
    this._disableOcspStapling.internalValue = value;
  }
  public resetDisableOcspStapling() {
    this._disableOcspStapling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOcspStaplingInput() {
    return this._disableOcspStapling.internalValue;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey = new CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKeyOutputReference(this, "private_key");
  public get privateKey() {
    return this._privateKey;
  }
  public putPrivateKey(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesPrivateKey) {
    this._privateKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey.internalValue;
  }

  // use_system_defaults - computed: false, optional: true, required: false
  private _useSystemDefaults = new CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaultsOutputReference(this, "use_system_defaults");
  public get useSystemDefaults() {
    return this._useSystemDefaults;
  }
  public putUseSystemDefaults(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesUseSystemDefaults) {
    this._useSystemDefaults.internalValue = value;
  }
  public resetUseSystemDefaults() {
    this._useSystemDefaults.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSystemDefaultsInput() {
    return this._useSystemDefaults.internalValue;
  }
}

export class CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificates[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesOutputReference {
    return new CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseMtls {
  /**
  * tls_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_certificates CdnLoadbalancer#tls_certificates}
  */
  readonly tlsCertificates: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificates[] | cdktf.IResolvable;
}

export function cdnLoadbalancerOriginPoolUseTlsUseMtlsToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tls_certificates: cdktf.listMapper(cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesToTerraform, true)(struct!.tlsCertificates),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseMtlsToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tls_certificates: {
      value: cdktf.listMapperHcl(cdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesToHclTerraform, true)(struct!.tlsCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsUseMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tlsCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificates = this._tlsCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tlsCertificates.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tlsCertificates.internalValue = value.tlsCertificates;
    }
  }

  // tls_certificates - computed: false, optional: false, required: true
  private _tlsCertificates = new CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificatesList(this, "tls_certificates", false);
  public get tlsCertificates() {
    return this._tlsCertificates;
  }
  public putTlsCertificates(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsTlsCertificates[] | cdktf.IResolvable) {
    this._tlsCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificatesInput() {
    return this._tlsCertificates.internalValue;
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseMtlsObj {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerOriginPoolUseTlsUseMtlsObjToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsObjOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsObj): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseMtlsObjToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseMtlsObjOutputReference | CdnLoadbalancerOriginPoolUseTlsUseMtlsObj): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsUseMtlsObjOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseMtlsObj | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsObj | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCa {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCaToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCaOutputReference | CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCaToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCaOutputReference | CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCa): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerOriginPoolUseTlsUseServerVerification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#trusted_ca_url CdnLoadbalancer#trusted_ca_url}
  */
  readonly trustedCaUrl?: string;
  /**
  * trusted_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#trusted_ca CdnLoadbalancer#trusted_ca}
  */
  readonly trustedCa?: CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCa;
}

export function cdnLoadbalancerOriginPoolUseTlsUseServerVerificationToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseServerVerificationOutputReference | CdnLoadbalancerOriginPoolUseTlsUseServerVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_ca_url: cdktf.stringToTerraform(struct!.trustedCaUrl),
    trusted_ca: cdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCaToTerraform(struct!.trustedCa),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsUseServerVerificationToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsUseServerVerificationOutputReference | CdnLoadbalancerOriginPoolUseTlsUseServerVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_ca_url: {
      value: cdktf.stringToHclTerraform(struct!.trustedCaUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trusted_ca: {
      value: cdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCaToHclTerraform(struct!.trustedCa),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsUseServerVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTlsUseServerVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCaUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCaUrl = this._trustedCaUrl;
    }
    if (this._trustedCa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCa = this._trustedCa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTlsUseServerVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCaUrl = undefined;
      this._trustedCa.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCaUrl = value.trustedCaUrl;
      this._trustedCa.internalValue = value.trustedCa;
    }
  }

  // trusted_ca_url - computed: false, optional: true, required: false
  private _trustedCaUrl?: string; 
  public get trustedCaUrl() {
    return this.getStringAttribute('trusted_ca_url');
  }
  public set trustedCaUrl(value: string) {
    this._trustedCaUrl = value;
  }
  public resetTrustedCaUrl() {
    this._trustedCaUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaUrlInput() {
    return this._trustedCaUrl;
  }

  // trusted_ca - computed: false, optional: true, required: false
  private _trustedCa = new CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCaOutputReference(this, "trusted_ca");
  public get trustedCa() {
    return this._trustedCa;
  }
  public putTrustedCa(value: CdnLoadbalancerOriginPoolUseTlsUseServerVerificationTrustedCa) {
    this._trustedCa.internalValue = value;
  }
  public resetTrustedCa() {
    this._trustedCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCaInput() {
    return this._trustedCa.internalValue;
  }
}
export interface CdnLoadbalancerOriginPoolUseTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#default_session_key_caching CdnLoadbalancer#default_session_key_caching}
  */
  readonly defaultSessionKeyCaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disable_session_key_caching CdnLoadbalancer#disable_session_key_caching}
  */
  readonly disableSessionKeyCaching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disable_sni CdnLoadbalancer#disable_sni}
  */
  readonly disableSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#max_session_keys CdnLoadbalancer#max_session_keys}
  */
  readonly maxSessionKeys?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#no_mtls CdnLoadbalancer#no_mtls}
  */
  readonly noMtls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#skip_server_verification CdnLoadbalancer#skip_server_verification}
  */
  readonly skipServerVerification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#sni CdnLoadbalancer#sni}
  */
  readonly sni?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_host_header_as_sni CdnLoadbalancer#use_host_header_as_sni}
  */
  readonly useHostHeaderAsSni?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#volterra_trusted_ca CdnLoadbalancer#volterra_trusted_ca}
  */
  readonly volterraTrustedCa?: boolean | cdktf.IResolvable;
  /**
  * tls_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_config CdnLoadbalancer#tls_config}
  */
  readonly tlsConfig: CdnLoadbalancerOriginPoolUseTlsTlsConfig;
  /**
  * use_mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_mtls CdnLoadbalancer#use_mtls}
  */
  readonly useMtls?: CdnLoadbalancerOriginPoolUseTlsUseMtls;
  /**
  * use_mtls_obj block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_mtls_obj CdnLoadbalancer#use_mtls_obj}
  */
  readonly useMtlsObj?: CdnLoadbalancerOriginPoolUseTlsUseMtlsObj;
  /**
  * use_server_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_server_verification CdnLoadbalancer#use_server_verification}
  */
  readonly useServerVerification?: CdnLoadbalancerOriginPoolUseTlsUseServerVerification;
}

export function cdnLoadbalancerOriginPoolUseTlsToTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsOutputReference | CdnLoadbalancerOriginPoolUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_session_key_caching: cdktf.booleanToTerraform(struct!.defaultSessionKeyCaching),
    disable_session_key_caching: cdktf.booleanToTerraform(struct!.disableSessionKeyCaching),
    disable_sni: cdktf.booleanToTerraform(struct!.disableSni),
    max_session_keys: cdktf.numberToTerraform(struct!.maxSessionKeys),
    no_mtls: cdktf.booleanToTerraform(struct!.noMtls),
    skip_server_verification: cdktf.booleanToTerraform(struct!.skipServerVerification),
    sni: cdktf.stringToTerraform(struct!.sni),
    use_host_header_as_sni: cdktf.booleanToTerraform(struct!.useHostHeaderAsSni),
    volterra_trusted_ca: cdktf.booleanToTerraform(struct!.volterraTrustedCa),
    tls_config: cdnLoadbalancerOriginPoolUseTlsTlsConfigToTerraform(struct!.tlsConfig),
    use_mtls: cdnLoadbalancerOriginPoolUseTlsUseMtlsToTerraform(struct!.useMtls),
    use_mtls_obj: cdnLoadbalancerOriginPoolUseTlsUseMtlsObjToTerraform(struct!.useMtlsObj),
    use_server_verification: cdnLoadbalancerOriginPoolUseTlsUseServerVerificationToTerraform(struct!.useServerVerification),
  }
}


export function cdnLoadbalancerOriginPoolUseTlsToHclTerraform(struct?: CdnLoadbalancerOriginPoolUseTlsOutputReference | CdnLoadbalancerOriginPoolUseTls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_session_key_caching: {
      value: cdktf.booleanToHclTerraform(struct!.defaultSessionKeyCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_session_key_caching: {
      value: cdktf.booleanToHclTerraform(struct!.disableSessionKeyCaching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_sni: {
      value: cdktf.booleanToHclTerraform(struct!.disableSni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_session_keys: {
      value: cdktf.numberToHclTerraform(struct!.maxSessionKeys),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_mtls: {
      value: cdktf.booleanToHclTerraform(struct!.noMtls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_server_verification: {
      value: cdktf.booleanToHclTerraform(struct!.skipServerVerification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sni: {
      value: cdktf.stringToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_host_header_as_sni: {
      value: cdktf.booleanToHclTerraform(struct!.useHostHeaderAsSni),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volterra_trusted_ca: {
      value: cdktf.booleanToHclTerraform(struct!.volterraTrustedCa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tls_config: {
      value: cdnLoadbalancerOriginPoolUseTlsTlsConfigToHclTerraform(struct!.tlsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsTlsConfigList",
    },
    use_mtls: {
      value: cdnLoadbalancerOriginPoolUseTlsUseMtlsToHclTerraform(struct!.useMtls),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseMtlsList",
    },
    use_mtls_obj: {
      value: cdnLoadbalancerOriginPoolUseTlsUseMtlsObjToHclTerraform(struct!.useMtlsObj),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseMtlsObjList",
    },
    use_server_verification: {
      value: cdnLoadbalancerOriginPoolUseTlsUseServerVerificationToHclTerraform(struct!.useServerVerification),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsUseServerVerificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolUseTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPoolUseTls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSessionKeyCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSessionKeyCaching = this._defaultSessionKeyCaching;
    }
    if (this._disableSessionKeyCaching !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSessionKeyCaching = this._disableSessionKeyCaching;
    }
    if (this._disableSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSni = this._disableSni;
    }
    if (this._maxSessionKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSessionKeys = this._maxSessionKeys;
    }
    if (this._noMtls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noMtls = this._noMtls;
    }
    if (this._skipServerVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipServerVerification = this._skipServerVerification;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._useHostHeaderAsSni !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHostHeaderAsSni = this._useHostHeaderAsSni;
    }
    if (this._volterraTrustedCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.volterraTrustedCa = this._volterraTrustedCa;
    }
    if (this._tlsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsConfig = this._tlsConfig?.internalValue;
    }
    if (this._useMtls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtls = this._useMtls?.internalValue;
    }
    if (this._useMtlsObj?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMtlsObj = this._useMtlsObj?.internalValue;
    }
    if (this._useServerVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useServerVerification = this._useServerVerification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPoolUseTls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSessionKeyCaching = undefined;
      this._disableSessionKeyCaching = undefined;
      this._disableSni = undefined;
      this._maxSessionKeys = undefined;
      this._noMtls = undefined;
      this._skipServerVerification = undefined;
      this._sni = undefined;
      this._useHostHeaderAsSni = undefined;
      this._volterraTrustedCa = undefined;
      this._tlsConfig.internalValue = undefined;
      this._useMtls.internalValue = undefined;
      this._useMtlsObj.internalValue = undefined;
      this._useServerVerification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSessionKeyCaching = value.defaultSessionKeyCaching;
      this._disableSessionKeyCaching = value.disableSessionKeyCaching;
      this._disableSni = value.disableSni;
      this._maxSessionKeys = value.maxSessionKeys;
      this._noMtls = value.noMtls;
      this._skipServerVerification = value.skipServerVerification;
      this._sni = value.sni;
      this._useHostHeaderAsSni = value.useHostHeaderAsSni;
      this._volterraTrustedCa = value.volterraTrustedCa;
      this._tlsConfig.internalValue = value.tlsConfig;
      this._useMtls.internalValue = value.useMtls;
      this._useMtlsObj.internalValue = value.useMtlsObj;
      this._useServerVerification.internalValue = value.useServerVerification;
    }
  }

  // default_session_key_caching - computed: false, optional: true, required: false
  private _defaultSessionKeyCaching?: boolean | cdktf.IResolvable; 
  public get defaultSessionKeyCaching() {
    return this.getBooleanAttribute('default_session_key_caching');
  }
  public set defaultSessionKeyCaching(value: boolean | cdktf.IResolvable) {
    this._defaultSessionKeyCaching = value;
  }
  public resetDefaultSessionKeyCaching() {
    this._defaultSessionKeyCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSessionKeyCachingInput() {
    return this._defaultSessionKeyCaching;
  }

  // disable_session_key_caching - computed: false, optional: true, required: false
  private _disableSessionKeyCaching?: boolean | cdktf.IResolvable; 
  public get disableSessionKeyCaching() {
    return this.getBooleanAttribute('disable_session_key_caching');
  }
  public set disableSessionKeyCaching(value: boolean | cdktf.IResolvable) {
    this._disableSessionKeyCaching = value;
  }
  public resetDisableSessionKeyCaching() {
    this._disableSessionKeyCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSessionKeyCachingInput() {
    return this._disableSessionKeyCaching;
  }

  // disable_sni - computed: false, optional: true, required: false
  private _disableSni?: boolean | cdktf.IResolvable; 
  public get disableSni() {
    return this.getBooleanAttribute('disable_sni');
  }
  public set disableSni(value: boolean | cdktf.IResolvable) {
    this._disableSni = value;
  }
  public resetDisableSni() {
    this._disableSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSniInput() {
    return this._disableSni;
  }

  // max_session_keys - computed: false, optional: true, required: false
  private _maxSessionKeys?: number; 
  public get maxSessionKeys() {
    return this.getNumberAttribute('max_session_keys');
  }
  public set maxSessionKeys(value: number) {
    this._maxSessionKeys = value;
  }
  public resetMaxSessionKeys() {
    this._maxSessionKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSessionKeysInput() {
    return this._maxSessionKeys;
  }

  // no_mtls - computed: false, optional: true, required: false
  private _noMtls?: boolean | cdktf.IResolvable; 
  public get noMtls() {
    return this.getBooleanAttribute('no_mtls');
  }
  public set noMtls(value: boolean | cdktf.IResolvable) {
    this._noMtls = value;
  }
  public resetNoMtls() {
    this._noMtls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noMtlsInput() {
    return this._noMtls;
  }

  // skip_server_verification - computed: false, optional: true, required: false
  private _skipServerVerification?: boolean | cdktf.IResolvable; 
  public get skipServerVerification() {
    return this.getBooleanAttribute('skip_server_verification');
  }
  public set skipServerVerification(value: boolean | cdktf.IResolvable) {
    this._skipServerVerification = value;
  }
  public resetSkipServerVerification() {
    this._skipServerVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipServerVerificationInput() {
    return this._skipServerVerification;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // use_host_header_as_sni - computed: false, optional: true, required: false
  private _useHostHeaderAsSni?: boolean | cdktf.IResolvable; 
  public get useHostHeaderAsSni() {
    return this.getBooleanAttribute('use_host_header_as_sni');
  }
  public set useHostHeaderAsSni(value: boolean | cdktf.IResolvable) {
    this._useHostHeaderAsSni = value;
  }
  public resetUseHostHeaderAsSni() {
    this._useHostHeaderAsSni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHostHeaderAsSniInput() {
    return this._useHostHeaderAsSni;
  }

  // volterra_trusted_ca - computed: false, optional: true, required: false
  private _volterraTrustedCa?: boolean | cdktf.IResolvable; 
  public get volterraTrustedCa() {
    return this.getBooleanAttribute('volterra_trusted_ca');
  }
  public set volterraTrustedCa(value: boolean | cdktf.IResolvable) {
    this._volterraTrustedCa = value;
  }
  public resetVolterraTrustedCa() {
    this._volterraTrustedCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volterraTrustedCaInput() {
    return this._volterraTrustedCa;
  }

  // tls_config - computed: false, optional: false, required: true
  private _tlsConfig = new CdnLoadbalancerOriginPoolUseTlsTlsConfigOutputReference(this, "tls_config");
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public putTlsConfig(value: CdnLoadbalancerOriginPoolUseTlsTlsConfig) {
    this._tlsConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig.internalValue;
  }

  // use_mtls - computed: false, optional: true, required: false
  private _useMtls = new CdnLoadbalancerOriginPoolUseTlsUseMtlsOutputReference(this, "use_mtls");
  public get useMtls() {
    return this._useMtls;
  }
  public putUseMtls(value: CdnLoadbalancerOriginPoolUseTlsUseMtls) {
    this._useMtls.internalValue = value;
  }
  public resetUseMtls() {
    this._useMtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsInput() {
    return this._useMtls.internalValue;
  }

  // use_mtls_obj - computed: false, optional: true, required: false
  private _useMtlsObj = new CdnLoadbalancerOriginPoolUseTlsUseMtlsObjOutputReference(this, "use_mtls_obj");
  public get useMtlsObj() {
    return this._useMtlsObj;
  }
  public putUseMtlsObj(value: CdnLoadbalancerOriginPoolUseTlsUseMtlsObj) {
    this._useMtlsObj.internalValue = value;
  }
  public resetUseMtlsObj() {
    this._useMtlsObj.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMtlsObjInput() {
    return this._useMtlsObj.internalValue;
  }

  // use_server_verification - computed: false, optional: true, required: false
  private _useServerVerification = new CdnLoadbalancerOriginPoolUseTlsUseServerVerificationOutputReference(this, "use_server_verification");
  public get useServerVerification() {
    return this._useServerVerification;
  }
  public putUseServerVerification(value: CdnLoadbalancerOriginPoolUseTlsUseServerVerification) {
    this._useServerVerification.internalValue = value;
  }
  public resetUseServerVerification() {
    this._useServerVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useServerVerificationInput() {
    return this._useServerVerification.internalValue;
  }
}
export interface CdnLoadbalancerOriginPool {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#no_tls CdnLoadbalancer#no_tls}
  */
  readonly noTls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#origin_request_timeout CdnLoadbalancer#origin_request_timeout}
  */
  readonly originRequestTimeout?: string;
  /**
  * more_origin_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#more_origin_options CdnLoadbalancer#more_origin_options}
  */
  readonly moreOriginOptions?: CdnLoadbalancerOriginPoolMoreOriginOptions;
  /**
  * origin_servers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#origin_servers CdnLoadbalancer#origin_servers}
  */
  readonly originServers: CdnLoadbalancerOriginPoolOriginServers[] | cdktf.IResolvable;
  /**
  * public_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#public_name CdnLoadbalancer#public_name}
  */
  readonly publicName?: CdnLoadbalancerOriginPoolPublicName;
  /**
  * use_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#use_tls CdnLoadbalancer#use_tls}
  */
  readonly useTls?: CdnLoadbalancerOriginPoolUseTls;
}

export function cdnLoadbalancerOriginPoolToTerraform(struct?: CdnLoadbalancerOriginPoolOutputReference | CdnLoadbalancerOriginPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_tls: cdktf.booleanToTerraform(struct!.noTls),
    origin_request_timeout: cdktf.stringToTerraform(struct!.originRequestTimeout),
    more_origin_options: cdnLoadbalancerOriginPoolMoreOriginOptionsToTerraform(struct!.moreOriginOptions),
    origin_servers: cdktf.listMapper(cdnLoadbalancerOriginPoolOriginServersToTerraform, true)(struct!.originServers),
    public_name: cdnLoadbalancerOriginPoolPublicNameToTerraform(struct!.publicName),
    use_tls: cdnLoadbalancerOriginPoolUseTlsToTerraform(struct!.useTls),
  }
}


export function cdnLoadbalancerOriginPoolToHclTerraform(struct?: CdnLoadbalancerOriginPoolOutputReference | CdnLoadbalancerOriginPool): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_tls: {
      value: cdktf.booleanToHclTerraform(struct!.noTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_request_timeout: {
      value: cdktf.stringToHclTerraform(struct!.originRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    more_origin_options: {
      value: cdnLoadbalancerOriginPoolMoreOriginOptionsToHclTerraform(struct!.moreOriginOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolMoreOriginOptionsList",
    },
    origin_servers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerOriginPoolOriginServersToHclTerraform, true)(struct!.originServers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolOriginServersList",
    },
    public_name: {
      value: cdnLoadbalancerOriginPoolPublicNameToHclTerraform(struct!.publicName),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolPublicNameList",
    },
    use_tls: {
      value: cdnLoadbalancerOriginPoolUseTlsToHclTerraform(struct!.useTls),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOriginPoolUseTlsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOriginPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOriginPool | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTls = this._noTls;
    }
    if (this._originRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.originRequestTimeout = this._originRequestTimeout;
    }
    if (this._moreOriginOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.moreOriginOptions = this._moreOriginOptions?.internalValue;
    }
    if (this._originServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originServers = this._originServers?.internalValue;
    }
    if (this._publicName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicName = this._publicName?.internalValue;
    }
    if (this._useTls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTls = this._useTls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOriginPool | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noTls = undefined;
      this._originRequestTimeout = undefined;
      this._moreOriginOptions.internalValue = undefined;
      this._originServers.internalValue = undefined;
      this._publicName.internalValue = undefined;
      this._useTls.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noTls = value.noTls;
      this._originRequestTimeout = value.originRequestTimeout;
      this._moreOriginOptions.internalValue = value.moreOriginOptions;
      this._originServers.internalValue = value.originServers;
      this._publicName.internalValue = value.publicName;
      this._useTls.internalValue = value.useTls;
    }
  }

  // no_tls - computed: false, optional: true, required: false
  private _noTls?: boolean | cdktf.IResolvable; 
  public get noTls() {
    return this.getBooleanAttribute('no_tls');
  }
  public set noTls(value: boolean | cdktf.IResolvable) {
    this._noTls = value;
  }
  public resetNoTls() {
    this._noTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTlsInput() {
    return this._noTls;
  }

  // origin_request_timeout - computed: false, optional: true, required: false
  private _originRequestTimeout?: string; 
  public get originRequestTimeout() {
    return this.getStringAttribute('origin_request_timeout');
  }
  public set originRequestTimeout(value: string) {
    this._originRequestTimeout = value;
  }
  public resetOriginRequestTimeout() {
    this._originRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originRequestTimeoutInput() {
    return this._originRequestTimeout;
  }

  // more_origin_options - computed: false, optional: true, required: false
  private _moreOriginOptions = new CdnLoadbalancerOriginPoolMoreOriginOptionsOutputReference(this, "more_origin_options");
  public get moreOriginOptions() {
    return this._moreOriginOptions;
  }
  public putMoreOriginOptions(value: CdnLoadbalancerOriginPoolMoreOriginOptions) {
    this._moreOriginOptions.internalValue = value;
  }
  public resetMoreOriginOptions() {
    this._moreOriginOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moreOriginOptionsInput() {
    return this._moreOriginOptions.internalValue;
  }

  // origin_servers - computed: false, optional: false, required: true
  private _originServers = new CdnLoadbalancerOriginPoolOriginServersList(this, "origin_servers", false);
  public get originServers() {
    return this._originServers;
  }
  public putOriginServers(value: CdnLoadbalancerOriginPoolOriginServers[] | cdktf.IResolvable) {
    this._originServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originServersInput() {
    return this._originServers.internalValue;
  }

  // public_name - computed: false, optional: true, required: false
  private _publicName = new CdnLoadbalancerOriginPoolPublicNameOutputReference(this, "public_name");
  public get publicName() {
    return this._publicName;
  }
  public putPublicName(value: CdnLoadbalancerOriginPoolPublicName) {
    this._publicName.internalValue = value;
  }
  public resetPublicName() {
    this._publicName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNameInput() {
    return this._publicName.internalValue;
  }

  // use_tls - computed: false, optional: true, required: false
  private _useTls = new CdnLoadbalancerOriginPoolUseTlsOutputReference(this, "use_tls");
  public get useTls() {
    return this._useTls;
  }
  public putUseTls(value: CdnLoadbalancerOriginPoolUseTls) {
    this._useTls.internalValue = value;
  }
  public resetUseTls() {
    this._useTls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTlsInput() {
    return this._useTls.internalValue;
  }
}
export interface CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValue {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo;
}

export function cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueToTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueToHclTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#append CdnLoadbalancer#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#value CdnLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#secret_value CdnLoadbalancer#secret_value}
  */
  readonly secretValue?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValue;
}

export function cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddToTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddToHclTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    secret_value: {
      value: cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // value - computed: false, optional: true, required: false
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddOutputReference {
    return new CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#decryption_provider CdnLoadbalancer#decryption_provider}
  */
  readonly decryptionProvider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#location CdnLoadbalancer#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#store_provider CdnLoadbalancer#store_provider}
  */
  readonly storeProvider?: string;
}

export function cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decryption_provider: cdktf.stringToTerraform(struct!.decryptionProvider),
    location: cdktf.stringToTerraform(struct!.location),
    store_provider: cdktf.stringToTerraform(struct!.storeProvider),
  }
}


export function cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decryption_provider: {
      value: cdktf.stringToHclTerraform(struct!.decryptionProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_provider: {
      value: cdktf.stringToHclTerraform(struct!.storeProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decryptionProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionProvider = this._decryptionProvider;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._storeProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeProvider = this._storeProvider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decryptionProvider = undefined;
      this._location = undefined;
      this._storeProvider = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decryptionProvider = value.decryptionProvider;
      this._location = value.location;
      this._storeProvider = value.storeProvider;
    }
  }

  // decryption_provider - computed: false, optional: true, required: false
  private _decryptionProvider?: string; 
  public get decryptionProvider() {
    return this.getStringAttribute('decryption_provider');
  }
  public set decryptionProvider(value: string) {
    this._decryptionProvider = value;
  }
  public resetDecryptionProvider() {
    this._decryptionProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionProviderInput() {
    return this._decryptionProvider;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // store_provider - computed: false, optional: true, required: false
  private _storeProvider?: string; 
  public get storeProvider() {
    return this.getStringAttribute('store_provider');
  }
  public set storeProvider(value: string) {
    this._storeProvider = value;
  }
  public resetStoreProvider() {
    this._storeProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeProviderInput() {
    return this._storeProvider;
  }
}
export interface CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#provider CdnLoadbalancer#provider}
  */
  readonly provider?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#url CdnLoadbalancer#url}
  */
  readonly url: string;
}

export function cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provider: cdktf.stringToTerraform(struct!.provider),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._provider = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._provider = value.provider;
      this._url = value.url;
    }
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValue {
  /**
  * blindfold_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#blindfold_secret_info CdnLoadbalancer#blindfold_secret_info}
  */
  readonly blindfoldSecretInfo?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo;
  /**
  * clear_secret_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#clear_secret_info CdnLoadbalancer#clear_secret_info}
  */
  readonly clearSecretInfo?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo;
}

export function cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueToTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blindfold_secret_info: cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToTerraform(struct!.blindfoldSecretInfo),
    clear_secret_info: cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoToTerraform(struct!.clearSecretInfo),
  }
}


export function cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueToHclTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueOutputReference | CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blindfold_secret_info: {
      value: cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoToHclTerraform(struct!.blindfoldSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoList",
    },
    clear_secret_info: {
      value: cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoToHclTerraform(struct!.clearSecretInfo),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blindfoldSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blindfoldSecretInfo = this._blindfoldSecretInfo?.internalValue;
    }
    if (this._clearSecretInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSecretInfo = this._clearSecretInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blindfoldSecretInfo.internalValue = undefined;
      this._clearSecretInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blindfoldSecretInfo.internalValue = value.blindfoldSecretInfo;
      this._clearSecretInfo.internalValue = value.clearSecretInfo;
    }
  }

  // blindfold_secret_info - computed: false, optional: true, required: false
  private _blindfoldSecretInfo = new CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfoOutputReference(this, "blindfold_secret_info");
  public get blindfoldSecretInfo() {
    return this._blindfoldSecretInfo;
  }
  public putBlindfoldSecretInfo(value: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueBlindfoldSecretInfo) {
    this._blindfoldSecretInfo.internalValue = value;
  }
  public resetBlindfoldSecretInfo() {
    this._blindfoldSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blindfoldSecretInfoInput() {
    return this._blindfoldSecretInfo.internalValue;
  }

  // clear_secret_info - computed: false, optional: true, required: false
  private _clearSecretInfo = new CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfoOutputReference(this, "clear_secret_info");
  public get clearSecretInfo() {
    return this._clearSecretInfo;
  }
  public putClearSecretInfo(value: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueClearSecretInfo) {
    this._clearSecretInfo.internalValue = value;
  }
  public resetClearSecretInfo() {
    this._clearSecretInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSecretInfoInput() {
    return this._clearSecretInfo.internalValue;
  }
}
export interface CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#append CdnLoadbalancer#append}
  */
  readonly append?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#value CdnLoadbalancer#value}
  */
  readonly value?: string;
  /**
  * secret_value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#secret_value CdnLoadbalancer#secret_value}
  */
  readonly secretValue?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValue;
}

export function cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddToTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    append: cdktf.booleanToTerraform(struct!.append),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    secret_value: cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueToTerraform(struct!.secretValue),
  }
}


export function cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddToHclTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    append: {
      value: cdktf.booleanToHclTerraform(struct!.append),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    secret_value: {
      value: cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueToHclTerraform(struct!.secretValue),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAdd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._append !== undefined) {
      hasAnyValues = true;
      internalValueResult.append = this._append;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._secretValue?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretValue = this._secretValue?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAdd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._append = undefined;
      this._name = undefined;
      this._value = undefined;
      this._secretValue.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._append = value.append;
      this._name = value.name;
      this._value = value.value;
      this._secretValue.internalValue = value.secretValue;
    }
  }

  // append - computed: false, optional: true, required: false
  private _append?: boolean | cdktf.IResolvable; 
  public get append() {
    return this.getBooleanAttribute('append');
  }
  public set append(value: boolean | cdktf.IResolvable) {
    this._append = value;
  }
  public resetAppend() {
    this._append = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appendInput() {
    return this._append;
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

  // value - computed: false, optional: true, required: false
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

  // secret_value - computed: false, optional: true, required: false
  private _secretValue = new CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValueOutputReference(this, "secret_value");
  public get secretValue() {
    return this._secretValue;
  }
  public putSecretValue(value: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddSecretValue) {
    this._secretValue.internalValue = value;
  }
  public resetSecretValue() {
    this._secretValue.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue.internalValue;
  }
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAdd[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddOutputReference {
    return new CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerOtherSettingsHeaderOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#request_headers_to_remove CdnLoadbalancer#request_headers_to_remove}
  */
  readonly requestHeadersToRemove?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#response_headers_to_remove CdnLoadbalancer#response_headers_to_remove}
  */
  readonly responseHeadersToRemove?: string[];
  /**
  * request_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#request_headers_to_add CdnLoadbalancer#request_headers_to_add}
  */
  readonly requestHeadersToAdd?: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAdd[] | cdktf.IResolvable;
  /**
  * response_headers_to_add block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#response_headers_to_add CdnLoadbalancer#response_headers_to_add}
  */
  readonly responseHeadersToAdd?: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAdd[] | cdktf.IResolvable;
}

export function cdnLoadbalancerOtherSettingsHeaderOptionsToTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsOutputReference | CdnLoadbalancerOtherSettingsHeaderOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    request_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requestHeadersToRemove),
    response_headers_to_remove: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.responseHeadersToRemove),
    request_headers_to_add: cdktf.listMapper(cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddToTerraform, true)(struct!.requestHeadersToAdd),
    response_headers_to_add: cdktf.listMapper(cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddToTerraform, true)(struct!.responseHeadersToAdd),
  }
}


export function cdnLoadbalancerOtherSettingsHeaderOptionsToHclTerraform(struct?: CdnLoadbalancerOtherSettingsHeaderOptionsOutputReference | CdnLoadbalancerOtherSettingsHeaderOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    request_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requestHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    response_headers_to_remove: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.responseHeadersToRemove),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    request_headers_to_add: {
      value: cdktf.listMapperHcl(cdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddToHclTerraform, true)(struct!.requestHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddList",
    },
    response_headers_to_add: {
      value: cdktf.listMapperHcl(cdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddToHclTerraform, true)(struct!.responseHeadersToAdd),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsHeaderOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettingsHeaderOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToRemove = this._requestHeadersToRemove;
    }
    if (this._responseHeadersToRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToRemove = this._responseHeadersToRemove;
    }
    if (this._requestHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersToAdd = this._requestHeadersToAdd?.internalValue;
    }
    if (this._responseHeadersToAdd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHeadersToAdd = this._responseHeadersToAdd?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsHeaderOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestHeadersToRemove = undefined;
      this._responseHeadersToRemove = undefined;
      this._requestHeadersToAdd.internalValue = undefined;
      this._responseHeadersToAdd.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestHeadersToRemove = value.requestHeadersToRemove;
      this._responseHeadersToRemove = value.responseHeadersToRemove;
      this._requestHeadersToAdd.internalValue = value.requestHeadersToAdd;
      this._responseHeadersToAdd.internalValue = value.responseHeadersToAdd;
    }
  }

  // request_headers_to_remove - computed: false, optional: true, required: false
  private _requestHeadersToRemove?: string[]; 
  public get requestHeadersToRemove() {
    return this.getListAttribute('request_headers_to_remove');
  }
  public set requestHeadersToRemove(value: string[]) {
    this._requestHeadersToRemove = value;
  }
  public resetRequestHeadersToRemove() {
    this._requestHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToRemoveInput() {
    return this._requestHeadersToRemove;
  }

  // response_headers_to_remove - computed: false, optional: true, required: false
  private _responseHeadersToRemove?: string[]; 
  public get responseHeadersToRemove() {
    return this.getListAttribute('response_headers_to_remove');
  }
  public set responseHeadersToRemove(value: string[]) {
    this._responseHeadersToRemove = value;
  }
  public resetResponseHeadersToRemove() {
    this._responseHeadersToRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToRemoveInput() {
    return this._responseHeadersToRemove;
  }

  // request_headers_to_add - computed: false, optional: true, required: false
  private _requestHeadersToAdd = new CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAddList(this, "request_headers_to_add", false);
  public get requestHeadersToAdd() {
    return this._requestHeadersToAdd;
  }
  public putRequestHeadersToAdd(value: CdnLoadbalancerOtherSettingsHeaderOptionsRequestHeadersToAdd[] | cdktf.IResolvable) {
    this._requestHeadersToAdd.internalValue = value;
  }
  public resetRequestHeadersToAdd() {
    this._requestHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersToAddInput() {
    return this._requestHeadersToAdd.internalValue;
  }

  // response_headers_to_add - computed: false, optional: true, required: false
  private _responseHeadersToAdd = new CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAddList(this, "response_headers_to_add", false);
  public get responseHeadersToAdd() {
    return this._responseHeadersToAdd;
  }
  public putResponseHeadersToAdd(value: CdnLoadbalancerOtherSettingsHeaderOptionsResponseHeadersToAdd[] | cdktf.IResolvable) {
    this._responseHeadersToAdd.internalValue = value;
  }
  public resetResponseHeadersToAdd() {
    this._responseHeadersToAdd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHeadersToAddInput() {
    return this._responseHeadersToAdd.internalValue;
  }
}
export interface CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#header_list CdnLoadbalancer#header_list}
  */
  readonly headerList?: string[];
}

export function cdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptionsToTerraform(struct?: CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptionsOutputReference | CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headerList),
  }
}


export function cdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptionsToHclTerraform(struct?: CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptionsOutputReference | CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headerList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerList = this._headerList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerList = value.headerList;
    }
  }

  // header_list - computed: false, optional: true, required: false
  private _headerList?: string[]; 
  public get headerList() {
    return this.getListAttribute('header_list');
  }
  public set headerList(value: string[]) {
    this._headerList = value;
  }
  public resetHeaderList() {
    this._headerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerListInput() {
    return this._headerList;
  }
}
export interface CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#header_list CdnLoadbalancer#header_list}
  */
  readonly headerList?: string[];
}

export function cdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptionsToTerraform(struct?: CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptionsOutputReference | CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headerList),
  }
}


export function cdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptionsToHclTerraform(struct?: CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptionsOutputReference | CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headerList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerList !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerList = this._headerList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerList = value.headerList;
    }
  }

  // header_list - computed: false, optional: true, required: false
  private _headerList?: string[]; 
  public get headerList() {
    return this.getListAttribute('header_list');
  }
  public set headerList(value: string[]) {
    this._headerList = value;
  }
  public resetHeaderList() {
    this._headerList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerListInput() {
    return this._headerList;
  }
}
export interface CdnLoadbalancerOtherSettingsLoggingOptions {
  /**
  * client_log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#client_log_options CdnLoadbalancer#client_log_options}
  */
  readonly clientLogOptions?: CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptions;
  /**
  * origin_log_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#origin_log_options CdnLoadbalancer#origin_log_options}
  */
  readonly originLogOptions?: CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptions;
}

export function cdnLoadbalancerOtherSettingsLoggingOptionsToTerraform(struct?: CdnLoadbalancerOtherSettingsLoggingOptionsOutputReference | CdnLoadbalancerOtherSettingsLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_log_options: cdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptionsToTerraform(struct!.clientLogOptions),
    origin_log_options: cdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptionsToTerraform(struct!.originLogOptions),
  }
}


export function cdnLoadbalancerOtherSettingsLoggingOptionsToHclTerraform(struct?: CdnLoadbalancerOtherSettingsLoggingOptionsOutputReference | CdnLoadbalancerOtherSettingsLoggingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_log_options: {
      value: cdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptionsToHclTerraform(struct!.clientLogOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptionsList",
    },
    origin_log_options: {
      value: cdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptionsToHclTerraform(struct!.originLogOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsLoggingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettingsLoggingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientLogOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientLogOptions = this._clientLogOptions?.internalValue;
    }
    if (this._originLogOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.originLogOptions = this._originLogOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettingsLoggingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientLogOptions.internalValue = undefined;
      this._originLogOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientLogOptions.internalValue = value.clientLogOptions;
      this._originLogOptions.internalValue = value.originLogOptions;
    }
  }

  // client_log_options - computed: false, optional: true, required: false
  private _clientLogOptions = new CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptionsOutputReference(this, "client_log_options");
  public get clientLogOptions() {
    return this._clientLogOptions;
  }
  public putClientLogOptions(value: CdnLoadbalancerOtherSettingsLoggingOptionsClientLogOptions) {
    this._clientLogOptions.internalValue = value;
  }
  public resetClientLogOptions() {
    this._clientLogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLogOptionsInput() {
    return this._clientLogOptions.internalValue;
  }

  // origin_log_options - computed: false, optional: true, required: false
  private _originLogOptions = new CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptionsOutputReference(this, "origin_log_options");
  public get originLogOptions() {
    return this._originLogOptions;
  }
  public putOriginLogOptions(value: CdnLoadbalancerOtherSettingsLoggingOptionsOriginLogOptions) {
    this._originLogOptions.internalValue = value;
  }
  public resetOriginLogOptions() {
    this._originLogOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originLogOptionsInput() {
    return this._originLogOptions.internalValue;
  }
}
export interface CdnLoadbalancerOtherSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#add_location CdnLoadbalancer#add_location}
  */
  readonly addLocation?: boolean | cdktf.IResolvable;
  /**
  * header_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#header_options CdnLoadbalancer#header_options}
  */
  readonly headerOptions?: CdnLoadbalancerOtherSettingsHeaderOptions;
  /**
  * logging_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#logging_options CdnLoadbalancer#logging_options}
  */
  readonly loggingOptions?: CdnLoadbalancerOtherSettingsLoggingOptions;
}

export function cdnLoadbalancerOtherSettingsToTerraform(struct?: CdnLoadbalancerOtherSettingsOutputReference | CdnLoadbalancerOtherSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_location: cdktf.booleanToTerraform(struct!.addLocation),
    header_options: cdnLoadbalancerOtherSettingsHeaderOptionsToTerraform(struct!.headerOptions),
    logging_options: cdnLoadbalancerOtherSettingsLoggingOptionsToTerraform(struct!.loggingOptions),
  }
}


export function cdnLoadbalancerOtherSettingsToHclTerraform(struct?: CdnLoadbalancerOtherSettingsOutputReference | CdnLoadbalancerOtherSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_location: {
      value: cdktf.booleanToHclTerraform(struct!.addLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    header_options: {
      value: cdnLoadbalancerOtherSettingsHeaderOptionsToHclTerraform(struct!.headerOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsHeaderOptionsList",
    },
    logging_options: {
      value: cdnLoadbalancerOtherSettingsLoggingOptionsToHclTerraform(struct!.loggingOptions),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerOtherSettingsLoggingOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerOtherSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerOtherSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.addLocation = this._addLocation;
    }
    if (this._headerOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerOptions = this._headerOptions?.internalValue;
    }
    if (this._loggingOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingOptions = this._loggingOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerOtherSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addLocation = undefined;
      this._headerOptions.internalValue = undefined;
      this._loggingOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addLocation = value.addLocation;
      this._headerOptions.internalValue = value.headerOptions;
      this._loggingOptions.internalValue = value.loggingOptions;
    }
  }

  // add_location - computed: false, optional: true, required: false
  private _addLocation?: boolean | cdktf.IResolvable; 
  public get addLocation() {
    return this.getBooleanAttribute('add_location');
  }
  public set addLocation(value: boolean | cdktf.IResolvable) {
    this._addLocation = value;
  }
  public resetAddLocation() {
    this._addLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addLocationInput() {
    return this._addLocation;
  }

  // header_options - computed: false, optional: true, required: false
  private _headerOptions = new CdnLoadbalancerOtherSettingsHeaderOptionsOutputReference(this, "header_options");
  public get headerOptions() {
    return this._headerOptions;
  }
  public putHeaderOptions(value: CdnLoadbalancerOtherSettingsHeaderOptions) {
    this._headerOptions.internalValue = value;
  }
  public resetHeaderOptions() {
    this._headerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerOptionsInput() {
    return this._headerOptions.internalValue;
  }

  // logging_options - computed: false, optional: true, required: false
  private _loggingOptions = new CdnLoadbalancerOtherSettingsLoggingOptionsOutputReference(this, "logging_options");
  public get loggingOptions() {
    return this._loggingOptions;
  }
  public putLoggingOptions(value: CdnLoadbalancerOtherSettingsLoggingOptions) {
    this._loggingOptions.internalValue = value;
  }
  public resetLoggingOptions() {
    this._loggingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingOptionsInput() {
    return this._loggingOptions.internalValue;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
}

export function cdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersOutputReference | CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersOutputReference | CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeJsChallengeParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_expiry CdnLoadbalancer#cookie_expiry}
  */
  readonly cookieExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_page CdnLoadbalancer#custom_page}
  */
  readonly customPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#js_script_delay CdnLoadbalancer#js_script_delay}
  */
  readonly jsScriptDelay?: number;
}

export function cdnLoadbalancerPolicyBasedChallengeJsChallengeParametersToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeJsChallengeParametersOutputReference | CdnLoadbalancerPolicyBasedChallengeJsChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiry: cdktf.numberToTerraform(struct!.cookieExpiry),
    custom_page: cdktf.stringToTerraform(struct!.customPage),
    js_script_delay: cdktf.numberToTerraform(struct!.jsScriptDelay),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeJsChallengeParametersToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeJsChallengeParametersOutputReference | CdnLoadbalancerPolicyBasedChallengeJsChallengeParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiry: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_page: {
      value: cdktf.stringToHclTerraform(struct!.customPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    js_script_delay: {
      value: cdktf.numberToHclTerraform(struct!.jsScriptDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeJsChallengeParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeJsChallengeParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpiry = this._cookieExpiry;
    }
    if (this._customPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPage = this._customPage;
    }
    if (this._jsScriptDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsScriptDelay = this._jsScriptDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeJsChallengeParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpiry = undefined;
      this._customPage = undefined;
      this._jsScriptDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpiry = value.cookieExpiry;
      this._customPage = value.customPage;
      this._jsScriptDelay = value.jsScriptDelay;
    }
  }

  // cookie_expiry - computed: false, optional: true, required: false
  private _cookieExpiry?: number; 
  public get cookieExpiry() {
    return this.getNumberAttribute('cookie_expiry');
  }
  public set cookieExpiry(value: number) {
    this._cookieExpiry = value;
  }
  public resetCookieExpiry() {
    this._cookieExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpiryInput() {
    return this._cookieExpiry;
  }

  // custom_page - computed: false, optional: true, required: false
  private _customPage?: string; 
  public get customPage() {
    return this.getStringAttribute('custom_page');
  }
  public set customPage(value: string) {
    this._customPage = value;
  }
  public resetCustomPage() {
    this._customPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPageInput() {
    return this._customPage;
  }

  // js_script_delay - computed: false, optional: true, required: false
  private _jsScriptDelay?: number; 
  public get jsScriptDelay() {
    return this.getNumberAttribute('js_script_delay');
  }
  public set jsScriptDelay(value: number) {
    this._jsScriptDelay = value;
  }
  public resetJsScriptDelay() {
    this._jsScriptDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsScriptDelayInput() {
    return this._jsScriptDelay;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigationToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigationOutputReference | CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigationToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigationOutputReference | CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigation): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadataToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadataOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadataToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadataOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
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
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersOutputReference {
    return new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#as_numbers CdnLoadbalancer#as_numbers}
  */
  readonly asNumbers: number[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    as_numbers: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asNumbers),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    as_numbers: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumbers = this._asNumbers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asNumbers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asNumbers = value.asNumbers;
    }
  }

  // as_numbers - computed: false, optional: false, required: true
  private _asNumbers?: number[]; 
  public get asNumbers() {
    return this.getNumberListAttribute('as_numbers');
  }
  public set asNumbers(value: number[]) {
    this._asNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumbersInput() {
    return this._asNumbers;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsOutputReference {
    return new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher {
  /**
  * asn_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_sets CdnLoadbalancer#asn_sets}
  */
  readonly asnSets: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn_sets: cdktf.listMapper(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsToTerraform, true)(struct!.asnSets),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsToHclTerraform, true)(struct!.asnSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asnSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnSets = this._asnSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asnSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asnSets.internalValue = value.asnSets;
    }
  }

  // asn_sets - computed: false, optional: false, required: true
  private _asnSets = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSetsList(this, "asn_sets", false);
  public get asnSets() {
    return this._asnSets;
  }
  public putAsnSets(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherAsnSets[] | cdktf.IResolvable) {
    this._asnSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnSetsInput() {
    return this._asnSets.internalValue;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#expressions CdnLoadbalancer#expressions}
  */
  readonly expressions: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.expressions),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.expressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressions = this._expressions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expressions = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expressions = value.expressions;
    }
  }

  // expressions - computed: false, optional: false, required: true
  private _expressions?: string[]; 
  public get expressions() {
    return this.getListAttribute('expressions');
  }
  public set expressions(value: string[]) {
    this._expressions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionsInput() {
    return this._expressions;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersOutputReference {
    return new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    name: cdktf.stringToTerraform(struct!.name),
    item: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._name = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._name = value.name;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
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

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersOutputReference {
    return new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._methods = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._methods = value.methods;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsOutputReference {
    return new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * prefix_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#prefix_sets CdnLoadbalancer#prefix_sets}
  */
  readonly prefixSets: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_sets: cdktf.listMapper(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsToTerraform, true)(struct!.prefixSets),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_sets: {
      value: cdktf.listMapperHcl(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsToHclTerraform, true)(struct!.prefixSets),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixSets = this._prefixSets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatcher = undefined;
      this._prefixSets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatcher = value.invertMatcher;
      this._prefixSets.internalValue = value.prefixSets;
    }
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_sets - computed: false, optional: false, required: true
  private _prefixSets = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSetsList(this, "prefix_sets", false);
  public get prefixSets() {
    return this._prefixSets;
  }
  public putPrefixSets(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherPrefixSets[] | cdktf.IResolvable) {
    this._prefixSets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSetsInput() {
    return this._prefixSets.internalValue;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefixes CdnLoadbalancer#ip_prefixes}
  */
  readonly ipPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    ip_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipPrefixes),
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipPrefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._ipPrefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixes = this._ipPrefixes;
    }
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._invertMatch = undefined;
      this._ipPrefixes = undefined;
      this._ipv6Prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._invertMatch = value.invertMatch;
      this._ipPrefixes = value.ipPrefixes;
      this._ipv6Prefixes = value.ipv6Prefixes;
    }
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // ip_prefixes - computed: false, optional: true, required: false
  private _ipPrefixes?: string[]; 
  public get ipPrefixes() {
    return this.getListAttribute('ip_prefixes');
  }
  public set ipPrefixes(value: string[]) {
    this._ipPrefixes = value;
  }
  public resetIpPrefixes() {
    this._ipPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixesInput() {
    return this._ipPrefixes;
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#prefix_values CdnLoadbalancer#prefix_values}
  */
  readonly prefixValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#suffix_values CdnLoadbalancer#suffix_values}
  */
  readonly suffixValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    prefix_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    suffix_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.suffixValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    suffix_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.suffixValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._prefixValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixValues = this._prefixValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._suffixValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValues = this._suffixValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._invertMatcher = undefined;
      this._prefixValues = undefined;
      this._regexValues = undefined;
      this._suffixValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._invertMatcher = value.invertMatcher;
      this._prefixValues = value.prefixValues;
      this._regexValues = value.regexValues;
      this._suffixValues = value.suffixValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // prefix_values - computed: false, optional: true, required: false
  private _prefixValues?: string[]; 
  public get prefixValues() {
    return this.getListAttribute('prefix_values');
  }
  public set prefixValues(value: string[]) {
    this._prefixValues = value;
  }
  public resetPrefixValues() {
    this._prefixValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixValuesInput() {
    return this._prefixValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // suffix_values - computed: false, optional: true, required: false
  private _suffixValues?: string[]; 
  public get suffixValues() {
    return this.getListAttribute('suffix_values');
  }
  public set suffixValues(value: string[]) {
    this._suffixValues = value;
  }
  public resetSuffixValues() {
    this._suffixValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValuesInput() {
    return this._suffixValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex_values CdnLoadbalancer#regex_values}
  */
  readonly regexValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#transformers CdnLoadbalancer#transformers}
  */
  readonly transformers?: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    regex_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regexValues),
    transformers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.transformers),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    regex_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regexValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.transformers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._regexValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexValues = this._regexValues;
    }
    if (this._transformers !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformers = this._transformers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exactValues = undefined;
      this._regexValues = undefined;
      this._transformers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exactValues = value.exactValues;
      this._regexValues = value.regexValues;
      this._transformers = value.transformers;
    }
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // regex_values - computed: false, optional: true, required: false
  private _regexValues?: string[]; 
  public get regexValues() {
    return this.getListAttribute('regex_values');
  }
  public set regexValues(value: string[]) {
    this._regexValues = value;
  }
  public resetRegexValues() {
    this._regexValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexValuesInput() {
    return this._regexValues;
  }

  // transformers - computed: false, optional: true, required: false
  private _transformers?: string[]; 
  public get transformers() {
    return this.getListAttribute('transformers');
  }
  public set transformers(value: string[]) {
    this._transformers = value;
  }
  public resetTransformers() {
    this._transformers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformersInput() {
    return this._transformers;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_not_present CdnLoadbalancer#check_not_present}
  */
  readonly checkNotPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#check_present CdnLoadbalancer#check_present}
  */
  readonly checkPresent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_matcher CdnLoadbalancer#invert_matcher}
  */
  readonly invertMatcher?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#key CdnLoadbalancer#key}
  */
  readonly key: string;
  /**
  * item block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#item CdnLoadbalancer#item}
  */
  readonly item?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    check_not_present: cdktf.booleanToTerraform(struct!.checkNotPresent),
    check_present: cdktf.booleanToTerraform(struct!.checkPresent),
    invert_matcher: cdktf.booleanToTerraform(struct!.invertMatcher),
    key: cdktf.stringToTerraform(struct!.key),
    item: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemToTerraform(struct!.item),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    check_not_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkNotPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    check_present: {
      value: cdktf.booleanToHclTerraform(struct!.checkPresent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    invert_matcher: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatcher),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    item: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemToHclTerraform(struct!.item),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._checkNotPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkNotPresent = this._checkNotPresent;
    }
    if (this._checkPresent !== undefined) {
      hasAnyValues = true;
      internalValueResult.checkPresent = this._checkPresent;
    }
    if (this._invertMatcher !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatcher = this._invertMatcher;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._item?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.item = this._item?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._checkNotPresent = undefined;
      this._checkPresent = undefined;
      this._invertMatcher = undefined;
      this._key = undefined;
      this._item.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._checkNotPresent = value.checkNotPresent;
      this._checkPresent = value.checkPresent;
      this._invertMatcher = value.invertMatcher;
      this._key = value.key;
      this._item.internalValue = value.item;
    }
  }

  // check_not_present - computed: false, optional: true, required: false
  private _checkNotPresent?: boolean | cdktf.IResolvable; 
  public get checkNotPresent() {
    return this.getBooleanAttribute('check_not_present');
  }
  public set checkNotPresent(value: boolean | cdktf.IResolvable) {
    this._checkNotPresent = value;
  }
  public resetCheckNotPresent() {
    this._checkNotPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkNotPresentInput() {
    return this._checkNotPresent;
  }

  // check_present - computed: false, optional: true, required: false
  private _checkPresent?: boolean | cdktf.IResolvable; 
  public get checkPresent() {
    return this.getBooleanAttribute('check_present');
  }
  public set checkPresent(value: boolean | cdktf.IResolvable) {
    this._checkPresent = value;
  }
  public resetCheckPresent() {
    this._checkPresent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkPresentInput() {
    return this._checkPresent;
  }

  // invert_matcher - computed: false, optional: true, required: false
  private _invertMatcher?: boolean | cdktf.IResolvable; 
  public get invertMatcher() {
    return this.getBooleanAttribute('invert_matcher');
  }
  public set invertMatcher(value: boolean | cdktf.IResolvable) {
    this._invertMatcher = value;
  }
  public resetInvertMatcher() {
    this._invertMatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatcherInput() {
    return this._invertMatcher;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // item - computed: false, optional: true, required: false
  private _item = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItemOutputReference(this, "item");
  public get item() {
    return this._item;
  }
  public putItem(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsItem) {
    this._item.internalValue = value;
  }
  public resetItem() {
    this._item.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemInput() {
    return this._item.internalValue;
  }
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsOutputReference {
    return new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#classes CdnLoadbalancer#classes}
  */
  readonly classes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_values CdnLoadbalancer#exact_values}
  */
  readonly exactValues?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#excluded_values CdnLoadbalancer#excluded_values}
  */
  readonly excludedValues?: string[];
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    classes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.classes),
    exact_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exactValues),
    excluded_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludedValues),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    classes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.classes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    exact_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exactValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    excluded_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludedValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classes !== undefined) {
      hasAnyValues = true;
      internalValueResult.classes = this._classes;
    }
    if (this._exactValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValues = this._exactValues;
    }
    if (this._excludedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedValues = this._excludedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classes = undefined;
      this._exactValues = undefined;
      this._excludedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classes = value.classes;
      this._exactValues = value.exactValues;
      this._excludedValues = value.excludedValues;
    }
  }

  // classes - computed: false, optional: true, required: false
  private _classes?: string[]; 
  public get classes() {
    return this.getListAttribute('classes');
  }
  public set classes(value: string[]) {
    this._classes = value;
  }
  public resetClasses() {
    this._classes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes;
  }

  // exact_values - computed: false, optional: true, required: false
  private _exactValues?: string[]; 
  public get exactValues() {
    return this.getListAttribute('exact_values');
  }
  public set exactValues(value: string[]) {
    this._exactValues = value;
  }
  public resetExactValues() {
    this._exactValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValuesInput() {
    return this._exactValues;
  }

  // excluded_values - computed: false, optional: true, required: false
  private _excludedValues?: string[]; 
  public get excludedValues() {
    return this.getListAttribute('excluded_values');
  }
  public set excludedValues(value: string[]) {
    this._excludedValues = value;
  }
  public resetExcludedValues() {
    this._excludedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedValuesInput() {
    return this._excludedValues;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_asn CdnLoadbalancer#any_asn}
  */
  readonly anyAsn?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_client CdnLoadbalancer#any_client}
  */
  readonly anyClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_ip CdnLoadbalancer#any_ip}
  */
  readonly anyIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disable_challenge CdnLoadbalancer#disable_challenge}
  */
  readonly disableChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#enable_captcha_challenge CdnLoadbalancer#enable_captcha_challenge}
  */
  readonly enableCaptchaChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#enable_javascript_challenge CdnLoadbalancer#enable_javascript_challenge}
  */
  readonly enableJavascriptChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#expiration_timestamp CdnLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * arg_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#arg_matchers CdnLoadbalancer#arg_matchers}
  */
  readonly argMatchers?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers[] | cdktf.IResolvable;
  /**
  * asn_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_list CdnLoadbalancer#asn_list}
  */
  readonly asnList?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct;
  /**
  * asn_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#asn_matcher CdnLoadbalancer#asn_matcher}
  */
  readonly asnMatcher?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher;
  /**
  * body_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#body_matcher CdnLoadbalancer#body_matcher}
  */
  readonly bodyMatcher?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher;
  /**
  * client_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#client_selector CdnLoadbalancer#client_selector}
  */
  readonly clientSelector?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector;
  /**
  * cookie_matchers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#cookie_matchers CdnLoadbalancer#cookie_matchers}
  */
  readonly cookieMatchers?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers[] | cdktf.IResolvable;
  /**
  * domain_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#domain_matcher CdnLoadbalancer#domain_matcher}
  */
  readonly domainMatcher?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders[] | cdktf.IResolvable;
  /**
  * http_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#http_method CdnLoadbalancer#http_method}
  */
  readonly httpMethod?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod;
  /**
  * ip_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_matcher CdnLoadbalancer#ip_matcher}
  */
  readonly ipMatcher?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher;
  /**
  * ip_prefix_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefix_list CdnLoadbalancer#ip_prefix_list}
  */
  readonly ipPrefixList?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct;
  /**
  * path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#path CdnLoadbalancer#path}
  */
  readonly path?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath;
  /**
  * query_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#query_params CdnLoadbalancer#query_params}
  */
  readonly queryParams?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams[] | cdktf.IResolvable;
  /**
  * tls_fingerprint_matcher block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tls_fingerprint_matcher CdnLoadbalancer#tls_fingerprint_matcher}
  */
  readonly tlsFingerprintMatcher?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_asn: cdktf.booleanToTerraform(struct!.anyAsn),
    any_client: cdktf.booleanToTerraform(struct!.anyClient),
    any_ip: cdktf.booleanToTerraform(struct!.anyIp),
    disable_challenge: cdktf.booleanToTerraform(struct!.disableChallenge),
    enable_captcha_challenge: cdktf.booleanToTerraform(struct!.enableCaptchaChallenge),
    enable_javascript_challenge: cdktf.booleanToTerraform(struct!.enableJavascriptChallenge),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    arg_matchers: cdktf.listMapper(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersToTerraform, true)(struct!.argMatchers),
    asn_list: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructToTerraform(struct!.asnList),
    asn_matcher: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherToTerraform(struct!.asnMatcher),
    body_matcher: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherToTerraform(struct!.bodyMatcher),
    client_selector: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorToTerraform(struct!.clientSelector),
    cookie_matchers: cdktf.listMapper(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersToTerraform, true)(struct!.cookieMatchers),
    domain_matcher: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherToTerraform(struct!.domainMatcher),
    headers: cdktf.listMapper(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersToTerraform, true)(struct!.headers),
    http_method: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodToTerraform(struct!.httpMethod),
    ip_matcher: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherToTerraform(struct!.ipMatcher),
    ip_prefix_list: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructToTerraform(struct!.ipPrefixList),
    path: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathToTerraform(struct!.path),
    query_params: cdktf.listMapper(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsToTerraform, true)(struct!.queryParams),
    tls_fingerprint_matcher: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherToTerraform(struct!.tlsFingerprintMatcher),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_asn: {
      value: cdktf.booleanToHclTerraform(struct!.anyAsn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_client: {
      value: cdktf.booleanToHclTerraform(struct!.anyClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_ip: {
      value: cdktf.booleanToHclTerraform(struct!.anyIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.disableChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_captcha_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.enableCaptchaChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_javascript_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.enableJavascriptChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersToHclTerraform, true)(struct!.argMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersList",
    },
    asn_list: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructToHclTerraform(struct!.asnList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructList",
    },
    asn_matcher: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherToHclTerraform(struct!.asnMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherList",
    },
    body_matcher: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherToHclTerraform(struct!.bodyMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherList",
    },
    client_selector: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorToHclTerraform(struct!.clientSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorList",
    },
    cookie_matchers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersToHclTerraform, true)(struct!.cookieMatchers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersList",
    },
    domain_matcher: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherToHclTerraform(struct!.domainMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersList",
    },
    http_method: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodToHclTerraform(struct!.httpMethod),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodList",
    },
    ip_matcher: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherToHclTerraform(struct!.ipMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherList",
    },
    ip_prefix_list: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructToHclTerraform(struct!.ipPrefixList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructList",
    },
    path: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathList",
    },
    query_params: {
      value: cdktf.listMapperHcl(cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsToHclTerraform, true)(struct!.queryParams),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsList",
    },
    tls_fingerprint_matcher: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherToHclTerraform(struct!.tlsFingerprintMatcher),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyAsn !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyAsn = this._anyAsn;
    }
    if (this._anyClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyClient = this._anyClient;
    }
    if (this._anyIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyIp = this._anyIp;
    }
    if (this._disableChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableChallenge = this._disableChallenge;
    }
    if (this._enableCaptchaChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCaptchaChallenge = this._enableCaptchaChallenge;
    }
    if (this._enableJavascriptChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableJavascriptChallenge = this._enableJavascriptChallenge;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._argMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argMatchers = this._argMatchers?.internalValue;
    }
    if (this._asnList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnList = this._asnList?.internalValue;
    }
    if (this._asnMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.asnMatcher = this._asnMatcher?.internalValue;
    }
    if (this._bodyMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyMatcher = this._bodyMatcher?.internalValue;
    }
    if (this._clientSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelector = this._clientSelector?.internalValue;
    }
    if (this._cookieMatchers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieMatchers = this._cookieMatchers?.internalValue;
    }
    if (this._domainMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainMatcher = this._domainMatcher?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._httpMethod?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod?.internalValue;
    }
    if (this._ipMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipMatcher = this._ipMatcher?.internalValue;
    }
    if (this._ipPrefixList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefixList = this._ipPrefixList?.internalValue;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._queryParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParams = this._queryParams?.internalValue;
    }
    if (this._tlsFingerprintMatcher?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsFingerprintMatcher = this._tlsFingerprintMatcher?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anyAsn = undefined;
      this._anyClient = undefined;
      this._anyIp = undefined;
      this._disableChallenge = undefined;
      this._enableCaptchaChallenge = undefined;
      this._enableJavascriptChallenge = undefined;
      this._expirationTimestamp = undefined;
      this._argMatchers.internalValue = undefined;
      this._asnList.internalValue = undefined;
      this._asnMatcher.internalValue = undefined;
      this._bodyMatcher.internalValue = undefined;
      this._clientSelector.internalValue = undefined;
      this._cookieMatchers.internalValue = undefined;
      this._domainMatcher.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._httpMethod.internalValue = undefined;
      this._ipMatcher.internalValue = undefined;
      this._ipPrefixList.internalValue = undefined;
      this._path.internalValue = undefined;
      this._queryParams.internalValue = undefined;
      this._tlsFingerprintMatcher.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anyAsn = value.anyAsn;
      this._anyClient = value.anyClient;
      this._anyIp = value.anyIp;
      this._disableChallenge = value.disableChallenge;
      this._enableCaptchaChallenge = value.enableCaptchaChallenge;
      this._enableJavascriptChallenge = value.enableJavascriptChallenge;
      this._expirationTimestamp = value.expirationTimestamp;
      this._argMatchers.internalValue = value.argMatchers;
      this._asnList.internalValue = value.asnList;
      this._asnMatcher.internalValue = value.asnMatcher;
      this._bodyMatcher.internalValue = value.bodyMatcher;
      this._clientSelector.internalValue = value.clientSelector;
      this._cookieMatchers.internalValue = value.cookieMatchers;
      this._domainMatcher.internalValue = value.domainMatcher;
      this._headers.internalValue = value.headers;
      this._httpMethod.internalValue = value.httpMethod;
      this._ipMatcher.internalValue = value.ipMatcher;
      this._ipPrefixList.internalValue = value.ipPrefixList;
      this._path.internalValue = value.path;
      this._queryParams.internalValue = value.queryParams;
      this._tlsFingerprintMatcher.internalValue = value.tlsFingerprintMatcher;
    }
  }

  // any_asn - computed: false, optional: true, required: false
  private _anyAsn?: boolean | cdktf.IResolvable; 
  public get anyAsn() {
    return this.getBooleanAttribute('any_asn');
  }
  public set anyAsn(value: boolean | cdktf.IResolvable) {
    this._anyAsn = value;
  }
  public resetAnyAsn() {
    this._anyAsn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyAsnInput() {
    return this._anyAsn;
  }

  // any_client - computed: false, optional: true, required: false
  private _anyClient?: boolean | cdktf.IResolvable; 
  public get anyClient() {
    return this.getBooleanAttribute('any_client');
  }
  public set anyClient(value: boolean | cdktf.IResolvable) {
    this._anyClient = value;
  }
  public resetAnyClient() {
    this._anyClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyClientInput() {
    return this._anyClient;
  }

  // any_ip - computed: false, optional: true, required: false
  private _anyIp?: boolean | cdktf.IResolvable; 
  public get anyIp() {
    return this.getBooleanAttribute('any_ip');
  }
  public set anyIp(value: boolean | cdktf.IResolvable) {
    this._anyIp = value;
  }
  public resetAnyIp() {
    this._anyIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyIpInput() {
    return this._anyIp;
  }

  // disable_challenge - computed: false, optional: true, required: false
  private _disableChallenge?: boolean | cdktf.IResolvable; 
  public get disableChallenge() {
    return this.getBooleanAttribute('disable_challenge');
  }
  public set disableChallenge(value: boolean | cdktf.IResolvable) {
    this._disableChallenge = value;
  }
  public resetDisableChallenge() {
    this._disableChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableChallengeInput() {
    return this._disableChallenge;
  }

  // enable_captcha_challenge - computed: false, optional: true, required: false
  private _enableCaptchaChallenge?: boolean | cdktf.IResolvable; 
  public get enableCaptchaChallenge() {
    return this.getBooleanAttribute('enable_captcha_challenge');
  }
  public set enableCaptchaChallenge(value: boolean | cdktf.IResolvable) {
    this._enableCaptchaChallenge = value;
  }
  public resetEnableCaptchaChallenge() {
    this._enableCaptchaChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCaptchaChallengeInput() {
    return this._enableCaptchaChallenge;
  }

  // enable_javascript_challenge - computed: false, optional: true, required: false
  private _enableJavascriptChallenge?: boolean | cdktf.IResolvable; 
  public get enableJavascriptChallenge() {
    return this.getBooleanAttribute('enable_javascript_challenge');
  }
  public set enableJavascriptChallenge(value: boolean | cdktf.IResolvable) {
    this._enableJavascriptChallenge = value;
  }
  public resetEnableJavascriptChallenge() {
    this._enableJavascriptChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJavascriptChallengeInput() {
    return this._enableJavascriptChallenge;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // arg_matchers - computed: false, optional: true, required: false
  private _argMatchers = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchersList(this, "arg_matchers", false);
  public get argMatchers() {
    return this._argMatchers;
  }
  public putArgMatchers(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecArgMatchers[] | cdktf.IResolvable) {
    this._argMatchers.internalValue = value;
  }
  public resetArgMatchers() {
    this._argMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argMatchersInput() {
    return this._argMatchers.internalValue;
  }

  // asn_list - computed: false, optional: true, required: false
  private _asnList = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStructOutputReference(this, "asn_list");
  public get asnList() {
    return this._asnList;
  }
  public putAsnList(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnListStruct) {
    this._asnList.internalValue = value;
  }
  public resetAsnList() {
    this._asnList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnListInput() {
    return this._asnList.internalValue;
  }

  // asn_matcher - computed: false, optional: true, required: false
  private _asnMatcher = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcherOutputReference(this, "asn_matcher");
  public get asnMatcher() {
    return this._asnMatcher;
  }
  public putAsnMatcher(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecAsnMatcher) {
    this._asnMatcher.internalValue = value;
  }
  public resetAsnMatcher() {
    this._asnMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnMatcherInput() {
    return this._asnMatcher.internalValue;
  }

  // body_matcher - computed: false, optional: true, required: false
  private _bodyMatcher = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcherOutputReference(this, "body_matcher");
  public get bodyMatcher() {
    return this._bodyMatcher;
  }
  public putBodyMatcher(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecBodyMatcher) {
    this._bodyMatcher.internalValue = value;
  }
  public resetBodyMatcher() {
    this._bodyMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyMatcherInput() {
    return this._bodyMatcher.internalValue;
  }

  // client_selector - computed: false, optional: true, required: false
  private _clientSelector = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelectorOutputReference(this, "client_selector");
  public get clientSelector() {
    return this._clientSelector;
  }
  public putClientSelector(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecClientSelector) {
    this._clientSelector.internalValue = value;
  }
  public resetClientSelector() {
    this._clientSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectorInput() {
    return this._clientSelector.internalValue;
  }

  // cookie_matchers - computed: false, optional: true, required: false
  private _cookieMatchers = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchersList(this, "cookie_matchers", false);
  public get cookieMatchers() {
    return this._cookieMatchers;
  }
  public putCookieMatchers(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecCookieMatchers[] | cdktf.IResolvable) {
    this._cookieMatchers.internalValue = value;
  }
  public resetCookieMatchers() {
    this._cookieMatchers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieMatchersInput() {
    return this._cookieMatchers.internalValue;
  }

  // domain_matcher - computed: false, optional: true, required: false
  private _domainMatcher = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcherOutputReference(this, "domain_matcher");
  public get domainMatcher() {
    return this._domainMatcher;
  }
  public putDomainMatcher(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecDomainMatcher) {
    this._domainMatcher.internalValue = value;
  }
  public resetDomainMatcher() {
    this._domainMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainMatcherInput() {
    return this._domainMatcher.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethodOutputReference(this, "http_method");
  public get httpMethod() {
    return this._httpMethod;
  }
  public putHttpMethod(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecHttpMethod) {
    this._httpMethod.internalValue = value;
  }
  public resetHttpMethod() {
    this._httpMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod.internalValue;
  }

  // ip_matcher - computed: false, optional: true, required: false
  private _ipMatcher = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcherOutputReference(this, "ip_matcher");
  public get ipMatcher() {
    return this._ipMatcher;
  }
  public putIpMatcher(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpMatcher) {
    this._ipMatcher.internalValue = value;
  }
  public resetIpMatcher() {
    this._ipMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMatcherInput() {
    return this._ipMatcher.internalValue;
  }

  // ip_prefix_list - computed: false, optional: true, required: false
  private _ipPrefixList = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStructOutputReference(this, "ip_prefix_list");
  public get ipPrefixList() {
    return this._ipPrefixList;
  }
  public putIpPrefixList(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecIpPrefixListStruct) {
    this._ipPrefixList.internalValue = value;
  }
  public resetIpPrefixList() {
    this._ipPrefixList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixListInput() {
    return this._ipPrefixList.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
  }

  // query_params - computed: false, optional: true, required: false
  private _queryParams = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParamsList(this, "query_params", false);
  public get queryParams() {
    return this._queryParams;
  }
  public putQueryParams(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecQueryParams[] | cdktf.IResolvable) {
    this._queryParams.internalValue = value;
  }
  public resetQueryParams() {
    this._queryParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParamsInput() {
    return this._queryParams.internalValue;
  }

  // tls_fingerprint_matcher - computed: false, optional: true, required: false
  private _tlsFingerprintMatcher = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcherOutputReference(this, "tls_fingerprint_matcher");
  public get tlsFingerprintMatcher() {
    return this._tlsFingerprintMatcher;
  }
  public putTlsFingerprintMatcher(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecTlsFingerprintMatcher) {
    this._tlsFingerprintMatcher.internalValue = value;
  }
  public resetTlsFingerprintMatcher() {
    this._tlsFingerprintMatcher.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsFingerprintMatcherInput() {
    return this._tlsFingerprintMatcher.internalValue;
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListRules {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#spec CdnLoadbalancer#spec}
  */
  readonly spec: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpec;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadataToTerraform(struct!.metadata),
    spec: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecToTerraform(struct!.spec),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListRulesToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadataList",
    },
    spec: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: CdnLoadbalancerPolicyBasedChallengeRuleListRulesSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerPolicyBasedChallengeRuleListRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerPolicyBasedChallengeRuleListRulesOutputReference {
    return new CdnLoadbalancerPolicyBasedChallengeRuleListRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerPolicyBasedChallengeRuleListStruct {
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#rules CdnLoadbalancer#rules}
  */
  readonly rules?: CdnLoadbalancerPolicyBasedChallengeRuleListRules[] | cdktf.IResolvable;
}

export function cdnLoadbalancerPolicyBasedChallengeRuleListStructToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListStructOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rules: cdktf.listMapper(cdnLoadbalancerPolicyBasedChallengeRuleListRulesToTerraform, true)(struct!.rules),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeRuleListStructToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeRuleListStructOutputReference | CdnLoadbalancerPolicyBasedChallengeRuleListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rules: {
      value: cdktf.listMapperHcl(cdnLoadbalancerPolicyBasedChallengeRuleListRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeRuleListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallengeRuleListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallengeRuleListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rules.internalValue = value.rules;
    }
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new CdnLoadbalancerPolicyBasedChallengeRuleListRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: CdnLoadbalancerPolicyBasedChallengeRuleListRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface CdnLoadbalancerPolicyBasedChallenge {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#always_enable_captcha_challenge CdnLoadbalancer#always_enable_captcha_challenge}
  */
  readonly alwaysEnableCaptchaChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#always_enable_js_challenge CdnLoadbalancer#always_enable_js_challenge}
  */
  readonly alwaysEnableJsChallenge?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#default_captcha_challenge_parameters CdnLoadbalancer#default_captcha_challenge_parameters}
  */
  readonly defaultCaptchaChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#default_js_challenge_parameters CdnLoadbalancer#default_js_challenge_parameters}
  */
  readonly defaultJsChallengeParameters?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#default_mitigation_settings CdnLoadbalancer#default_mitigation_settings}
  */
  readonly defaultMitigationSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#no_challenge CdnLoadbalancer#no_challenge}
  */
  readonly noChallenge?: boolean | cdktf.IResolvable;
  /**
  * captcha_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#captcha_challenge_parameters CdnLoadbalancer#captcha_challenge_parameters}
  */
  readonly captchaChallengeParameters?: CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters;
  /**
  * js_challenge_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#js_challenge_parameters CdnLoadbalancer#js_challenge_parameters}
  */
  readonly jsChallengeParameters?: CdnLoadbalancerPolicyBasedChallengeJsChallengeParameters;
  /**
  * malicious_user_mitigation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#malicious_user_mitigation CdnLoadbalancer#malicious_user_mitigation}
  */
  readonly maliciousUserMitigation?: CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigation;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#rule_list CdnLoadbalancer#rule_list}
  */
  readonly ruleList?: CdnLoadbalancerPolicyBasedChallengeRuleListStruct;
}

export function cdnLoadbalancerPolicyBasedChallengeToTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeOutputReference | CdnLoadbalancerPolicyBasedChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_enable_captcha_challenge: cdktf.booleanToTerraform(struct!.alwaysEnableCaptchaChallenge),
    always_enable_js_challenge: cdktf.booleanToTerraform(struct!.alwaysEnableJsChallenge),
    default_captcha_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultCaptchaChallengeParameters),
    default_js_challenge_parameters: cdktf.booleanToTerraform(struct!.defaultJsChallengeParameters),
    default_mitigation_settings: cdktf.booleanToTerraform(struct!.defaultMitigationSettings),
    no_challenge: cdktf.booleanToTerraform(struct!.noChallenge),
    captcha_challenge_parameters: cdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersToTerraform(struct!.captchaChallengeParameters),
    js_challenge_parameters: cdnLoadbalancerPolicyBasedChallengeJsChallengeParametersToTerraform(struct!.jsChallengeParameters),
    malicious_user_mitigation: cdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigationToTerraform(struct!.maliciousUserMitigation),
    rule_list: cdnLoadbalancerPolicyBasedChallengeRuleListStructToTerraform(struct!.ruleList),
  }
}


export function cdnLoadbalancerPolicyBasedChallengeToHclTerraform(struct?: CdnLoadbalancerPolicyBasedChallengeOutputReference | CdnLoadbalancerPolicyBasedChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_enable_captcha_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysEnableCaptchaChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    always_enable_js_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysEnableJsChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_captcha_challenge_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultCaptchaChallengeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_js_challenge_parameters: {
      value: cdktf.booleanToHclTerraform(struct!.defaultJsChallengeParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_mitigation_settings: {
      value: cdktf.booleanToHclTerraform(struct!.defaultMitigationSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_challenge: {
      value: cdktf.booleanToHclTerraform(struct!.noChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    captcha_challenge_parameters: {
      value: cdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersToHclTerraform(struct!.captchaChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersList",
    },
    js_challenge_parameters: {
      value: cdnLoadbalancerPolicyBasedChallengeJsChallengeParametersToHclTerraform(struct!.jsChallengeParameters),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeJsChallengeParametersList",
    },
    malicious_user_mitigation: {
      value: cdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigationToHclTerraform(struct!.maliciousUserMitigation),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigationList",
    },
    rule_list: {
      value: cdnLoadbalancerPolicyBasedChallengeRuleListStructToHclTerraform(struct!.ruleList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerPolicyBasedChallengeRuleListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerPolicyBasedChallengeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerPolicyBasedChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysEnableCaptchaChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysEnableCaptchaChallenge = this._alwaysEnableCaptchaChallenge;
    }
    if (this._alwaysEnableJsChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysEnableJsChallenge = this._alwaysEnableJsChallenge;
    }
    if (this._defaultCaptchaChallengeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultCaptchaChallengeParameters = this._defaultCaptchaChallengeParameters;
    }
    if (this._defaultJsChallengeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultJsChallengeParameters = this._defaultJsChallengeParameters;
    }
    if (this._defaultMitigationSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMitigationSettings = this._defaultMitigationSettings;
    }
    if (this._noChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.noChallenge = this._noChallenge;
    }
    if (this._captchaChallengeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaChallengeParameters = this._captchaChallengeParameters?.internalValue;
    }
    if (this._jsChallengeParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsChallengeParameters = this._jsChallengeParameters?.internalValue;
    }
    if (this._maliciousUserMitigation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maliciousUserMitigation = this._maliciousUserMitigation?.internalValue;
    }
    if (this._ruleList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleList = this._ruleList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerPolicyBasedChallenge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysEnableCaptchaChallenge = undefined;
      this._alwaysEnableJsChallenge = undefined;
      this._defaultCaptchaChallengeParameters = undefined;
      this._defaultJsChallengeParameters = undefined;
      this._defaultMitigationSettings = undefined;
      this._noChallenge = undefined;
      this._captchaChallengeParameters.internalValue = undefined;
      this._jsChallengeParameters.internalValue = undefined;
      this._maliciousUserMitigation.internalValue = undefined;
      this._ruleList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysEnableCaptchaChallenge = value.alwaysEnableCaptchaChallenge;
      this._alwaysEnableJsChallenge = value.alwaysEnableJsChallenge;
      this._defaultCaptchaChallengeParameters = value.defaultCaptchaChallengeParameters;
      this._defaultJsChallengeParameters = value.defaultJsChallengeParameters;
      this._defaultMitigationSettings = value.defaultMitigationSettings;
      this._noChallenge = value.noChallenge;
      this._captchaChallengeParameters.internalValue = value.captchaChallengeParameters;
      this._jsChallengeParameters.internalValue = value.jsChallengeParameters;
      this._maliciousUserMitigation.internalValue = value.maliciousUserMitigation;
      this._ruleList.internalValue = value.ruleList;
    }
  }

  // always_enable_captcha_challenge - computed: false, optional: true, required: false
  private _alwaysEnableCaptchaChallenge?: boolean | cdktf.IResolvable; 
  public get alwaysEnableCaptchaChallenge() {
    return this.getBooleanAttribute('always_enable_captcha_challenge');
  }
  public set alwaysEnableCaptchaChallenge(value: boolean | cdktf.IResolvable) {
    this._alwaysEnableCaptchaChallenge = value;
  }
  public resetAlwaysEnableCaptchaChallenge() {
    this._alwaysEnableCaptchaChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysEnableCaptchaChallengeInput() {
    return this._alwaysEnableCaptchaChallenge;
  }

  // always_enable_js_challenge - computed: false, optional: true, required: false
  private _alwaysEnableJsChallenge?: boolean | cdktf.IResolvable; 
  public get alwaysEnableJsChallenge() {
    return this.getBooleanAttribute('always_enable_js_challenge');
  }
  public set alwaysEnableJsChallenge(value: boolean | cdktf.IResolvable) {
    this._alwaysEnableJsChallenge = value;
  }
  public resetAlwaysEnableJsChallenge() {
    this._alwaysEnableJsChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysEnableJsChallengeInput() {
    return this._alwaysEnableJsChallenge;
  }

  // default_captcha_challenge_parameters - computed: false, optional: true, required: false
  private _defaultCaptchaChallengeParameters?: boolean | cdktf.IResolvable; 
  public get defaultCaptchaChallengeParameters() {
    return this.getBooleanAttribute('default_captcha_challenge_parameters');
  }
  public set defaultCaptchaChallengeParameters(value: boolean | cdktf.IResolvable) {
    this._defaultCaptchaChallengeParameters = value;
  }
  public resetDefaultCaptchaChallengeParameters() {
    this._defaultCaptchaChallengeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCaptchaChallengeParametersInput() {
    return this._defaultCaptchaChallengeParameters;
  }

  // default_js_challenge_parameters - computed: false, optional: true, required: false
  private _defaultJsChallengeParameters?: boolean | cdktf.IResolvable; 
  public get defaultJsChallengeParameters() {
    return this.getBooleanAttribute('default_js_challenge_parameters');
  }
  public set defaultJsChallengeParameters(value: boolean | cdktf.IResolvable) {
    this._defaultJsChallengeParameters = value;
  }
  public resetDefaultJsChallengeParameters() {
    this._defaultJsChallengeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultJsChallengeParametersInput() {
    return this._defaultJsChallengeParameters;
  }

  // default_mitigation_settings - computed: false, optional: true, required: false
  private _defaultMitigationSettings?: boolean | cdktf.IResolvable; 
  public get defaultMitigationSettings() {
    return this.getBooleanAttribute('default_mitigation_settings');
  }
  public set defaultMitigationSettings(value: boolean | cdktf.IResolvable) {
    this._defaultMitigationSettings = value;
  }
  public resetDefaultMitigationSettings() {
    this._defaultMitigationSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMitigationSettingsInput() {
    return this._defaultMitigationSettings;
  }

  // no_challenge - computed: false, optional: true, required: false
  private _noChallenge?: boolean | cdktf.IResolvable; 
  public get noChallenge() {
    return this.getBooleanAttribute('no_challenge');
  }
  public set noChallenge(value: boolean | cdktf.IResolvable) {
    this._noChallenge = value;
  }
  public resetNoChallenge() {
    this._noChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noChallengeInput() {
    return this._noChallenge;
  }

  // captcha_challenge_parameters - computed: false, optional: true, required: false
  private _captchaChallengeParameters = new CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParametersOutputReference(this, "captcha_challenge_parameters");
  public get captchaChallengeParameters() {
    return this._captchaChallengeParameters;
  }
  public putCaptchaChallengeParameters(value: CdnLoadbalancerPolicyBasedChallengeCaptchaChallengeParameters) {
    this._captchaChallengeParameters.internalValue = value;
  }
  public resetCaptchaChallengeParameters() {
    this._captchaChallengeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaChallengeParametersInput() {
    return this._captchaChallengeParameters.internalValue;
  }

  // js_challenge_parameters - computed: false, optional: true, required: false
  private _jsChallengeParameters = new CdnLoadbalancerPolicyBasedChallengeJsChallengeParametersOutputReference(this, "js_challenge_parameters");
  public get jsChallengeParameters() {
    return this._jsChallengeParameters;
  }
  public putJsChallengeParameters(value: CdnLoadbalancerPolicyBasedChallengeJsChallengeParameters) {
    this._jsChallengeParameters.internalValue = value;
  }
  public resetJsChallengeParameters() {
    this._jsChallengeParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsChallengeParametersInput() {
    return this._jsChallengeParameters.internalValue;
  }

  // malicious_user_mitigation - computed: false, optional: true, required: false
  private _maliciousUserMitigation = new CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigationOutputReference(this, "malicious_user_mitigation");
  public get maliciousUserMitigation() {
    return this._maliciousUserMitigation;
  }
  public putMaliciousUserMitigation(value: CdnLoadbalancerPolicyBasedChallengeMaliciousUserMitigation) {
    this._maliciousUserMitigation.internalValue = value;
  }
  public resetMaliciousUserMitigation() {
    this._maliciousUserMitigation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maliciousUserMitigationInput() {
    return this._maliciousUserMitigation.internalValue;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new CdnLoadbalancerPolicyBasedChallengeRuleListStructOutputReference(this, "rule_list");
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: CdnLoadbalancerPolicyBasedChallengeRuleListStruct) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }
}
export interface CdnLoadbalancerProtectedCookies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#add_httponly CdnLoadbalancer#add_httponly}
  */
  readonly addHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#add_secure CdnLoadbalancer#add_secure}
  */
  readonly addSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disable_tampering_protection CdnLoadbalancer#disable_tampering_protection}
  */
  readonly disableTamperingProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#enable_tampering_protection CdnLoadbalancer#enable_tampering_protection}
  */
  readonly enableTamperingProtection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ignore_httponly CdnLoadbalancer#ignore_httponly}
  */
  readonly ignoreHttponly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ignore_samesite CdnLoadbalancer#ignore_samesite}
  */
  readonly ignoreSamesite?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ignore_secure CdnLoadbalancer#ignore_secure}
  */
  readonly ignoreSecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#samesite_lax CdnLoadbalancer#samesite_lax}
  */
  readonly samesiteLax?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#samesite_none CdnLoadbalancer#samesite_none}
  */
  readonly samesiteNone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#samesite_strict CdnLoadbalancer#samesite_strict}
  */
  readonly samesiteStrict?: boolean | cdktf.IResolvable;
}

export function cdnLoadbalancerProtectedCookiesToTerraform(struct?: CdnLoadbalancerProtectedCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_httponly: cdktf.booleanToTerraform(struct!.addHttponly),
    add_secure: cdktf.booleanToTerraform(struct!.addSecure),
    disable_tampering_protection: cdktf.booleanToTerraform(struct!.disableTamperingProtection),
    enable_tampering_protection: cdktf.booleanToTerraform(struct!.enableTamperingProtection),
    ignore_httponly: cdktf.booleanToTerraform(struct!.ignoreHttponly),
    ignore_samesite: cdktf.booleanToTerraform(struct!.ignoreSamesite),
    ignore_secure: cdktf.booleanToTerraform(struct!.ignoreSecure),
    name: cdktf.stringToTerraform(struct!.name),
    samesite_lax: cdktf.booleanToTerraform(struct!.samesiteLax),
    samesite_none: cdktf.booleanToTerraform(struct!.samesiteNone),
    samesite_strict: cdktf.booleanToTerraform(struct!.samesiteStrict),
  }
}


export function cdnLoadbalancerProtectedCookiesToHclTerraform(struct?: CdnLoadbalancerProtectedCookies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.addHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_secure: {
      value: cdktf.booleanToHclTerraform(struct!.addSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_tampering_protection: {
      value: cdktf.booleanToHclTerraform(struct!.disableTamperingProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_tampering_protection: {
      value: cdktf.booleanToHclTerraform(struct!.enableTamperingProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_httponly: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreHttponly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_samesite: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSamesite),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_secure: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samesite_lax: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteLax),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_none: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteNone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    samesite_strict: {
      value: cdktf.booleanToHclTerraform(struct!.samesiteStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerProtectedCookiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerProtectedCookies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.addHttponly = this._addHttponly;
    }
    if (this._addSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.addSecure = this._addSecure;
    }
    if (this._disableTamperingProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTamperingProtection = this._disableTamperingProtection;
    }
    if (this._enableTamperingProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTamperingProtection = this._enableTamperingProtection;
    }
    if (this._ignoreHttponly !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreHttponly = this._ignoreHttponly;
    }
    if (this._ignoreSamesite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSamesite = this._ignoreSamesite;
    }
    if (this._ignoreSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreSecure = this._ignoreSecure;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._samesiteLax !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteLax = this._samesiteLax;
    }
    if (this._samesiteNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteNone = this._samesiteNone;
    }
    if (this._samesiteStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.samesiteStrict = this._samesiteStrict;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerProtectedCookies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addHttponly = undefined;
      this._addSecure = undefined;
      this._disableTamperingProtection = undefined;
      this._enableTamperingProtection = undefined;
      this._ignoreHttponly = undefined;
      this._ignoreSamesite = undefined;
      this._ignoreSecure = undefined;
      this._name = undefined;
      this._samesiteLax = undefined;
      this._samesiteNone = undefined;
      this._samesiteStrict = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addHttponly = value.addHttponly;
      this._addSecure = value.addSecure;
      this._disableTamperingProtection = value.disableTamperingProtection;
      this._enableTamperingProtection = value.enableTamperingProtection;
      this._ignoreHttponly = value.ignoreHttponly;
      this._ignoreSamesite = value.ignoreSamesite;
      this._ignoreSecure = value.ignoreSecure;
      this._name = value.name;
      this._samesiteLax = value.samesiteLax;
      this._samesiteNone = value.samesiteNone;
      this._samesiteStrict = value.samesiteStrict;
    }
  }

  // add_httponly - computed: false, optional: true, required: false
  private _addHttponly?: boolean | cdktf.IResolvable; 
  public get addHttponly() {
    return this.getBooleanAttribute('add_httponly');
  }
  public set addHttponly(value: boolean | cdktf.IResolvable) {
    this._addHttponly = value;
  }
  public resetAddHttponly() {
    this._addHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addHttponlyInput() {
    return this._addHttponly;
  }

  // add_secure - computed: false, optional: true, required: false
  private _addSecure?: boolean | cdktf.IResolvable; 
  public get addSecure() {
    return this.getBooleanAttribute('add_secure');
  }
  public set addSecure(value: boolean | cdktf.IResolvable) {
    this._addSecure = value;
  }
  public resetAddSecure() {
    this._addSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addSecureInput() {
    return this._addSecure;
  }

  // disable_tampering_protection - computed: false, optional: true, required: false
  private _disableTamperingProtection?: boolean | cdktf.IResolvable; 
  public get disableTamperingProtection() {
    return this.getBooleanAttribute('disable_tampering_protection');
  }
  public set disableTamperingProtection(value: boolean | cdktf.IResolvable) {
    this._disableTamperingProtection = value;
  }
  public resetDisableTamperingProtection() {
    this._disableTamperingProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTamperingProtectionInput() {
    return this._disableTamperingProtection;
  }

  // enable_tampering_protection - computed: false, optional: true, required: false
  private _enableTamperingProtection?: boolean | cdktf.IResolvable; 
  public get enableTamperingProtection() {
    return this.getBooleanAttribute('enable_tampering_protection');
  }
  public set enableTamperingProtection(value: boolean | cdktf.IResolvable) {
    this._enableTamperingProtection = value;
  }
  public resetEnableTamperingProtection() {
    this._enableTamperingProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTamperingProtectionInput() {
    return this._enableTamperingProtection;
  }

  // ignore_httponly - computed: false, optional: true, required: false
  private _ignoreHttponly?: boolean | cdktf.IResolvable; 
  public get ignoreHttponly() {
    return this.getBooleanAttribute('ignore_httponly');
  }
  public set ignoreHttponly(value: boolean | cdktf.IResolvable) {
    this._ignoreHttponly = value;
  }
  public resetIgnoreHttponly() {
    this._ignoreHttponly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreHttponlyInput() {
    return this._ignoreHttponly;
  }

  // ignore_samesite - computed: false, optional: true, required: false
  private _ignoreSamesite?: boolean | cdktf.IResolvable; 
  public get ignoreSamesite() {
    return this.getBooleanAttribute('ignore_samesite');
  }
  public set ignoreSamesite(value: boolean | cdktf.IResolvable) {
    this._ignoreSamesite = value;
  }
  public resetIgnoreSamesite() {
    this._ignoreSamesite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSamesiteInput() {
    return this._ignoreSamesite;
  }

  // ignore_secure - computed: false, optional: true, required: false
  private _ignoreSecure?: boolean | cdktf.IResolvable; 
  public get ignoreSecure() {
    return this.getBooleanAttribute('ignore_secure');
  }
  public set ignoreSecure(value: boolean | cdktf.IResolvable) {
    this._ignoreSecure = value;
  }
  public resetIgnoreSecure() {
    this._ignoreSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSecureInput() {
    return this._ignoreSecure;
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

  // samesite_lax - computed: false, optional: true, required: false
  private _samesiteLax?: boolean | cdktf.IResolvable; 
  public get samesiteLax() {
    return this.getBooleanAttribute('samesite_lax');
  }
  public set samesiteLax(value: boolean | cdktf.IResolvable) {
    this._samesiteLax = value;
  }
  public resetSamesiteLax() {
    this._samesiteLax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteLaxInput() {
    return this._samesiteLax;
  }

  // samesite_none - computed: false, optional: true, required: false
  private _samesiteNone?: boolean | cdktf.IResolvable; 
  public get samesiteNone() {
    return this.getBooleanAttribute('samesite_none');
  }
  public set samesiteNone(value: boolean | cdktf.IResolvable) {
    this._samesiteNone = value;
  }
  public resetSamesiteNone() {
    this._samesiteNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteNoneInput() {
    return this._samesiteNone;
  }

  // samesite_strict - computed: false, optional: true, required: false
  private _samesiteStrict?: boolean | cdktf.IResolvable; 
  public get samesiteStrict() {
    return this.getBooleanAttribute('samesite_strict');
  }
  public set samesiteStrict(value: boolean | cdktf.IResolvable) {
    this._samesiteStrict = value;
  }
  public resetSamesiteStrict() {
    this._samesiteStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samesiteStrictInput() {
    return this._samesiteStrict;
  }
}

export class CdnLoadbalancerProtectedCookiesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerProtectedCookies[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerProtectedCookiesOutputReference {
    return new CdnLoadbalancerProtectedCookiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform(struct?: CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform(struct?: CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference {
    return new CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerRateLimitCustomIpAllowedListStruct {
  /**
  * rate_limiter_allowed_prefixes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#rate_limiter_allowed_prefixes CdnLoadbalancer#rate_limiter_allowed_prefixes}
  */
  readonly rateLimiterAllowedPrefixes: CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable;
}

export function cdnLoadbalancerRateLimitCustomIpAllowedListStructToTerraform(struct?: CdnLoadbalancerRateLimitCustomIpAllowedListStructOutputReference | CdnLoadbalancerRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rate_limiter_allowed_prefixes: cdktf.listMapper(cdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToTerraform, true)(struct!.rateLimiterAllowedPrefixes),
  }
}


export function cdnLoadbalancerRateLimitCustomIpAllowedListStructToHclTerraform(struct?: CdnLoadbalancerRateLimitCustomIpAllowedListStructOutputReference | CdnLoadbalancerRateLimitCustomIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rate_limiter_allowed_prefixes: {
      value: cdktf.listMapperHcl(cdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesToHclTerraform, true)(struct!.rateLimiterAllowedPrefixes),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitCustomIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerRateLimitCustomIpAllowedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rateLimiterAllowedPrefixes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiterAllowedPrefixes = this._rateLimiterAllowedPrefixes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimitCustomIpAllowedListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rateLimiterAllowedPrefixes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rateLimiterAllowedPrefixes.internalValue = value.rateLimiterAllowedPrefixes;
    }
  }

  // rate_limiter_allowed_prefixes - computed: false, optional: false, required: true
  private _rateLimiterAllowedPrefixes = new CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixesList(this, "rate_limiter_allowed_prefixes", false);
  public get rateLimiterAllowedPrefixes() {
    return this._rateLimiterAllowedPrefixes;
  }
  public putRateLimiterAllowedPrefixes(value: CdnLoadbalancerRateLimitCustomIpAllowedListRateLimiterAllowedPrefixes[] | cdktf.IResolvable) {
    this._rateLimiterAllowedPrefixes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterAllowedPrefixesInput() {
    return this._rateLimiterAllowedPrefixes.internalValue;
  }
}
export interface CdnLoadbalancerRateLimitIpAllowedListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ipv6_prefixes CdnLoadbalancer#ipv6_prefixes}
  */
  readonly ipv6Prefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#prefixes CdnLoadbalancer#prefixes}
  */
  readonly prefixes?: string[];
}

export function cdnLoadbalancerRateLimitIpAllowedListStructToTerraform(struct?: CdnLoadbalancerRateLimitIpAllowedListStructOutputReference | CdnLoadbalancerRateLimitIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Prefixes),
    prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixes),
  }
}


export function cdnLoadbalancerRateLimitIpAllowedListStructToHclTerraform(struct?: CdnLoadbalancerRateLimitIpAllowedListStructOutputReference | CdnLoadbalancerRateLimitIpAllowedListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6_prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prefixes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitIpAllowedListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerRateLimitIpAllowedListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6Prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefixes = this._ipv6Prefixes;
    }
    if (this._prefixes !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixes = this._prefixes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimitIpAllowedListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipv6Prefixes = undefined;
      this._prefixes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipv6Prefixes = value.ipv6Prefixes;
      this._prefixes = value.prefixes;
    }
  }

  // ipv6_prefixes - computed: false, optional: true, required: false
  private _ipv6Prefixes?: string[]; 
  public get ipv6Prefixes() {
    return this.getListAttribute('ipv6_prefixes');
  }
  public set ipv6Prefixes(value: string[]) {
    this._ipv6Prefixes = value;
  }
  public resetIpv6Prefixes() {
    this._ipv6Prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixesInput() {
    return this._ipv6Prefixes;
  }

  // prefixes - computed: false, optional: true, required: false
  private _prefixes?: string[]; 
  public get prefixes() {
    return this.getListAttribute('prefixes');
  }
  public set prefixes(value: string[]) {
    this._prefixes = value;
  }
  public resetPrefixes() {
    this._prefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixesInput() {
    return this._prefixes;
  }
}
export interface CdnLoadbalancerRateLimitPoliciesPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerRateLimitPoliciesPoliciesToTerraform(struct?: CdnLoadbalancerRateLimitPoliciesPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerRateLimitPoliciesPoliciesToHclTerraform(struct?: CdnLoadbalancerRateLimitPoliciesPolicies | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitPoliciesPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerRateLimitPoliciesPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimitPoliciesPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}

export class CdnLoadbalancerRateLimitPoliciesPoliciesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerRateLimitPoliciesPolicies[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerRateLimitPoliciesPoliciesOutputReference {
    return new CdnLoadbalancerRateLimitPoliciesPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerRateLimitPolicies {
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#policies CdnLoadbalancer#policies}
  */
  readonly policies: CdnLoadbalancerRateLimitPoliciesPolicies[] | cdktf.IResolvable;
}

export function cdnLoadbalancerRateLimitPoliciesToTerraform(struct?: CdnLoadbalancerRateLimitPoliciesOutputReference | CdnLoadbalancerRateLimitPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policies: cdktf.listMapper(cdnLoadbalancerRateLimitPoliciesPoliciesToTerraform, true)(struct!.policies),
  }
}


export function cdnLoadbalancerRateLimitPoliciesToHclTerraform(struct?: CdnLoadbalancerRateLimitPoliciesOutputReference | CdnLoadbalancerRateLimitPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policies: {
      value: cdktf.listMapperHcl(cdnLoadbalancerRateLimitPoliciesPoliciesToHclTerraform, true)(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerRateLimitPoliciesPoliciesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerRateLimitPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimitPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policies.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policies.internalValue = value.policies;
    }
  }

  // policies - computed: false, optional: false, required: true
  private _policies = new CdnLoadbalancerRateLimitPoliciesPoliciesList(this, "policies", false);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: CdnLoadbalancerRateLimitPoliciesPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }
}
export interface CdnLoadbalancerRateLimitRateLimiterActionBlockHours {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#duration CdnLoadbalancer#duration}
  */
  readonly duration?: number;
}

export function cdnLoadbalancerRateLimitRateLimiterActionBlockHoursToTerraform(struct?: CdnLoadbalancerRateLimitRateLimiterActionBlockHoursOutputReference | CdnLoadbalancerRateLimitRateLimiterActionBlockHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function cdnLoadbalancerRateLimitRateLimiterActionBlockHoursToHclTerraform(struct?: CdnLoadbalancerRateLimitRateLimiterActionBlockHoursOutputReference | CdnLoadbalancerRateLimitRateLimiterActionBlockHours): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitRateLimiterActionBlockHoursOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerRateLimitRateLimiterActionBlockHours | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimitRateLimiterActionBlockHours | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface CdnLoadbalancerRateLimitRateLimiterActionBlockMinutes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#duration CdnLoadbalancer#duration}
  */
  readonly duration?: number;
}

export function cdnLoadbalancerRateLimitRateLimiterActionBlockMinutesToTerraform(struct?: CdnLoadbalancerRateLimitRateLimiterActionBlockMinutesOutputReference | CdnLoadbalancerRateLimitRateLimiterActionBlockMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function cdnLoadbalancerRateLimitRateLimiterActionBlockMinutesToHclTerraform(struct?: CdnLoadbalancerRateLimitRateLimiterActionBlockMinutesOutputReference | CdnLoadbalancerRateLimitRateLimiterActionBlockMinutes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitRateLimiterActionBlockMinutesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerRateLimitRateLimiterActionBlockMinutes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimitRateLimiterActionBlockMinutes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface CdnLoadbalancerRateLimitRateLimiterActionBlockSeconds {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#duration CdnLoadbalancer#duration}
  */
  readonly duration?: number;
}

export function cdnLoadbalancerRateLimitRateLimiterActionBlockSecondsToTerraform(struct?: CdnLoadbalancerRateLimitRateLimiterActionBlockSecondsOutputReference | CdnLoadbalancerRateLimitRateLimiterActionBlockSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
  }
}


export function cdnLoadbalancerRateLimitRateLimiterActionBlockSecondsToHclTerraform(struct?: CdnLoadbalancerRateLimitRateLimiterActionBlockSecondsOutputReference | CdnLoadbalancerRateLimitRateLimiterActionBlockSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitRateLimiterActionBlockSecondsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerRateLimitRateLimiterActionBlockSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimitRateLimiterActionBlockSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }
}
export interface CdnLoadbalancerRateLimitRateLimiterActionBlock {
  /**
  * hours block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#hours CdnLoadbalancer#hours}
  */
  readonly hours?: CdnLoadbalancerRateLimitRateLimiterActionBlockHours;
  /**
  * minutes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#minutes CdnLoadbalancer#minutes}
  */
  readonly minutes?: CdnLoadbalancerRateLimitRateLimiterActionBlockMinutes;
  /**
  * seconds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#seconds CdnLoadbalancer#seconds}
  */
  readonly seconds?: CdnLoadbalancerRateLimitRateLimiterActionBlockSeconds;
}

export function cdnLoadbalancerRateLimitRateLimiterActionBlockToTerraform(struct?: CdnLoadbalancerRateLimitRateLimiterActionBlockOutputReference | CdnLoadbalancerRateLimitRateLimiterActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hours: cdnLoadbalancerRateLimitRateLimiterActionBlockHoursToTerraform(struct!.hours),
    minutes: cdnLoadbalancerRateLimitRateLimiterActionBlockMinutesToTerraform(struct!.minutes),
    seconds: cdnLoadbalancerRateLimitRateLimiterActionBlockSecondsToTerraform(struct!.seconds),
  }
}


export function cdnLoadbalancerRateLimitRateLimiterActionBlockToHclTerraform(struct?: CdnLoadbalancerRateLimitRateLimiterActionBlockOutputReference | CdnLoadbalancerRateLimitRateLimiterActionBlock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hours: {
      value: cdnLoadbalancerRateLimitRateLimiterActionBlockHoursToHclTerraform(struct!.hours),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerRateLimitRateLimiterActionBlockHoursList",
    },
    minutes: {
      value: cdnLoadbalancerRateLimitRateLimiterActionBlockMinutesToHclTerraform(struct!.minutes),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerRateLimitRateLimiterActionBlockMinutesList",
    },
    seconds: {
      value: cdnLoadbalancerRateLimitRateLimiterActionBlockSecondsToHclTerraform(struct!.seconds),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerRateLimitRateLimiterActionBlockSecondsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitRateLimiterActionBlockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerRateLimitRateLimiterActionBlock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hours?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hours = this._hours?.internalValue;
    }
    if (this._minutes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes?.internalValue;
    }
    if (this._seconds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimitRateLimiterActionBlock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hours.internalValue = undefined;
      this._minutes.internalValue = undefined;
      this._seconds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hours.internalValue = value.hours;
      this._minutes.internalValue = value.minutes;
      this._seconds.internalValue = value.seconds;
    }
  }

  // hours - computed: false, optional: true, required: false
  private _hours = new CdnLoadbalancerRateLimitRateLimiterActionBlockHoursOutputReference(this, "hours");
  public get hours() {
    return this._hours;
  }
  public putHours(value: CdnLoadbalancerRateLimitRateLimiterActionBlockHours) {
    this._hours.internalValue = value;
  }
  public resetHours() {
    this._hours.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hoursInput() {
    return this._hours.internalValue;
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes = new CdnLoadbalancerRateLimitRateLimiterActionBlockMinutesOutputReference(this, "minutes");
  public get minutes() {
    return this._minutes;
  }
  public putMinutes(value: CdnLoadbalancerRateLimitRateLimiterActionBlockMinutes) {
    this._minutes.internalValue = value;
  }
  public resetMinutes() {
    this._minutes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes.internalValue;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds = new CdnLoadbalancerRateLimitRateLimiterActionBlockSecondsOutputReference(this, "seconds");
  public get seconds() {
    return this._seconds;
  }
  public putSeconds(value: CdnLoadbalancerRateLimitRateLimiterActionBlockSeconds) {
    this._seconds.internalValue = value;
  }
  public resetSeconds() {
    this._seconds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds.internalValue;
  }
}
export interface CdnLoadbalancerRateLimitRateLimiter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#burst_multiplier CdnLoadbalancer#burst_multiplier}
  */
  readonly burstMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disabled CdnLoadbalancer#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#period_multiplier CdnLoadbalancer#period_multiplier}
  */
  readonly periodMultiplier?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#total_number CdnLoadbalancer#total_number}
  */
  readonly totalNumber: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#unit CdnLoadbalancer#unit}
  */
  readonly unit: string;
  /**
  * action_block block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#action_block CdnLoadbalancer#action_block}
  */
  readonly actionBlock?: CdnLoadbalancerRateLimitRateLimiterActionBlock;
}

export function cdnLoadbalancerRateLimitRateLimiterToTerraform(struct?: CdnLoadbalancerRateLimitRateLimiterOutputReference | CdnLoadbalancerRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_multiplier: cdktf.numberToTerraform(struct!.burstMultiplier),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    period_multiplier: cdktf.numberToTerraform(struct!.periodMultiplier),
    total_number: cdktf.numberToTerraform(struct!.totalNumber),
    unit: cdktf.stringToTerraform(struct!.unit),
    action_block: cdnLoadbalancerRateLimitRateLimiterActionBlockToTerraform(struct!.actionBlock),
  }
}


export function cdnLoadbalancerRateLimitRateLimiterToHclTerraform(struct?: CdnLoadbalancerRateLimitRateLimiterOutputReference | CdnLoadbalancerRateLimitRateLimiter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.burstMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    period_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.periodMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_number: {
      value: cdktf.numberToHclTerraform(struct!.totalNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_block: {
      value: cdnLoadbalancerRateLimitRateLimiterActionBlockToHclTerraform(struct!.actionBlock),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerRateLimitRateLimiterActionBlockList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitRateLimiterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerRateLimitRateLimiter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstMultiplier = this._burstMultiplier;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._periodMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodMultiplier = this._periodMultiplier;
    }
    if (this._totalNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNumber = this._totalNumber;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._actionBlock?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionBlock = this._actionBlock?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimitRateLimiter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burstMultiplier = undefined;
      this._disabled = undefined;
      this._periodMultiplier = undefined;
      this._totalNumber = undefined;
      this._unit = undefined;
      this._actionBlock.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burstMultiplier = value.burstMultiplier;
      this._disabled = value.disabled;
      this._periodMultiplier = value.periodMultiplier;
      this._totalNumber = value.totalNumber;
      this._unit = value.unit;
      this._actionBlock.internalValue = value.actionBlock;
    }
  }

  // burst_multiplier - computed: false, optional: true, required: false
  private _burstMultiplier?: number; 
  public get burstMultiplier() {
    return this.getNumberAttribute('burst_multiplier');
  }
  public set burstMultiplier(value: number) {
    this._burstMultiplier = value;
  }
  public resetBurstMultiplier() {
    this._burstMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstMultiplierInput() {
    return this._burstMultiplier;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // period_multiplier - computed: false, optional: true, required: false
  private _periodMultiplier?: number; 
  public get periodMultiplier() {
    return this.getNumberAttribute('period_multiplier');
  }
  public set periodMultiplier(value: number) {
    this._periodMultiplier = value;
  }
  public resetPeriodMultiplier() {
    this._periodMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodMultiplierInput() {
    return this._periodMultiplier;
  }

  // total_number - computed: false, optional: false, required: true
  private _totalNumber?: number; 
  public get totalNumber() {
    return this.getNumberAttribute('total_number');
  }
  public set totalNumber(value: number) {
    this._totalNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNumberInput() {
    return this._totalNumber;
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // action_block - computed: false, optional: true, required: false
  private _actionBlock = new CdnLoadbalancerRateLimitRateLimiterActionBlockOutputReference(this, "action_block");
  public get actionBlock() {
    return this._actionBlock;
  }
  public putActionBlock(value: CdnLoadbalancerRateLimitRateLimiterActionBlock) {
    this._actionBlock.internalValue = value;
  }
  public resetActionBlock() {
    this._actionBlock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionBlockInput() {
    return this._actionBlock.internalValue;
  }
}
export interface CdnLoadbalancerRateLimit {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#no_ip_allowed_list CdnLoadbalancer#no_ip_allowed_list}
  */
  readonly noIpAllowedList?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#no_policies CdnLoadbalancer#no_policies}
  */
  readonly noPolicies?: boolean | cdktf.IResolvable;
  /**
  * custom_ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#custom_ip_allowed_list CdnLoadbalancer#custom_ip_allowed_list}
  */
  readonly customIpAllowedList?: CdnLoadbalancerRateLimitCustomIpAllowedListStruct;
  /**
  * ip_allowed_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_allowed_list CdnLoadbalancer#ip_allowed_list}
  */
  readonly ipAllowedList?: CdnLoadbalancerRateLimitIpAllowedListStruct;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#policies CdnLoadbalancer#policies}
  */
  readonly policies?: CdnLoadbalancerRateLimitPolicies;
  /**
  * rate_limiter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#rate_limiter CdnLoadbalancer#rate_limiter}
  */
  readonly rateLimiter?: CdnLoadbalancerRateLimitRateLimiter;
}

export function cdnLoadbalancerRateLimitToTerraform(struct?: CdnLoadbalancerRateLimitOutputReference | CdnLoadbalancerRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_ip_allowed_list: cdktf.booleanToTerraform(struct!.noIpAllowedList),
    no_policies: cdktf.booleanToTerraform(struct!.noPolicies),
    custom_ip_allowed_list: cdnLoadbalancerRateLimitCustomIpAllowedListStructToTerraform(struct!.customIpAllowedList),
    ip_allowed_list: cdnLoadbalancerRateLimitIpAllowedListStructToTerraform(struct!.ipAllowedList),
    policies: cdnLoadbalancerRateLimitPoliciesToTerraform(struct!.policies),
    rate_limiter: cdnLoadbalancerRateLimitRateLimiterToTerraform(struct!.rateLimiter),
  }
}


export function cdnLoadbalancerRateLimitToHclTerraform(struct?: CdnLoadbalancerRateLimitOutputReference | CdnLoadbalancerRateLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_ip_allowed_list: {
      value: cdktf.booleanToHclTerraform(struct!.noIpAllowedList),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_policies: {
      value: cdktf.booleanToHclTerraform(struct!.noPolicies),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_ip_allowed_list: {
      value: cdnLoadbalancerRateLimitCustomIpAllowedListStructToHclTerraform(struct!.customIpAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerRateLimitCustomIpAllowedListStructList",
    },
    ip_allowed_list: {
      value: cdnLoadbalancerRateLimitIpAllowedListStructToHclTerraform(struct!.ipAllowedList),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerRateLimitIpAllowedListStructList",
    },
    policies: {
      value: cdnLoadbalancerRateLimitPoliciesToHclTerraform(struct!.policies),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerRateLimitPoliciesList",
    },
    rate_limiter: {
      value: cdnLoadbalancerRateLimitRateLimiterToHclTerraform(struct!.rateLimiter),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerRateLimitRateLimiterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerRateLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noIpAllowedList !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpAllowedList = this._noIpAllowedList;
    }
    if (this._noPolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPolicies = this._noPolicies;
    }
    if (this._customIpAllowedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customIpAllowedList = this._customIpAllowedList?.internalValue;
    }
    if (this._ipAllowedList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAllowedList = this._ipAllowedList?.internalValue;
    }
    if (this._policies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies?.internalValue;
    }
    if (this._rateLimiter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimiter = this._rateLimiter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerRateLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noIpAllowedList = undefined;
      this._noPolicies = undefined;
      this._customIpAllowedList.internalValue = undefined;
      this._ipAllowedList.internalValue = undefined;
      this._policies.internalValue = undefined;
      this._rateLimiter.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noIpAllowedList = value.noIpAllowedList;
      this._noPolicies = value.noPolicies;
      this._customIpAllowedList.internalValue = value.customIpAllowedList;
      this._ipAllowedList.internalValue = value.ipAllowedList;
      this._policies.internalValue = value.policies;
      this._rateLimiter.internalValue = value.rateLimiter;
    }
  }

  // no_ip_allowed_list - computed: false, optional: true, required: false
  private _noIpAllowedList?: boolean | cdktf.IResolvable; 
  public get noIpAllowedList() {
    return this.getBooleanAttribute('no_ip_allowed_list');
  }
  public set noIpAllowedList(value: boolean | cdktf.IResolvable) {
    this._noIpAllowedList = value;
  }
  public resetNoIpAllowedList() {
    this._noIpAllowedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpAllowedListInput() {
    return this._noIpAllowedList;
  }

  // no_policies - computed: false, optional: true, required: false
  private _noPolicies?: boolean | cdktf.IResolvable; 
  public get noPolicies() {
    return this.getBooleanAttribute('no_policies');
  }
  public set noPolicies(value: boolean | cdktf.IResolvable) {
    this._noPolicies = value;
  }
  public resetNoPolicies() {
    this._noPolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPoliciesInput() {
    return this._noPolicies;
  }

  // custom_ip_allowed_list - computed: false, optional: true, required: false
  private _customIpAllowedList = new CdnLoadbalancerRateLimitCustomIpAllowedListStructOutputReference(this, "custom_ip_allowed_list");
  public get customIpAllowedList() {
    return this._customIpAllowedList;
  }
  public putCustomIpAllowedList(value: CdnLoadbalancerRateLimitCustomIpAllowedListStruct) {
    this._customIpAllowedList.internalValue = value;
  }
  public resetCustomIpAllowedList() {
    this._customIpAllowedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIpAllowedListInput() {
    return this._customIpAllowedList.internalValue;
  }

  // ip_allowed_list - computed: false, optional: true, required: false
  private _ipAllowedList = new CdnLoadbalancerRateLimitIpAllowedListStructOutputReference(this, "ip_allowed_list");
  public get ipAllowedList() {
    return this._ipAllowedList;
  }
  public putIpAllowedList(value: CdnLoadbalancerRateLimitIpAllowedListStruct) {
    this._ipAllowedList.internalValue = value;
  }
  public resetIpAllowedList() {
    this._ipAllowedList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAllowedListInput() {
    return this._ipAllowedList.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new CdnLoadbalancerRateLimitPoliciesOutputReference(this, "policies");
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: CdnLoadbalancerRateLimitPolicies) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // rate_limiter - computed: false, optional: true, required: false
  private _rateLimiter = new CdnLoadbalancerRateLimitRateLimiterOutputReference(this, "rate_limiter");
  public get rateLimiter() {
    return this._rateLimiter;
  }
  public putRateLimiter(value: CdnLoadbalancerRateLimitRateLimiter) {
    this._rateLimiter.internalValue = value;
  }
  public resetRateLimiter() {
    this._rateLimiter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimiterInput() {
    return this._rateLimiter.internalValue;
  }
}
export interface CdnLoadbalancerSlowDdosMitigation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#disable_request_timeout CdnLoadbalancer#disable_request_timeout}
  */
  readonly disableRequestTimeout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#request_headers_timeout CdnLoadbalancer#request_headers_timeout}
  */
  readonly requestHeadersTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#request_timeout CdnLoadbalancer#request_timeout}
  */
  readonly requestTimeout?: number;
}

export function cdnLoadbalancerSlowDdosMitigationToTerraform(struct?: CdnLoadbalancerSlowDdosMitigationOutputReference | CdnLoadbalancerSlowDdosMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_request_timeout: cdktf.booleanToTerraform(struct!.disableRequestTimeout),
    request_headers_timeout: cdktf.numberToTerraform(struct!.requestHeadersTimeout),
    request_timeout: cdktf.numberToTerraform(struct!.requestTimeout),
  }
}


export function cdnLoadbalancerSlowDdosMitigationToHclTerraform(struct?: CdnLoadbalancerSlowDdosMitigationOutputReference | CdnLoadbalancerSlowDdosMitigation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_request_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.disableRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    request_headers_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestHeadersTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.requestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerSlowDdosMitigationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerSlowDdosMitigation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableRequestTimeout = this._disableRequestTimeout;
    }
    if (this._requestHeadersTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeadersTimeout = this._requestHeadersTimeout;
    }
    if (this._requestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestTimeout = this._requestTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerSlowDdosMitigation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableRequestTimeout = undefined;
      this._requestHeadersTimeout = undefined;
      this._requestTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableRequestTimeout = value.disableRequestTimeout;
      this._requestHeadersTimeout = value.requestHeadersTimeout;
      this._requestTimeout = value.requestTimeout;
    }
  }

  // disable_request_timeout - computed: false, optional: true, required: false
  private _disableRequestTimeout?: boolean | cdktf.IResolvable; 
  public get disableRequestTimeout() {
    return this.getBooleanAttribute('disable_request_timeout');
  }
  public set disableRequestTimeout(value: boolean | cdktf.IResolvable) {
    this._disableRequestTimeout = value;
  }
  public resetDisableRequestTimeout() {
    this._disableRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRequestTimeoutInput() {
    return this._disableRequestTimeout;
  }

  // request_headers_timeout - computed: false, optional: true, required: false
  private _requestHeadersTimeout?: number; 
  public get requestHeadersTimeout() {
    return this.getNumberAttribute('request_headers_timeout');
  }
  public set requestHeadersTimeout(value: number) {
    this._requestHeadersTimeout = value;
  }
  public resetRequestHeadersTimeout() {
    this._requestHeadersTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersTimeoutInput() {
    return this._requestHeadersTimeout;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }
  public set requestTimeout(value: number) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }
}
export interface CdnLoadbalancerTrustedClientsHttpHeaderHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact CdnLoadbalancer#exact}
  */
  readonly exact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#invert_match CdnLoadbalancer#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#presence CdnLoadbalancer#presence}
  */
  readonly presence?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#regex CdnLoadbalancer#regex}
  */
  readonly regex?: string;
}

export function cdnLoadbalancerTrustedClientsHttpHeaderHeadersToTerraform(struct?: CdnLoadbalancerTrustedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    name: cdktf.stringToTerraform(struct!.name),
    presence: cdktf.booleanToTerraform(struct!.presence),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function cdnLoadbalancerTrustedClientsHttpHeaderHeadersToHclTerraform(struct?: CdnLoadbalancerTrustedClientsHttpHeaderHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    presence: {
      value: cdktf.booleanToHclTerraform(struct!.presence),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerTrustedClientsHttpHeaderHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerTrustedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._presence !== undefined) {
      hasAnyValues = true;
      internalValueResult.presence = this._presence;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerTrustedClientsHttpHeaderHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._invertMatch = undefined;
      this._name = undefined;
      this._presence = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._invertMatch = value.invertMatch;
      this._name = value.name;
      this._presence = value.presence;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
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

  // presence - computed: false, optional: true, required: false
  private _presence?: boolean | cdktf.IResolvable; 
  public get presence() {
    return this.getBooleanAttribute('presence');
  }
  public set presence(value: boolean | cdktf.IResolvable) {
    this._presence = value;
  }
  public resetPresence() {
    this._presence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presenceInput() {
    return this._presence;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}

export class CdnLoadbalancerTrustedClientsHttpHeaderHeadersList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerTrustedClientsHttpHeaderHeadersOutputReference {
    return new CdnLoadbalancerTrustedClientsHttpHeaderHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerTrustedClientsHttpHeader {
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#headers CdnLoadbalancer#headers}
  */
  readonly headers: CdnLoadbalancerTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable;
}

export function cdnLoadbalancerTrustedClientsHttpHeaderToTerraform(struct?: CdnLoadbalancerTrustedClientsHttpHeaderOutputReference | CdnLoadbalancerTrustedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(cdnLoadbalancerTrustedClientsHttpHeaderHeadersToTerraform, true)(struct!.headers),
  }
}


export function cdnLoadbalancerTrustedClientsHttpHeaderToHclTerraform(struct?: CdnLoadbalancerTrustedClientsHttpHeaderOutputReference | CdnLoadbalancerTrustedClientsHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(cdnLoadbalancerTrustedClientsHttpHeaderHeadersToHclTerraform, true)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerTrustedClientsHttpHeaderHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerTrustedClientsHttpHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerTrustedClientsHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerTrustedClientsHttpHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headers.internalValue = value.headers;
    }
  }

  // headers - computed: false, optional: false, required: true
  private _headers = new CdnLoadbalancerTrustedClientsHttpHeaderHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: CdnLoadbalancerTrustedClientsHttpHeaderHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface CdnLoadbalancerTrustedClientsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerTrustedClientsMetadataToTerraform(struct?: CdnLoadbalancerTrustedClientsMetadataOutputReference | CdnLoadbalancerTrustedClientsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerTrustedClientsMetadataToHclTerraform(struct?: CdnLoadbalancerTrustedClientsMetadataOutputReference | CdnLoadbalancerTrustedClientsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerTrustedClientsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerTrustedClientsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerTrustedClientsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
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
}
export interface CdnLoadbalancerTrustedClients {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#actions CdnLoadbalancer#actions}
  */
  readonly actions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#as_number CdnLoadbalancer#as_number}
  */
  readonly asNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#expiration_timestamp CdnLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ip_prefix CdnLoadbalancer#ip_prefix}
  */
  readonly ipPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#ipv6_prefix CdnLoadbalancer#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#user_identifier CdnLoadbalancer#user_identifier}
  */
  readonly userIdentifier?: string;
  /**
  * http_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#http_header CdnLoadbalancer#http_header}
  */
  readonly httpHeader?: CdnLoadbalancerTrustedClientsHttpHeader;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerTrustedClientsMetadata;
}

export function cdnLoadbalancerTrustedClientsToTerraform(struct?: CdnLoadbalancerTrustedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    as_number: cdktf.numberToTerraform(struct!.asNumber),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    ip_prefix: cdktf.stringToTerraform(struct!.ipPrefix),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    user_identifier: cdktf.stringToTerraform(struct!.userIdentifier),
    http_header: cdnLoadbalancerTrustedClientsHttpHeaderToTerraform(struct!.httpHeader),
    metadata: cdnLoadbalancerTrustedClientsMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerTrustedClientsToHclTerraform(struct?: CdnLoadbalancerTrustedClients | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    as_number: {
      value: cdktf.numberToHclTerraform(struct!.asNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_identifier: {
      value: cdktf.stringToHclTerraform(struct!.userIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_header: {
      value: cdnLoadbalancerTrustedClientsHttpHeaderToHclTerraform(struct!.httpHeader),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerTrustedClientsHttpHeaderList",
    },
    metadata: {
      value: cdnLoadbalancerTrustedClientsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerTrustedClientsMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerTrustedClientsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerTrustedClients | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._asNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.asNumber = this._asNumber;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._ipPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPrefix = this._ipPrefix;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._userIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.userIdentifier = this._userIdentifier;
    }
    if (this._httpHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeader = this._httpHeader?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerTrustedClients | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._asNumber = undefined;
      this._expirationTimestamp = undefined;
      this._ipPrefix = undefined;
      this._ipv6Prefix = undefined;
      this._userIdentifier = undefined;
      this._httpHeader.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._asNumber = value.asNumber;
      this._expirationTimestamp = value.expirationTimestamp;
      this._ipPrefix = value.ipPrefix;
      this._ipv6Prefix = value.ipv6Prefix;
      this._userIdentifier = value.userIdentifier;
      this._httpHeader.internalValue = value.httpHeader;
      this._metadata.internalValue = value.metadata;
    }
  }

  // actions - computed: false, optional: true, required: false
  private _actions?: string[]; 
  public get actions() {
    return this.getListAttribute('actions');
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  public resetActions() {
    this._actions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // as_number - computed: false, optional: true, required: false
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // ip_prefix - computed: false, optional: true, required: false
  private _ipPrefix?: string; 
  public get ipPrefix() {
    return this.getStringAttribute('ip_prefix');
  }
  public set ipPrefix(value: string) {
    this._ipPrefix = value;
  }
  public resetIpPrefix() {
    this._ipPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixInput() {
    return this._ipPrefix;
  }

  // ipv6_prefix - computed: false, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // user_identifier - computed: false, optional: true, required: false
  private _userIdentifier?: string; 
  public get userIdentifier() {
    return this.getStringAttribute('user_identifier');
  }
  public set userIdentifier(value: string) {
    this._userIdentifier = value;
  }
  public resetUserIdentifier() {
    this._userIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdentifierInput() {
    return this._userIdentifier;
  }

  // http_header - computed: false, optional: true, required: false
  private _httpHeader = new CdnLoadbalancerTrustedClientsHttpHeaderOutputReference(this, "http_header");
  public get httpHeader() {
    return this._httpHeader;
  }
  public putHttpHeader(value: CdnLoadbalancerTrustedClientsHttpHeader) {
    this._httpHeader.internalValue = value;
  }
  public resetHttpHeader() {
    this._httpHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeaderInput() {
    return this._httpHeader.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerTrustedClientsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerTrustedClientsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerTrustedClientsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerTrustedClients[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerTrustedClientsOutputReference {
    return new CdnLoadbalancerTrustedClientsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerUserIdentification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#namespace CdnLoadbalancer#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#tenant CdnLoadbalancer#tenant}
  */
  readonly tenant?: string;
}

export function cdnLoadbalancerUserIdentificationToTerraform(struct?: CdnLoadbalancerUserIdentificationOutputReference | CdnLoadbalancerUserIdentification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tenant: cdktf.stringToTerraform(struct!.tenant),
  }
}


export function cdnLoadbalancerUserIdentificationToHclTerraform(struct?: CdnLoadbalancerUserIdentificationOutputReference | CdnLoadbalancerUserIdentification): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerUserIdentificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerUserIdentification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerUserIdentification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._namespace = undefined;
      this._tenant = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._namespace = value.namespace;
      this._tenant = value.tenant;
    }
  }

  // name - computed: false, optional: true, required: false
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }
}
export interface CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#context CdnLoadbalancer#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#context_name CdnLoadbalancer#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exclude_attack_type CdnLoadbalancer#exclude_attack_type}
  */
  readonly excludeAttackType: string;
}

export function cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform(struct?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_attack_type: cdktf.stringToTerraform(struct!.excludeAttackType),
  }
}


export function cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform(struct?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_attack_type: {
      value: cdktf.stringToHclTerraform(struct!.excludeAttackType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeAttackType !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackType = this._excludeAttackType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeAttackType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeAttackType = value.excludeAttackType;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_attack_type - computed: false, optional: false, required: true
  private _excludeAttackType?: string; 
  public get excludeAttackType() {
    return this.getStringAttribute('exclude_attack_type');
  }
  public set excludeAttackType(value: string) {
    this._excludeAttackType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeInput() {
    return this._excludeAttackType;
  }
}

export class CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference {
    return new CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#bot_name CdnLoadbalancer#bot_name}
  */
  readonly botName: string;
}

export function cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToTerraform(struct?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bot_name: cdktf.stringToTerraform(struct!.botName),
  }
}


export function cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToHclTerraform(struct?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bot_name: {
      value: cdktf.stringToHclTerraform(struct!.botName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._botName !== undefined) {
      hasAnyValues = true;
      internalValueResult.botName = this._botName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._botName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._botName = value.botName;
    }
  }

  // bot_name - computed: false, optional: false, required: true
  private _botName?: string; 
  public get botName() {
    return this.getStringAttribute('bot_name');
  }
  public set botName(value: string) {
    this._botName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get botNameInput() {
    return this._botName;
  }
}

export class CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference {
    return new CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#context CdnLoadbalancer#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#context_name CdnLoadbalancer#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#signature_id CdnLoadbalancer#signature_id}
  */
  readonly signatureId: number;
}

export function cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToTerraform(struct?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    signature_id: cdktf.numberToTerraform(struct!.signatureId),
  }
}


export function cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform(struct?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_id: {
      value: cdktf.numberToHclTerraform(struct!.signatureId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._signatureId !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureId = this._signatureId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._signatureId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._signatureId = value.signatureId;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // signature_id - computed: false, optional: false, required: true
  private _signatureId?: number; 
  public get signatureId() {
    return this.getNumberAttribute('signature_id');
  }
  public set signatureId(value: number) {
    this._signatureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureIdInput() {
    return this._signatureId;
  }
}

export class CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference {
    return new CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#context CdnLoadbalancer#context}
  */
  readonly context: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#context_name CdnLoadbalancer#context_name}
  */
  readonly contextName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exclude_violation CdnLoadbalancer#exclude_violation}
  */
  readonly excludeViolation: string;
}

export function cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToTerraform(struct?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    context_name: cdktf.stringToTerraform(struct!.contextName),
    exclude_violation: cdktf.stringToTerraform(struct!.excludeViolation),
  }
}


export function cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToHclTerraform(struct?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    context_name: {
      value: cdktf.stringToHclTerraform(struct!.contextName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_violation: {
      value: cdktf.stringToHclTerraform(struct!.excludeViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._contextName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contextName = this._contextName;
    }
    if (this._excludeViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolation = this._excludeViolation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context = undefined;
      this._contextName = undefined;
      this._excludeViolation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context = value.context;
      this._contextName = value.contextName;
      this._excludeViolation = value.excludeViolation;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // context_name - computed: false, optional: true, required: false
  private _contextName?: string; 
  public get contextName() {
    return this.getStringAttribute('context_name');
  }
  public set contextName(value: string) {
    this._contextName = value;
  }
  public resetContextName() {
    this._contextName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contextNameInput() {
    return this._contextName;
  }

  // exclude_violation - computed: false, optional: false, required: true
  private _excludeViolation?: string; 
  public get excludeViolation() {
    return this.getStringAttribute('exclude_violation');
  }
  public set excludeViolation(value: string) {
    this._excludeViolation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationInput() {
    return this._excludeViolation;
  }
}

export class CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference {
    return new CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControl {
  /**
  * exclude_attack_type_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exclude_attack_type_contexts CdnLoadbalancer#exclude_attack_type_contexts}
  */
  readonly excludeAttackTypeContexts?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable;
  /**
  * exclude_bot_name_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exclude_bot_name_contexts CdnLoadbalancer#exclude_bot_name_contexts}
  */
  readonly excludeBotNameContexts?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable;
  /**
  * exclude_signature_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exclude_signature_contexts CdnLoadbalancer#exclude_signature_contexts}
  */
  readonly excludeSignatureContexts?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable;
  /**
  * exclude_violation_contexts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exclude_violation_contexts CdnLoadbalancer#exclude_violation_contexts}
  */
  readonly excludeViolationContexts?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable;
}

export function cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlToTerraform(struct?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlOutputReference | CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_attack_type_contexts: cdktf.listMapper(cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToTerraform, true)(struct!.excludeAttackTypeContexts),
    exclude_bot_name_contexts: cdktf.listMapper(cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToTerraform, true)(struct!.excludeBotNameContexts),
    exclude_signature_contexts: cdktf.listMapper(cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToTerraform, true)(struct!.excludeSignatureContexts),
    exclude_violation_contexts: cdktf.listMapper(cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToTerraform, true)(struct!.excludeViolationContexts),
  }
}


export function cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlToHclTerraform(struct?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlOutputReference | CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_attack_type_contexts: {
      value: cdktf.listMapperHcl(cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsToHclTerraform, true)(struct!.excludeAttackTypeContexts),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsList",
    },
    exclude_bot_name_contexts: {
      value: cdktf.listMapperHcl(cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsToHclTerraform, true)(struct!.excludeBotNameContexts),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsList",
    },
    exclude_signature_contexts: {
      value: cdktf.listMapperHcl(cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsToHclTerraform, true)(struct!.excludeSignatureContexts),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsList",
    },
    exclude_violation_contexts: {
      value: cdktf.listMapperHcl(cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsToHclTerraform, true)(struct!.excludeViolationContexts),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeAttackTypeContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeAttackTypeContexts = this._excludeAttackTypeContexts?.internalValue;
    }
    if (this._excludeBotNameContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeBotNameContexts = this._excludeBotNameContexts?.internalValue;
    }
    if (this._excludeSignatureContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeSignatureContexts = this._excludeSignatureContexts?.internalValue;
    }
    if (this._excludeViolationContexts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeViolationContexts = this._excludeViolationContexts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeAttackTypeContexts.internalValue = undefined;
      this._excludeBotNameContexts.internalValue = undefined;
      this._excludeSignatureContexts.internalValue = undefined;
      this._excludeViolationContexts.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeAttackTypeContexts.internalValue = value.excludeAttackTypeContexts;
      this._excludeBotNameContexts.internalValue = value.excludeBotNameContexts;
      this._excludeSignatureContexts.internalValue = value.excludeSignatureContexts;
      this._excludeViolationContexts.internalValue = value.excludeViolationContexts;
    }
  }

  // exclude_attack_type_contexts - computed: false, optional: true, required: false
  private _excludeAttackTypeContexts = new CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContextsList(this, "exclude_attack_type_contexts", false);
  public get excludeAttackTypeContexts() {
    return this._excludeAttackTypeContexts;
  }
  public putExcludeAttackTypeContexts(value: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeAttackTypeContexts[] | cdktf.IResolvable) {
    this._excludeAttackTypeContexts.internalValue = value;
  }
  public resetExcludeAttackTypeContexts() {
    this._excludeAttackTypeContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeAttackTypeContextsInput() {
    return this._excludeAttackTypeContexts.internalValue;
  }

  // exclude_bot_name_contexts - computed: false, optional: true, required: false
  private _excludeBotNameContexts = new CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContextsList(this, "exclude_bot_name_contexts", false);
  public get excludeBotNameContexts() {
    return this._excludeBotNameContexts;
  }
  public putExcludeBotNameContexts(value: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeBotNameContexts[] | cdktf.IResolvable) {
    this._excludeBotNameContexts.internalValue = value;
  }
  public resetExcludeBotNameContexts() {
    this._excludeBotNameContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeBotNameContextsInput() {
    return this._excludeBotNameContexts.internalValue;
  }

  // exclude_signature_contexts - computed: false, optional: true, required: false
  private _excludeSignatureContexts = new CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContextsList(this, "exclude_signature_contexts", false);
  public get excludeSignatureContexts() {
    return this._excludeSignatureContexts;
  }
  public putExcludeSignatureContexts(value: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeSignatureContexts[] | cdktf.IResolvable) {
    this._excludeSignatureContexts.internalValue = value;
  }
  public resetExcludeSignatureContexts() {
    this._excludeSignatureContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSignatureContextsInput() {
    return this._excludeSignatureContexts.internalValue;
  }

  // exclude_violation_contexts - computed: false, optional: true, required: false
  private _excludeViolationContexts = new CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContextsList(this, "exclude_violation_contexts", false);
  public get excludeViolationContexts() {
    return this._excludeViolationContexts;
  }
  public putExcludeViolationContexts(value: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlExcludeViolationContexts[] | cdktf.IResolvable) {
    this._excludeViolationContexts.internalValue = value;
  }
  public resetExcludeViolationContexts() {
    this._excludeViolationContexts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeViolationContextsInput() {
    return this._excludeViolationContexts.internalValue;
  }
}
export interface CdnLoadbalancerWafExclusionRulesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#description CdnLoadbalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#name CdnLoadbalancer#name}
  */
  readonly name: string;
}

export function cdnLoadbalancerWafExclusionRulesMetadataToTerraform(struct?: CdnLoadbalancerWafExclusionRulesMetadataOutputReference | CdnLoadbalancerWafExclusionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cdnLoadbalancerWafExclusionRulesMetadataToHclTerraform(struct?: CdnLoadbalancerWafExclusionRulesMetadataOutputReference | CdnLoadbalancerWafExclusionRulesMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerWafExclusionRulesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CdnLoadbalancerWafExclusionRulesMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerWafExclusionRulesMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
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
}
export interface CdnLoadbalancerWafExclusionRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_domain CdnLoadbalancer#any_domain}
  */
  readonly anyDomain?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#any_path CdnLoadbalancer#any_path}
  */
  readonly anyPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#exact_value CdnLoadbalancer#exact_value}
  */
  readonly exactValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#expiration_timestamp CdnLoadbalancer#expiration_timestamp}
  */
  readonly expirationTimestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#methods CdnLoadbalancer#methods}
  */
  readonly methods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#path_prefix CdnLoadbalancer#path_prefix}
  */
  readonly pathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#path_regex CdnLoadbalancer#path_regex}
  */
  readonly pathRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#suffix_value CdnLoadbalancer#suffix_value}
  */
  readonly suffixValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#waf_skip_processing CdnLoadbalancer#waf_skip_processing}
  */
  readonly wafSkipProcessing?: boolean | cdktf.IResolvable;
  /**
  * app_firewall_detection_control block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#app_firewall_detection_control CdnLoadbalancer#app_firewall_detection_control}
  */
  readonly appFirewallDetectionControl?: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControl;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.44/docs/resources/cdn_loadbalancer#metadata CdnLoadbalancer#metadata}
  */
  readonly metadata: CdnLoadbalancerWafExclusionRulesMetadata;
}

export function cdnLoadbalancerWafExclusionRulesToTerraform(struct?: CdnLoadbalancerWafExclusionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    any_domain: cdktf.booleanToTerraform(struct!.anyDomain),
    any_path: cdktf.booleanToTerraform(struct!.anyPath),
    exact_value: cdktf.stringToTerraform(struct!.exactValue),
    expiration_timestamp: cdktf.stringToTerraform(struct!.expirationTimestamp),
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    path_prefix: cdktf.stringToTerraform(struct!.pathPrefix),
    path_regex: cdktf.stringToTerraform(struct!.pathRegex),
    suffix_value: cdktf.stringToTerraform(struct!.suffixValue),
    waf_skip_processing: cdktf.booleanToTerraform(struct!.wafSkipProcessing),
    app_firewall_detection_control: cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlToTerraform(struct!.appFirewallDetectionControl),
    metadata: cdnLoadbalancerWafExclusionRulesMetadataToTerraform(struct!.metadata),
  }
}


export function cdnLoadbalancerWafExclusionRulesToHclTerraform(struct?: CdnLoadbalancerWafExclusionRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.anyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    any_path: {
      value: cdktf.booleanToHclTerraform(struct!.anyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exact_value: {
      value: cdktf.stringToHclTerraform(struct!.exactValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.expirationTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.pathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_regex: {
      value: cdktf.stringToHclTerraform(struct!.pathRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix_value: {
      value: cdktf.stringToHclTerraform(struct!.suffixValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf_skip_processing: {
      value: cdktf.booleanToHclTerraform(struct!.wafSkipProcessing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    app_firewall_detection_control: {
      value: cdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlToHclTerraform(struct!.appFirewallDetectionControl),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlList",
    },
    metadata: {
      value: cdnLoadbalancerWafExclusionRulesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "CdnLoadbalancerWafExclusionRulesMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CdnLoadbalancerWafExclusionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CdnLoadbalancerWafExclusionRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyDomain = this._anyDomain;
    }
    if (this._anyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyPath = this._anyPath;
    }
    if (this._exactValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exactValue = this._exactValue;
    }
    if (this._expirationTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationTimestamp = this._expirationTimestamp;
    }
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._pathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathPrefix = this._pathPrefix;
    }
    if (this._pathRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.pathRegex = this._pathRegex;
    }
    if (this._suffixValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffixValue = this._suffixValue;
    }
    if (this._wafSkipProcessing !== undefined) {
      hasAnyValues = true;
      internalValueResult.wafSkipProcessing = this._wafSkipProcessing;
    }
    if (this._appFirewallDetectionControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appFirewallDetectionControl = this._appFirewallDetectionControl?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CdnLoadbalancerWafExclusionRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anyDomain = undefined;
      this._anyPath = undefined;
      this._exactValue = undefined;
      this._expirationTimestamp = undefined;
      this._methods = undefined;
      this._pathPrefix = undefined;
      this._pathRegex = undefined;
      this._suffixValue = undefined;
      this._wafSkipProcessing = undefined;
      this._appFirewallDetectionControl.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anyDomain = value.anyDomain;
      this._anyPath = value.anyPath;
      this._exactValue = value.exactValue;
      this._expirationTimestamp = value.expirationTimestamp;
      this._methods = value.methods;
      this._pathPrefix = value.pathPrefix;
      this._pathRegex = value.pathRegex;
      this._suffixValue = value.suffixValue;
      this._wafSkipProcessing = value.wafSkipProcessing;
      this._appFirewallDetectionControl.internalValue = value.appFirewallDetectionControl;
      this._metadata.internalValue = value.metadata;
    }
  }

  // any_domain - computed: false, optional: true, required: false
  private _anyDomain?: boolean | cdktf.IResolvable; 
  public get anyDomain() {
    return this.getBooleanAttribute('any_domain');
  }
  public set anyDomain(value: boolean | cdktf.IResolvable) {
    this._anyDomain = value;
  }
  public resetAnyDomain() {
    this._anyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyDomainInput() {
    return this._anyDomain;
  }

  // any_path - computed: false, optional: true, required: false
  private _anyPath?: boolean | cdktf.IResolvable; 
  public get anyPath() {
    return this.getBooleanAttribute('any_path');
  }
  public set anyPath(value: boolean | cdktf.IResolvable) {
    this._anyPath = value;
  }
  public resetAnyPath() {
    this._anyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyPathInput() {
    return this._anyPath;
  }

  // exact_value - computed: false, optional: true, required: false
  private _exactValue?: string; 
  public get exactValue() {
    return this.getStringAttribute('exact_value');
  }
  public set exactValue(value: string) {
    this._exactValue = value;
  }
  public resetExactValue() {
    this._exactValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactValueInput() {
    return this._exactValue;
  }

  // expiration_timestamp - computed: false, optional: true, required: false
  private _expirationTimestamp?: string; 
  public get expirationTimestamp() {
    return this.getStringAttribute('expiration_timestamp');
  }
  public set expirationTimestamp(value: string) {
    this._expirationTimestamp = value;
  }
  public resetExpirationTimestamp() {
    this._expirationTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimestampInput() {
    return this._expirationTimestamp;
  }

  // methods - computed: false, optional: true, required: false
  private _methods?: string[]; 
  public get methods() {
    return this.getListAttribute('methods');
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  public resetMethods() {
    this._methods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // path_prefix - computed: false, optional: true, required: false
  private _pathPrefix?: string; 
  public get pathPrefix() {
    return this.getStringAttribute('path_prefix');
  }
  public set pathPrefix(value: string) {
    this._pathPrefix = value;
  }
  public resetPathPrefix() {
    this._pathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixInput() {
    return this._pathPrefix;
  }

  // path_regex - computed: false, optional: true, required: false
  private _pathRegex?: string; 
  public get pathRegex() {
    return this.getStringAttribute('path_regex');
  }
  public set pathRegex(value: string) {
    this._pathRegex = value;
  }
  public resetPathRegex() {
    this._pathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathRegexInput() {
    return this._pathRegex;
  }

  // suffix_value - computed: false, optional: true, required: false
  private _suffixValue?: string; 
  public get suffixValue() {
    return this.getStringAttribute('suffix_value');
  }
  public set suffixValue(value: string) {
    this._suffixValue = value;
  }
  public resetSuffixValue() {
    this._suffixValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixValueInput() {
    return this._suffixValue;
  }

  // waf_skip_processing - computed: false, optional: true, required: false
  private _wafSkipProcessing?: boolean | cdktf.IResolvable; 
  public get wafSkipProcessing() {
    return this.getBooleanAttribute('waf_skip_processing');
  }
  public set wafSkipProcessing(value: boolean | cdktf.IResolvable) {
    this._wafSkipProcessing = value;
  }
  public resetWafSkipProcessing() {
    this._wafSkipProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafSkipProcessingInput() {
    return this._wafSkipProcessing;
  }

  // app_firewall_detection_control - computed: false, optional: true, required: false
  private _appFirewallDetectionControl = new CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControlOutputReference(this, "app_firewall_detection_control");
  public get appFirewallDetectionControl() {
    return this._appFirewallDetectionControl;
  }
  public putAppFirewallDetectionControl(value: CdnLoadbalancerWafExclusionRulesAppFirewallDetectionControl) {
    this._appFirewallDetectionControl.internalValue = value;
  }
  public resetAppFirewallDetectionControl() {
    this._appFirewallDetectionControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appFirewallDetectionControlInput() {
    return this._appFirewallDetectionControl.internalValue;
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new CdnLoadbalancerWafExclusionRulesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: CdnLoadbalancerWafExclusionRulesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class CdnLoadbalancerWafExclusionRulesList extends cdktf.ComplexList {
  public internalValue? : CdnLoadbalancerWafExclusionRules[] | cdktf.IResolvable

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
  public get(index: number): CdnLoadbalancerWafExclusionRulesOutputReference {
    return new CdnLoadbalancerWafExclusionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
