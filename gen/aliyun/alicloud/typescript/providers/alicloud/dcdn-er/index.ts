// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcdnErConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#description DcdnEr#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#er_name DcdnEr#er_name}
  */
  readonly erName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#id DcdnEr#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * env_conf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#env_conf DcdnEr#env_conf}
  */
  readonly envConf?: DcdnErEnvConf;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#timeouts DcdnEr#timeouts}
  */
  readonly timeouts?: DcdnErTimeouts;
}
export interface DcdnErEnvConfPresetCanaryAnhui {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryAnhuiToTerraform(struct?: DcdnErEnvConfPresetCanaryAnhuiOutputReference | DcdnErEnvConfPresetCanaryAnhui): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryAnhuiToHclTerraform(struct?: DcdnErEnvConfPresetCanaryAnhuiOutputReference | DcdnErEnvConfPresetCanaryAnhui): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryAnhuiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryAnhui | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryAnhui | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryBeijing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryBeijingToTerraform(struct?: DcdnErEnvConfPresetCanaryBeijingOutputReference | DcdnErEnvConfPresetCanaryBeijing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryBeijingToHclTerraform(struct?: DcdnErEnvConfPresetCanaryBeijingOutputReference | DcdnErEnvConfPresetCanaryBeijing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryBeijingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryBeijing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryBeijing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryChongqing {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryChongqingToTerraform(struct?: DcdnErEnvConfPresetCanaryChongqingOutputReference | DcdnErEnvConfPresetCanaryChongqing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryChongqingToHclTerraform(struct?: DcdnErEnvConfPresetCanaryChongqingOutputReference | DcdnErEnvConfPresetCanaryChongqing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryChongqingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryChongqing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryChongqing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryFujian {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryFujianToTerraform(struct?: DcdnErEnvConfPresetCanaryFujianOutputReference | DcdnErEnvConfPresetCanaryFujian): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryFujianToHclTerraform(struct?: DcdnErEnvConfPresetCanaryFujianOutputReference | DcdnErEnvConfPresetCanaryFujian): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryFujianOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryFujian | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryFujian | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryGansu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryGansuToTerraform(struct?: DcdnErEnvConfPresetCanaryGansuOutputReference | DcdnErEnvConfPresetCanaryGansu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryGansuToHclTerraform(struct?: DcdnErEnvConfPresetCanaryGansuOutputReference | DcdnErEnvConfPresetCanaryGansu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryGansuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryGansu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryGansu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryGuangdong {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryGuangdongToTerraform(struct?: DcdnErEnvConfPresetCanaryGuangdongOutputReference | DcdnErEnvConfPresetCanaryGuangdong): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryGuangdongToHclTerraform(struct?: DcdnErEnvConfPresetCanaryGuangdongOutputReference | DcdnErEnvConfPresetCanaryGuangdong): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryGuangdongOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryGuangdong | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryGuangdong | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryGuangxi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryGuangxiToTerraform(struct?: DcdnErEnvConfPresetCanaryGuangxiOutputReference | DcdnErEnvConfPresetCanaryGuangxi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryGuangxiToHclTerraform(struct?: DcdnErEnvConfPresetCanaryGuangxiOutputReference | DcdnErEnvConfPresetCanaryGuangxi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryGuangxiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryGuangxi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryGuangxi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryGuizhou {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryGuizhouToTerraform(struct?: DcdnErEnvConfPresetCanaryGuizhouOutputReference | DcdnErEnvConfPresetCanaryGuizhou): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryGuizhouToHclTerraform(struct?: DcdnErEnvConfPresetCanaryGuizhouOutputReference | DcdnErEnvConfPresetCanaryGuizhou): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryGuizhouOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryGuizhou | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryGuizhou | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryHainan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryHainanToTerraform(struct?: DcdnErEnvConfPresetCanaryHainanOutputReference | DcdnErEnvConfPresetCanaryHainan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryHainanToHclTerraform(struct?: DcdnErEnvConfPresetCanaryHainanOutputReference | DcdnErEnvConfPresetCanaryHainan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryHainanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryHainan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryHainan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryHebei {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryHebeiToTerraform(struct?: DcdnErEnvConfPresetCanaryHebeiOutputReference | DcdnErEnvConfPresetCanaryHebei): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryHebeiToHclTerraform(struct?: DcdnErEnvConfPresetCanaryHebeiOutputReference | DcdnErEnvConfPresetCanaryHebei): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryHebeiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryHebei | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryHebei | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryHeilongjiang {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryHeilongjiangToTerraform(struct?: DcdnErEnvConfPresetCanaryHeilongjiangOutputReference | DcdnErEnvConfPresetCanaryHeilongjiang): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryHeilongjiangToHclTerraform(struct?: DcdnErEnvConfPresetCanaryHeilongjiangOutputReference | DcdnErEnvConfPresetCanaryHeilongjiang): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryHeilongjiangOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryHeilongjiang | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryHeilongjiang | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryHenan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryHenanToTerraform(struct?: DcdnErEnvConfPresetCanaryHenanOutputReference | DcdnErEnvConfPresetCanaryHenan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryHenanToHclTerraform(struct?: DcdnErEnvConfPresetCanaryHenanOutputReference | DcdnErEnvConfPresetCanaryHenan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryHenanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryHenan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryHenan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryHongKong {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryHongKongToTerraform(struct?: DcdnErEnvConfPresetCanaryHongKongOutputReference | DcdnErEnvConfPresetCanaryHongKong): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryHongKongToHclTerraform(struct?: DcdnErEnvConfPresetCanaryHongKongOutputReference | DcdnErEnvConfPresetCanaryHongKong): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryHongKongOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryHongKong | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryHongKong | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryHubei {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryHubeiToTerraform(struct?: DcdnErEnvConfPresetCanaryHubeiOutputReference | DcdnErEnvConfPresetCanaryHubei): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryHubeiToHclTerraform(struct?: DcdnErEnvConfPresetCanaryHubeiOutputReference | DcdnErEnvConfPresetCanaryHubei): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryHubeiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryHubei | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryHubei | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryHunan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryHunanToTerraform(struct?: DcdnErEnvConfPresetCanaryHunanOutputReference | DcdnErEnvConfPresetCanaryHunan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryHunanToHclTerraform(struct?: DcdnErEnvConfPresetCanaryHunanOutputReference | DcdnErEnvConfPresetCanaryHunan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryHunanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryHunan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryHunan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryJiangsu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryJiangsuToTerraform(struct?: DcdnErEnvConfPresetCanaryJiangsuOutputReference | DcdnErEnvConfPresetCanaryJiangsu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryJiangsuToHclTerraform(struct?: DcdnErEnvConfPresetCanaryJiangsuOutputReference | DcdnErEnvConfPresetCanaryJiangsu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryJiangsuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryJiangsu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryJiangsu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryJiangxi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryJiangxiToTerraform(struct?: DcdnErEnvConfPresetCanaryJiangxiOutputReference | DcdnErEnvConfPresetCanaryJiangxi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryJiangxiToHclTerraform(struct?: DcdnErEnvConfPresetCanaryJiangxiOutputReference | DcdnErEnvConfPresetCanaryJiangxi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryJiangxiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryJiangxi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryJiangxi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryJilin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryJilinToTerraform(struct?: DcdnErEnvConfPresetCanaryJilinOutputReference | DcdnErEnvConfPresetCanaryJilin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryJilinToHclTerraform(struct?: DcdnErEnvConfPresetCanaryJilinOutputReference | DcdnErEnvConfPresetCanaryJilin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryJilinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryJilin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryJilin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryLiaoning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryLiaoningToTerraform(struct?: DcdnErEnvConfPresetCanaryLiaoningOutputReference | DcdnErEnvConfPresetCanaryLiaoning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryLiaoningToHclTerraform(struct?: DcdnErEnvConfPresetCanaryLiaoningOutputReference | DcdnErEnvConfPresetCanaryLiaoning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryLiaoningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryLiaoning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryLiaoning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryMacau {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryMacauToTerraform(struct?: DcdnErEnvConfPresetCanaryMacauOutputReference | DcdnErEnvConfPresetCanaryMacau): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryMacauToHclTerraform(struct?: DcdnErEnvConfPresetCanaryMacauOutputReference | DcdnErEnvConfPresetCanaryMacau): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryMacauOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryMacau | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryMacau | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryNeimenggu {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryNeimengguToTerraform(struct?: DcdnErEnvConfPresetCanaryNeimengguOutputReference | DcdnErEnvConfPresetCanaryNeimenggu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryNeimengguToHclTerraform(struct?: DcdnErEnvConfPresetCanaryNeimengguOutputReference | DcdnErEnvConfPresetCanaryNeimenggu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryNeimengguOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryNeimenggu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryNeimenggu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryNingxia {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryNingxiaToTerraform(struct?: DcdnErEnvConfPresetCanaryNingxiaOutputReference | DcdnErEnvConfPresetCanaryNingxia): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryNingxiaToHclTerraform(struct?: DcdnErEnvConfPresetCanaryNingxiaOutputReference | DcdnErEnvConfPresetCanaryNingxia): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryNingxiaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryNingxia | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryNingxia | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryOverseas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryOverseasToTerraform(struct?: DcdnErEnvConfPresetCanaryOverseasOutputReference | DcdnErEnvConfPresetCanaryOverseas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryOverseasToHclTerraform(struct?: DcdnErEnvConfPresetCanaryOverseasOutputReference | DcdnErEnvConfPresetCanaryOverseas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryOverseasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryOverseas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryOverseas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryQinghai {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryQinghaiToTerraform(struct?: DcdnErEnvConfPresetCanaryQinghaiOutputReference | DcdnErEnvConfPresetCanaryQinghai): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryQinghaiToHclTerraform(struct?: DcdnErEnvConfPresetCanaryQinghaiOutputReference | DcdnErEnvConfPresetCanaryQinghai): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryQinghaiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryQinghai | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryQinghai | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryShaanxi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryShaanxiToTerraform(struct?: DcdnErEnvConfPresetCanaryShaanxiOutputReference | DcdnErEnvConfPresetCanaryShaanxi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryShaanxiToHclTerraform(struct?: DcdnErEnvConfPresetCanaryShaanxiOutputReference | DcdnErEnvConfPresetCanaryShaanxi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryShaanxiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryShaanxi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryShaanxi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryShandong {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryShandongToTerraform(struct?: DcdnErEnvConfPresetCanaryShandongOutputReference | DcdnErEnvConfPresetCanaryShandong): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryShandongToHclTerraform(struct?: DcdnErEnvConfPresetCanaryShandongOutputReference | DcdnErEnvConfPresetCanaryShandong): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryShandongOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryShandong | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryShandong | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryShanghai {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryShanghaiToTerraform(struct?: DcdnErEnvConfPresetCanaryShanghaiOutputReference | DcdnErEnvConfPresetCanaryShanghai): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryShanghaiToHclTerraform(struct?: DcdnErEnvConfPresetCanaryShanghaiOutputReference | DcdnErEnvConfPresetCanaryShanghai): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryShanghaiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryShanghai | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryShanghai | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryShanxi {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryShanxiToTerraform(struct?: DcdnErEnvConfPresetCanaryShanxiOutputReference | DcdnErEnvConfPresetCanaryShanxi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryShanxiToHclTerraform(struct?: DcdnErEnvConfPresetCanaryShanxiOutputReference | DcdnErEnvConfPresetCanaryShanxi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryShanxiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryShanxi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryShanxi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanarySichuan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanarySichuanToTerraform(struct?: DcdnErEnvConfPresetCanarySichuanOutputReference | DcdnErEnvConfPresetCanarySichuan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanarySichuanToHclTerraform(struct?: DcdnErEnvConfPresetCanarySichuanOutputReference | DcdnErEnvConfPresetCanarySichuan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanarySichuanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanarySichuan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanarySichuan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryTaiwan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryTaiwanToTerraform(struct?: DcdnErEnvConfPresetCanaryTaiwanOutputReference | DcdnErEnvConfPresetCanaryTaiwan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryTaiwanToHclTerraform(struct?: DcdnErEnvConfPresetCanaryTaiwanOutputReference | DcdnErEnvConfPresetCanaryTaiwan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryTaiwanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryTaiwan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryTaiwan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryTianjin {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryTianjinToTerraform(struct?: DcdnErEnvConfPresetCanaryTianjinOutputReference | DcdnErEnvConfPresetCanaryTianjin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryTianjinToHclTerraform(struct?: DcdnErEnvConfPresetCanaryTianjinOutputReference | DcdnErEnvConfPresetCanaryTianjin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryTianjinOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryTianjin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryTianjin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryXinjiang {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryXinjiangToTerraform(struct?: DcdnErEnvConfPresetCanaryXinjiangOutputReference | DcdnErEnvConfPresetCanaryXinjiang): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryXinjiangToHclTerraform(struct?: DcdnErEnvConfPresetCanaryXinjiangOutputReference | DcdnErEnvConfPresetCanaryXinjiang): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryXinjiangOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryXinjiang | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryXinjiang | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryXizang {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryXizangToTerraform(struct?: DcdnErEnvConfPresetCanaryXizangOutputReference | DcdnErEnvConfPresetCanaryXizang): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryXizangToHclTerraform(struct?: DcdnErEnvConfPresetCanaryXizangOutputReference | DcdnErEnvConfPresetCanaryXizang): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryXizangOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryXizang | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryXizang | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryYunnan {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryYunnanToTerraform(struct?: DcdnErEnvConfPresetCanaryYunnanOutputReference | DcdnErEnvConfPresetCanaryYunnan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryYunnanToHclTerraform(struct?: DcdnErEnvConfPresetCanaryYunnanOutputReference | DcdnErEnvConfPresetCanaryYunnan): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryYunnanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryYunnan | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryYunnan | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfPresetCanaryZhejiang {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfPresetCanaryZhejiangToTerraform(struct?: DcdnErEnvConfPresetCanaryZhejiangOutputReference | DcdnErEnvConfPresetCanaryZhejiang): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfPresetCanaryZhejiangToHclTerraform(struct?: DcdnErEnvConfPresetCanaryZhejiangOutputReference | DcdnErEnvConfPresetCanaryZhejiang): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfPresetCanaryZhejiangOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfPresetCanaryZhejiang | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfPresetCanaryZhejiang | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfProduction {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfProductionToTerraform(struct?: DcdnErEnvConfProductionOutputReference | DcdnErEnvConfProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfProductionToHclTerraform(struct?: DcdnErEnvConfProductionOutputReference | DcdnErEnvConfProduction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfProductionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfProduction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfProduction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConfStaging {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#allowed_hosts DcdnEr#allowed_hosts}
  */
  readonly allowedHosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#code_rev DcdnEr#code_rev}
  */
  readonly codeRev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#spec_name DcdnEr#spec_name}
  */
  readonly specName?: string;
}

export function dcdnErEnvConfStagingToTerraform(struct?: DcdnErEnvConfStagingOutputReference | DcdnErEnvConfStaging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedHosts),
    code_rev: cdktf.stringToTerraform(struct!.codeRev),
    spec_name: cdktf.stringToTerraform(struct!.specName),
  }
}


export function dcdnErEnvConfStagingToHclTerraform(struct?: DcdnErEnvConfStagingOutputReference | DcdnErEnvConfStaging): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_hosts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedHosts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    code_rev: {
      value: cdktf.stringToHclTerraform(struct!.codeRev),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spec_name: {
      value: cdktf.stringToHclTerraform(struct!.specName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfStagingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConfStaging | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHosts !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHosts = this._allowedHosts;
    }
    if (this._codeRev !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeRev = this._codeRev;
    }
    if (this._specName !== undefined) {
      hasAnyValues = true;
      internalValueResult.specName = this._specName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConfStaging | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedHosts = undefined;
      this._codeRev = undefined;
      this._specName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedHosts = value.allowedHosts;
      this._codeRev = value.codeRev;
      this._specName = value.specName;
    }
  }

  // allowed_hosts - computed: true, optional: true, required: false
  private _allowedHosts?: string[]; 
  public get allowedHosts() {
    return this.getListAttribute('allowed_hosts');
  }
  public set allowedHosts(value: string[]) {
    this._allowedHosts = value;
  }
  public resetAllowedHosts() {
    this._allowedHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHostsInput() {
    return this._allowedHosts;
  }

  // code_rev - computed: false, optional: true, required: false
  private _codeRev?: string; 
  public get codeRev() {
    return this.getStringAttribute('code_rev');
  }
  public set codeRev(value: string) {
    this._codeRev = value;
  }
  public resetCodeRev() {
    this._codeRev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeRevInput() {
    return this._codeRev;
  }

  // spec_name - computed: true, optional: true, required: false
  private _specName?: string; 
  public get specName() {
    return this.getStringAttribute('spec_name');
  }
  public set specName(value: string) {
    this._specName = value;
  }
  public resetSpecName() {
    this._specName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specNameInput() {
    return this._specName;
  }
}
export interface DcdnErEnvConf {
  /**
  * preset_canary_anhui block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_anhui DcdnEr#preset_canary_anhui}
  */
  readonly presetCanaryAnhui?: DcdnErEnvConfPresetCanaryAnhui;
  /**
  * preset_canary_beijing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_beijing DcdnEr#preset_canary_beijing}
  */
  readonly presetCanaryBeijing?: DcdnErEnvConfPresetCanaryBeijing;
  /**
  * preset_canary_chongqing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_chongqing DcdnEr#preset_canary_chongqing}
  */
  readonly presetCanaryChongqing?: DcdnErEnvConfPresetCanaryChongqing;
  /**
  * preset_canary_fujian block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_fujian DcdnEr#preset_canary_fujian}
  */
  readonly presetCanaryFujian?: DcdnErEnvConfPresetCanaryFujian;
  /**
  * preset_canary_gansu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_gansu DcdnEr#preset_canary_gansu}
  */
  readonly presetCanaryGansu?: DcdnErEnvConfPresetCanaryGansu;
  /**
  * preset_canary_guangdong block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_guangdong DcdnEr#preset_canary_guangdong}
  */
  readonly presetCanaryGuangdong?: DcdnErEnvConfPresetCanaryGuangdong;
  /**
  * preset_canary_guangxi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_guangxi DcdnEr#preset_canary_guangxi}
  */
  readonly presetCanaryGuangxi?: DcdnErEnvConfPresetCanaryGuangxi;
  /**
  * preset_canary_guizhou block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_guizhou DcdnEr#preset_canary_guizhou}
  */
  readonly presetCanaryGuizhou?: DcdnErEnvConfPresetCanaryGuizhou;
  /**
  * preset_canary_hainan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_hainan DcdnEr#preset_canary_hainan}
  */
  readonly presetCanaryHainan?: DcdnErEnvConfPresetCanaryHainan;
  /**
  * preset_canary_hebei block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_hebei DcdnEr#preset_canary_hebei}
  */
  readonly presetCanaryHebei?: DcdnErEnvConfPresetCanaryHebei;
  /**
  * preset_canary_heilongjiang block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_heilongjiang DcdnEr#preset_canary_heilongjiang}
  */
  readonly presetCanaryHeilongjiang?: DcdnErEnvConfPresetCanaryHeilongjiang;
  /**
  * preset_canary_henan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_henan DcdnEr#preset_canary_henan}
  */
  readonly presetCanaryHenan?: DcdnErEnvConfPresetCanaryHenan;
  /**
  * preset_canary_hong_kong block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_hong_kong DcdnEr#preset_canary_hong_kong}
  */
  readonly presetCanaryHongKong?: DcdnErEnvConfPresetCanaryHongKong;
  /**
  * preset_canary_hubei block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_hubei DcdnEr#preset_canary_hubei}
  */
  readonly presetCanaryHubei?: DcdnErEnvConfPresetCanaryHubei;
  /**
  * preset_canary_hunan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_hunan DcdnEr#preset_canary_hunan}
  */
  readonly presetCanaryHunan?: DcdnErEnvConfPresetCanaryHunan;
  /**
  * preset_canary_jiangsu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_jiangsu DcdnEr#preset_canary_jiangsu}
  */
  readonly presetCanaryJiangsu?: DcdnErEnvConfPresetCanaryJiangsu;
  /**
  * preset_canary_jiangxi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_jiangxi DcdnEr#preset_canary_jiangxi}
  */
  readonly presetCanaryJiangxi?: DcdnErEnvConfPresetCanaryJiangxi;
  /**
  * preset_canary_jilin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_jilin DcdnEr#preset_canary_jilin}
  */
  readonly presetCanaryJilin?: DcdnErEnvConfPresetCanaryJilin;
  /**
  * preset_canary_liaoning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_liaoning DcdnEr#preset_canary_liaoning}
  */
  readonly presetCanaryLiaoning?: DcdnErEnvConfPresetCanaryLiaoning;
  /**
  * preset_canary_macau block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_macau DcdnEr#preset_canary_macau}
  */
  readonly presetCanaryMacau?: DcdnErEnvConfPresetCanaryMacau;
  /**
  * preset_canary_neimenggu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_neimenggu DcdnEr#preset_canary_neimenggu}
  */
  readonly presetCanaryNeimenggu?: DcdnErEnvConfPresetCanaryNeimenggu;
  /**
  * preset_canary_ningxia block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_ningxia DcdnEr#preset_canary_ningxia}
  */
  readonly presetCanaryNingxia?: DcdnErEnvConfPresetCanaryNingxia;
  /**
  * preset_canary_overseas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_overseas DcdnEr#preset_canary_overseas}
  */
  readonly presetCanaryOverseas?: DcdnErEnvConfPresetCanaryOverseas;
  /**
  * preset_canary_qinghai block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_qinghai DcdnEr#preset_canary_qinghai}
  */
  readonly presetCanaryQinghai?: DcdnErEnvConfPresetCanaryQinghai;
  /**
  * preset_canary_shaanxi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_shaanxi DcdnEr#preset_canary_shaanxi}
  */
  readonly presetCanaryShaanxi?: DcdnErEnvConfPresetCanaryShaanxi;
  /**
  * preset_canary_shandong block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_shandong DcdnEr#preset_canary_shandong}
  */
  readonly presetCanaryShandong?: DcdnErEnvConfPresetCanaryShandong;
  /**
  * preset_canary_shanghai block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_shanghai DcdnEr#preset_canary_shanghai}
  */
  readonly presetCanaryShanghai?: DcdnErEnvConfPresetCanaryShanghai;
  /**
  * preset_canary_shanxi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_shanxi DcdnEr#preset_canary_shanxi}
  */
  readonly presetCanaryShanxi?: DcdnErEnvConfPresetCanaryShanxi;
  /**
  * preset_canary_sichuan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_sichuan DcdnEr#preset_canary_sichuan}
  */
  readonly presetCanarySichuan?: DcdnErEnvConfPresetCanarySichuan;
  /**
  * preset_canary_taiwan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_taiwan DcdnEr#preset_canary_taiwan}
  */
  readonly presetCanaryTaiwan?: DcdnErEnvConfPresetCanaryTaiwan;
  /**
  * preset_canary_tianjin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_tianjin DcdnEr#preset_canary_tianjin}
  */
  readonly presetCanaryTianjin?: DcdnErEnvConfPresetCanaryTianjin;
  /**
  * preset_canary_xinjiang block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_xinjiang DcdnEr#preset_canary_xinjiang}
  */
  readonly presetCanaryXinjiang?: DcdnErEnvConfPresetCanaryXinjiang;
  /**
  * preset_canary_xizang block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_xizang DcdnEr#preset_canary_xizang}
  */
  readonly presetCanaryXizang?: DcdnErEnvConfPresetCanaryXizang;
  /**
  * preset_canary_yunnan block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_yunnan DcdnEr#preset_canary_yunnan}
  */
  readonly presetCanaryYunnan?: DcdnErEnvConfPresetCanaryYunnan;
  /**
  * preset_canary_zhejiang block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#preset_canary_zhejiang DcdnEr#preset_canary_zhejiang}
  */
  readonly presetCanaryZhejiang?: DcdnErEnvConfPresetCanaryZhejiang;
  /**
  * production block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#production DcdnEr#production}
  */
  readonly production?: DcdnErEnvConfProduction;
  /**
  * staging block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#staging DcdnEr#staging}
  */
  readonly staging?: DcdnErEnvConfStaging;
}

export function dcdnErEnvConfToTerraform(struct?: DcdnErEnvConfOutputReference | DcdnErEnvConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preset_canary_anhui: dcdnErEnvConfPresetCanaryAnhuiToTerraform(struct!.presetCanaryAnhui),
    preset_canary_beijing: dcdnErEnvConfPresetCanaryBeijingToTerraform(struct!.presetCanaryBeijing),
    preset_canary_chongqing: dcdnErEnvConfPresetCanaryChongqingToTerraform(struct!.presetCanaryChongqing),
    preset_canary_fujian: dcdnErEnvConfPresetCanaryFujianToTerraform(struct!.presetCanaryFujian),
    preset_canary_gansu: dcdnErEnvConfPresetCanaryGansuToTerraform(struct!.presetCanaryGansu),
    preset_canary_guangdong: dcdnErEnvConfPresetCanaryGuangdongToTerraform(struct!.presetCanaryGuangdong),
    preset_canary_guangxi: dcdnErEnvConfPresetCanaryGuangxiToTerraform(struct!.presetCanaryGuangxi),
    preset_canary_guizhou: dcdnErEnvConfPresetCanaryGuizhouToTerraform(struct!.presetCanaryGuizhou),
    preset_canary_hainan: dcdnErEnvConfPresetCanaryHainanToTerraform(struct!.presetCanaryHainan),
    preset_canary_hebei: dcdnErEnvConfPresetCanaryHebeiToTerraform(struct!.presetCanaryHebei),
    preset_canary_heilongjiang: dcdnErEnvConfPresetCanaryHeilongjiangToTerraform(struct!.presetCanaryHeilongjiang),
    preset_canary_henan: dcdnErEnvConfPresetCanaryHenanToTerraform(struct!.presetCanaryHenan),
    preset_canary_hong_kong: dcdnErEnvConfPresetCanaryHongKongToTerraform(struct!.presetCanaryHongKong),
    preset_canary_hubei: dcdnErEnvConfPresetCanaryHubeiToTerraform(struct!.presetCanaryHubei),
    preset_canary_hunan: dcdnErEnvConfPresetCanaryHunanToTerraform(struct!.presetCanaryHunan),
    preset_canary_jiangsu: dcdnErEnvConfPresetCanaryJiangsuToTerraform(struct!.presetCanaryJiangsu),
    preset_canary_jiangxi: dcdnErEnvConfPresetCanaryJiangxiToTerraform(struct!.presetCanaryJiangxi),
    preset_canary_jilin: dcdnErEnvConfPresetCanaryJilinToTerraform(struct!.presetCanaryJilin),
    preset_canary_liaoning: dcdnErEnvConfPresetCanaryLiaoningToTerraform(struct!.presetCanaryLiaoning),
    preset_canary_macau: dcdnErEnvConfPresetCanaryMacauToTerraform(struct!.presetCanaryMacau),
    preset_canary_neimenggu: dcdnErEnvConfPresetCanaryNeimengguToTerraform(struct!.presetCanaryNeimenggu),
    preset_canary_ningxia: dcdnErEnvConfPresetCanaryNingxiaToTerraform(struct!.presetCanaryNingxia),
    preset_canary_overseas: dcdnErEnvConfPresetCanaryOverseasToTerraform(struct!.presetCanaryOverseas),
    preset_canary_qinghai: dcdnErEnvConfPresetCanaryQinghaiToTerraform(struct!.presetCanaryQinghai),
    preset_canary_shaanxi: dcdnErEnvConfPresetCanaryShaanxiToTerraform(struct!.presetCanaryShaanxi),
    preset_canary_shandong: dcdnErEnvConfPresetCanaryShandongToTerraform(struct!.presetCanaryShandong),
    preset_canary_shanghai: dcdnErEnvConfPresetCanaryShanghaiToTerraform(struct!.presetCanaryShanghai),
    preset_canary_shanxi: dcdnErEnvConfPresetCanaryShanxiToTerraform(struct!.presetCanaryShanxi),
    preset_canary_sichuan: dcdnErEnvConfPresetCanarySichuanToTerraform(struct!.presetCanarySichuan),
    preset_canary_taiwan: dcdnErEnvConfPresetCanaryTaiwanToTerraform(struct!.presetCanaryTaiwan),
    preset_canary_tianjin: dcdnErEnvConfPresetCanaryTianjinToTerraform(struct!.presetCanaryTianjin),
    preset_canary_xinjiang: dcdnErEnvConfPresetCanaryXinjiangToTerraform(struct!.presetCanaryXinjiang),
    preset_canary_xizang: dcdnErEnvConfPresetCanaryXizangToTerraform(struct!.presetCanaryXizang),
    preset_canary_yunnan: dcdnErEnvConfPresetCanaryYunnanToTerraform(struct!.presetCanaryYunnan),
    preset_canary_zhejiang: dcdnErEnvConfPresetCanaryZhejiangToTerraform(struct!.presetCanaryZhejiang),
    production: dcdnErEnvConfProductionToTerraform(struct!.production),
    staging: dcdnErEnvConfStagingToTerraform(struct!.staging),
  }
}


export function dcdnErEnvConfToHclTerraform(struct?: DcdnErEnvConfOutputReference | DcdnErEnvConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preset_canary_anhui: {
      value: dcdnErEnvConfPresetCanaryAnhuiToHclTerraform(struct!.presetCanaryAnhui),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryAnhuiList",
    },
    preset_canary_beijing: {
      value: dcdnErEnvConfPresetCanaryBeijingToHclTerraform(struct!.presetCanaryBeijing),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryBeijingList",
    },
    preset_canary_chongqing: {
      value: dcdnErEnvConfPresetCanaryChongqingToHclTerraform(struct!.presetCanaryChongqing),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryChongqingList",
    },
    preset_canary_fujian: {
      value: dcdnErEnvConfPresetCanaryFujianToHclTerraform(struct!.presetCanaryFujian),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryFujianList",
    },
    preset_canary_gansu: {
      value: dcdnErEnvConfPresetCanaryGansuToHclTerraform(struct!.presetCanaryGansu),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryGansuList",
    },
    preset_canary_guangdong: {
      value: dcdnErEnvConfPresetCanaryGuangdongToHclTerraform(struct!.presetCanaryGuangdong),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryGuangdongList",
    },
    preset_canary_guangxi: {
      value: dcdnErEnvConfPresetCanaryGuangxiToHclTerraform(struct!.presetCanaryGuangxi),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryGuangxiList",
    },
    preset_canary_guizhou: {
      value: dcdnErEnvConfPresetCanaryGuizhouToHclTerraform(struct!.presetCanaryGuizhou),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryGuizhouList",
    },
    preset_canary_hainan: {
      value: dcdnErEnvConfPresetCanaryHainanToHclTerraform(struct!.presetCanaryHainan),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryHainanList",
    },
    preset_canary_hebei: {
      value: dcdnErEnvConfPresetCanaryHebeiToHclTerraform(struct!.presetCanaryHebei),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryHebeiList",
    },
    preset_canary_heilongjiang: {
      value: dcdnErEnvConfPresetCanaryHeilongjiangToHclTerraform(struct!.presetCanaryHeilongjiang),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryHeilongjiangList",
    },
    preset_canary_henan: {
      value: dcdnErEnvConfPresetCanaryHenanToHclTerraform(struct!.presetCanaryHenan),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryHenanList",
    },
    preset_canary_hong_kong: {
      value: dcdnErEnvConfPresetCanaryHongKongToHclTerraform(struct!.presetCanaryHongKong),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryHongKongList",
    },
    preset_canary_hubei: {
      value: dcdnErEnvConfPresetCanaryHubeiToHclTerraform(struct!.presetCanaryHubei),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryHubeiList",
    },
    preset_canary_hunan: {
      value: dcdnErEnvConfPresetCanaryHunanToHclTerraform(struct!.presetCanaryHunan),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryHunanList",
    },
    preset_canary_jiangsu: {
      value: dcdnErEnvConfPresetCanaryJiangsuToHclTerraform(struct!.presetCanaryJiangsu),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryJiangsuList",
    },
    preset_canary_jiangxi: {
      value: dcdnErEnvConfPresetCanaryJiangxiToHclTerraform(struct!.presetCanaryJiangxi),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryJiangxiList",
    },
    preset_canary_jilin: {
      value: dcdnErEnvConfPresetCanaryJilinToHclTerraform(struct!.presetCanaryJilin),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryJilinList",
    },
    preset_canary_liaoning: {
      value: dcdnErEnvConfPresetCanaryLiaoningToHclTerraform(struct!.presetCanaryLiaoning),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryLiaoningList",
    },
    preset_canary_macau: {
      value: dcdnErEnvConfPresetCanaryMacauToHclTerraform(struct!.presetCanaryMacau),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryMacauList",
    },
    preset_canary_neimenggu: {
      value: dcdnErEnvConfPresetCanaryNeimengguToHclTerraform(struct!.presetCanaryNeimenggu),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryNeimengguList",
    },
    preset_canary_ningxia: {
      value: dcdnErEnvConfPresetCanaryNingxiaToHclTerraform(struct!.presetCanaryNingxia),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryNingxiaList",
    },
    preset_canary_overseas: {
      value: dcdnErEnvConfPresetCanaryOverseasToHclTerraform(struct!.presetCanaryOverseas),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryOverseasList",
    },
    preset_canary_qinghai: {
      value: dcdnErEnvConfPresetCanaryQinghaiToHclTerraform(struct!.presetCanaryQinghai),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryQinghaiList",
    },
    preset_canary_shaanxi: {
      value: dcdnErEnvConfPresetCanaryShaanxiToHclTerraform(struct!.presetCanaryShaanxi),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryShaanxiList",
    },
    preset_canary_shandong: {
      value: dcdnErEnvConfPresetCanaryShandongToHclTerraform(struct!.presetCanaryShandong),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryShandongList",
    },
    preset_canary_shanghai: {
      value: dcdnErEnvConfPresetCanaryShanghaiToHclTerraform(struct!.presetCanaryShanghai),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryShanghaiList",
    },
    preset_canary_shanxi: {
      value: dcdnErEnvConfPresetCanaryShanxiToHclTerraform(struct!.presetCanaryShanxi),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryShanxiList",
    },
    preset_canary_sichuan: {
      value: dcdnErEnvConfPresetCanarySichuanToHclTerraform(struct!.presetCanarySichuan),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanarySichuanList",
    },
    preset_canary_taiwan: {
      value: dcdnErEnvConfPresetCanaryTaiwanToHclTerraform(struct!.presetCanaryTaiwan),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryTaiwanList",
    },
    preset_canary_tianjin: {
      value: dcdnErEnvConfPresetCanaryTianjinToHclTerraform(struct!.presetCanaryTianjin),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryTianjinList",
    },
    preset_canary_xinjiang: {
      value: dcdnErEnvConfPresetCanaryXinjiangToHclTerraform(struct!.presetCanaryXinjiang),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryXinjiangList",
    },
    preset_canary_xizang: {
      value: dcdnErEnvConfPresetCanaryXizangToHclTerraform(struct!.presetCanaryXizang),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryXizangList",
    },
    preset_canary_yunnan: {
      value: dcdnErEnvConfPresetCanaryYunnanToHclTerraform(struct!.presetCanaryYunnan),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryYunnanList",
    },
    preset_canary_zhejiang: {
      value: dcdnErEnvConfPresetCanaryZhejiangToHclTerraform(struct!.presetCanaryZhejiang),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfPresetCanaryZhejiangList",
    },
    production: {
      value: dcdnErEnvConfProductionToHclTerraform(struct!.production),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfProductionList",
    },
    staging: {
      value: dcdnErEnvConfStagingToHclTerraform(struct!.staging),
      isBlock: true,
      type: "list",
      storageClassType: "DcdnErEnvConfStagingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErEnvConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DcdnErEnvConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._presetCanaryAnhui?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryAnhui = this._presetCanaryAnhui?.internalValue;
    }
    if (this._presetCanaryBeijing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryBeijing = this._presetCanaryBeijing?.internalValue;
    }
    if (this._presetCanaryChongqing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryChongqing = this._presetCanaryChongqing?.internalValue;
    }
    if (this._presetCanaryFujian?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryFujian = this._presetCanaryFujian?.internalValue;
    }
    if (this._presetCanaryGansu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryGansu = this._presetCanaryGansu?.internalValue;
    }
    if (this._presetCanaryGuangdong?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryGuangdong = this._presetCanaryGuangdong?.internalValue;
    }
    if (this._presetCanaryGuangxi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryGuangxi = this._presetCanaryGuangxi?.internalValue;
    }
    if (this._presetCanaryGuizhou?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryGuizhou = this._presetCanaryGuizhou?.internalValue;
    }
    if (this._presetCanaryHainan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryHainan = this._presetCanaryHainan?.internalValue;
    }
    if (this._presetCanaryHebei?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryHebei = this._presetCanaryHebei?.internalValue;
    }
    if (this._presetCanaryHeilongjiang?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryHeilongjiang = this._presetCanaryHeilongjiang?.internalValue;
    }
    if (this._presetCanaryHenan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryHenan = this._presetCanaryHenan?.internalValue;
    }
    if (this._presetCanaryHongKong?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryHongKong = this._presetCanaryHongKong?.internalValue;
    }
    if (this._presetCanaryHubei?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryHubei = this._presetCanaryHubei?.internalValue;
    }
    if (this._presetCanaryHunan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryHunan = this._presetCanaryHunan?.internalValue;
    }
    if (this._presetCanaryJiangsu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryJiangsu = this._presetCanaryJiangsu?.internalValue;
    }
    if (this._presetCanaryJiangxi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryJiangxi = this._presetCanaryJiangxi?.internalValue;
    }
    if (this._presetCanaryJilin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryJilin = this._presetCanaryJilin?.internalValue;
    }
    if (this._presetCanaryLiaoning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryLiaoning = this._presetCanaryLiaoning?.internalValue;
    }
    if (this._presetCanaryMacau?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryMacau = this._presetCanaryMacau?.internalValue;
    }
    if (this._presetCanaryNeimenggu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryNeimenggu = this._presetCanaryNeimenggu?.internalValue;
    }
    if (this._presetCanaryNingxia?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryNingxia = this._presetCanaryNingxia?.internalValue;
    }
    if (this._presetCanaryOverseas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryOverseas = this._presetCanaryOverseas?.internalValue;
    }
    if (this._presetCanaryQinghai?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryQinghai = this._presetCanaryQinghai?.internalValue;
    }
    if (this._presetCanaryShaanxi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryShaanxi = this._presetCanaryShaanxi?.internalValue;
    }
    if (this._presetCanaryShandong?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryShandong = this._presetCanaryShandong?.internalValue;
    }
    if (this._presetCanaryShanghai?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryShanghai = this._presetCanaryShanghai?.internalValue;
    }
    if (this._presetCanaryShanxi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryShanxi = this._presetCanaryShanxi?.internalValue;
    }
    if (this._presetCanarySichuan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanarySichuan = this._presetCanarySichuan?.internalValue;
    }
    if (this._presetCanaryTaiwan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryTaiwan = this._presetCanaryTaiwan?.internalValue;
    }
    if (this._presetCanaryTianjin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryTianjin = this._presetCanaryTianjin?.internalValue;
    }
    if (this._presetCanaryXinjiang?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryXinjiang = this._presetCanaryXinjiang?.internalValue;
    }
    if (this._presetCanaryXizang?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryXizang = this._presetCanaryXizang?.internalValue;
    }
    if (this._presetCanaryYunnan?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryYunnan = this._presetCanaryYunnan?.internalValue;
    }
    if (this._presetCanaryZhejiang?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.presetCanaryZhejiang = this._presetCanaryZhejiang?.internalValue;
    }
    if (this._production?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.production = this._production?.internalValue;
    }
    if (this._staging?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staging = this._staging?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErEnvConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._presetCanaryAnhui.internalValue = undefined;
      this._presetCanaryBeijing.internalValue = undefined;
      this._presetCanaryChongqing.internalValue = undefined;
      this._presetCanaryFujian.internalValue = undefined;
      this._presetCanaryGansu.internalValue = undefined;
      this._presetCanaryGuangdong.internalValue = undefined;
      this._presetCanaryGuangxi.internalValue = undefined;
      this._presetCanaryGuizhou.internalValue = undefined;
      this._presetCanaryHainan.internalValue = undefined;
      this._presetCanaryHebei.internalValue = undefined;
      this._presetCanaryHeilongjiang.internalValue = undefined;
      this._presetCanaryHenan.internalValue = undefined;
      this._presetCanaryHongKong.internalValue = undefined;
      this._presetCanaryHubei.internalValue = undefined;
      this._presetCanaryHunan.internalValue = undefined;
      this._presetCanaryJiangsu.internalValue = undefined;
      this._presetCanaryJiangxi.internalValue = undefined;
      this._presetCanaryJilin.internalValue = undefined;
      this._presetCanaryLiaoning.internalValue = undefined;
      this._presetCanaryMacau.internalValue = undefined;
      this._presetCanaryNeimenggu.internalValue = undefined;
      this._presetCanaryNingxia.internalValue = undefined;
      this._presetCanaryOverseas.internalValue = undefined;
      this._presetCanaryQinghai.internalValue = undefined;
      this._presetCanaryShaanxi.internalValue = undefined;
      this._presetCanaryShandong.internalValue = undefined;
      this._presetCanaryShanghai.internalValue = undefined;
      this._presetCanaryShanxi.internalValue = undefined;
      this._presetCanarySichuan.internalValue = undefined;
      this._presetCanaryTaiwan.internalValue = undefined;
      this._presetCanaryTianjin.internalValue = undefined;
      this._presetCanaryXinjiang.internalValue = undefined;
      this._presetCanaryXizang.internalValue = undefined;
      this._presetCanaryYunnan.internalValue = undefined;
      this._presetCanaryZhejiang.internalValue = undefined;
      this._production.internalValue = undefined;
      this._staging.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._presetCanaryAnhui.internalValue = value.presetCanaryAnhui;
      this._presetCanaryBeijing.internalValue = value.presetCanaryBeijing;
      this._presetCanaryChongqing.internalValue = value.presetCanaryChongqing;
      this._presetCanaryFujian.internalValue = value.presetCanaryFujian;
      this._presetCanaryGansu.internalValue = value.presetCanaryGansu;
      this._presetCanaryGuangdong.internalValue = value.presetCanaryGuangdong;
      this._presetCanaryGuangxi.internalValue = value.presetCanaryGuangxi;
      this._presetCanaryGuizhou.internalValue = value.presetCanaryGuizhou;
      this._presetCanaryHainan.internalValue = value.presetCanaryHainan;
      this._presetCanaryHebei.internalValue = value.presetCanaryHebei;
      this._presetCanaryHeilongjiang.internalValue = value.presetCanaryHeilongjiang;
      this._presetCanaryHenan.internalValue = value.presetCanaryHenan;
      this._presetCanaryHongKong.internalValue = value.presetCanaryHongKong;
      this._presetCanaryHubei.internalValue = value.presetCanaryHubei;
      this._presetCanaryHunan.internalValue = value.presetCanaryHunan;
      this._presetCanaryJiangsu.internalValue = value.presetCanaryJiangsu;
      this._presetCanaryJiangxi.internalValue = value.presetCanaryJiangxi;
      this._presetCanaryJilin.internalValue = value.presetCanaryJilin;
      this._presetCanaryLiaoning.internalValue = value.presetCanaryLiaoning;
      this._presetCanaryMacau.internalValue = value.presetCanaryMacau;
      this._presetCanaryNeimenggu.internalValue = value.presetCanaryNeimenggu;
      this._presetCanaryNingxia.internalValue = value.presetCanaryNingxia;
      this._presetCanaryOverseas.internalValue = value.presetCanaryOverseas;
      this._presetCanaryQinghai.internalValue = value.presetCanaryQinghai;
      this._presetCanaryShaanxi.internalValue = value.presetCanaryShaanxi;
      this._presetCanaryShandong.internalValue = value.presetCanaryShandong;
      this._presetCanaryShanghai.internalValue = value.presetCanaryShanghai;
      this._presetCanaryShanxi.internalValue = value.presetCanaryShanxi;
      this._presetCanarySichuan.internalValue = value.presetCanarySichuan;
      this._presetCanaryTaiwan.internalValue = value.presetCanaryTaiwan;
      this._presetCanaryTianjin.internalValue = value.presetCanaryTianjin;
      this._presetCanaryXinjiang.internalValue = value.presetCanaryXinjiang;
      this._presetCanaryXizang.internalValue = value.presetCanaryXizang;
      this._presetCanaryYunnan.internalValue = value.presetCanaryYunnan;
      this._presetCanaryZhejiang.internalValue = value.presetCanaryZhejiang;
      this._production.internalValue = value.production;
      this._staging.internalValue = value.staging;
    }
  }

  // preset_canary_anhui - computed: false, optional: true, required: false
  private _presetCanaryAnhui = new DcdnErEnvConfPresetCanaryAnhuiOutputReference(this, "preset_canary_anhui");
  public get presetCanaryAnhui() {
    return this._presetCanaryAnhui;
  }
  public putPresetCanaryAnhui(value: DcdnErEnvConfPresetCanaryAnhui) {
    this._presetCanaryAnhui.internalValue = value;
  }
  public resetPresetCanaryAnhui() {
    this._presetCanaryAnhui.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryAnhuiInput() {
    return this._presetCanaryAnhui.internalValue;
  }

  // preset_canary_beijing - computed: false, optional: true, required: false
  private _presetCanaryBeijing = new DcdnErEnvConfPresetCanaryBeijingOutputReference(this, "preset_canary_beijing");
  public get presetCanaryBeijing() {
    return this._presetCanaryBeijing;
  }
  public putPresetCanaryBeijing(value: DcdnErEnvConfPresetCanaryBeijing) {
    this._presetCanaryBeijing.internalValue = value;
  }
  public resetPresetCanaryBeijing() {
    this._presetCanaryBeijing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryBeijingInput() {
    return this._presetCanaryBeijing.internalValue;
  }

  // preset_canary_chongqing - computed: false, optional: true, required: false
  private _presetCanaryChongqing = new DcdnErEnvConfPresetCanaryChongqingOutputReference(this, "preset_canary_chongqing");
  public get presetCanaryChongqing() {
    return this._presetCanaryChongqing;
  }
  public putPresetCanaryChongqing(value: DcdnErEnvConfPresetCanaryChongqing) {
    this._presetCanaryChongqing.internalValue = value;
  }
  public resetPresetCanaryChongqing() {
    this._presetCanaryChongqing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryChongqingInput() {
    return this._presetCanaryChongqing.internalValue;
  }

  // preset_canary_fujian - computed: false, optional: true, required: false
  private _presetCanaryFujian = new DcdnErEnvConfPresetCanaryFujianOutputReference(this, "preset_canary_fujian");
  public get presetCanaryFujian() {
    return this._presetCanaryFujian;
  }
  public putPresetCanaryFujian(value: DcdnErEnvConfPresetCanaryFujian) {
    this._presetCanaryFujian.internalValue = value;
  }
  public resetPresetCanaryFujian() {
    this._presetCanaryFujian.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryFujianInput() {
    return this._presetCanaryFujian.internalValue;
  }

  // preset_canary_gansu - computed: false, optional: true, required: false
  private _presetCanaryGansu = new DcdnErEnvConfPresetCanaryGansuOutputReference(this, "preset_canary_gansu");
  public get presetCanaryGansu() {
    return this._presetCanaryGansu;
  }
  public putPresetCanaryGansu(value: DcdnErEnvConfPresetCanaryGansu) {
    this._presetCanaryGansu.internalValue = value;
  }
  public resetPresetCanaryGansu() {
    this._presetCanaryGansu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryGansuInput() {
    return this._presetCanaryGansu.internalValue;
  }

  // preset_canary_guangdong - computed: false, optional: true, required: false
  private _presetCanaryGuangdong = new DcdnErEnvConfPresetCanaryGuangdongOutputReference(this, "preset_canary_guangdong");
  public get presetCanaryGuangdong() {
    return this._presetCanaryGuangdong;
  }
  public putPresetCanaryGuangdong(value: DcdnErEnvConfPresetCanaryGuangdong) {
    this._presetCanaryGuangdong.internalValue = value;
  }
  public resetPresetCanaryGuangdong() {
    this._presetCanaryGuangdong.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryGuangdongInput() {
    return this._presetCanaryGuangdong.internalValue;
  }

  // preset_canary_guangxi - computed: false, optional: true, required: false
  private _presetCanaryGuangxi = new DcdnErEnvConfPresetCanaryGuangxiOutputReference(this, "preset_canary_guangxi");
  public get presetCanaryGuangxi() {
    return this._presetCanaryGuangxi;
  }
  public putPresetCanaryGuangxi(value: DcdnErEnvConfPresetCanaryGuangxi) {
    this._presetCanaryGuangxi.internalValue = value;
  }
  public resetPresetCanaryGuangxi() {
    this._presetCanaryGuangxi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryGuangxiInput() {
    return this._presetCanaryGuangxi.internalValue;
  }

  // preset_canary_guizhou - computed: false, optional: true, required: false
  private _presetCanaryGuizhou = new DcdnErEnvConfPresetCanaryGuizhouOutputReference(this, "preset_canary_guizhou");
  public get presetCanaryGuizhou() {
    return this._presetCanaryGuizhou;
  }
  public putPresetCanaryGuizhou(value: DcdnErEnvConfPresetCanaryGuizhou) {
    this._presetCanaryGuizhou.internalValue = value;
  }
  public resetPresetCanaryGuizhou() {
    this._presetCanaryGuizhou.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryGuizhouInput() {
    return this._presetCanaryGuizhou.internalValue;
  }

  // preset_canary_hainan - computed: false, optional: true, required: false
  private _presetCanaryHainan = new DcdnErEnvConfPresetCanaryHainanOutputReference(this, "preset_canary_hainan");
  public get presetCanaryHainan() {
    return this._presetCanaryHainan;
  }
  public putPresetCanaryHainan(value: DcdnErEnvConfPresetCanaryHainan) {
    this._presetCanaryHainan.internalValue = value;
  }
  public resetPresetCanaryHainan() {
    this._presetCanaryHainan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryHainanInput() {
    return this._presetCanaryHainan.internalValue;
  }

  // preset_canary_hebei - computed: false, optional: true, required: false
  private _presetCanaryHebei = new DcdnErEnvConfPresetCanaryHebeiOutputReference(this, "preset_canary_hebei");
  public get presetCanaryHebei() {
    return this._presetCanaryHebei;
  }
  public putPresetCanaryHebei(value: DcdnErEnvConfPresetCanaryHebei) {
    this._presetCanaryHebei.internalValue = value;
  }
  public resetPresetCanaryHebei() {
    this._presetCanaryHebei.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryHebeiInput() {
    return this._presetCanaryHebei.internalValue;
  }

  // preset_canary_heilongjiang - computed: false, optional: true, required: false
  private _presetCanaryHeilongjiang = new DcdnErEnvConfPresetCanaryHeilongjiangOutputReference(this, "preset_canary_heilongjiang");
  public get presetCanaryHeilongjiang() {
    return this._presetCanaryHeilongjiang;
  }
  public putPresetCanaryHeilongjiang(value: DcdnErEnvConfPresetCanaryHeilongjiang) {
    this._presetCanaryHeilongjiang.internalValue = value;
  }
  public resetPresetCanaryHeilongjiang() {
    this._presetCanaryHeilongjiang.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryHeilongjiangInput() {
    return this._presetCanaryHeilongjiang.internalValue;
  }

  // preset_canary_henan - computed: false, optional: true, required: false
  private _presetCanaryHenan = new DcdnErEnvConfPresetCanaryHenanOutputReference(this, "preset_canary_henan");
  public get presetCanaryHenan() {
    return this._presetCanaryHenan;
  }
  public putPresetCanaryHenan(value: DcdnErEnvConfPresetCanaryHenan) {
    this._presetCanaryHenan.internalValue = value;
  }
  public resetPresetCanaryHenan() {
    this._presetCanaryHenan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryHenanInput() {
    return this._presetCanaryHenan.internalValue;
  }

  // preset_canary_hong_kong - computed: false, optional: true, required: false
  private _presetCanaryHongKong = new DcdnErEnvConfPresetCanaryHongKongOutputReference(this, "preset_canary_hong_kong");
  public get presetCanaryHongKong() {
    return this._presetCanaryHongKong;
  }
  public putPresetCanaryHongKong(value: DcdnErEnvConfPresetCanaryHongKong) {
    this._presetCanaryHongKong.internalValue = value;
  }
  public resetPresetCanaryHongKong() {
    this._presetCanaryHongKong.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryHongKongInput() {
    return this._presetCanaryHongKong.internalValue;
  }

  // preset_canary_hubei - computed: false, optional: true, required: false
  private _presetCanaryHubei = new DcdnErEnvConfPresetCanaryHubeiOutputReference(this, "preset_canary_hubei");
  public get presetCanaryHubei() {
    return this._presetCanaryHubei;
  }
  public putPresetCanaryHubei(value: DcdnErEnvConfPresetCanaryHubei) {
    this._presetCanaryHubei.internalValue = value;
  }
  public resetPresetCanaryHubei() {
    this._presetCanaryHubei.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryHubeiInput() {
    return this._presetCanaryHubei.internalValue;
  }

  // preset_canary_hunan - computed: false, optional: true, required: false
  private _presetCanaryHunan = new DcdnErEnvConfPresetCanaryHunanOutputReference(this, "preset_canary_hunan");
  public get presetCanaryHunan() {
    return this._presetCanaryHunan;
  }
  public putPresetCanaryHunan(value: DcdnErEnvConfPresetCanaryHunan) {
    this._presetCanaryHunan.internalValue = value;
  }
  public resetPresetCanaryHunan() {
    this._presetCanaryHunan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryHunanInput() {
    return this._presetCanaryHunan.internalValue;
  }

  // preset_canary_jiangsu - computed: false, optional: true, required: false
  private _presetCanaryJiangsu = new DcdnErEnvConfPresetCanaryJiangsuOutputReference(this, "preset_canary_jiangsu");
  public get presetCanaryJiangsu() {
    return this._presetCanaryJiangsu;
  }
  public putPresetCanaryJiangsu(value: DcdnErEnvConfPresetCanaryJiangsu) {
    this._presetCanaryJiangsu.internalValue = value;
  }
  public resetPresetCanaryJiangsu() {
    this._presetCanaryJiangsu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryJiangsuInput() {
    return this._presetCanaryJiangsu.internalValue;
  }

  // preset_canary_jiangxi - computed: false, optional: true, required: false
  private _presetCanaryJiangxi = new DcdnErEnvConfPresetCanaryJiangxiOutputReference(this, "preset_canary_jiangxi");
  public get presetCanaryJiangxi() {
    return this._presetCanaryJiangxi;
  }
  public putPresetCanaryJiangxi(value: DcdnErEnvConfPresetCanaryJiangxi) {
    this._presetCanaryJiangxi.internalValue = value;
  }
  public resetPresetCanaryJiangxi() {
    this._presetCanaryJiangxi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryJiangxiInput() {
    return this._presetCanaryJiangxi.internalValue;
  }

  // preset_canary_jilin - computed: false, optional: true, required: false
  private _presetCanaryJilin = new DcdnErEnvConfPresetCanaryJilinOutputReference(this, "preset_canary_jilin");
  public get presetCanaryJilin() {
    return this._presetCanaryJilin;
  }
  public putPresetCanaryJilin(value: DcdnErEnvConfPresetCanaryJilin) {
    this._presetCanaryJilin.internalValue = value;
  }
  public resetPresetCanaryJilin() {
    this._presetCanaryJilin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryJilinInput() {
    return this._presetCanaryJilin.internalValue;
  }

  // preset_canary_liaoning - computed: false, optional: true, required: false
  private _presetCanaryLiaoning = new DcdnErEnvConfPresetCanaryLiaoningOutputReference(this, "preset_canary_liaoning");
  public get presetCanaryLiaoning() {
    return this._presetCanaryLiaoning;
  }
  public putPresetCanaryLiaoning(value: DcdnErEnvConfPresetCanaryLiaoning) {
    this._presetCanaryLiaoning.internalValue = value;
  }
  public resetPresetCanaryLiaoning() {
    this._presetCanaryLiaoning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryLiaoningInput() {
    return this._presetCanaryLiaoning.internalValue;
  }

  // preset_canary_macau - computed: false, optional: true, required: false
  private _presetCanaryMacau = new DcdnErEnvConfPresetCanaryMacauOutputReference(this, "preset_canary_macau");
  public get presetCanaryMacau() {
    return this._presetCanaryMacau;
  }
  public putPresetCanaryMacau(value: DcdnErEnvConfPresetCanaryMacau) {
    this._presetCanaryMacau.internalValue = value;
  }
  public resetPresetCanaryMacau() {
    this._presetCanaryMacau.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryMacauInput() {
    return this._presetCanaryMacau.internalValue;
  }

  // preset_canary_neimenggu - computed: false, optional: true, required: false
  private _presetCanaryNeimenggu = new DcdnErEnvConfPresetCanaryNeimengguOutputReference(this, "preset_canary_neimenggu");
  public get presetCanaryNeimenggu() {
    return this._presetCanaryNeimenggu;
  }
  public putPresetCanaryNeimenggu(value: DcdnErEnvConfPresetCanaryNeimenggu) {
    this._presetCanaryNeimenggu.internalValue = value;
  }
  public resetPresetCanaryNeimenggu() {
    this._presetCanaryNeimenggu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryNeimengguInput() {
    return this._presetCanaryNeimenggu.internalValue;
  }

  // preset_canary_ningxia - computed: false, optional: true, required: false
  private _presetCanaryNingxia = new DcdnErEnvConfPresetCanaryNingxiaOutputReference(this, "preset_canary_ningxia");
  public get presetCanaryNingxia() {
    return this._presetCanaryNingxia;
  }
  public putPresetCanaryNingxia(value: DcdnErEnvConfPresetCanaryNingxia) {
    this._presetCanaryNingxia.internalValue = value;
  }
  public resetPresetCanaryNingxia() {
    this._presetCanaryNingxia.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryNingxiaInput() {
    return this._presetCanaryNingxia.internalValue;
  }

  // preset_canary_overseas - computed: false, optional: true, required: false
  private _presetCanaryOverseas = new DcdnErEnvConfPresetCanaryOverseasOutputReference(this, "preset_canary_overseas");
  public get presetCanaryOverseas() {
    return this._presetCanaryOverseas;
  }
  public putPresetCanaryOverseas(value: DcdnErEnvConfPresetCanaryOverseas) {
    this._presetCanaryOverseas.internalValue = value;
  }
  public resetPresetCanaryOverseas() {
    this._presetCanaryOverseas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryOverseasInput() {
    return this._presetCanaryOverseas.internalValue;
  }

  // preset_canary_qinghai - computed: false, optional: true, required: false
  private _presetCanaryQinghai = new DcdnErEnvConfPresetCanaryQinghaiOutputReference(this, "preset_canary_qinghai");
  public get presetCanaryQinghai() {
    return this._presetCanaryQinghai;
  }
  public putPresetCanaryQinghai(value: DcdnErEnvConfPresetCanaryQinghai) {
    this._presetCanaryQinghai.internalValue = value;
  }
  public resetPresetCanaryQinghai() {
    this._presetCanaryQinghai.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryQinghaiInput() {
    return this._presetCanaryQinghai.internalValue;
  }

  // preset_canary_shaanxi - computed: false, optional: true, required: false
  private _presetCanaryShaanxi = new DcdnErEnvConfPresetCanaryShaanxiOutputReference(this, "preset_canary_shaanxi");
  public get presetCanaryShaanxi() {
    return this._presetCanaryShaanxi;
  }
  public putPresetCanaryShaanxi(value: DcdnErEnvConfPresetCanaryShaanxi) {
    this._presetCanaryShaanxi.internalValue = value;
  }
  public resetPresetCanaryShaanxi() {
    this._presetCanaryShaanxi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryShaanxiInput() {
    return this._presetCanaryShaanxi.internalValue;
  }

  // preset_canary_shandong - computed: false, optional: true, required: false
  private _presetCanaryShandong = new DcdnErEnvConfPresetCanaryShandongOutputReference(this, "preset_canary_shandong");
  public get presetCanaryShandong() {
    return this._presetCanaryShandong;
  }
  public putPresetCanaryShandong(value: DcdnErEnvConfPresetCanaryShandong) {
    this._presetCanaryShandong.internalValue = value;
  }
  public resetPresetCanaryShandong() {
    this._presetCanaryShandong.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryShandongInput() {
    return this._presetCanaryShandong.internalValue;
  }

  // preset_canary_shanghai - computed: false, optional: true, required: false
  private _presetCanaryShanghai = new DcdnErEnvConfPresetCanaryShanghaiOutputReference(this, "preset_canary_shanghai");
  public get presetCanaryShanghai() {
    return this._presetCanaryShanghai;
  }
  public putPresetCanaryShanghai(value: DcdnErEnvConfPresetCanaryShanghai) {
    this._presetCanaryShanghai.internalValue = value;
  }
  public resetPresetCanaryShanghai() {
    this._presetCanaryShanghai.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryShanghaiInput() {
    return this._presetCanaryShanghai.internalValue;
  }

  // preset_canary_shanxi - computed: false, optional: true, required: false
  private _presetCanaryShanxi = new DcdnErEnvConfPresetCanaryShanxiOutputReference(this, "preset_canary_shanxi");
  public get presetCanaryShanxi() {
    return this._presetCanaryShanxi;
  }
  public putPresetCanaryShanxi(value: DcdnErEnvConfPresetCanaryShanxi) {
    this._presetCanaryShanxi.internalValue = value;
  }
  public resetPresetCanaryShanxi() {
    this._presetCanaryShanxi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryShanxiInput() {
    return this._presetCanaryShanxi.internalValue;
  }

  // preset_canary_sichuan - computed: false, optional: true, required: false
  private _presetCanarySichuan = new DcdnErEnvConfPresetCanarySichuanOutputReference(this, "preset_canary_sichuan");
  public get presetCanarySichuan() {
    return this._presetCanarySichuan;
  }
  public putPresetCanarySichuan(value: DcdnErEnvConfPresetCanarySichuan) {
    this._presetCanarySichuan.internalValue = value;
  }
  public resetPresetCanarySichuan() {
    this._presetCanarySichuan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanarySichuanInput() {
    return this._presetCanarySichuan.internalValue;
  }

  // preset_canary_taiwan - computed: false, optional: true, required: false
  private _presetCanaryTaiwan = new DcdnErEnvConfPresetCanaryTaiwanOutputReference(this, "preset_canary_taiwan");
  public get presetCanaryTaiwan() {
    return this._presetCanaryTaiwan;
  }
  public putPresetCanaryTaiwan(value: DcdnErEnvConfPresetCanaryTaiwan) {
    this._presetCanaryTaiwan.internalValue = value;
  }
  public resetPresetCanaryTaiwan() {
    this._presetCanaryTaiwan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryTaiwanInput() {
    return this._presetCanaryTaiwan.internalValue;
  }

  // preset_canary_tianjin - computed: false, optional: true, required: false
  private _presetCanaryTianjin = new DcdnErEnvConfPresetCanaryTianjinOutputReference(this, "preset_canary_tianjin");
  public get presetCanaryTianjin() {
    return this._presetCanaryTianjin;
  }
  public putPresetCanaryTianjin(value: DcdnErEnvConfPresetCanaryTianjin) {
    this._presetCanaryTianjin.internalValue = value;
  }
  public resetPresetCanaryTianjin() {
    this._presetCanaryTianjin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryTianjinInput() {
    return this._presetCanaryTianjin.internalValue;
  }

  // preset_canary_xinjiang - computed: false, optional: true, required: false
  private _presetCanaryXinjiang = new DcdnErEnvConfPresetCanaryXinjiangOutputReference(this, "preset_canary_xinjiang");
  public get presetCanaryXinjiang() {
    return this._presetCanaryXinjiang;
  }
  public putPresetCanaryXinjiang(value: DcdnErEnvConfPresetCanaryXinjiang) {
    this._presetCanaryXinjiang.internalValue = value;
  }
  public resetPresetCanaryXinjiang() {
    this._presetCanaryXinjiang.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryXinjiangInput() {
    return this._presetCanaryXinjiang.internalValue;
  }

  // preset_canary_xizang - computed: false, optional: true, required: false
  private _presetCanaryXizang = new DcdnErEnvConfPresetCanaryXizangOutputReference(this, "preset_canary_xizang");
  public get presetCanaryXizang() {
    return this._presetCanaryXizang;
  }
  public putPresetCanaryXizang(value: DcdnErEnvConfPresetCanaryXizang) {
    this._presetCanaryXizang.internalValue = value;
  }
  public resetPresetCanaryXizang() {
    this._presetCanaryXizang.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryXizangInput() {
    return this._presetCanaryXizang.internalValue;
  }

  // preset_canary_yunnan - computed: false, optional: true, required: false
  private _presetCanaryYunnan = new DcdnErEnvConfPresetCanaryYunnanOutputReference(this, "preset_canary_yunnan");
  public get presetCanaryYunnan() {
    return this._presetCanaryYunnan;
  }
  public putPresetCanaryYunnan(value: DcdnErEnvConfPresetCanaryYunnan) {
    this._presetCanaryYunnan.internalValue = value;
  }
  public resetPresetCanaryYunnan() {
    this._presetCanaryYunnan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryYunnanInput() {
    return this._presetCanaryYunnan.internalValue;
  }

  // preset_canary_zhejiang - computed: false, optional: true, required: false
  private _presetCanaryZhejiang = new DcdnErEnvConfPresetCanaryZhejiangOutputReference(this, "preset_canary_zhejiang");
  public get presetCanaryZhejiang() {
    return this._presetCanaryZhejiang;
  }
  public putPresetCanaryZhejiang(value: DcdnErEnvConfPresetCanaryZhejiang) {
    this._presetCanaryZhejiang.internalValue = value;
  }
  public resetPresetCanaryZhejiang() {
    this._presetCanaryZhejiang.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get presetCanaryZhejiangInput() {
    return this._presetCanaryZhejiang.internalValue;
  }

  // production - computed: false, optional: true, required: false
  private _production = new DcdnErEnvConfProductionOutputReference(this, "production");
  public get production() {
    return this._production;
  }
  public putProduction(value: DcdnErEnvConfProduction) {
    this._production.internalValue = value;
  }
  public resetProduction() {
    this._production.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productionInput() {
    return this._production.internalValue;
  }

  // staging - computed: false, optional: true, required: false
  private _staging = new DcdnErEnvConfStagingOutputReference(this, "staging");
  public get staging() {
    return this._staging;
  }
  public putStaging(value: DcdnErEnvConfStaging) {
    this._staging.internalValue = value;
  }
  public resetStaging() {
    this._staging.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagingInput() {
    return this._staging.internalValue;
  }
}
export interface DcdnErTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#create DcdnEr#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#delete DcdnEr#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#update DcdnEr#update}
  */
  readonly update?: string;
}

export function dcdnErTimeoutsToTerraform(struct?: DcdnErTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dcdnErTimeoutsToHclTerraform(struct?: DcdnErTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnErTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DcdnErTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnErTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er alicloud_dcdn_er}
*/
export class DcdnEr extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dcdn_er";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcdnEr resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcdnEr to import
  * @param importFromId The id of the existing DcdnEr that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcdnEr to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dcdn_er", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/resources/dcdn_er alicloud_dcdn_er} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcdnErConfig
  */
  public constructor(scope: Construct, id: string, config: DcdnErConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dcdn_er',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._erName = config.erName;
    this._id = config.id;
    this._envConf.internalValue = config.envConf;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // er_name - computed: false, optional: false, required: true
  private _erName?: string; 
  public get erName() {
    return this.getStringAttribute('er_name');
  }
  public set erName(value: string) {
    this._erName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get erNameInput() {
    return this._erName;
  }

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

  // env_conf - computed: false, optional: true, required: false
  private _envConf = new DcdnErEnvConfOutputReference(this, "env_conf");
  public get envConf() {
    return this._envConf;
  }
  public putEnvConf(value: DcdnErEnvConf) {
    this._envConf.internalValue = value;
  }
  public resetEnvConf() {
    this._envConf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envConfInput() {
    return this._envConf.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DcdnErTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DcdnErTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      er_name: cdktf.stringToTerraform(this._erName),
      id: cdktf.stringToTerraform(this._id),
      env_conf: dcdnErEnvConfToTerraform(this._envConf.internalValue),
      timeouts: dcdnErTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      er_name: {
        value: cdktf.stringToHclTerraform(this._erName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      env_conf: {
        value: dcdnErEnvConfToHclTerraform(this._envConf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DcdnErEnvConfList",
      },
      timeouts: {
        value: dcdnErTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DcdnErTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
