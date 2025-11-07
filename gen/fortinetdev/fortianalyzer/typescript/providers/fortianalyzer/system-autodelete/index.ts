// https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAutodeleteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#id SystemAutodelete#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#status_fake SystemAutodelete#status_fake}
  */
  readonly statusFake?: number;
  /**
  * dlp_files_auto_deletion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#dlp_files_auto_deletion SystemAutodelete#dlp_files_auto_deletion}
  */
  readonly dlpFilesAutoDeletion?: SystemAutodeleteDlpFilesAutoDeletion;
  /**
  * log_auto_deletion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#log_auto_deletion SystemAutodelete#log_auto_deletion}
  */
  readonly logAutoDeletion?: SystemAutodeleteLogAutoDeletion;
  /**
  * quarantine_files_auto_deletion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#quarantine_files_auto_deletion SystemAutodelete#quarantine_files_auto_deletion}
  */
  readonly quarantineFilesAutoDeletion?: SystemAutodeleteQuarantineFilesAutoDeletion;
  /**
  * report_auto_deletion block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#report_auto_deletion SystemAutodelete#report_auto_deletion}
  */
  readonly reportAutoDeletion?: SystemAutodeleteReportAutoDeletion;
}
export interface SystemAutodeleteDlpFilesAutoDeletion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#retention SystemAutodelete#retention}
  */
  readonly retention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#runat SystemAutodelete#runat}
  */
  readonly runat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#status SystemAutodelete#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#value SystemAutodelete#value}
  */
  readonly value?: number;
}

