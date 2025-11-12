// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformCmsBuildConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#description PlatformCmsBuild#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#environment PlatformCmsBuild#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#evm_version PlatformCmsBuild#evm_version}
  */
  readonly evmVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#github PlatformCmsBuild#github}
  */
  readonly github?: PlatformCmsBuildGithub;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#name PlatformCmsBuild#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#optimizer PlatformCmsBuild#optimizer}
  */
  readonly optimizer?: PlatformCmsBuildOptimizer;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#path PlatformCmsBuild#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#precompiled PlatformCmsBuild#precompiled}
  */
  readonly precompiled?: PlatformCmsBuildPrecompiled;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#service PlatformCmsBuild#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#solc_version PlatformCmsBuild#solc_version}
  */
  readonly solcVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#source_code PlatformCmsBuild#source_code}
  */
  readonly sourceCode?: PlatformCmsBuildSourceCode;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#type PlatformCmsBuild#type}
  */
  readonly type: string;
}
export interface PlatformCmsBuildGithub {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#auth_token PlatformCmsBuild#auth_token}
  */
  readonly authToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#contract_name PlatformCmsBuild#contract_name}
  */
  readonly contractName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#contract_url PlatformCmsBuild#contract_url}
  */
  readonly contractUrl: string;
}

export function platformCmsBuildGithubToTerraform(struct?: PlatformCmsBuildGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_token: cdktf.stringToTerraform(struct!.authToken),
    contract_name: cdktf.stringToTerraform(struct!.contractName),
    contract_url: cdktf.stringToTerraform(struct!.contractUrl),
  }
}


export function platformCmsBuildGithubToHclTerraform(struct?: PlatformCmsBuildGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_token: {
      value: cdktf.stringToHclTerraform(struct!.authToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contract_name: {
      value: cdktf.stringToHclTerraform(struct!.contractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contract_url: {
      value: cdktf.stringToHclTerraform(struct!.contractUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformCmsBuildGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlatformCmsBuildGithub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.authToken = this._authToken;
    }
    if (this._contractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractName = this._contractName;
    }
    if (this._contractUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractUrl = this._contractUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformCmsBuildGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authToken = undefined;
      this._contractName = undefined;
      this._contractUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authToken = value.authToken;
      this._contractName = value.contractName;
      this._contractUrl = value.contractUrl;
    }
  }

  // auth_token - computed: true, optional: true, required: false
  private _authToken?: string; 
  public get authToken() {
    return this.getStringAttribute('auth_token');
  }
  public set authToken(value: string) {
    this._authToken = value;
  }
  public resetAuthToken() {
    this._authToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTokenInput() {
    return this._authToken;
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

  // contract_url - computed: true, optional: false, required: true
  private _contractUrl?: string; 
  public get contractUrl() {
    return this.getStringAttribute('contract_url');
  }
  public set contractUrl(value: string) {
    this._contractUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractUrlInput() {
    return this._contractUrl;
  }
}
export interface PlatformCmsBuildOptimizer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#enabled PlatformCmsBuild#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#runs PlatformCmsBuild#runs}
  */
  readonly runs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#via_ir PlatformCmsBuild#via_ir}
  */
  readonly viaIr?: boolean | cdktf.IResolvable;
}

export function platformCmsBuildOptimizerToTerraform(struct?: PlatformCmsBuildOptimizer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    runs: cdktf.numberToTerraform(struct!.runs),
    via_ir: cdktf.booleanToTerraform(struct!.viaIr),
  }
}


export function platformCmsBuildOptimizerToHclTerraform(struct?: PlatformCmsBuildOptimizer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    runs: {
      value: cdktf.numberToHclTerraform(struct!.runs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    via_ir: {
      value: cdktf.booleanToHclTerraform(struct!.viaIr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformCmsBuildOptimizerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlatformCmsBuildOptimizer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._runs !== undefined) {
      hasAnyValues = true;
      internalValueResult.runs = this._runs;
    }
    if (this._viaIr !== undefined) {
      hasAnyValues = true;
      internalValueResult.viaIr = this._viaIr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformCmsBuildOptimizer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._runs = undefined;
      this._viaIr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._runs = value.runs;
      this._viaIr = value.viaIr;
    }
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

  // runs - computed: true, optional: true, required: false
  private _runs?: number; 
  public get runs() {
    return this.getNumberAttribute('runs');
  }
  public set runs(value: number) {
    this._runs = value;
  }
  public resetRuns() {
    this._runs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runsInput() {
    return this._runs;
  }

  // via_ir - computed: true, optional: true, required: false
  private _viaIr?: boolean | cdktf.IResolvable; 
  public get viaIr() {
    return this.getBooleanAttribute('via_ir');
  }
  public set viaIr(value: boolean | cdktf.IResolvable) {
    this._viaIr = value;
  }
  public resetViaIr() {
    this._viaIr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viaIrInput() {
    return this._viaIr;
  }
}
export interface PlatformCmsBuildPrecompiled {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#abi PlatformCmsBuild#abi}
  */
  readonly abi: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#bytecode PlatformCmsBuild#bytecode}
  */
  readonly bytecode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#dev_docs PlatformCmsBuild#dev_docs}
  */
  readonly devDocs?: string;
}

export function platformCmsBuildPrecompiledToTerraform(struct?: PlatformCmsBuildPrecompiled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    abi: cdktf.stringToTerraform(struct!.abi),
    bytecode: cdktf.stringToTerraform(struct!.bytecode),
    dev_docs: cdktf.stringToTerraform(struct!.devDocs),
  }
}


export function platformCmsBuildPrecompiledToHclTerraform(struct?: PlatformCmsBuildPrecompiled | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    abi: {
      value: cdktf.stringToHclTerraform(struct!.abi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bytecode: {
      value: cdktf.stringToHclTerraform(struct!.bytecode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_docs: {
      value: cdktf.stringToHclTerraform(struct!.devDocs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformCmsBuildPrecompiledOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlatformCmsBuildPrecompiled | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._abi !== undefined) {
      hasAnyValues = true;
      internalValueResult.abi = this._abi;
    }
    if (this._bytecode !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytecode = this._bytecode;
    }
    if (this._devDocs !== undefined) {
      hasAnyValues = true;
      internalValueResult.devDocs = this._devDocs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformCmsBuildPrecompiled | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._abi = undefined;
      this._bytecode = undefined;
      this._devDocs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._abi = value.abi;
      this._bytecode = value.bytecode;
      this._devDocs = value.devDocs;
    }
  }

  // abi - computed: true, optional: false, required: true
  private _abi?: string; 
  public get abi() {
    return this.getStringAttribute('abi');
  }
  public set abi(value: string) {
    this._abi = value;
  }
  // Temporarily expose input value. Use with caution.
  public get abiInput() {
    return this._abi;
  }

  // bytecode - computed: true, optional: false, required: true
  private _bytecode?: string; 
  public get bytecode() {
    return this.getStringAttribute('bytecode');
  }
  public set bytecode(value: string) {
    this._bytecode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bytecodeInput() {
    return this._bytecode;
  }

  // dev_docs - computed: true, optional: true, required: false
  private _devDocs?: string; 
  public get devDocs() {
    return this.getStringAttribute('dev_docs');
  }
  public set devDocs(value: string) {
    this._devDocs = value;
  }
  public resetDevDocs() {
    this._devDocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devDocsInput() {
    return this._devDocs;
  }
}
export interface PlatformCmsBuildSourceCode {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#contract_name PlatformCmsBuild#contract_name}
  */
  readonly contractName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#file_contents PlatformCmsBuild#file_contents}
  */
  readonly fileContents?: string;
}

export function platformCmsBuildSourceCodeToTerraform(struct?: PlatformCmsBuildSourceCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contract_name: cdktf.stringToTerraform(struct!.contractName),
    file_contents: cdktf.stringToTerraform(struct!.fileContents),
  }
}


export function platformCmsBuildSourceCodeToHclTerraform(struct?: PlatformCmsBuildSourceCode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contract_name: {
      value: cdktf.stringToHclTerraform(struct!.contractName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_contents: {
      value: cdktf.stringToHclTerraform(struct!.fileContents),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformCmsBuildSourceCodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PlatformCmsBuildSourceCode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contractName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contractName = this._contractName;
    }
    if (this._fileContents !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileContents = this._fileContents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformCmsBuildSourceCode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._contractName = undefined;
      this._fileContents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._contractName = value.contractName;
      this._fileContents = value.fileContents;
    }
  }

  // contract_name - computed: true, optional: false, required: true
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // file_contents - computed: true, optional: true, required: false
  private _fileContents?: string; 
  public get fileContents() {
    return this.getStringAttribute('file_contents');
  }
  public set fileContents(value: string) {
    this._fileContents = value;
  }
  public resetFileContents() {
    this._fileContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileContentsInput() {
    return this._fileContents;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build kaleido_platform_cms_build}
*/
export class PlatformCmsBuild extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_cms_build";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformCmsBuild resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformCmsBuild to import
  * @param importFromId The id of the existing PlatformCmsBuild that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformCmsBuild to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_cms_build", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_build kaleido_platform_cms_build} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformCmsBuildConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformCmsBuildConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_cms_build',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
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
    this._environment = config.environment;
    this._evmVersion = config.evmVersion;
    this._github.internalValue = config.github;
    this._name = config.name;
    this._optimizer.internalValue = config.optimizer;
    this._path = config.path;
    this._precompiled.internalValue = config.precompiled;
    this._service = config.service;
    this._solcVersion = config.solcVersion;
    this._sourceCode.internalValue = config.sourceCode;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abi - computed: true, optional: false, required: false
  public get abi() {
    return this.getStringAttribute('abi');
  }

  // bytecode - computed: true, optional: false, required: false
  public get bytecode() {
    return this.getStringAttribute('bytecode');
  }

  // commit_hash - computed: true, optional: false, required: false
  public get commitHash() {
    return this.getStringAttribute('commit_hash');
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

  // dev_docs - computed: true, optional: false, required: false
  public get devDocs() {
    return this.getStringAttribute('dev_docs');
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // evm_version - computed: false, optional: true, required: false
  private _evmVersion?: string; 
  public get evmVersion() {
    return this.getStringAttribute('evm_version');
  }
  public set evmVersion(value: string) {
    this._evmVersion = value;
  }
  public resetEvmVersion() {
    this._evmVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evmVersionInput() {
    return this._evmVersion;
  }

  // github - computed: true, optional: true, required: false
  private _github = new PlatformCmsBuildGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: PlatformCmsBuildGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // optimizer - computed: true, optional: true, required: false
  private _optimizer = new PlatformCmsBuildOptimizerOutputReference(this, "optimizer");
  public get optimizer() {
    return this._optimizer;
  }
  public putOptimizer(value: PlatformCmsBuildOptimizer) {
    this._optimizer.internalValue = value;
  }
  public resetOptimizer() {
    this._optimizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizerInput() {
    return this._optimizer.internalValue;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // precompiled - computed: true, optional: true, required: false
  private _precompiled = new PlatformCmsBuildPrecompiledOutputReference(this, "precompiled");
  public get precompiled() {
    return this._precompiled;
  }
  public putPrecompiled(value: PlatformCmsBuildPrecompiled) {
    this._precompiled.internalValue = value;
  }
  public resetPrecompiled() {
    this._precompiled.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precompiledInput() {
    return this._precompiled.internalValue;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // solc_version - computed: false, optional: true, required: false
  private _solcVersion?: string; 
  public get solcVersion() {
    return this.getStringAttribute('solc_version');
  }
  public set solcVersion(value: string) {
    this._solcVersion = value;
  }
  public resetSolcVersion() {
    this._solcVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solcVersionInput() {
    return this._solcVersion;
  }

  // source_code - computed: true, optional: true, required: false
  private _sourceCode = new PlatformCmsBuildSourceCodeOutputReference(this, "source_code");
  public get sourceCode() {
    return this._sourceCode;
  }
  public putSourceCode(value: PlatformCmsBuildSourceCode) {
    this._sourceCode.internalValue = value;
  }
  public resetSourceCode() {
    this._sourceCode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCodeInput() {
    return this._sourceCode.internalValue;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      evm_version: cdktf.stringToTerraform(this._evmVersion),
      github: platformCmsBuildGithubToTerraform(this._github.internalValue),
      name: cdktf.stringToTerraform(this._name),
      optimizer: platformCmsBuildOptimizerToTerraform(this._optimizer.internalValue),
      path: cdktf.stringToTerraform(this._path),
      precompiled: platformCmsBuildPrecompiledToTerraform(this._precompiled.internalValue),
      service: cdktf.stringToTerraform(this._service),
      solc_version: cdktf.stringToTerraform(this._solcVersion),
      source_code: platformCmsBuildSourceCodeToTerraform(this._sourceCode.internalValue),
      type: cdktf.stringToTerraform(this._type),
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
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      evm_version: {
        value: cdktf.stringToHclTerraform(this._evmVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github: {
        value: platformCmsBuildGithubToHclTerraform(this._github.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlatformCmsBuildGithub",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      optimizer: {
        value: platformCmsBuildOptimizerToHclTerraform(this._optimizer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlatformCmsBuildOptimizer",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      precompiled: {
        value: platformCmsBuildPrecompiledToHclTerraform(this._precompiled.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlatformCmsBuildPrecompiled",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      solc_version: {
        value: cdktf.stringToHclTerraform(this._solcVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_code: {
        value: platformCmsBuildSourceCodeToHclTerraform(this._sourceCode.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PlatformCmsBuildSourceCode",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