export function systemAutodeleteDlpFilesAutoDeletionToTerraform(struct?: SystemAutodeleteDlpFilesAutoDeletionOutputReference | SystemAutodeleteDlpFilesAutoDeletion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: cdktf.stringToTerraform(struct!.retention),
    runat: cdktf.numberToTerraform(struct!.runat),
    status: cdktf.stringToTerraform(struct!.status),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function systemAutodeleteDlpFilesAutoDeletionToHclTerraform(struct?: SystemAutodeleteDlpFilesAutoDeletionOutputReference | SystemAutodeleteDlpFilesAutoDeletion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runat: {
      value: cdktf.numberToHclTerraform(struct!.runat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAutodeleteDlpFilesAutoDeletionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAutodeleteDlpFilesAutoDeletion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._runat !== undefined) {
      hasAnyValues = true;
      internalValueResult.runat = this._runat;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAutodeleteDlpFilesAutoDeletion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retention = undefined;
      this._runat = undefined;
      this._status = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retention = value.retention;
      this._runat = value.runat;
      this._status = value.status;
      this._value = value.value;
    }
  }

  // retention - computed: true, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // runat - computed: false, optional: true, required: false
  private _runat?: number; 
  public get runat() {
    return this.getNumberAttribute('runat');
  }
  public set runat(value: number) {
    this._runat = value;
  }
  public resetRunat() {
    this._runat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runatInput() {
    return this._runat;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface SystemAutodeleteLogAutoDeletion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#retention SystemAutodelete#retention}
  */
  readonly retention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#runat SystemAutodelete#runat}
  */
  readonly runat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#status SystemAutodelete#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#value SystemAutodelete#value}
  */
  readonly value?: number;
}

export function systemAutodeleteLogAutoDeletionToTerraform(struct?: SystemAutodeleteLogAutoDeletionOutputReference | SystemAutodeleteLogAutoDeletion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: cdktf.stringToTerraform(struct!.retention),
    runat: cdktf.numberToTerraform(struct!.runat),
    status: cdktf.stringToTerraform(struct!.status),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function systemAutodeleteLogAutoDeletionToHclTerraform(struct?: SystemAutodeleteLogAutoDeletionOutputReference | SystemAutodeleteLogAutoDeletion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runat: {
      value: cdktf.numberToHclTerraform(struct!.runat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAutodeleteLogAutoDeletionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAutodeleteLogAutoDeletion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._runat !== undefined) {
      hasAnyValues = true;
      internalValueResult.runat = this._runat;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAutodeleteLogAutoDeletion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retention = undefined;
      this._runat = undefined;
      this._status = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retention = value.retention;
      this._runat = value.runat;
      this._status = value.status;
      this._value = value.value;
    }
  }

  // retention - computed: true, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // runat - computed: false, optional: true, required: false
  private _runat?: number; 
  public get runat() {
    return this.getNumberAttribute('runat');
  }
  public set runat(value: number) {
    this._runat = value;
  }
  public resetRunat() {
    this._runat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runatInput() {
    return this._runat;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface SystemAutodeleteQuarantineFilesAutoDeletion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#retention SystemAutodelete#retention}
  */
  readonly retention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#runat SystemAutodelete#runat}
  */
  readonly runat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#status SystemAutodelete#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#value SystemAutodelete#value}
  */
  readonly value?: number;
}

export function systemAutodeleteQuarantineFilesAutoDeletionToTerraform(struct?: SystemAutodeleteQuarantineFilesAutoDeletionOutputReference | SystemAutodeleteQuarantineFilesAutoDeletion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: cdktf.stringToTerraform(struct!.retention),
    runat: cdktf.numberToTerraform(struct!.runat),
    status: cdktf.stringToTerraform(struct!.status),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function systemAutodeleteQuarantineFilesAutoDeletionToHclTerraform(struct?: SystemAutodeleteQuarantineFilesAutoDeletionOutputReference | SystemAutodeleteQuarantineFilesAutoDeletion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runat: {
      value: cdktf.numberToHclTerraform(struct!.runat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAutodeleteQuarantineFilesAutoDeletionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAutodeleteQuarantineFilesAutoDeletion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._runat !== undefined) {
      hasAnyValues = true;
      internalValueResult.runat = this._runat;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAutodeleteQuarantineFilesAutoDeletion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retention = undefined;
      this._runat = undefined;
      this._status = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retention = value.retention;
      this._runat = value.runat;
      this._status = value.status;
      this._value = value.value;
    }
  }

  // retention - computed: true, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // runat - computed: false, optional: true, required: false
  private _runat?: number; 
  public get runat() {
    return this.getNumberAttribute('runat');
  }
  public set runat(value: number) {
    this._runat = value;
  }
  public resetRunat() {
    this._runat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runatInput() {
    return this._runat;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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
export interface SystemAutodeleteReportAutoDeletion {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#retention SystemAutodelete#retention}
  */
  readonly retention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#runat SystemAutodelete#runat}
  */
  readonly runat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#status SystemAutodelete#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#value SystemAutodelete#value}
  */
  readonly value?: number;
}

export function systemAutodeleteReportAutoDeletionToTerraform(struct?: SystemAutodeleteReportAutoDeletionOutputReference | SystemAutodeleteReportAutoDeletion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention: cdktf.stringToTerraform(struct!.retention),
    runat: cdktf.numberToTerraform(struct!.runat),
    status: cdktf.stringToTerraform(struct!.status),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function systemAutodeleteReportAutoDeletionToHclTerraform(struct?: SystemAutodeleteReportAutoDeletionOutputReference | SystemAutodeleteReportAutoDeletion): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runat: {
      value: cdktf.numberToHclTerraform(struct!.runat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAutodeleteReportAutoDeletionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAutodeleteReportAutoDeletion | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    if (this._runat !== undefined) {
      hasAnyValues = true;
      internalValueResult.runat = this._runat;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAutodeleteReportAutoDeletion | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._retention = undefined;
      this._runat = undefined;
      this._status = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._retention = value.retention;
      this._runat = value.runat;
      this._status = value.status;
      this._value = value.value;
    }
  }

  // retention - computed: true, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }

  // runat - computed: false, optional: true, required: false
  private _runat?: number; 
  public get runat() {
    return this.getNumberAttribute('runat');
  }
  public set runat(value: number) {
    this._runat = value;
  }
  public resetRunat() {
    this._runat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runatInput() {
    return this._runat;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete fortianalyzer_system_autodelete}
*/
export class SystemAutodelete extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortianalyzer_system_autodelete";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAutodelete resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAutodelete to import
  * @param importFromId The id of the existing SystemAutodelete that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAutodelete to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortianalyzer_system_autodelete", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortianalyzer/1.5.1/docs/resources/system_autodelete fortianalyzer_system_autodelete} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAutodeleteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAutodeleteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortianalyzer_system_autodelete',
      terraformGeneratorMetadata: {
        providerName: 'fortianalyzer',
        providerVersion: '1.5.1'
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
    this._statusFake = config.statusFake;
    this._dlpFilesAutoDeletion.internalValue = config.dlpFilesAutoDeletion;
    this._logAutoDeletion.internalValue = config.logAutoDeletion;
    this._quarantineFilesAutoDeletion.internalValue = config.quarantineFilesAutoDeletion;
    this._reportAutoDeletion.internalValue = config.reportAutoDeletion;
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

  // status_fake - computed: false, optional: true, required: false
  private _statusFake?: number; 
  public get statusFake() {
    return this.getNumberAttribute('status_fake');
  }
  public set statusFake(value: number) {
    this._statusFake = value;
  }
  public resetStatusFake() {
    this._statusFake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusFakeInput() {
    return this._statusFake;
  }

  // dlp_files_auto_deletion - computed: false, optional: true, required: false
  private _dlpFilesAutoDeletion = new SystemAutodeleteDlpFilesAutoDeletionOutputReference(this, "dlp_files_auto_deletion");
  public get dlpFilesAutoDeletion() {
    return this._dlpFilesAutoDeletion;
  }
  public putDlpFilesAutoDeletion(value: SystemAutodeleteDlpFilesAutoDeletion) {
    this._dlpFilesAutoDeletion.internalValue = value;
  }
  public resetDlpFilesAutoDeletion() {
    this._dlpFilesAutoDeletion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpFilesAutoDeletionInput() {
    return this._dlpFilesAutoDeletion.internalValue;
  }

  // log_auto_deletion - computed: false, optional: true, required: false
  private _logAutoDeletion = new SystemAutodeleteLogAutoDeletionOutputReference(this, "log_auto_deletion");
  public get logAutoDeletion() {
    return this._logAutoDeletion;
  }
  public putLogAutoDeletion(value: SystemAutodeleteLogAutoDeletion) {
    this._logAutoDeletion.internalValue = value;
  }
  public resetLogAutoDeletion() {
    this._logAutoDeletion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAutoDeletionInput() {
    return this._logAutoDeletion.internalValue;
  }

  // quarantine_files_auto_deletion - computed: false, optional: true, required: false
  private _quarantineFilesAutoDeletion = new SystemAutodeleteQuarantineFilesAutoDeletionOutputReference(this, "quarantine_files_auto_deletion");
  public get quarantineFilesAutoDeletion() {
    return this._quarantineFilesAutoDeletion;
  }
  public putQuarantineFilesAutoDeletion(value: SystemAutodeleteQuarantineFilesAutoDeletion) {
    this._quarantineFilesAutoDeletion.internalValue = value;
  }
  public resetQuarantineFilesAutoDeletion() {
    this._quarantineFilesAutoDeletion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quarantineFilesAutoDeletionInput() {
    return this._quarantineFilesAutoDeletion.internalValue;
  }

  // report_auto_deletion - computed: false, optional: true, required: false
  private _reportAutoDeletion = new SystemAutodeleteReportAutoDeletionOutputReference(this, "report_auto_deletion");
  public get reportAutoDeletion() {
    return this._reportAutoDeletion;
  }
  public putReportAutoDeletion(value: SystemAutodeleteReportAutoDeletion) {
    this._reportAutoDeletion.internalValue = value;
  }
  public resetReportAutoDeletion() {
    this._reportAutoDeletion.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportAutoDeletionInput() {
    return this._reportAutoDeletion.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      status_fake: cdktf.numberToTerraform(this._statusFake),
      dlp_files_auto_deletion: systemAutodeleteDlpFilesAutoDeletionToTerraform(this._dlpFilesAutoDeletion.internalValue),
      log_auto_deletion: systemAutodeleteLogAutoDeletionToTerraform(this._logAutoDeletion.internalValue),
      quarantine_files_auto_deletion: systemAutodeleteQuarantineFilesAutoDeletionToTerraform(this._quarantineFilesAutoDeletion.internalValue),
      report_auto_deletion: systemAutodeleteReportAutoDeletionToTerraform(this._reportAutoDeletion.internalValue),
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
      status_fake: {
        value: cdktf.numberToHclTerraform(this._statusFake),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dlp_files_auto_deletion: {
        value: systemAutodeleteDlpFilesAutoDeletionToHclTerraform(this._dlpFilesAutoDeletion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAutodeleteDlpFilesAutoDeletionList",
      },
      log_auto_deletion: {
        value: systemAutodeleteLogAutoDeletionToHclTerraform(this._logAutoDeletion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAutodeleteLogAutoDeletionList",
      },
      quarantine_files_auto_deletion: {
        value: systemAutodeleteQuarantineFilesAutoDeletionToHclTerraform(this._quarantineFilesAutoDeletion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAutodeleteQuarantineFilesAutoDeletionList",
      },
      report_auto_deletion: {
        value: systemAutodeleteReportAutoDeletionToHclTerraform(this._reportAutoDeletion.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAutodeleteReportAutoDeletionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
